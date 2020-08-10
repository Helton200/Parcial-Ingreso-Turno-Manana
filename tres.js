/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{

	var respuesta;
	var nombre;
	var lugar;
	var temporada;
	var cantidad;
	var lugarmas;
	var contadorSalta=0;
	var contadorCataratas=0;
	var contadorBariloche=0;
	var nombremas;
	var cantidadmas=0;
	var contadorInvierno=0;
	var promedio=0;


	//Validacion

	do{
		do{
			nombre=prompt("Ingrese el nombre del titular");
		}while(!(isNaN(nombre)));

		do{
			lugar=prompt("Ingrese el destino(Bariloche, Cataratas, Salta)");
		}while(!(isNaN(lugar))||lugar!="Bariloche" && lugar!="Cataratas" && lugar!="Salta");

		do{
			temporada=prompt("Ingrese la temporada(Otoño, Invierno, Verano, Primavera,)");
		}while(!(isNaN(temporada)) || temporada!="Otoño" && temporada!="Invierno" && temporada!="Verano" &&  temporada!="Primavera");

		do{
			cantidad=prompt("Cantidad de personas que viajan");
			cantidad=parseInt(cantidad);
		}while(isNaN(cantidad)||cantidad<0);

//Punto A
		switch(lugar){
			case("Salta"):{
				contadorSalta++;
				break;
			}
			case("Bariloche"):{
				contadorBariloche++;
				break;
			}
			case("Cataratas"):{
				contadorCataratas++;
				break;
			}
			}

//Punto B

			if(cantidadmas<cantidad){
				nombremas=nombre;
			}

//Punto C

			if(temporada=="Invierno"){
				contadorInvierno++
				promedio=(promedio+cantidad)
			}



		respuesta=confirm("Desea continuar?");
	}while(respuesta);

	//Punto A

	if(contadorBariloche>contadorCataratas&&contadorBariloche>contadorSalta){
		lugarmas="Bariloche";
	} else if(contadorCataratas>contadorBariloche&&contadorCataratas>contadorSalta){
		lugarmas="Cataratas";
	} else{
		lugarmas="Salta";
	}

	//Punto C

	promedio=promedio/contadorInvierno;
	promedio=parseInt(promedio);


	document.write("El lugar mas elegido fue "+lugarmas);
	document.write("<br>"+"El nombre de la persona con mas acompañantes es "+nombremas);
	document.write("<br>"+"El promedio de personas que viajan en invierno es "+promedio);

}
