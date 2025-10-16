package main.atividade2;

public class Sales {

    private double price = 0;
    private double discount = 0;

    public Sales(double price, double discount) {
        this.price = price;
        this.discount = discount;
    }

    public double calculate() {

        int value = (int) Math.floor(this.price * (1 - this.discount));

        return value;
    }

}
