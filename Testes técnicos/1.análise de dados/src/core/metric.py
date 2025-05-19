import pandas as pd

class Metric():
    def __init__(self, database, options):
        self.__database = database
        self.__options = options

        pd.set_option('display.max_rows', self.__options["rows"]) 
        pd.set_option('display.max_columns', self.__options["columns"])

    def __read(self, sheet_name):
        df = pd.read_excel(self.__database, sheet_name, engine="openpyxl")
        df = df.iloc[1:]  # Remove a primeira linha, se necessário
        return df

    # 1. Total de vendas por categoria
    def total_sales_by_category(self):
        produtos = self.__read("produtos")
        vendas = self.__read("vendas")

        merged = produtos.merge(vendas, on="ID PRODUTO", how="left")
        return (
            merged.groupby("CATEGORIA")["VALOR ITEM"]
            .sum()
            .reset_index()
            .sort_values(by="VALOR ITEM", ascending=False)
        )

    # 2. Margem de lucro dos produtos
    def product_margin(self):
        estoque = self.__read("estoque")
        vendas = self.__read("vendas")
        produtos = self.__read("produtos")

        estoque["VALOR UNITARIO"] = estoque["VALOR ESTOQUE"] / estoque["QTD ESTOQUE"]

        vendas_produtos = vendas.merge(
            produtos[["ID PRODUTO", "ID ESTOQUE", "NOME PRODUTO", "CATEGORIA"]],
            on="ID PRODUTO",
            how="left"
        )
        
        vendas_estoque = vendas_produtos.merge(
            estoque[["ID ESTOQUE", "VALOR UNITARIO"]],
            on="ID ESTOQUE",
            how="left"
        )
        vendas_estoque["VALOR VENDA UNITARIO"] = vendas_estoque["VALOR ITEM"] / vendas_estoque["QTD ITEM"]
        vendas_estoque["MARGEM"] = vendas_estoque["VALOR VENDA UNITARIO"] - vendas_estoque["VALOR UNITARIO"]
        vendas_estoque["MARGEM %"] = (vendas_estoque["MARGEM"] / vendas_estoque["VALOR UNITARIO"]) * 100
        vendas_estoque["MARGEM %"] = vendas_estoque["MARGEM %"].round(2)

        return vendas_estoque[[
            "ID PRODUTO",
            "NOME PRODUTO",
            "CATEGORIA",
            "VALOR UNITARIO",
            "VALOR VENDA UNITARIO",
            "MARGEM",
            "MARGEM %"
        ]].sort_values(by=["CATEGORIA", "MARGEM %"], ascending=[True, False])

    # 3. Ranking de clientes por quantidade comprada por mês
    def client_ranking_by_month(self):
        clientes = self.__read("clientes")
        vendas = self.__read("vendas")
        
        vendas["DATA NOTA"] = pd.to_datetime(vendas["DATA NOTA"], errors="coerce")
        vendas["ANO_MES"] = vendas["DATA NOTA"].dt.to_period("M")
        
        agrupado = (
            vendas.groupby(["ID CLIENTE", "ANO_MES"])["QTD ITEM"]
            .sum()
            .reset_index()
        )
        
        resultado = agrupado.merge(clientes, on="ID CLIENTE", how="left")
        resultado = resultado.sort_values(by=["ANO_MES", "QTD ITEM"], ascending=[True, False])
        resultado["RANKING"] = resultado.groupby("ANO_MES")["QTD ITEM"].rank(method="dense", ascending=False).astype(int)
        
        return resultado[["ANO_MES", "RANKING", "NOME CLIENTE", "QTD ITEM"]].sort_values(
            by=["ANO_MES", "RANKING"], ascending=[True, True]
        )

    # 4. Ranking de fornecedores por estoque disponível por mês
    def supplier_ranking_by_stock_month(self):
        estoque = self.__read("estoque")
        fornecedores = self.__read("fornecedores")
        
        estoque["DATA ESTOQUE"] = pd.to_datetime(estoque["DATA ESTOQUE"])
        estoque["ANO_MES"] = estoque["DATA ESTOQUE"].dt.to_period("M")
        
        agrupado = estoque.groupby(["ID FORNECEDOR", "ANO_MES"])["QTD ESTOQUE"].sum().reset_index()
        
        resultado = agrupado.merge(fornecedores, on="ID FORNECEDOR", how="left")
        resultado = resultado.sort_values(by=["ANO_MES", "QTD ESTOQUE"], ascending=[True, False])
        resultado["RANKING"] = resultado.groupby("ANO_MES")["QTD ESTOQUE"].rank(method="dense", ascending=False).astype(int)
        
        return resultado[["ANO_MES", "RANKING", "NOME FORNECEDOR", "QTD ESTOQUE"]].sort_values(
            by="QTD ESTOQUE", ascending=False
        )

    # 5. Ranking de produtos por quantidade vendida por mês
    def product_sales_ranking_by_qty(self):
        vendas = self.__read("vendas")
        produtos = self.__read("produtos")

        vendas["DATA NOTA"] = pd.to_datetime(vendas["DATA NOTA"])
        vendas["ANO_MES"] = vendas["DATA NOTA"].dt.to_period("M")

        agrupado = vendas.groupby(["ID PRODUTO", "ANO_MES"])["QTD ITEM"].sum().reset_index()
        agrupado["RANKING"] = agrupado.groupby("ANO_MES")["QTD ITEM"].rank(method="dense", ascending=False).astype(int)

        resultado = agrupado.merge(produtos, on="ID PRODUTO", how="left")

        return resultado[["ANO_MES", "RANKING", "NOME PRODUTO", "CATEGORIA", "QTD ITEM"]].sort_values(
            by=["ANO_MES", "RANKING"]
        )

    # 6. Ranking de produtos por valor vendido por mês
    def product_sales_ranking_by_value(self):
        vendas = self.__read("vendas")  
        produtos = self.__read("produtos")      

        vendas["DATA NOTA"] = pd.to_datetime(vendas["DATA NOTA"])
        vendas["ANO_MES"] = vendas["DATA NOTA"].dt.to_period("M")

        agrupado = vendas.groupby(["ID PRODUTO", "ANO_MES"])["VALOR ITEM"].sum().reset_index()

        agrupado["RANKING"] = agrupado.groupby("ANO_MES")["VALOR ITEM"].rank(method="dense", ascending=False).astype(int)

        resultado = agrupado.merge(produtos, on="ID PRODUTO", how="left")

        return resultado[["ANO_MES", "RANKING", "NOME PRODUTO", "VALOR ITEM"]].sort_values(
            by=["ANO_MES", "RANKING"]
        ).sort_values(by=["ANO_MES", "RANKING"])

    # 7. Média de valor de venda por categoria por mês
    def avg_sales_value_by_category_month(self):
        produtos = self.__read("produtos")
        vendas = self.__read("vendas")
        
        vendas["DATA NOTA"] = pd.to_datetime(vendas["DATA NOTA"])
        vendas["ANO_MES"] = vendas["DATA NOTA"].dt.to_period("M")
        
        merged = vendas.merge(produtos[["ID PRODUTO", "CATEGORIA"]], on="ID PRODUTO", how="left")
        
        return (
            merged.groupby(["CATEGORIA", "ANO_MES"])["VALOR ITEM"]
            .mean()
            .reset_index()
            .rename(columns={"VALOR ITEM": "MEDIA VALOR VENDA"})
        )

    # 8. Ranking de margem de lucro por categoria (em percentual)
    def margin_ranking_by_category(self):
        estoque = self.__read("estoque")
        produtos = self.__read("produtos")
        vendas = self.__read("vendas")

        estoque["VALOR UNITARIO"] = estoque["VALOR ESTOQUE"] / estoque["QTD ESTOQUE"]
        produtos_estoque = produtos.merge(estoque[["ID ESTOQUE", "VALOR UNITARIO"]], on="ID ESTOQUE", how="left")
        transacoes = vendas.merge(produtos_estoque, on="ID PRODUTO", how="left")

        transacoes["VALOR VENDA UNITARIO"] = transacoes["VALOR ITEM"] / transacoes["QTD ITEM"]
        transacoes["MARGEM_PERCENTUAL"] = ((transacoes["VALOR VENDA UNITARIO"] - transacoes["VALOR UNITARIO"]) / transacoes["VALOR UNITARIO"]) * 100

        resultado = transacoes.groupby("CATEGORIA")["MARGEM_PERCENTUAL"].mean().reset_index().sort_values(by="MARGEM_PERCENTUAL", ascending=False)
        resultado["RANKING"] = resultado["MARGEM_PERCENTUAL"].rank(method="dense", ascending=False).astype(int)
        
        return resultado

    # 9. Lista de produtos comprados por cliente
    def products_bought_by_clients(self):
        vendas = self.__read("vendas")
        clientes = self.__read("clientes")
        produtos = self.__read("produtos")

        merged = vendas.merge(clientes, on="ID CLIENTE", how="left").merge(produtos, on="ID PRODUTO", how="left")
        
        return merged[["NOME CLIENTE", "NOME PRODUTO", "QTD ITEM", "VALOR ITEM"]].sort_values(by="NOME CLIENTE")

    # 10. Ranking de produtos por quantidade de estoque
    def product_ranking_by_stock(self):
        produtos = self.__read("produtos")
        estoque = self.__read("estoque")

        merged = produtos.merge(estoque, on="ID ESTOQUE", how="left")
        agrupado = merged.groupby("ID PRODUTO")[["NOME PRODUTO", "QTD ESTOQUE"]].max().reset_index()
        agrupado["RANKING"] = agrupado["QTD ESTOQUE"].rank(method="dense", ascending=False).astype(int)
        
        return agrupado.sort_values(by="RANKING")