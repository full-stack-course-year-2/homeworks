function hesapmakinasi(sayi1, sayi2, islem) {
  let result = {
    sonuc: 0,
    hata: "",
  };

  if (typeof sayi1 !== "number" || typeof sayi2 !== "number") {
    result.hata = "Lutfen sayisal deger giriniz";
    return result;
  }

  if (islem == "/" && sayi2 == 0) {
    result.hata = " Bolme islemlerinde ikinci sayi sifir olamaz.";
    return result;
  }
  if (["+", "-", "/", "*"].indexOf(islem) == -1) {
    result.hata = "Hatali islem operatoru.";
    return result;
  }
  switch (islem) {
    case "+":
      result.sonuc = sayi1 + sayi2;
      break;
    case "-":
      result.sonuc = sayi1 - sayi2;
      break;
    case "/":
      result.sonuc = sayi1 / sayi2;
      break;
    case "*":
      result.sonuc = sayi1 * sayi2;
      break;

    default:
      result.sonuc = 0;
      break;
  }

  return result;
}

console.log("Toplama islemi", hesapmakinasi(15, 8, "+"));
console.log("Cikarma islemi", hesapmakinasi(20, 6, "-"));
console.log("Carpma islemi", hesapmakinasi(14, 7, "*"));
console.log("Bolme  islemi", hesapmakinasi(90, 6, "/"));
console.log("----------------------------------------");

// Hata kontrolu -- 1
console.log("Carpma islemi", hesapmakinasi(30, "abc", "*"));
// Hata kontrolu -- 2
console.log("Bolme islemi", hesapmakinasi(76, 0, "/"));
// Hata kontrulu -- 3
console.log("toplama islemi", hesapmakinasi(128, 99, "abc"));
