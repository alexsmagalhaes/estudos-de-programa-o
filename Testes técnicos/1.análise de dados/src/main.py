
from core.metric import Metric
from core.plot import Plot

def main():      
    #Opcoes de exibicao (numero de linhas e colunas a serem mostradas)
    options = {
        "rows": 500,
        "columns": 100,
    }
    
    #Classe principal responsavel pelas operacoes entre os dados e apresentacao dos dados
    data = Metric("./database/data.xlsx", options)
    
    #1
    Plot(data.total_sales_by_category(), options).table()
    
    #2
    Plot(data.product_margin(), options).table()
    
    #3
    Plot(data.client_ranking_by_month(), options).table()
    
    #4
    Plot(data.supplier_ranking_by_stock_month(), options).table()
    
    #5
    Plot(data.product_sales_ranking_by_qty(), options).table()

if __name__ == "__main__": 
    main()