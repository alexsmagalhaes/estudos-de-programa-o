package Atividade;

public class Deposito {
    private int items = 0;
    private final int capacidade = 100;

    public int getNumItems() {
        return items;
    }

    public boolean retirar() {
        items = getNumItems() - 1;
        
        return true;
    }

    public boolean colocar() {
        items = getNumItems() + 1;

        return true;
    }

    public synchronized boolean retirar(int quantidade) {
        if (items >= quantidade) {
            items -= quantidade;
            return true;
        }
        return false;
    }

    public synchronized boolean colocar(int quantidade) {
        if (items + quantidade <= capacidade) {
            items += quantidade;
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Deposito dep = new Deposito();
        Produtor p = new Produtor(dep, 50);
        
        Consumidor c1 = new Consumidor(dep, 150);
        Consumidor c2 = new Consumidor(dep, 100);
        Consumidor c3 = new Consumidor(dep, 100);
        Consumidor c4 = new Consumidor(dep, 100);
        Consumidor c5 = new Consumidor(dep, 100);

        p.start();
        c1.start();
        c2.start();
        c3.start();
        c4.start();
        c5.start();

        System.out.println("Deposito execution finished");
    }
}

class Produtor extends Thread {
    private final Deposito deposito;
    private final int tempo;

    Produtor(Deposito deposito, int tempo) {
        this.deposito = deposito;
        this.tempo = tempo;
    }

    public void run() {
        int contador = 0;
        while (contador < 100) {
            try {
                Thread.sleep(tempo);
                deposito.colocar();
                System.out.println("Added and count: " + deposito.getNumItems());
                
                contador++;
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Consumidor extends Thread {
    private final Deposito deposito;
    private final int tempo;

    Consumidor(Deposito deposito, int tempo) {
        this.deposito = deposito;
        this.tempo = tempo;
    }

    public void run() {
        int contador = 0;
        while (contador < 20) {
            try {
                Thread.sleep(tempo);

                if (deposito.retirar(1)) {
                    System.out.println("Removed and count: " + deposito.getNumItems());
                    contador++;
                } else {
                    System.out.println("Sem itens, aguardando...");
                    Thread.sleep(200);
                }

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

