/* Menu */

const menu = document.querySelector('menu');
window.addEventListener('scroll',() =>{
    menu.classList.toggle('scroll',window.scrollY);
})

/* Nav */

const barSpan = document.querySelector('.bar-span');
const navBarMobil = document.querySelector('.nav-bar');
const navBarMobilButton = document.querySelector('.nav-bar-button'); 

barSpan.addEventListener('click', () =>{
    navBarMobil.classList.toggle('click');
});

navBarMobilButton.addEventListener('click', () =>{
    navBarMobil.classList.remove('click')
})