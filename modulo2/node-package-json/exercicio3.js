const tarefas = ["Organizar a cozinha"]
const novaTarefa = tarefas.push[process.argv[2]];

if(process.argv[2] === undefined){
console.log("Insira uma nova tarefa")
}else{
 console.log("Tarefa adicionada com sucesso")
}