/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;
  var pesototal=0;
  var mascaroliquidos=0;
  var maslivianosolido=0;
  var marcacara;
  var marcaliviano;

  //validacion
  do{

    do{
      marca=prompt("Ingrese la marca del producto");
    }while(!(isNaN(marca)));
    do{
      precio=prompt("Ingrese el valor del precio");
      precio=parseInt(precio);
    }while(isNaN(precio)||precio<0);
    do{
      peso=prompt("Ingrese el peso en kg");
      peso=parseInt(peso);
    }while(isNaN(peso)||peso<0);
    do{
      tipo=prompt("El tipo es Solido, o Liquido");
    }while(!(isNaN(tipo))||tipo!="Solido"&&tipo!="Liquido");

    //Punto A

    pesototal=pesototal+peso;

    //Punto B

    if(mascaroliquidos<precio&&tipo=="Liquido"){
      mascaroliquidos=precio;
      marcacara=marca;
    }

    //Punto C

    if(maslivianosolido<peso&&tipo=="Solido"){
      maslivianosolido=peso;
      marcaliviano=marca;
    }


    respuesta=confirm("Desea continuar?");
  }while(respuesta);
  document.write("El peso total de la compra es de "+pesototal+" kg"+"<br>");
  document.write("La marca mas cara de los liquidos es "+marcacara+"<br>");
  document.write("La marca de la mas liviana de los solidos es "+marcaliviano);
}
