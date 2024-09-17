window.onload = () => {
    let divContainer = document.createElement('div');
    divContainer.id ='divContainer' ;
    divContainer.className = 'className' ;
    document.body.appendChild(divContainer);

    let form = document.createElement('form');
    form.id ='saveForm';
    form.className ='row';
    form.autocomplete ='off';
    form.style = 'text-align: center ; background-color: mediumaquamarine; border-radius:10px; margin-top:30px ' ;
   
    divContainer.appendChild(form);
    let saveForm = document.querySelector("#saveForm");

    let divTitle = document.createElement('div');
    divTitle.id = 'divTitle';
    divTitle.className = 'col-md-12';

    let baslik = document.createElement('H1');
    baslik.id = 'baslik';
    baslik.style = 'color:green';
    baslik.innerHTML = 'Kayit Formu';
    divTitle.appendChild(baslik);
    saveForm.appendChild(divTitle);

    let divName = document.createElement('div');
    divName.id = 'divName';
    divName.className = 'col-md-3';
    let lblName = document.createElement('label');
    lblName.id = 'lblName';
    lblName.className = 'form-label';
    lblName.innerHTML = 'İsim';
    lblName.htmlFor ='txtName';
    divName.appendChild(lblName);
    let txtName = document.createElement('input');
    txtName.type = 'text';
    txtName.id = 'txtName';
    txtName.className = 'form-control';
    txtName.required = 'required';
    divName.appendChild(txtName);
    saveForm.appendChild(divName);

    let divSurname = document.createElement('div');
    divSurname.id = 'divSurname';
    divSurname.className = 'col-md-3';

    let lblSurname = document.createElement('label');
    lblSurname.id = 'lblSurname';
    lblSurname.className = 'form-label';
    lblSurname.innerHTML = 'Soyisim';
    lblSurname.htmlFor ='txtSurname';
    divSurname.appendChild(lblSurname);

    let txtSurname = document.createElement('input');
    txtSurname.type = 'text';
    txtSurname.id = 'txtSurname';
    txtSurname.className = 'form-control';
    txtSurname.required = 'required';
    divSurname.appendChild(txtSurname);
    saveForm.appendChild(divSurname);

    let divEmail = document.createElement('div');
    divEmail.id = 'divEmail';
    divEmail.className = 'col-md-6';
    let lblEmail = document.createElement('label');
    lblEmail.id = 'lblEmail';
    lblEmail.className = 'form-label';
    lblEmail.innerHTML = 'E-Posta';
    lblEmail.htmlFor ='txtEmail';
    divEmail.appendChild(lblEmail);
    let txtEmail = document.createElement('input');
    txtEmail.type = 'email';
    txtEmail.id = 'txtEmail';
    txtEmail.className = 'form-control';
    txtEmail.required = 'required';
    divEmail.appendChild(txtEmail);
    saveForm.appendChild(divEmail);

    let divCity = document.createElement('div');
    divCity.id = 'divCity';
    divCity.className = 'col-md-8';

    let lblCity = document.createElement('label');
    lblCity.id = 'lblCity';
    lblCity.className = 'form-label';
    lblCity.innerHTML = 'Şehir';
    lblCity.htmlFor ='txtCity';
    divCity.appendChild(lblCity);

    let txtCity = document.createElement('input');
    txtCity.type = 'text';
    txtCity.id = 'txtCity';
    txtCity.className = 'form-control';
    txtCity.required = 'required';
    divCity.appendChild(txtCity);
    saveForm.appendChild(divCity);

    let divZipCode = document.createElement('div');
    divZipCode.id = 'divZipCode';
    divZipCode.className = 'col-md-4';

    let lblZipCode = document.createElement('label');
    lblZipCode.id = 'lblZipCode';
    lblZipCode.className = 'form-label';
    lblZipCode.innerHTML = 'Posta Kodu';
    lblZipCode.htmlFor ='txtZipCode';
    divZipCode.appendChild(lblZipCode);

    let txtZipCode = document.createElement('input');
    txtZipCode.type = 'text';
    txtZipCode.id = 'txtCity';
    txtZipCode.className = 'form-control';
    txtZipCode.required = 'required';
    divZipCode.appendChild(txtZipCode);
    saveForm.appendChild(divZipCode);

    let divButton = document.createElement('div');
    divButton.id = 'divButton';
    divButton.className = 'col-12';   
    divButton.style = 'margin-top:30px'
    btnSend = document.createElement('button');
    btnSend.type = 'submit';
    btnSend.id = 'btnSend';
    btnSend.className = 'btn btn-danger';
    btnSend.innerHTML = 'Gönder';
    
    divButton.appendChild(btnSend);
    saveForm.appendChild(divButton); 

}