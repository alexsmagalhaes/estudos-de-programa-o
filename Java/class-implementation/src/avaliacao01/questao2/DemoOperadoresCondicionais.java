package avaliacao01.questao2;

public class DemoOperadoresCondicionais {

    public static void main(String[] args) {
        OperadoresCondicionais operador = new OperadoresCondicionais(19, 4);

        System.out.println(operador.toStringSwitch());
        System.out.println(operador.toStringIf());
        System.out.println(operador.diasNoMes());

        // usa um operador ternario para indicar se o ano é exatamente igual a 2010, retornando true ou false
        System.out.println(operador.testaAno());
    }
}
