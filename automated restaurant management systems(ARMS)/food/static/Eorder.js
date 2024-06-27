var Ecart = document.querySelector('#Acart');
var Etotal = document.querySelector('#Atotal');

function addEntree(Eid){
    EntreeId = '#entree'+ Eid;
    var nam = document.querySelector(EntreeId).innerHTML;
    var radio = 'entree' + Eid;
    var pri = document.getElementsByName(radio)

    if(pri[0].checked){
        var price = pri[0].value;
    }
    
    else{
        price = pri[0].value;
    }

    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartsize = orders.length;

    //saving items and total in loc storage
    orders[cartsize] = [nam, price];
    localStorage.setItem('orders', JSON.stringify(orders));

    total = Number(total) + Number(price);
    localStorage.setItem('total', total);

    //updating number of item count
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length; 
    butto = '<h5><button class="btn-danger" onclick="removeEntree('+ cartsize +')">X</button></h5>';

    Etotal.innerHTML = 'Total: '+ total + ' ';
    Ecart.innerHTML += '<li>'+ nam + '  '+ price + ' $' + butto + '</li>'; 
}
function EshoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartsize = orders.length;
    Ecart.innerHTML = '';
    for(let i = 0; i < cartsize; i++) {
        butto = '<h5><button class="btn-danger" onclick="removeAppetizer('+ i +')">X</button></h5';
        Ecart.innerHTML += '<li>'+ orders[i][0] + ' : ' + orders[i][1] + ' $' + butto + '</li>';
    }  
    Etotal.innerHTML = 'Total: '+ total + ' ';
}

EshoppingCart();

function removeEntree(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][0]);
    orders.splice(n,1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length; 

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
 EshoppingCart();
}