 //Estrutura condiional simples
 //Igual duplo (igual)
 const a = 10
 if (a == 10) {
    console.log('a é 10')
 }

 const b = '10'
 if (b == 10) {
    console.log('b é 10')
 }

 //Triplo igual - verifica o tipo
 console.clear()
 const c = 10
 if (c === 10) 
console.log('c é 10')

const d = '10'
if (d === 10) {
console.log('d é 10')
 }
console.log('Estou fora do if que compara string')

//Estrutura condicional composta
// Estrutura condicional composta 
console.clear(); 
const e = '10'; 
if (e === 10) console.log('e é o numeral 10'); 
else { 
    console.log(`Resultado da condição: ${e === 10}`); 
    console.log('e não é o numeral 10'); 
} 
