
from core.metric import Metric
from core.plot import Plot

def main():      
    #Opcoes de exibicao (numero de linhas e colunas a serem mostradas)
    options = {
        "rows": 10,
        "columns": 10,
        "tablefmt": "grid"
    }
    
    #Classe principal responsavel pelas operacoes entre os dados e apresentacao dos dados
    data = Metric("./database/data.xlsx", options)
    Plot(data.total_sales_by_category(), options).table()
    
if __name__ == "__main__": 
    main()