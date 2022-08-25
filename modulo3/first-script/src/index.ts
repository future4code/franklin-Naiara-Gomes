console.log("Olá, Shaw")

let nome: string = "Shaw"

let idade: string = "27 anos"

const array: Array<string> = ["batata", "maça", "abacaxi"]

const arr: number[] = [1, 2, 3]

function soma(a: number, b: number, callback?: () => void): number {
    return a+b;
}

const novoArray: number[] = [...arr, soma(1, 2)];

console.log(novoArray)

const pessoa: {nome: string, idade: number, darOi: (nome: string) => void} = {
    nome: 'Vitor',
    idade: 27,
    darOi: function(nome) {
        console.log('oi');
    }
}


function buscarCarrosTipada(frota: Array<{carro: string, marca:string}>, marca: string): Array<any> {
    if(marca === undefined) {
        return frota
    }

    return frota.filter((carro): boolean => {
        return carro.marca === marca
    })
}
