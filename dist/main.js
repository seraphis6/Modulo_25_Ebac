"use strict";

var alunos = [{
  nome: 'Alexandre',
  nota: 7
}, {
  nome: 'Gustavo',
  nota: 5
}, {
  nome: 'Lucas',
  nota: 8
}, {
  nome: 'Carol',
  nota: 3
}, {
  nome: 'Betania',
  nota: 9
}, {
  nome: 'André',
  nota: 3
}, {
  nome: 'Rafa',
  nota: 10
}];
function AlunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = AlunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(alunosAprovados);