function isBasvurusu(basvuru, callback) {
    setTimeout(() => {
      console.log(basvuru);
      callback();
    }, 2000);
  }
  
  function basvuruSonucu() {
    setTimeout(() => {
      const sonuc = {
        dosyaDurumu: 'Dosyaniz Incelendi',
        dosyaSonucu: 'Is Basvurunuz Kabul edildi'
      }
      console.log(sonuc);
    }, 2000);
  }
  
  isBasvurusu('Is Basvurusu Degerlendirmesi', basvuruSonucu);