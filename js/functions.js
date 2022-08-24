
function suma(){
    var A;
    var B;
    var Suma;
    
    A = parseInt(prompt("por favor ingresr el 1er digito"));
    B = parseInt(prompt("por favor ingresr el 2do digito"));
    
    Suma = A + B;
    alert("el resultado de la suma es  " + Suma );
}


function opBasicas(){
    var A;
    var B;
    var Suma;
    var resta;
    var multiplicacion;
    var division;
    
    A = parseInt(prompt("por favor ingresr el 1er digito"));
    B = parseInt(prompt("por favor ingresr el 2do digito"));

    Suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    division = A/B;
     
    alert("el resultado de la suma es "+Suma + " el resultado de la resta es "+resta +" el resultado de la multiplicacion es "+multiplicacion+"  el resultado de la division es "+division)
}


function nMayor(){
    var A;
    var B;
    
    A = parseInt(prompt("por favor ingresr el 1er valor a comparar"));
    B = parseInt(prompt("por favor ingresr el 2do valor a comparar"));
    
    if(A == B){
        alert(" los valores ingresados son iguales")
    }
    else if(A >B){
        alert(" el numero mayor es "+A)
    }else{
        alert("el numero mayor es "+B)
    }
}
function nMenor3(){
    var a;
    var b;
    var c;

    a = parseInt(prompt("Porfavor ingrsar el primer valor "));
    b = parseInt(prompt("Porfavor ingrsar el segundo valor "));
    c = parseInt(prompt("Porfavor ingrsar el tercer valor"));

   if (a<b & a<c) {
    alert('el numero menor es : ' +a)
   }
   else if(b<a & b<c){
    alert('el numero menor es : ' +b)
   }
   else {
    alert('el numero menor es : ' +c)
   }

}
function nPar(){
    var numero;

    numero = parseInt(prompt("Porfavor ingrese un numero "));

    if(numero % 2 == 0){
        alert('El numero : ' + numero + ' es Par')
    } else{
        alert('El numero : ' + numero + ' es Impar')
    }

}
function nCuadrado() {

    var a;
    var resultado;

    a = parseInt(prompt("Digite un valor"));
    

    resultado = a * a;

    alert("el numero cuadrado de " +a+ " es : " + resultado);

}
function areaT(){

    var base;
    var altura;
    var area;

    base = parseInt(prompt("por favor ingrese la base del triangulo "));
    altura = parseInt(prompt("Por favor ingrese la altura del triangulo "));

    area = (base * altura ) /2;

    alert("el area del triangulo es : " + area );
}
function CenAmet(){

    var numero;
    var centimetros;

    numero = parseInt(prompt("por favor ingrese el valor en metros "));

    centimetros = numero * 100;

    alert('el valor en centimetros es : ' + centimetros);

}
function aNacimiento (){
    var edad = 0;
    var año = 2022;
    var total = 0;
    edad = parseInt(prompt("Ingrese la edad"));
    total = año - edad;
    alert(" El año en que nació es: "+total);
}
function inversion (){
    var años = 0;
    var total= 0;
    var capital= 0;
    var ganancia = 0;
    var interes = 0;

    capital = parseInt(prompt("ingrese el capital a invertir"));
    años = parseInt (prompt("ingrese por cuantos años invertira ese dinero"));
    interes = 2/100;
    ganancia = (interes*12) * años;
    total = ganancia*capital;
    alert("La ganancia total es: "+ total);
}
function promAlumno(){
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var total= 0;
c1 = parseInt(prompt("ingrese la primera calificación"));
c2 = parseInt(prompt("ingrese la segunda calificación"));
c3 = parseInt(prompt("ingrese la tercera calificación"));
c4 = parseInt(prompt("ingrese la cuarta calificación"));
c5 = parseInt(prompt("ingrese la quinta calificación"));
total = (c1 + c2 + c3 + c4 + c5)/5;
alert ("El promedio del estudiante es: " +total);
if(total>=3)
        alert('El estudiante es aprobado');
    else
        alert('El estudiante es reprobado');

}
function fruteria (){
    var kilo = 4500;
    var nkilo = 0;
    var total = 0;
    var des1 = 0;
    var des2 = 0;
    var des3 = 0;
    nkilo = parseInt(prompt("ingrese el numero de kilos de las manzanas"));
    total = kilo * nkilo;
    des1 = (10 * total) / 100;
    des2 = (15 * total) / 100;
    des3 = (20 * total) / 100;
    if (nkilo<=2)
    alert('Su descuento es de 0% el valor  pagar es: ' + total);
    else if (nkilo<=5)
     alert('Su descuento es de 10% el valor  pagar es: ' + des1);
    else if (nkilo<=9 )
      alert('Su descuento es de 15% el valor a pagar es: '+ des2);
    else if (nkilo >= 10)
      alert ('Su descuento es de 20% el valor a pagar es: ' + des3);
}