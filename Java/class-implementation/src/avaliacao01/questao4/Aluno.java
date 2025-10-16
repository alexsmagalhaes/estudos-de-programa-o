package avaliacao01.questao4;

public class Aluno {

    private String nome;
    private String data;
    private int matricula;
    private double nota1;
    private double nota2;
    private boolean matriculado = true;

    public void inicializaAluno(String nome,
            String data,
            int matricula,
            double nota1,
            double nota2) {
        this.nome = nome;
        this.data = data;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public void consultarNotas() {
        System.out.println("Nota 01: " + this.nota1 + " Nota 02" + this.nota2);
    }

    public double calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }

    public void situacaoDoaluno() {
        double media = (this.nota1 + this.nota2) / 2;
        
        if (media >= 7) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }
    }

    public void desistir() {
        this.matriculado = false;
        System.out.println("");
    }

    @Override
    public String toString() {
        String notacao
                = "nome do aluno: " + this.nome
                + "\ndata de ingesso: " + this.data
                + "\nnota 1 foi: " + this.nota1
                + "\nnota 2 foi: " + this.nota2
                + "\nnumero matricula: " + this.matricula
                + "\nsituacao: " + this.matriculado;

        System.out.println(notacao);

        return notacao;
    }
}
