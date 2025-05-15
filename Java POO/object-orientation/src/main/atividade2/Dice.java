package main.atividade2;

public class Dice {

    public int roll() {
        double random = Math.random();

        int min = 1;
        int max = 6;

        int variable = (int) Math.floor(random * max);
        int value = min + variable;

        return value;
    }
}
