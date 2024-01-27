function mostrar1(){
    document.getElementById('opciones1').classList.toggle('show');
}
function mostrar2(){
    document.getElementById('opciones2').classList.toggle('show');
}
function mostrar3(){
    document.getElementById('opciones3').classList.toggle('show');
}
function mostrar4(){
    document.getElementById('opciones4').classList.toggle('show');
}
function mostrar5(){
    document.getElementById('opciones5').classList.toggle('show');
}
const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', inicioSlider);

function inicioSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(slideSig, 5000);
    } 
}
function mostrarSlide(index){
    if(index >= slides.length){
        slideIndex = 0
    }else if(index  < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}
function slidePre(){
    clearInterval(intervalId);
    slideIndex--;
    mostrarSlide(slideIndex);
}
function slideSig(){
    slideIndex++;
    mostrarSlide(slideIndex);
}