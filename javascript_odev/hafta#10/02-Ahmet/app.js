var olustur= document.getElementById("olustur");

olustur.onclick=function(){
    var sayac=1;
    
    var satir=document.getElementById("satir").value;
    var sutun=document.getElementById("sutun").value;
                
    var table=document.createElement("table");
         for(var i=0;i<satir;i++){
                var tr=document.createElement("tr");
                     table.appendChild(tr);
                     for(var j=0;j<sutun;j++){
                         var td=document.createElement("td");
                         td.innerHTML=sayac++;
                         tr.appendChild(td);
                     }  
                 }
                
        document.getElementById("goster").innerHTML="";
        document.getElementById("goster").appendChild(table);
}