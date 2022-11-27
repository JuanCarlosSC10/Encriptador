/* Codigo que permite aumentar tamaño automatico de textarea*/
const textarea = document.querySelector("textarea");
let btncopiar = document.getElementById("btn-copiar");
let input = document.getElementById("input-text"); 
let resultadotext= document.getElementById('resultado-text');


textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});


function showaside(){
  document.getElementById("btn-copiar").style.display = "block";
  document.getElementById("subtitle").style.visibility = "hidden";
  document.getElementById("subtitle-min").style.visibility = "hidden";
}

/* Funcion que permite encriptar texto */
function encriptar() {
 
    var texto = document.getElementById("input-text").value.toLowerCase();

   
    if(input.value.length === 0){
      swal("Advertencia","¡No has ingresado tu mensaje aún!","info");
    }
    else{
      var textoCifrado = texto.replace(/e/gm, "enter");
    var textoCifrado = textoCifrado.replace(/o/gm, "ober");
    var textoCifrado = textoCifrado.replace(/i/gm, "imes");
    var textoCifrado = textoCifrado.replace(/a/gm, "ai");
    var textoCifrado = textoCifrado.replace(/u/gm, "ufat");
  
    document.getElementById("img-muneco").style.display = "none";
    // document.getElementById("texto-muneco").style.display = "none";
    document.getElementById("resultado-text").innerHTML = textoCifrado;
    document.getElementById("resultado-text").style.display = "show";
    document.getElementById("resultado-text").style.display = "inherit";
    showaside();
    }
    
}

/* Funcion que nos pemrite desencripar un texto */
function desencriptar(e) {

  var texto = document.getElementById("input-text").value.toLowerCase();

  if(input.value.length === 0){
    swal("Advertencia","¡No has ingresado tu mensaje aún!","info");
  }
  else{
    var textoCifrado = texto.replace(/enter/gm, "e");
    var textoCifrado = textoCifrado.replace(/ober/gm, "o");
    var textoCifrado = textoCifrado.replace(/imes/gm, "i");
    var textoCifrado = textoCifrado.replace(/ai/gm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/gm, "u");
  
    document.getElementById("img-muneco").style.display = "none";
    document.getElementById("resultado-text").innerHTML = textoCifrado;
    showaside();
  }
 
}

/* Funcion para copiar texto */
function copiar() {
  let content = document.createElement("input"); //Creo caja de texto temporal
  content.setAttribute("value", document.getElementById('resultado-text').innerHTML); //Asigno el valor (resulltado-text) a la caja de texto temporal.
  document.body.appendChild(content); //Añado el contenido a la pagina (body)
  content.select(); //Selecciono el texto encriptado o desencriptado
  document.execCommand("copy"); //Copio el texto
  document.body.removeChild(content); // Se elimina la caja de texto temporal.
  document.getElementById("btn-copiar").style.display = "none";
  swal("Portapapeles","Mensaje copiado al portapapeles","success"); 
  limpiarcampos();
  mostrarmuneco(); 
}

function limpiarcampos(){
  input.value="";
  resultadotext.innerHTML = '';
}

function mostrarmuneco(){
  document.getElementById("img-muneco").style.display = "show";
  document.getElementById("img-muneco").style.display = "inherit";
  document.getElementById("subtitle").style.visibility = "visible";
    document.getElementById("subtitle-min").style.visibility = "visible";
}

/* Funcion que permite validar solo entrada de texto */
function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnopqrstuvwxyz";

  especiales = [8, 13, 32];
  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    swal("Advertencia","Ingresar sólo letras en minúsculas sin acentos, No numeros","info");
    return false;
  }
}
