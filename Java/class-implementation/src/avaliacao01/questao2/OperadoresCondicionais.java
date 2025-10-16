package avaliacao01.questao2;

class OperadoresCondicionais {

    // construtor com a inicialização de dia e mes
    public OperadoresCondicionais(int dia, int mes) {
        this.dia = dia;
        this.mes = mes;
    }

    // ano ja está com 2025 como default
    private int dia, mes, ano = 2025;

    public String toStringIf() {
        String resultado = "" + dia;
        resultado += " de ";
        if (mes == 1) {
            resultado += "Janeiro";
        } else if (mes == 2) {
            resultado += "Fevereiro";
        } else if (mes == 3) {
            resultado += "Março";
        } else if (mes == 4) {
            resultado += "Abril";
        } else if (mes == 5) {
            resultado += "Maio";
        } else if (mes == 6) {
            resultado += "Junho";
        } else if (mes == 7) {
            resultado += "Julho";
        } else if (mes == 8) {
            resultado += "Agosto";
        } else if (mes == 9) {
            resultado += "Setembro";
        } else if (mes == 10) {
            resultado += "Outubro";
        } else if (mes == 11) {
            resultado += "Novembro";
        } else if (mes == 12) {
            resultado += "Dezembro";
        }
        resultado += " de " + ano;
        return resultado;
    }

    public String toStringSwitch() {
        String resultado = "" + dia;
        resultado += " de ";
        switch (mes) {
            case 1:
                resultado += "Janeiro";
                break;
            case 2:
                resultado += "Fevereiro";
                break;
            case 3:
                resultado += "Março";
                break;
            case 4:
                resultado += "Abril";
                break;
            case 5:
                resultado += "Maio";
                break;
            case 6:
                resultado += "Junho";
                break;
            case 7:
                resultado += "Julho";
                break;
            case 8:
                resultado += "Agosto";
                break;
            case 9:
                resultado += "Setembro";
                break;
            case 10:
                resultado += "Outubro";
                break;
            case 11:
                resultado += "Novembro";
                break;
            case 12:
                resultado += "Dezembro";
                break;
        }
        resultado += " de " + ano;
        return resultado;
    }

    public byte diasNoMes() {
        byte númeroDeDias;

        switch (mes) {
            case 2:
                númeroDeDias = 28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                númeroDeDias = 30;
                break;
            default:
                númeroDeDias = 31;
                break;
        }
        return númeroDeDias;
    }

    // usa um operador ternario para indicar se o ano é exatamente igual a 2010, retornando true ou false
    public boolean testaAno() {
        boolean teste = (ano == 2010 ? true : false);
        return teste;
    }
}
