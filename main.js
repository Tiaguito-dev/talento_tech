let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

addEventListener("DOMContentLoaded", function () {

    // Consumo la api
    renderizarProductos();

    // Actualizo el contador por si tengo algo en el local storage
    actualizarContador();

    // Este es el botón para ponerse en contacto
    let boton_contacto = document.getElementById("boton_ponerse_contacto")
    boton_contacto.addEventListener("click", function () {

        // pido ambos formularios
        let formulario_desactivar = document.getElementById("ponerse_contacto")
        let formulario_activar = document.getElementById("realizar_pedido")

        // recupero el otro botón (lo voy a activar)
        let boton_activar = document.getElementById("boton_realizar_pedido")

        // Aprieta para ponerse en contacto, así que es el que quiro activar, el otro lo desactivo
        cambiarFormulario(boton_contacto, boton_activar, formulario_activar, formulario_desactivar)
    })

    // Este es el botón de realizar pedido
    let boton_pedido = document.getElementById("boton_realizar_pedido")
    boton_pedido.addEventListener("click", function () {

        // pido ambos formularios
        let formulario_desactivar = document.getElementById("realizar_pedido")
        let formulario_activar = document.getElementById("ponerse_contacto")

        // recupero el otro botón (lo voy a activar)
        let boton_activar = document.getElementById("boton_ponerse_contacto")

        // Aprieta para realizar un pedido, así que es el que quiro activar, el otro lo desactivo
        cambiarFormulario(boton_pedido, boton_activar, formulario_activar, formulario_desactivar)
    })

});

function cambiarFormulario(btn_desactivar, btn_activar, form_desactivar, form_activar) {
    // Desaparezco este botón
    btn_desactivar.classList.remove("boton_primario")
    btn_desactivar.classList.add("desaparecer_btn")

    // Aparezco este botón
    btn_activar.classList.remove("desaparecer_btn")
    btn_activar.classList.add("boton_primario")

    // Desaparezco formulario
    form_desactivar.classList.add("formulario_oculto");

    // Aparezco formulario
    form_activar.classList.remove("formulario_oculto");

}

function renderizarProductos() {


    const url = 'https://dummyjson.com/products?limit=10&select=title,price,images';
    //devuelve título, precio y UN ARRAY DE IMÁGENES
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.products.forEach(producto => {
                // Flag para saber si todo va bien
                console.log("DEVUELVO EL PRODUCTO", producto)
                // Armado de la estructura de la tarjeta
                let tarjeta = document.createElement("div")
                tarjeta.className = "card";

                // -- Armado del contenido --

                // Titulo
                let titulo = document.createElement("h3");
                titulo.textContent = acortarTitulo(producto.title); // Esta es una funcion que acorta el titulo a un max de dos palabras
                // Precio
                let precio = document.createElement("p");
                precio.textContent = producto.price;
                // Imagen
                let imagen = document.createElement("img");
                imagen.src = producto.images[0];
                imagen.alt = producto.description;

                // Botón del carrito
                let boton = document.createElement("button");
                boton.classList.add("boton_carrito");
                boton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                // Le agrego evento al botón para que sea independiente de cada tarjeta
                boton.addEventListener("click", function () {
                    alert(`"${producto.title}" fue agregado al carrito`);
                    agregarProducto(producto);
                    actualizarContador();
                });

                // Lo agrego todo a la tarjeta
                //TODO FALTA AGREGAR LA IMAGEN
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(imagen);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(boton);

                let cardContainer = document.getElementById("card-container");
                cardContainer.appendChild(tarjeta);

            })
        })
        .catch((error) => console.error("Hubo algún error", error));
}


function acortarTitulo(texto) {
    // Flag
    console.log("Estoy dentro de la funcion acortarTitulo");

    let palabras = 0
    let i = 0
    while (i < texto.length) {
        if (texto[i] == " " && palabras < 2) {
            // Llegó a un espacio y todavía no hay dos palabras
            palabras++;
        }
        if (palabras == 2) {
            break;
        }
        i = i + 1;
    }
    console.log(i)
    textito = texto.slice(0, i);
    console.log("Titulo de max 2 palabras: ", textito)
    return textito
}


// -- FUNCIONES DEL CARRITO
// Guardo en el carrito
function agregarProducto(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
};

// Actualiza un contador que está en el index
function actualizarContador() {
    const contador = document.getElementById("contador_carrito");
    contador.textContent = carrito.length;
    console.log(`EL TAMAÑO DEL CARRITO ES: ${carrito.length}`)
};