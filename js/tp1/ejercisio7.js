//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 =  Number(prompt("Ingrese un numero"));
const num2 = Number(prompt("Ingrese un numero"));
const num3 = Number(prompt("Ingrese un numero"));
if (num1 > num2){
    result= num1;

} else{
    result=num2;
  
}

if (result> num3){
    mayor= result;

}else{
    mayor= num3;
   
}

document.write("el mayor es "+ mayor)
