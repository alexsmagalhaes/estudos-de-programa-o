/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.atividade1;

import javax.swing.JOptionPane;

public class Operacoes {
    public static void main(String[] args) {
        String valor1Str, valor2Str;
        double v1 = 0, v2 = 0, soma, sub, mult, div = 0;

        try {
            valor1Str = JOptionPane.showInputDialog("Digite o primeiro valor:");
            v1 = Double.parseDouble(valor1Str);

            valor2Str = JOptionPane.showInputDialog("Digite o segundo valor:");
            v2 = Double.parseDouble(valor2Str);

            soma = v1 + v2;
            sub = v1 - v2;
            mult = v1 * v2;
            if (v2 != 0) {
                div = v1 / v2;
            } else {
                JOptionPane.showMessageDialog(null, "Erro! Divisão por zero não é permitida.", "Erro", JOptionPane.ERROR_MESSAGE);
                return; // Encerra a execução para evitar a divisão por zero
            }

            String resultado = "Resultados:\n" +
                               "Soma: " + String.format("%.2f", soma) + "\n" +
                               "Subtração: " + String.format("%.2f", sub) + "\n" +
                               "Multiplicação: " + String.format("%.2f", mult) + "\n" +
                               "Divisão: " + String.format("%.2f", div);

            JOptionPane.showMessageDialog(null, resultado, "Resultados das Operações", JOptionPane.INFORMATION_MESSAGE);

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Erro de formato! Certifique-se de digitar números válidos.", "Erro", JOptionPane.ERROR_MESSAGE);
        } catch (NullPointerException e) {
            JOptionPane.showMessageDialog(null, "Operação cancelada pelo usuário.", "Aviso", JOptionPane.WARNING_MESSAGE);
        }
    }
}