function tinhtien(event){
    var parent=event.parentElement;
    var price = Number(parent.previousElementSibling.innerText)
    var quantity = event.value;
    var unitprice=parent.nextElementSibling;
    unitprice.innerText=price*quantity;
tongtien();
}
function tongtien(){
    var thanhtien=document.getElementsByClassName('thanhtien');
    var tong=0;
    for(var i=0;i<thanhtien.length;i++){
        tong+=Number(thanhtien[i].innerText)
    }
    document.getElementById('tongtien').innerHTML=tong;
}