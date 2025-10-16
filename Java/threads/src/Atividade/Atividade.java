package Atividade;

class RacerThread extends Thread {

    String i;

    RacerThread(String i) {
        this.i = i;
    }

    public void run() {
        System.out.println("Racing Thread starting...");

        try {
            while (true) {

                Thread.sleep(4000);
                System.out.println("Racer Thread (" + i + ") – imprimindo");
            }
        } catch (Exception e) {
        }
    }
}

class RacerRunnable implements Runnable {

    String i;

    RacerRunnable(String i) {
        this.i = i;
    }

    public void run() {
        System.out.println("Racing Runnable starting...");

        try {
            while (true) {

                Thread.sleep(4000);
                System.out.println("Racer Runnable (" + i + ") – imprimindo");
            }
        } catch (Exception e) {
        }
    }
}

public class Atividade {

    public static void main(String[] args) {
        RacerThread p = new RacerThread("Caso 1");
        p.start();

        RacerRunnable e = new RacerRunnable("Caso 2");
        new Thread(e).start();

        System.out.println("Main execution");
    }
}