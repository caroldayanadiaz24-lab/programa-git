
// FUNCIONES GENERALES - ESTILO Y MODA 365

// Mostrar mensajes al usuario
function mostrarMensaje(mensaje) {
    alert(mensaje);
}

// Agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarMensaje(nombre + " se agregó al carrito.");
}

// Consultar productos guardados
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarMensaje("El carrito se ha vaciado.");
}

// Validar formularios
function validarFormulario() {
    const campos = document.querySelectorAll("input[required]");

    for (let campo of campos) {
        if (campo.value.trim() === "") {
            mostrarMensaje("Por favor, completa todos los campos.");
            campo.focus();
            return false;
        }
    }

    return true;
}

// Cambiar tamaño del texto para accesibilidad visual
function cambiarTamanoTexto(tamano) {
    document.body.style.fontSize = tamano;
}

// Leer texto seleccionado mediante el navegador
function leerTexto(texto) {
    if ("speechSynthesis" in window) {
        const lectura = new SpeechSynthesisUtterance(texto);
        lectura.lang = "es-CO";
        window.speechSynthesis.speak(lectura);
    } else {
        mostrarMensaje("La lectura de texto no está disponible en este navegador.");
    }
}
