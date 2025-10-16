package avaliacao01.questao4;

public class DemoAluno {

    public static void main(String[] args) {
        Aluno aluno = new Aluno();

        aluno.inicializaAluno("Alex", "01/01/2022", 2022138583, 10, 9);

        System.out.println(aluno.calcularMedia());

        aluno.consultarNotas();

        aluno.situacaoDoaluno();
        
        System.out.println("");
        aluno.toString();
    }
}
