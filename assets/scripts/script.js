function cambiarFondoResident(){
    let mybody=document.getElementById('body');
    mybody.style.backgroundImage = "url(https://mx.c3kienthuyhp.edu.vn/wp-content/uploads/2023/03/1680144201_Como-derrotar-a-Osmund-Saddler-en-Resident-Evil-4-Remake.jpg)";
}
var desaparecerOw = document.getElementById('overwatch');
var desaparecerER = document.getElementById('eldenring');

async function desaparecerRE(){ 
    var x = temporizadorRE(40)
    desaparecerOw.style.display = 'none';
    desaparecerER.style.display = 'none';
    console.log(x);
}
function temporizadorRE(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            desaparecerOw.style.display = 'block';
            desaparecerER.style.display = 'block';
        }, 6000)
    })
}