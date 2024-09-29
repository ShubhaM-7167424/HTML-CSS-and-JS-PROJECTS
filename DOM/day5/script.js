// window => all objects are inside the window object

window.alert('Hello')

let name = window.prompt('What is your name')
console.log(name);

let result = window.confirm('Do you want to continue?')
console.log(result);

console.log(window.location.host);

document.getElementById('btn').addEventListener('click', ()=>{
        // window.location.reload()
        // window.location = 'https://www.google.com'
        window.location = '../day4/carousel.html'
})


