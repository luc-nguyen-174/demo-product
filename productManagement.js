let defaultProd = [
    new GongChaProduct("Dolce Milk Tea Float", "Size: M",1,70000),
    new GongChaProduct("Okinawa Latte Float", "Size: M", 1,75000)
]

function showAllProduct() {
    let content = "";
    let quantity=0;
    for (let i = 0; i < defaultProd.length; i++) {
        quantity+=Number(defaultProd[i].quantity)
        content += `<tr>
                    <td> ${defaultProd[i].name} </td>
                    <td> ${defaultProd[i].des} </td>
                    <td> ${defaultProd[i].price} </td>
                    <td> ${defaultProd[i].quantity} </td>
                    <td><img src="${defaultProd[i].img}"> </td>
                    <td><button onclick="editProduct()">Edit</button></td>
                    <td><button onclick="del()">Delete</button></td>
                    </tr>`
    }
    document.getElementById("listProd").innerHTML=content;
    document.getElementById("quantityOfProd").innerHTML=quantity.toString();
}
showAllProduct();

function create(){
    let name=document.getElementById("productName").value;
    let des=document.getElementById("des").value;
    let price=document.getElementById("price").value;
    let quantity=document.getElementById("quantity").value;
    let img=document.getElementById("img").value;
    let newProd=new GongChaProduct(name,des,quantity,price,img)
    defaultProd.push(newProd)
    showAllProduct();
}
function del(index){
    defaultProd.splice(index,1);
    showAllProduct();
}
function editProduct(index){
    let name=document.getElementById("productName").value;
    let des=document.getElementById("des").value;
    let price=document.getElementById("price").value;
    let quantity=document.getElementById("quantity").value;
    let img=document.getElementById("img").value;
    let newProd=new GongChaProduct(name,des,quantity,price,img)
    defaultProd[index]=newProd;
    showAllProduct();
}
