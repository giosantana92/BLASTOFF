 // 1°
 function calcularMediaIdade(i,j,k,x,y){
    return (i+j+k+x+y)/5
}

// 2°

function consumoGasolina(distancia,combustivel){
    return distancia/combustivel
}

// 3°
function retornarMenorNumero(a,b,c){
    
    let menorNumero=Math.min(a,b,c)
    return menorNumero;
}

// 4°
function toCelsius(fahrenheit){
    return 5 * (fahrenheit - 32) / 9;
}

//
// 5°
//
function toFahrenheit(celsius) {
    return celsius / 5 * 9 + 32;
}

// 6°
function tempoFutebol(a,b){
    return (b-a)*60   
}

// 7° 
const listNumer=[1,2,3,4,5,6,7,8,9,10]
function epar(){
    for(i=0;i<listNumer.length;i++){
        if(i%2==0){
            console.log("É par "+ i)
        }
        else{
            console.log("é impar" + i)
        }
    }
}

// 8°
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

 // 9°
function tabuada(n){
   let valores=[n*1,n*2,n*3,n*4,n*5,n*6,n*7,n*8,n*9,n*10]
   
       return valores;
}

// 10°
var fatorial = 5;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);

// 11°
const a1 = [1, 2, 3, 4, 5];
const a2 = [2, 3];
const intersection = a1.filter(i => a2.includes(i));
console.log(intersection); // [2, 3]


// 12°
var a = [1, 2,3,4 ];
var b = [1, 2, 5,8];

var juntar=a.concat(b)

 //13°
  function retornarMatriz(){
      let matriz=[0,1,2,3,4,5]
      for(i=0;i<matriz.length;i++){
          console.log(matriz[i])
      }
  }

  // 14°

const testes = ["reviver", "luz azul", "radar", "manhã"];
const checkPalindrome = str => str === str.split('').reverse().join('');
const resultados = testes.map(checkPalindrome);
console.log(resultados);