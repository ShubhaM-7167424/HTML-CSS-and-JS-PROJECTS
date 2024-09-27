
let items = document.getElementsByTagName('li')
console.log(items);

let ni = document.createElement('li')
ni.innerText = 'Hawkeye'

document.getElementById('list-items').appendChild(ni)

console.log(items);


// ===================================================================

console.log(document.getElementById('list-items').parentElement);
console.log(document.getElementById('list-items').children);
console.log(document.getElementById('list-items').children[1]);
console.log(document.getElementById('list-items').children[1].nextElementSibling);
console.log(document.getElementById('list-items').children[1].previousElementSibling);

console.log(document.getElementById('list-items').parentNode);
console.log(document.getElementById('list-items').childNodes);
console.log(document.getElementById('list-items').nodeName);




