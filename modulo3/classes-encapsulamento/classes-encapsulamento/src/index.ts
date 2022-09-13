//exemplos

//DECLARANDO CLASSES

//instância da classe ou um objeto

//tipagem com classe









//EXERCICIO 1 =============================================
//Transforme o type estudante em uma classe Estudante:

type pessoa = {
    nome: string,
    idade: number
}




//EXERCICIO 2 =============================================
class Estudante {
    //1 - Torne as propriedades da classe Estudantes privadas. 
   nome: string
   matricula: number

    constructor(novoNome: string, novaMatricula: number){
        this.nome = novoNome
        this.matricula = novaMatricula
    }

    //2 - Adicione os getters para pegar o nome ou matrícula do estudante  e setters para alterar a matrícula do estudante.

}

//3 - Crie uma instância da classe Estudante

//4 - imprima o nome e matrícula do estudante criado.
