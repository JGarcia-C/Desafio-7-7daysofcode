alert("Bienvenido, este proyecto es una calculadora");
let confirmar = true;
while(confirmar){
  let funcion = parseInt(prompt("Ingrese el número correspondiente a la operación matemática desea realizar:\n 1. Suma.\n 2. Resta.\n 3. Multiplicación.\n 4. Division."));
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let resultado = 0;
  switch (funcion) {
    case 1:
      resultado = suma(num1, num2);
      alert(`El resultado de la suma es: ${resultado}`);
      break
    case 2:
      resultado = resta(num1, num2);
      alert(`El resultado de la resta es: ${resultado}`);
      break
    case 3:
      resultado = multiplicacion(num1, num2);
      alert(`El resultado de la multiplicación es: ${resultado}`);
      break
    case 4:
      resultado = division(num1, num2);
      alert(`El resultado de la division es: ${resultado}`);
      break
    default:
      alert("Ingresa un número entre 1 a 4 correspondiente a la operación que deseas realizar")
  }

 let continuar = parseInt(prompt(`¿Desea realizar otra operación matemática?, ingrese:\n 1. Si.\n 2. No.`));
 if (continuar != 1){
   confirmar = false;
 }
}
  


function suma(a, b){
  return a + b;
}

function resta(a, b){
  return a - b;
}

function multiplicacion(a, b){
  return a * b;
}

function division(a, b){
  if( b === 0){
    return "Syntax error";
  }else{
    return a / b;
  }
}
