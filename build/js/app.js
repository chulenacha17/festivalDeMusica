document.addEventListener("DOMContentLoaded", function () {

  navegacionFija()
  crearGaleria()
  resaltarEnlace()
})


function navegacionFija() {
  const header = document.querySelector(".header")
  const sobreFestival = document.querySelector(".sobre-festival")

  document.addEventListener("scroll", function() {
    if(sobreFestival.getBoundingClientRect().bottom < 1){
      header.classList.add("fixed")
    }else {
      header.classList.remove("fixed")
    }
  })
}


function crearGaleria() {
  const CANTIDAD_IMAGENES = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galeria";

    //Event Hendaler
    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "Imagen Galeria";

  //generar modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("btn-cerrar");
  cerrarModal.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(cerrarModalBtn);

  //agregar al html
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fede-out");

  setTimeout(() => {
    modal?.remove();

    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}

function resaltarEnlace () {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("navegacion-principal")
    
    let actual = "";
    sections.forEach( section => {
      const sectionTop = section.offsetTop
      const setionHeight = section.clientHeight
      if(window.scrollY >= (sectionTop - setionHeight / 3) ) {
        actual = section.id
      }

    })

    navLinks.forEach(link => {
      link.classList.remove("active")
     if(link.getAttribute("href") === "#" + actual) {
       link.classList.add("active")
      }
    })
 
 })
 
}

function scrollNav() {
  const navLinks = document.querySelectorAll("navegacion-principal a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute("href");
      const section = document.querySelector("sectionScroll");
      section.scrollIntoView({ behavior: "smooth" });
    })
  })
}