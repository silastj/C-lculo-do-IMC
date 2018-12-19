

function calcularIMC() {
  var peso = document.getElementById("input").value;
  var altura = document.getElementById("input1").value;
  var imc = Math.round(peso / (altura * altura));
  var msg = "";

  if (imc <= 16.9) {
    msg += "Muito abaixo do peso " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  }
   else if (imc <= 18.4) {
    msg += "Abaixo do peso " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  }
   else if (imc <= 24.9) {
    msg += "Parabéns, seu IMC é: " + "<br>" +  '<strong>' + imc +'</strong>';
  }
   else if (imc <= 29.9) {
    msg += "Cuidado:" + "<br>" + "Acima do peso " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  } 
  else if (imc <= 34.9) {
    msg += "Obesidade 1 " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  }
   else if (imc <= 40) {
    msg += "Obesidade 2 " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  }
   else if (imc > 40) {
    msg += "Obesidade 3 " + "<br>" + " IMC= " + '<strong>' + imc +'</strong>';
  }
  area.innerHTML = msg;
  return false;
}
