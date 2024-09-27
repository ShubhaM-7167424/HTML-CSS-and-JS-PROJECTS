let products = [
    {
        name: "Iphone 13",
        price: 40039,
    },
    {
        name: "Samsung M15",
        price: 28939,
    },
    {
        name: "Motorola",
        price: 9283,
    },
    {
        name: 'Xiomi X5',
        price: 38208,
    }
];


for(let i=0; i<products.length; i++){
let pro = document.createElement("div");
pro.classList.add("product");

let pname = document.createElement("h2");
pname.innerText = products[i].name;

let pprice = document.createElement("h3");
pprice.innerText = products[i].price;

let btn = document.createElement('button')
btn.innerText = 'Buy'

btn.addEventListener('click', function() {
        console.log(products[i]);
        
})

pro.appendChild(pname);
pro.appendChild(pprice);
pro.appendChild(btn)

document.getElementById("parent").append(pro);
console.log(pro);
}
