//https: //uniwebsidad.com/libros/css/capitulo-5/posicionamiento
/// Se requiere un metodo que permita mostrar los elementos que compondran la vista 
// del desarrollo de cada Servicio que se ofrece.
//avantgarden font
// Mediante una estructura de control validar cual id se ha clicado
// para que mediante un evento muestre los elementos HTML del servicio a presentar.

var selectorService = document.getElementById("nav-servicios");

// Se requiere un boton para el evento de cierre, de cerrar

function activar_seccion(emergente) {
    var contenedor = document.getElementById(emergente);
    var difusoContent = document.getElementById("contenedor-principal");
    contenedor.style.display = "inline";
    contenedor.style.zIndex = 100;
    contenedor.style.animationPlayState = 'running';
    difusoContent.style.filter = 'blur(3px)';
    if (screen.width <= 640) {
        var social = document.getElementById('social-media')
        social.style.position = "relative";
        social.style.display = "inline";
    }
    return true;
}

function desactivar_seccion(emergente) {
    var contenedor = document.getElementById(emergente);
    var difusoContent = document.getElementById("contenedor-principal");
    contenedor.style.display = "none";
    difusoContent.style.filter = 'blur(0px)';
    return true;
}