/* Variable de texto_lineas en html*/
var texto = document.getElementById("texto_lineas");
/* Variable de boton_lineas en html*/
var boton = document.getElementById("boton_lineas");
/* Aqui llamamos la función dibujoPorClick para que se ejecute cuando ocurra el click*/
boton.addEventListener("click", dibujoPorClick);

/* Variable de dibujo_personalizado en html*/
var dib = document.getElementById("dibujo_personalizado");
var ancho = dib.width;
var lienzo = dib.getContext("2d");

/* Función para dibujar las lineas que se ejecuta en cada ciclo*/
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
/* Función para que se ejecute al darle click al boton "Dibujar" */
function dibujoPorClick() {
  var linea = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var color_linea = "black";
  var espacio = ancho / linea;


  /* Ciclo de la linea del sector interno lado izquierdo superior*/
  for (l = 0; l < linea; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(color_linea, 0, yi, xf, 300);
    console.log("linea" + 1);
  }
  
  /* Dibujo de las lineas centrales de los ejes "x" y "y" */
  dibujarLinea(color_linea, 1, 1, 1, 299);
  dibujarLinea(color_linea, 1, 299, 299, 299);
}
