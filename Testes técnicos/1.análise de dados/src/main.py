
from core.metric import Metric
from core.plot import Plot

def main():      
    #Opcoes de exibicao (numero de linhas e colunas a serem mostradas)
    options = {
        "rows": 100,
        "columns": 100,
    }
    
    #Classe principal responsavel pelas operacoes entre os dados e apresentacao dos dados
    data = Metric("./database/data.xlsx", options)
    
    print("1. Total de vendas por categoria")
    Plot(data.total_sales_by_category(), options).table()
    print()

    print("2. Margem de lucro por produto")
    Plot(data.product_margin(), options).table()
    print()

    print("3. Ranking de clientes por mês")
    Plot(data.client_ranking_by_month(), options).table()
    print()

    print("4. Ranking de fornecedores por estoque no mês")
    Plot(data.supplier_ranking_by_stock_month(), options).table()
    print()

    print("5. Ranking de vendas por quantidade de produtos")
    Plot(data.product_sales_ranking_by_qty(), options).table()
    print()

    print("6. Ranking de vendas por valor de produtos")
    Plot(data.product_sales_ranking_by_value(), options).table()
    print()

    print("7. Valor médio de vendas por categoria e mês")
    Plot(data.avg_sales_value_by_category_month(), options).table()
    print()

    print("8. Ranking de margem por categoria")
    Plot(data.margin_ranking_by_category(), options).table()
    print()

    print("9. Produtos comprados por clientes")
    Plot(data.products_bought_by_clients(), options).table()
    print()

    print("10. Ranking de produtos por estoque")
    Plot(data.product_ranking_by_stock(), options).table()
    print()


    

if __name__ == "__main__": 
    main()