addEventListener("DOMContentLoaded", function () {
    generarTarjeta()
});

function generarTarjeta() {
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

                // Lo agrego todo a la tarjeta
                //TODO FALTA AGREGAR LA IMAGEN
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(imagen);
                tarjeta.appendChild(precio);

                let cardContainer = document.getElementById("card-container");
                cardContainer.appendChild(tarjeta);
            })
        })
        .catch((error) => console.error("Hubo algún error", error));

    for (let i = 0; i < 1; ++i) {
        console.log("loop")
    };
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
