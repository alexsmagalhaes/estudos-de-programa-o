/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.input_exemples;

import java.io.*;

public class EntradaComBufferedReader {
    public static void main(String[] args) {
        float nota1 = 0, nota2 = 0, trabalho = 0, media = 0;
        BufferedReader dado = null;

        try {
            dado = new BufferedReader(new InputStreamReader(System.in));

            String s = "";

            System.out.println("Entre com a nota 1:");
            s = dado.readLine();
            nota1 = Float.parseFloat(s);

            System.out.println("Entre com a nota 2:");
            s = dado.readLine();
            nota2 = Float.parseFloat(s);

            System.out.println("Entre com a nota do Trabalho:");
            s = dado.readLine();
            trabalho = Float.parseFloat(s);

            media = (nota1 + nota2 + trabalho) / 3;
            System.out.println("Media : " + media);

        } catch (IOException erro) {
            System.out.println("Houve erro na entrada de dados: " + erro.toString());
        } catch (NumberFormatException erro) {
            System.out.println("Houve erro na conversao, digite apenas caracteres numericos" + erro.toString());
        } finally {
            try {
                if (dado != null) {
                    dado.close();
                }
            } catch (IOException erro) {
                System.out.println("Erro ao fechar o BufferedReader: " + erro.toString());
            }
        }
    }
}