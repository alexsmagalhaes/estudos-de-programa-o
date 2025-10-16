/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.atividade1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CalculaAreaTriangulo {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        double base = 0;
        double altura = 0;
        double area;

        try {
            System.out.println("Digite o valor da base do triângulo:");
            String baseStr = reader.readLine();
            base = Double.parseDouble(baseStr);

            System.out.println("Digite o valor da altura do triângulo:");
            String alturaStr = reader.readLine();
            altura = Double.parseDouble(alturaStr);

            area = (base * altura) / 2;
            System.out.println("A área do triângulo retângulo é: " + area);

        } catch (IOException e) {
            System.out.println("Erro ao ler a entrada do usuário: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Erro de formato! Certifique-se de digitar números válidos.");
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                System.out.println("Erro ao fechar o reader: " + e.getMessage());
            }
        }
    }
}
