let indicePreguntaActual = 0;
const preguntas = document.querySelectorAll('.pregunta');

function mostrarPregunta(indice) {
  preguntas.forEach((pregunta, i) => {
    if (i === indice) {
      pregunta.style.display = 'block';
    } else {
      pregunta.style.display = 'none';
    }
  });
}

//--------------------CON ESTO CONTROLO BOTON *******
// si selecciona una respuesta var select = 1
var select1= 0;
var select2 = 0;
var atras1 = 0
var atras2 = 0
function seleccionar() {
var select1= +1
  // console.log("select1 vale =  " + select1)
 
  select2 = select1
  }
  // console.log("select1vale =  " + select1)
 
//--------------------------CON ESTO CONTROLO Selecciona SIGUENTE PREGUNTA*******-

function siguientePregunta() {
  // console.log("Atras1 siguientePregunta vale =  " + atras1)
  // console.log("Atras2 siguientePregunta vale =  " + atras2)
  // atras2=atras1
  console.log("Atras1 siguientePregunta vale =  " + atras1)
  console.log("Atras2 siguientePregunta vale =  " + atras2)
  if (atras2===0) {
    // atras2 = 0
    // atras1 = 0
    
  
          if (select2===0) {
            
            // console.log("atra2 vale =  " + atras2)
            alert ("Por favor, seleccioná una respuesta antes de avanzar")
            
            
          } else {
            
                select2 = 0
                
                // console.log("Atras1 en Funcion Siguiente = "+ atras1)
                // console.log("Atras2 en Funcion Siguiente = "+ atras2)
                
              const opcionSeleccionada = document.querySelector(`input[name=q${indicePreguntaActual + 1}]:checked`);
              if (opcionSeleccionada) {
                puntuacionTotal += parseInt(opcionSeleccionada.value, 10);
              }

              if (indicePreguntaActual < preguntas.length - 1) {
                indicePreguntaActual++;
                mostrarPregunta(indicePreguntaActual);
              } else {
                mostrarResultado();
              }
            }
    } else {
      atras1=atras1-1
      atras2 = atras2-1
      select2 = 1
      const opcionSeleccionada = document.querySelector(`input[name=q${indicePreguntaActual + 1}]:checked`);
      if (opcionSeleccionada) {
        puntuacionTotal += parseInt(opcionSeleccionada.value, 10);
      }

      if (indicePreguntaActual < preguntas.length - 1) {
        indicePreguntaActual++;
        mostrarPregunta(indicePreguntaActual);
      } else {
        mostrarResultado();
      }
  }
}
/*------------------------CON ESTO CONTROLO cuando ATRAS *******----------------*/
var atras1=0
var atras2=0
function preguntaAnterior() {
  if (select2===0) {
            
    // console.log("atra2 vale =  " + atras2)
    alert ("Debe Seleccionar Una Respuesta")
    
    
  } else {

  if (indicePreguntaActual > 0) {
    indicePreguntaActual--;
    mostrarPregunta(indicePreguntaActual);
    atras1=atras1+1
    atras2=atras1
    console.log("Atras1 en Funcion pregAnt = "+ atras1)
    console.log("Atras2 en Funcion pregAnt = "+ atras2)
    
  }
}
}



mostrarPregunta(indicePreguntaActual);
