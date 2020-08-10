/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var respuesta;
	var contador = 1;
	var hombres=0;
	var mujeres=0;
	var edadpromedio=0;
	var mujermastemperatura=0;
	var contadoredad=0;

//validacion de 5 pacientes
	do{
		contador++;
		//Nombre
		do{
			nombre=prompt("Ingrese el nombre del paciente");
		}while(!(isNaN(nombre)))
		//Temperatura
		do{
			temperatura=prompt("Ingrese su temperatura acutal");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura)||temperatura<0);
		//sexo
		do{
			sexo=prompt("Ingrese el sexo. (F/M)");
		}while(sexo!="F"&&sexo!="M");
		do{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<0);

		//Punto A

		switch(sexo){
			case("F"):{
				mujeres++
				break;
			}
			case("M"):{
				hombres++;
				break;
			}
		}

		//Punto B

		if(edad>0){
			contadoredad++;
			edadpromedio=edadpromedio+edad;
		}
		
		//Punto C

		if(sexo=="F"&&mujermastemperatura<temperatura){

			mujermastemperatura=temperatura;
		}

	}while(contador<=5);

	edadpromedio=edadpromedio/contadoredad;

	document.write("Hay un total de "+hombres+" hombre, y "+mujeres+" de mujeres");
	document.write("<br>"+"La edad promedio en total de los pacientes es "+edadpromedio+" años");
	document.write("<br>"+"La mujer con mas temperatura tiene un total de "+mujermastemperatura+" °");

}
