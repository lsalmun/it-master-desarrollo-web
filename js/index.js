var nombre = 'leandro'
var segundonombre = 'damián'
var apellido = 'salmun'
var edad = 17
var altura = 1.65

//estos son los boolean o buleanos...no hay otros
var esextranjero = false 
var esmayordeedad = edad > 17






var nombrecompleto = nombre +' ' + segundonombre +' ' + apellido


var cantidaddeletras = nombrecompleto.length
console.log(cantidaddeletras)
console.log(nombrecompleto)

//var esextranjero = false
if (esmayordeedad == true) {console.log('accede')

}

else {
    console.log('te desvio')
}


var cartelCookie = document.querySelector('#cookie')
var aceptar = document.querySelector('#cookie a')
var mostrarMensaje = false

if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

// Envio de email
var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function () {
    botonDeEnviar.parentElement.remove()

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Hemos recibido la suscripcion'

    document.querySelector('#footer').appendChild(parrafo)
})
