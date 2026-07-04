let food=localStorage.getItem("food");

let price=Number(localStorage.getItem("price"));

document.getElementById("foodName").innerHTML=food;

document.getElementById("price").innerHTML=price;

let qty=document.getElementById("qty");

function total(){

document.getElementById("total").innerHTML=price*qty.value;

}

qty.addEventListener("input",total);

total();

function placeOrder(){

alert("🎉 Order Placed Successfully!");

}