function mostrar() {
  document.getElementById('cuadroOpciones').classList.toggle('show');
}
function mostrarMovie() {
  document.getElementById('tituloAR').innerText = 'Movie Legends';
  document.getElementById('textoAR').innerText =
    'Este fue un proyecto desarrollado en HTML y CSS, es un página web con información interesante acerca de personajes famosos de películas.';
  document.getElementById('imagenAR').src = '../resources/movies.png';
}
function mostrarClothes() {
  document.getElementById('tituloAR').innerText = 'Clothes Store';
  document.getElementById('textoAR').innerText =
    'Este fue un proyecto grupal, en el cual se desarrollo un sistema para el manejo de una tienda de ropa. Mi participación fue la creación de la entidad Cliente, dentro de dicho sistema.';
  document.getElementById('imagenAR').src = '../resources/clothes.png';
}
function mostrarMath() {
  document.getElementById('tituloAR').innerText = 'Math Page';
  document.getElementById('textoAR').innerText =
    'Este fue un proyecto grupal, fue desarrollado como una plataforma dedicada a las matemáticas, permite la realización de diversos cálculos y operaciones relacionadas con temas como la geometría, dentro del proyecto fui responsable de la sección de cálculo de áreas y perímetros';
  document.getElementById('imagenAR').src = '../resources/math.png';
}