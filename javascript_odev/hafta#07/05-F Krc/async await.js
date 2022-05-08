function isBasvurusu() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Basvuru Isleminiz Tamamlandi');
      }, 3000);
    });
  }
  async function basvuruSonucu() {
    console.log('Is Basvurunuz Inceleniyor...');
    setTimeout(() => {
    const durum ={
        dosyaDurumu: 'Dosyaniz Incelendi',
        dosyaSonucu: 'Is Basvurunuz Kabul edildi'}
    console.log(durum)}, 2000);
    const sonuc = await isBasvurusu();
    console.log(sonuc);
    
  }
  
  basvuruSonucu();