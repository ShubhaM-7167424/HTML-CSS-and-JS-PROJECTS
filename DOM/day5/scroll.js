// document.getElementById('section3-link').addEventListener('click',()=>{
//         document.getElementById('section3').scrollIntoView({behavior: "smooth"})
// })

// document.getElementById('section4-link').addEventListener('click', ()=>{
//         document.getElementById('section4').scrollIntoView({behavior:'smooth'})
// })

// document.getElementById('section2-link').addEventListener('click', ()=>{
//         document.getElementById('section2').scrollIntoView({behavior: 'smooth'})
// })

// document.getElementById('section1-link').addEventListener('click', ()=>{
//         document.getElementById('section1').scrollIntoView({behavior: 'smooth'})
// })

// function scrollToSection(sectionId) {
//         document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'})
// }

// window.addEventListener('scroll', ()=>{
//         console.log(window.scrollY);

// })

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        document.getElementById("header").style.backgroundColor = "white";
    } else {
        document.getElementById("header").style.backgroundColor = "gray";
    }
});


document.getElementById('cs').addEventListener('click',()=>{
        window.scrollTo({top:800, behavior:'smooth'})
})