package main.atividade2;

public class MatchValue {
    public static Boolean match(int number) {
        int min = 0;
        int max = 9;

        int random = (int) Math.random() * max + min;

        return random == number;
    }
}
