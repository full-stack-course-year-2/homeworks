function isBasvurusu() {
    setTimeout(() => {
    console.log('Is Basvuru Degerlendirmesi Tamamlandi');  
    }, 2000);
  }

function basvuruSonucu(sonuc) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {  
      console.log('Is Basvurusu Degerlendiriliyor');
        const error = true;
        if (error) {
          resolve(console.log(sonuc)); 
        } else {
          reject("Is Basvurunuz Reddedildi");
        }
      }, 3000);
    });
  }

basvuruSonucu({
      dosyaDurumu: 'Dosyaniz Incelendi',
      dosyaSonucu: 'Is Basvurunuz Kabul edildi'
  })
    .then((response) => {
      isBasvurusu();
    })
    .catch((e) => {
      console.log(e);
    });