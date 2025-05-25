package avaliacao01.questao1;

import javax.swing.JOptionPane;

public class TestarCalculadora {

    public static void main(String[] args) {
        Calculadora calcular = new Calculadora();

        try {
            while (true) {
                String opcao = JOptionPane.showInputDialog("Escolha sua opção:\n"
                        + "1.Somar\n"
                        + "2.Multiplicar\n"
                        + "3.Subtrair\n"
                        + "4.Dividir\n"
                        + "5.Sair");

                int numeroOpcao = Integer.parseInt(opcao);
                if (numeroOpcao == 5) {
                    break;
                }

                System.out.println(calcular.pegarValores().calcular(numeroOpcao));
            }
        } catch (Exception e) {
            System.out.println("Execução encerrada de forma repentina!");
        }
    }

}
