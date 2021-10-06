/* Média de idade dos alunos com score igual ou acima de 7 */

let alunos = [
  { score: 10, name: 'Fulano', age: 25 },
  { score: 7, name: 'Ciclano', age: 22 },
  { score: 5, name: 'Roberto', age: 36 },
  { score: 9, name: 'Claudio', age: 41 },
  { score: 2, name: 'Maria', age: 32 },
  { score: 9, name: 'Joana', age: 17 },
];

let aprovados = alunos.filter((aluno) => aluno.score >= 7);

let media = aprovados.reduce(
  (acc, curr, _, array) => acc + curr.age / array.length,
  0
);

console.log(media);

let media2 = alunos
  .filter((aluno) => aluno.score >= 7)
  .reduce((acc, aluno, _, array) => {
    acc += aluno.age / array.length;
    return acc;
  }, 0);

console.log(media2);

/* Maneira mais performática */

alunos.reduce(
  (acc, aluno, _, array) => {
    if (aluno.score >= 7) {
      return {
        acumulado: acc.acumulado + aluno.age,
        count: acc.count + 1,
      };
    }
    return acc;
  },
  { acumulado: 0, count: 0 }
);

/* Faça uma série de strings dos nomes dizendo se eles podem ou não ir para The Matrix (> 18 anos)  */

let people = [
  { name: 'Angelina Jolie', age: 80 },
  { name: 'Eric Jones', age: 2 },
  { name: 'Paris Hilton', age: 5 },
  { name: 'Kayne West', age: 16 },
  { name: 'Bob Ziroll', age: 100 },
];

let whoCanGoToTheMatrix = people.map((x) => {
  if (x.age > 18) {
    return `${x.name} can go to The Matrix`;
  } else {
    return `${x.name} is under age`;
  }
});

console.log(whoCanGoToTheMatrix);

let whoCanGoToTheMatrix2 = people.map((person) =>
  person.age > 18
    ? `${person.name} can go to The Matrix`
    : `${person.name} is under age`
);

console.log(whoCanGoToTheMatrix2);

/* Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação.
Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35, quantos de 36 a 55 anos e quantos de cada uma dessas
faixas etárias realmente votaram. O objeto resultante contendo esses dados deve ter 6 propriedades. Veja o exemplo de saída na parte inferior  */

let voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

let votersByAge = voters.reduce(
  (acc, voter) => {
    if (voter.age <= 25) {
      acc.numYoungPeople += 1;
      if (voter.voted) {
        acc.numYoungVotes += 1;
      }
    } else if (voter.age >= 26 && voter.age <= 35) {
      acc.numMidsPeople += 1;
      if (voter.voted) {
        acc.numMidVotesPeople += 1;
      }
    } else {
      acc.numOldsPeople += 1;
      if (voter.voted) {
        acc.numOldVotesPeople += 1;
      }
    }
    return acc;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(votersByAge);
