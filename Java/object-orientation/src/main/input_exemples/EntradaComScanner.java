/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.input_exemples;

import java.util.Scanner;

/**
 *
 * @author Aluno
 */


public class EntradaComScanner {
    @SuppressWarnings("resource")
    public static void main(String args[]) {
        float nota1 = 0, nota2 = 0, trabalho = 0, media = 0;
        try {
            System.out.println("Entre com a nota 1");
            Scanner sc = new Scanner(System.in);
            nota1 = sc.nextFloat();

            System.out.println("Entre com a nota 2");
            sc = new Scanner(System.in);
            nota2 = sc.nextFloat();

            System.out.println("Entre com a nota do Trabalho");
            sc = new Scanner(System.in);
            trabalho = sc.nextFloat();

            media = (nota1 + nota2 + trabalho) / 3;
            System.out.println("Media = " + media);
        }
        catch (NumberFormatException erro) {
            System.out.println("Houve erro na conversão, digite apenas caracteres numericos"
                               + erro.toString());
        }
    }
}