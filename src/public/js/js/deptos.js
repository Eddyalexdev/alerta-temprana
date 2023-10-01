var carrera = document.querySelector('#carrera');
var materia = document.querySelector('#materia');
carrera.onchange = mandoCarrera;

function reciboMaterias(respuesta) {

  limpiar(); 
  
  var lines = respuesta.split('\n');
  for (var line = 0; line < lines.length; line++) {
    var opt = document.createElement('option');
    opt.innerHTML = lines[line];
    opt.value = lines[line];
    materia.appendChild(opt);
  }

}

function mandoCarrera() {
  var ajax = new XMLHttpRequest();
  ajax.open('GET', carrera.value);
  ajax.onreadystatechange = function() {
    console.log(ajax.status, ajax.readyState, ajax.responseText);
    if (ajax.status === 200 && ajax.readyState === 4) {
      reciboMaterias(ajax.responseText);
    }
    else
      limpiar();
  }
  ajax.send();
}

function limpiar(){
while(materia.options.length > 0){                
    materia.remove(0);
  } 
}