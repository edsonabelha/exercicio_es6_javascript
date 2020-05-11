//Exercicio 1º Classes
/*
class Usuario {
  constructor(email, senha){
    this.email = email;
    this.senha = senha;
  }

  isAdmin(){
      return this.admin === true;
  }
}


class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste3.com', 'senha123');

console.log(User1.isAdmin()); //False
console.log(Adm1.isAdmin()); //True */

//==================================================
//Exercicio 2º Percorrer Arrays
/*
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabreil', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Rocketseat' },
];

//Map
const newIdade = usuarios.map(usuario => usuario.idade);
//console.log(newIdade);

//Filter
const idadeEmpresa = usuarios.filter(
  usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);
//console.log(idadeEmpresa);

//Find
const userEmpresa = usuarios.find (
  usuario => usuario.empresa === "Google"
);
console.log(userEmpresa);

const multIdade = usuarios
.map(usuario => ({ ...usuario, idade: usuario.idade * 2}))
.filter(usuario => usuario.idade <= 50);

console.log(multIdade); */

//==================================================
//Exercicio 3º Uso de Arrow Functio
/* 3.1
const arr = [1, 2, 3, 4, 5];
const newarr = arr.map(item => item + 10);
//console.log(newarr);
//===========================//
    3.2
const usuario = { nome: "Diego", idade: 23};
const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));
//===========================//
    3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = ( nome = 'Edson', idade = 18) => ({
  nome,
  idade
});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
//===========================//
//  3.4
const promise = () =>  new promise((resolve, reject) => resolve()); */

//===========================//
//Exercicio 4º Uso de Desestruturação
//  4.1
/*
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};
const { nome, endereco: {cidade,estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado); */

//===========================//
//Exercicio 4º Uso de Desestruturação em Parametros
//  4.2
/*
function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

mostraInfo({nome: 'Diego', idade: 23}); */

//===========================//
//Exercicio 5º Uso de Rest
//  5.1
/*
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x); //1
console.log(y); //2 3 4 5 6
//===========================//
//  5.1 B
function soma(...nums) {
  return nums.reduce((a,b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3 */

//===========================//
//Exercicio 5º Uso de Spread
//  5.2
/*
const usuario = {
  nome: 'Diego',
  idade: 23,
  endreco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, cidade: 'Lontras'};

console.log(usuario2);
console.log(usuario3); */

//===========================//
//Exercicio 6º Uso de Template Literals
//  6
/*
const usuario = 'Edson';
const idade = 30;

console.log(`O Usuario ${usuario} possui ${idade} anos.`);*/

//===========================//
//Exercicio 5º Uso de Object Short Syntax
//  7

/*const nome = 'Edson';
const idade = 30;

const usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
}
console.log(usuario); */

//===========================//
//Exercicio Modulo 2º Uso de Import & Export
//  1.1


