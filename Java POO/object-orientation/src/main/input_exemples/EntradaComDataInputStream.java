/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.input_exemples;

import java.io.*;/**
 *
 * @author Aluno
 */
public class EntradaComDataInputStream {
    @SuppressWarnings("deprecation")
    public static void main(String args[]) {
        String s = "";
        float nota1 = 0, nota2 = 0, trabalho = 0, media = 0;
        DataInputStream dado;
        try {
            System.out.println("Entre com a nota 1");
            dado = new DataInputStream(System.in);
            s = dado.readLine();
            nota1 = Float.parseFloat(s);

            System.out.println("Entre com a nota 2");
            dado = new DataInputStream(System.in);
            s = dado.readLine();
            nota2 = Float.parseFloat(s);

            System.out.println("Entre com a nota do Trabalho");
            dado = new DataInputStream(System.in);
            s = dado.readLine();
            trabalho = Float.parseFloat(s);

            media = (nota1 + nota2 + trabalho) / 3;
            System.out.println("Media : " + media);
        } catch (IOException erro) {
            System.out.println("Houve erro na entrada de dados" + erro.toString());
        } catch (NumberFormatException erro) {
            System.out.println("Houve erro na conversao, digite apenas caracteres numericos" + erro.toString());
        }
    }
}
