function topla(sayi1, sayi2) {
  var result = sayi1 + sayi2;
  return result;
}
function cikar(sayi1, sayi2) {
  var result = sayi1 - sayi2;
  return result;
}

function bolme(sayi1, sayi2) {
  var result = sayi1 / sayi2;
  return result;
}

function carpma(sayi1, sayi2) {
  var result = sayi1 * sayi2;
  return result;
}

var sonuc = topla(3, 5);
var sonuc1 = cikar(69, 35);
var sonuc2 = bolme(90, 15);
var sonuc3 = carpma(25, 12);

console.log(sonuc);
console.log(sonuc1);
console.log(sonuc2);
console.log(sonuc3);

function araba(tercih) {
  var result;
  if (tercih == "mercedes,siyah") {
    result = "kesinlikle Al";
  } else {
    result = "Bu Alinmaz";
  }
  return result;
}
console.log(araba("mercedes,siyah"));
console.log(araba("bmw,kirmizi"));
