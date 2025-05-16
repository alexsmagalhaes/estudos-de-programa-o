from tabulate import tabulate as tb
import os

class Plot():
    def __init__(self, data, options):
        self._data = data
        
        default_options = {"rows": 10, "columns": 10, "tablefmt": "github"}
        self._options = {**default_options, **options} 
        
    def table(self):
        limited_data = self._data.iloc[:self._options["rows"], :self._options["columns"]]
        print(tb(limited_data, headers='keys', tablefmt=self._options["tablefmt"]))

    def to_csv(self, filename="saida.csv", folder="output"):
        os.makedirs(folder, exist_ok=True)
        path = os.path.join(folder, filename)

        try:
            self._data.to_csv(path, encoding="utf-8-sig", sep=";")
            print(f"Salvo em: {path}")
        except Exception as e:
            print(f"Erro ao salvar: {e}")
