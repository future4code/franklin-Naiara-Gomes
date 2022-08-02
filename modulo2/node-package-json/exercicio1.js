//Basta utilizar process. argv[2].
// Essa propriedade irá armazenar uma cópia, somente leitura, do valor original de argv[0] passado quando o arquivo. js for iniciado.

const idade = Number;
const value = process.argv[2];

export const exercicio1 = [{
    nome: "Naiara",
    idade: 26
},
{
    nome: "Francine",
    idade: 28
}
]


if (!nome || !idade){
   console.log("Você deve passar dois parâmetros: nome e idade")
   
  }else{
   console.log("Olá," + nome + "! Você tem" + idade+ "anos.") 
  }