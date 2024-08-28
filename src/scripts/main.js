class Alunos{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }
    media(){
        return this.notas.reduce((soma, nota) => soma + nota, 0) / this.notas.length;
    }
    aprovado(){
        return this.media() >= 6;
    }
}

const joao = new Alunos('João', [10, 7, 4, 2]);
const maria = new Alunos('Maria', [10, 8, 9, 10]);
const pedro = new Alunos('Pedro', [10, 8, 9, 7]);

console.log(`A media do ${joao.nome} é ${joao.media()}`);
console.log(`A media do ${maria.nome} é ${maria.media()}`);
console.log(`A media do ${pedro.nome} é ${pedro.media()}`);

const todosAlunos = [joao, maria, pedro];
console.log(todosAlunos);

todosAlunos.forEach(aluno => {
    if(aluno.media() >= 6){
        console.log(`${aluno.nome} foi aprovado(a) com a média ${aluno.media()}`);
    }else{
        console.log(`${aluno.nome} foi reprovado(a).`);
    }
});




