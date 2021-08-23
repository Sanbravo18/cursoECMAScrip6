//es5
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || '32';
    var country = country || 'MX';
    console.log(name,age,country);
};

newFunction();

// es6 
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age , country);
};

newFunction2();
newFunction2('Ricardo', 27, "CL")


//Concatenación es5
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//Clase 2 LET y CONST, Multilínea, Spread Operator y Desestructuración

//mutilínea
//es5
let lorem = "Quiero escribir una frase epica. La cual debe ser separada \n"
+ "otra frase epica"
//es6
let lorem2 = `Super frase espicaaaa 2
ahora es otra frase epica en ecmascript 6
`;

console.log(lorem);
console.log(lorem2);

//Desestructuración
let person = {
    'name': 'oscar',
    'age': '32',
    'country': 'MX'
}
//es5
console.log(person.name,person.age,person.country);
//es6
let {name,age,country} = person;
console.log(name,age,country);

//operador de propagación

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Nuevas variables
{
    var globalVar = "Global Var";
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

// clase 3 Arrow Functions, Promesas y Parámetros en objetos
