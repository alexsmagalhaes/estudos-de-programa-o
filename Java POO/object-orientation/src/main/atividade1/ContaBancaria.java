/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.atividade1;

import java.util.Scanner;

public class ContaBancaria {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double saldo = 0;

        try {
            System.out.println("Bem-vindo ao simulador bancário!");
            System.out.println("Seu saldo inicial é: R$ " + saldo);

            System.out.print("Digite o valor do depósito: R$ ");
            double deposito = scanner.nextDouble();
            saldo += deposito;
            System.out.println("Depósito de R$ " + deposito + " realizado com sucesso.");
            System.out.println("Seu saldo atual é: R$ " + saldo);

            System.out.print("Digite o valor do saque: R$ ");
            double saque = scanner.nextDouble();
            if (saque <= saldo) {
                saldo -= saque;
                System.out.println("Saque de R$ " + saque + " realizado com sucesso.");
                System.out.println("Seu saldo atual é: R$ " + saldo);
            } else {
                System.out.println("Saldo insuficiente para realizar o saque.");
            }

        } catch (java.util.InputMismatchException e) {
            System.out.println("Erro de entrada! Por favor, digite um valor numérico.");
        } finally {
            scanner.close();
        }
    }
}