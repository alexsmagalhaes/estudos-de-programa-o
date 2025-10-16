/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.atividade1;

import javax.swing.JOptionPane;

public class IMC {
    public static void main(String[] args) {
        String pesoStr, alturaStr;
        double peso, altura, imc;
        String resultado = "";

        try {
            pesoStr = JOptionPane.showInputDialog("Digite seu peso em kg:");
            peso = Double.parseDouble(pesoStr);

            alturaStr = JOptionPane.showInputDialog("Digite sua altura em metros:");
            altura = Double.parseDouble(alturaStr);

            imc = peso / (altura * altura);

            if (imc < 18.5) {
                resultado = "Peso abaixo do normal";
            } else if (imc < 24.5) {
                resultado = "Peso ideal";
            } else if (imc < 30) {
                resultado = "Pré-obesidade";
            } else if (imc < 35) {
                resultado = "Obesidade classe I";
            } else if (imc < 40) {
                resultado = "Obesidade classe II (severa)";
            } else {
                resultado = "Obesidade classe III (mórbida)";
            }

            JOptionPane.showMessageDialog(null, "Seu IMC é: " + String.format("%.2f", imc) + "\nClassificação: " + resultado, "Resultado do IMC", JOptionPane.INFORMATION_MESSAGE);

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Erro de formato! Certifique-se de digitar números válidos.", "Erro", JOptionPane.ERROR_MESSAGE);
        } catch (NullPointerException e) {
            JOptionPane.showMessageDialog(null, "Operação cancelada pelo usuário.", "Aviso", JOptionPane.WARNING_MESSAGE);
        }
    }
}