
var mybody=document.getElementById('body');
var imagenActual = false;
var desaparecerOverwatch = document.getElementById('overwatch');
var desaparecerElderR = document.getElementById('eldenring');
var desaparecerResident = document.getElementById('resident');

function cambiarFondoResident(){
    if(imagenActual){
        mybody.style.backgroundImage = 'none';
        mybody.style.backgroundColor = '#ffe9ab';
    }else{
        mybody.style.backgroundImage = "url(https://sm.ign.com/ign_in/screenshot/default/re-4-mercenaries_3myz.jpg)";
        mybody.style.backgroundSize = "cover";
    }

    imagenActual = !imagenActual;
} 
function cambiarFondoOverwatch(){
    if(imagenActual){
        mybody.style.backgroundImage = 'none';
        mybody.style.backgroundColor = '#ffe9ab';
    }else{
        mybody.style.backgroundImage = "url(https://www.pixel4k.com/wp-content/uploads/2020/01/2020-tracer-overwatch-2_1578851780.jpg)";
        mybody.style.backgroundSize = "cover";
    }

    imagenActual = !imagenActual;
}
function cambiarFondoElderR(){
    if(imagenActual){
        mybody.style.backgroundImage = 'none';
        mybody.style.backgroundColor = '#ffe9ab';
    }else{
        mybody.style.backgroundImage = "url(https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey-first-elden-lord-hoarah-loux.jpg)";
        mybody.style.backgroundSize = "cover";
    }

    imagenActual = !imagenActual;
}
async function desaparecerRE(){ 
    var x = temporizadorRE(40)
    desaparecerOverwatch.style.display = 'none';
    desaparecerElderR.style.display = 'none';
    console.log(x);
}
function temporizadorRE(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            desaparecerOverwatch.style.display = 'block';
            desaparecerElderR.style.display = 'block';
        }, 9000)
    })
}
async function desaparecerOw(){
    var y = temporizadorOw();
    desaparecerResident.style.display = 'none';
    desaparecerElderR.style.display = 'none';
    console.log(y);
}
function temporizadorOw(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            desaparecerResident.style.display = 'block';
            desaparecerElderR.style.display = 'block';
        }, 9000)
    })
}
async function desaparecerER(){
    var z = temporizadorER();
    desaparecerResident.style.display = 'none';
    desaparecerOverwatch.style.display = 'none';
    console.log(z);
}
function temporizadorER(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            desaparecerResident.style.display = 'block';
            desaparecerOverwatch.style.display = 'block';
        }, 9000)
    })
}
