1 // Valor do tipo numérico
"Homer" // Valor do tipo string(sequência de caracteres)

"Instituto" + ' ' + 'da' + " " + "Oportunidade" + ' ' + 'Social' //Contenando (unindo) strings

"Essa é a primeira linha\nE essa é a segunda linha" //(\n) caractere de escape, indica uma nova linha 

// Valores nulos 
null // nulos
undefined // indefinidos

//Operadores: Os operadores especificam uma avaliação/ação a ser executada em um ou mais operandos e podem ser aritméticos, relacionais ou lógicos.

//Aritméticos: Adição ou multiplicação tomam dois valores númericos e produzem um novo número. Ex: 100 + 4 * 11
//Simbolos: + - * **(exponenciação) / %(módulo, resto da divisão inteira) ++(incremento) --(decremento)
// () PRIMEIRO /* SEGUNDO +- TERCEIRO

//Comparação (relacionais): Comparação entre valores
//3>2 true
//3<2 false
//Operadores de comparação: == (valores iguais) === (valores e tipos iguais) != (diferente) <  <=  >  >=

//Lógicos: Usados para concatenar(unir) expressões que tem comparação entre valores
//Principais: && ("and" ou "e" retorna verdadeiro se todos operandos forem verdadeiros) 
//|| ("or ou "ou" retorna verdadeiro se pelo menos um operando for verdadeiro) 
//!("not" ou "não" inverte o valor lógico se é verdadeiro, retorna falso e se é falso retorna verdadeiro)

//Variavel:Let, Var, Const (constante)
//O nome de variáveis ou constantes deve começar por letras ou 
//underline ( _ ) e pode conter números e não pode conter caracteres especiais. O 
//nome também não pode ser uma palavra-chave ou palavra reservada.

//var x = 1; // Variável numerica 
//var nome = 'Homer'; // Variável string 
//var teste; // Variável não inicializada

//let x = 'John Doe'; //Não permite ser redeclarada 
//let x = 0; 

//onst PI = 3.141592653589793; //Variáveis definidas com const não podem ser redeclaradas e não podem ter seu valor alterado
//PI = 3.14; // Isso produzirá um erro 
//PI = PI + 10; // Isso também produzirá um erro

console.log('Olá mundo')
console.error('Mensagem de erro')
console.warn('Mensagem de aviso')

//Let, const
console.clear()
let idade = 20;
const nome = 'Ana';
console.log(nome);
console.log(idade);
idade = 21;
console.log(idade);

//String, numbers, booleanos, null, undefined
console.clear()
const nome_pessoa = 'Ana'
const idade1 = 20
const rating = 4.5 
const isCool = true
const x = null
const y = undefined
let z

console.log(typeof nome_pessoa) //string
console.log(typeof idade1) //number
console.log(typeof rating) //number
console.log(typeof isCool) //booleano
console.log(typeof x) //object
console.log(typeof y) //undefined
console.log(typeof z) //undefined

//Concatenar string
console.clear()
const pessoa = 'Irmão do Jorel'
const idade2 = 30
console.log(' Meu nome é ' + pessoa + ' e eu tenho ' + idade2 + ' anos ')

//Template string
const hello = `Meu nome é ${pessoa} e eu tenho ${idade2} anos `
console.log(hello)

//Operadores de comparação e lógico
console.clear()
let teste1 = 1
let teste2 = 0
let valor1 = true
let valor2 = false 

console.log(teste1 > teste2) //comparação
console.log(teste1 < teste2) //comparação
console.log(teste1 && teste2) //operador lógico
console.log(valor1 && valor2) //operador lógico