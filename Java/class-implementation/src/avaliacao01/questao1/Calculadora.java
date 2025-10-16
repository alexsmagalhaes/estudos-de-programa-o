package avaliacao01.questao1;

import javax.swing.JOptionPane;

public class Calculadora {

    private double valor1 = 0;
    private double valor2 = 0;

    public Calculadora pegarValores() {
        String valor1s = JOptionPane.showInputDialog("Insira o valor 1");
        this.valor1 = Double.parseDouble(valor1s);

        String valor2s = JOptionPane.showInputDialog("Insira o valor 2");
        this.valor2 = Double.parseDouble(valor2s);

        return this;
    }

    public Calculadora pegarValoresParam(double valor1, double valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;

        return this;
    }

    public double calcular(int operacao) {
        switch (operacao) {
            case 1:
                return this.valor1 + this.valor2;
            case 2:
                return this.valor1 * this.valor2;
            case 3:
                return this.valor1 - this.valor2;
            case 4:
                if (this.valor1 == 0 || this.valor2 == 0) {
                    System.out.println("Erro, não pode utilizar zero na divisão.");
                    return 0;
                }

                return this.valor1 / this.valor2;

            default:
                return 0;
        }
    }
}
