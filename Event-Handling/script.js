
let ele = document.getElementById('one')

function doSomething() {
        ele.style.backgroundColor = 'yellow'        
        ele.style.width = '500px'
}


let btn = document.getElementById('btn')

btn.addEventListener('click', doSomething)