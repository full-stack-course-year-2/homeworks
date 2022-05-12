

let form1=document.createElement('form')
form1.className='row g-3';

let div1=document.createElement('div')
div1.className="col-md-4";

let label1=document.createElement('label')
label1.className="form-label"
label1.innerText='First name'
label1.for="validationDefault01";

let input1=document.createElement('input')
input1.className="form-control"
input1.type="text"
input1.id="validationDefault01"
input1.value="Mark"


let div2=document.createElement('div')
div2.className="col-md-4";

let label2=document.createElement('label')
label2.className="form-label"
label2.innerText='Last name'
label2.for="validationDefault02";

let input2=document.createElement('input')
input2.className="form-control"
input2.type="text"
input2.id="validationDefault02"
input2.value="Otto"


let div3=document.createElement('div')
div3.className="col-md-4";

let label3=document.createElement('label')
label3.className="form-label"
label3.innerText='Username'
label3.for="validationDefaultUsername";

let divex=document.createElement('div')
divex.className="input-group"

let span=document.createElement('span')
span.className="input-group-text"
span.id="inputGroupPrepend2"

let input3=document.createElement('input')
input3.className="form-control"
input3.id="validationDefaultUsername" 
input3.type='text'


let div4=document.createElement('div')
div4.className="col-md-6";

let label4=document.createElement('label')
label4.className="form-label"
label4.innerText='City'
label4.for="validationDefault03";

let input4=document.createElement('input')
input4.className="form-control"
input4.id="validationDefault03"
input4.type='text'


let div9=document.createElement('div')
div9.className="col-md-3";

let label7=document.createElement('label')
label7.className="form-label"
label7.innerText='State'
label7.for="validationDefault04";

let selectt=document.createElement('select');
selectt.className="form-select";
selectt.id="validationDefault04"

let optionn=document.createElement('option');
optionn.value="";
optionn.innerText='Choose...';


let div5=document.createElement('div')
div5.className="col-md-3";

let label5=document.createElement('label')
label5.className="form-label"
label5.innerText='Zip'
label5.for="validationDefault05";

let input5=document.createElement('input')
input5.className="form-control"
input5.id="validationDefault05"
input5.type='text'

let div6=document.createElement('div');
div6.className="col-12"

let div7=document.createElement('div');
div7.className="form-check"

let input6=document.createElement('input')
input6.className="form-check-input"
input6.id="invalidCheck2"
input6.value=""

let label6=document.createElement('label')
label6.className="form-check-label"
label6.innerText= 'Agree to terms and conditions'
label6.for="invalidCheck2";

let div8=document.createElement('div');
div8.className="col-12"

let buton=document.createElement('button')
buton.className="btn btn-primary"
buton.type="submit"
buton.innerText='Submit form'
buton.onclick=tıkla=()=>{
   alert('Lutfen Boslukları Dogru Doldurunuz')
}


document.body.appendChild(form1);
form1.appendChild(div1);
div1.appendChild(label1);
div1.appendChild(input1);

form1.appendChild(div2);
div2.appendChild(label2);
div2.appendChild(input2);

form1.appendChild(div3);
div3.appendChild(label3);
div3.appendChild(divex);
divex.appendChild(span);
divex.appendChild(input3);


form1.appendChild(div4);
div4.appendChild(label4);
div4.appendChild(input4);

form1.appendChild(div9);
div9.appendChild(label7)
div9.appendChild(selectt);
selectt.appendChild(optionn);

form1.appendChild(div4);
div5.appendChild(label5);
div5.appendChild(input5);

form1.appendChild(div6);
div6.appendChild(div7);
div7.appendChild(input6);
div7.appendChild(label6)

form1.appendChild(div8);
div8.appendChild(buton);










