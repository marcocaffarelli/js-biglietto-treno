// chiedere all'utente il numero di km che intende percorrere
var numeroKm = Number(prompt("quanti km intendi percorrere?"));
console.log(numeroKm);
// chiedere all'utente l'età
var etaPasseggero = Number(prompt("scrivi la tua età?"));
console.log(etaPasseggero);
// costo al km
var costoKm = (0.21 * numeroKm)
console.log(costoKm);
// sconto minorenni
var scontoMinorenni = ((costoKm *20)/100);
console.log(scontoMinorenni);
// sconto anziani
var scontoAnziani = ((costoKm *40)/100);
console.log(scontoAnziani);

// costo biglietto
if (isNaN(numeroKm) || isNaN(etaPasseggero)) {
      alert("devi inserire un numero");
}else{
if (etaPasseggero < 18){
  alert((costoKm - scontoMinorenni).toFixed(2) +"€");
}else if( etaPasseggero >= 65){
  alert((costoKm - scontoAnziani).toFixed(2) +"€");
}else {
  alert(costoKm.toFixed(2) +"€");
}
}
