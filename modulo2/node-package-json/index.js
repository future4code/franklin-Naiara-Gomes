import { task } from "./task.js";

const valor = Number;
const value = process.argv[2];

const tarefa = task.filter((dados) => {
  return "Olá,", value, dados.name, "!Você tem", valor," ", "anos.";
});

console.log(tarefa);
