let firtname=document.getElementById('one')
firtname.innerHTML='isim'
firtname.style.background='red'
firtname.style.fontSize='2rem'

let tag=document.getElementsByTagName('div')
for (let index = 0; index < tag.length; index++) {
  console.log(tag[index].innerText);
    
}


let siniflar=document.querySelectorAll('.form-label')
for (let index = 0; index < siniflar.length; index++) {
   console.log(siniflar[index].innerText);
    }

let idIleSecim=document.querySelector('#city')
idIleSecim.innerHTML='ulkeniz'
idIleSecim.style.background='yellow'

