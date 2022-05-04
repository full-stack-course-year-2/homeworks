const loginOlduMu = false;

const promise_1 = () => {
  const result = new Promise((resolve, reject) => {
    if (loginOlduMu) {
      resolve("login basarili");
    } else {
      reject("login BASARISIZ");
    }
  });
  return result;
};

const makalesiVarMi = true;

function promise_2() {
  const result = new Promise((resolve, reject) => {
    if (makalesiVarMi) {
      resolve("makaleler yüklendi");
    } else {
      reject("makalesi yok");
    }
  });
  return result;
}

const islem = async () => {
  await promise_2()
    .then((sonuc) => console.log(sonuc))
    .catch((err) => console.log(err));

  await promise_1()
    .then((sonuc) => console.log(sonuc))
    .catch((err) => console.log(err));
};

islem();
