var sonuc = topla(3, 5);
var sonuc1 = cikar(69, 35);
var sonuc2 = bolme(0, 55);
var sonuc3 = carpma(0, 37);

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
  if (sayi1 <= "0") {
    result = "sonuc hatali:  " + " ilk sayi sifir olamaz!!!";
  } else {
    result = "sonuc dogru:   " + result;
  }

  return result;
}

function carpma(sayi1, sayi2) {
  var result = sayi1 * sayi2;
  if (sayi1 * sayi2 == 0) {
    result =
      "sonuc sifir:    " + " Birsayinin sifirla carpimi her zaman sifirdir";
  } else {
    result = "sonuc dogru:" + result;
  }
  return result;
}

console.log(9 * 81);
console.log(sonuc2);
console.log(900 / 6);
console.log(25 + 99);
console.log(sonuc3);
console.log(101 * 202);

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
