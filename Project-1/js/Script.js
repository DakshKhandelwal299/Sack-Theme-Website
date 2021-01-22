console.log("Loaded");

function Load() {

    document.querySelector('.load').style.display = "none";
    
}

// Ajax
function Pf() {
    


const xhr = new XMLHttpRequest;

xhr.open("GET","DataOfProducts/PackedFood.json",true)
let str = "";
xhr.onprogress = function () {

    document.getElementById('PkL').style.display = "block"
    
}


xhr.onload = function () 
{
 
    let Data_Packed = this.responseText;
    
    let Data_Packed_Parsed = JSON.parse(Data_Packed);
  
    
    // document.getElementById('data')
    for (key in Data_Packed_Parsed)
    str+= `
    <div class="card" style="width: 18rem;">
  <img src="${Data_Packed_Parsed[key].image}" class="card-img-top" height="200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Data_Packed_Parsed[key].name}</h5>
    <p class="card-text">&#8377; ${Data_Packed_Parsed[key].cost}</p>
    
  </div>
</div>`
    
    document.getElementById('PackedFood').innerHTML = str;
        
    document.getElementById('PkL').style.display = "none"
}


xhr.send()
}
Pf()
;


