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