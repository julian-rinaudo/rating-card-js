const calificaciones = document.querySelector("#calificaciones");
const contenedor = document.querySelector("#contenedor");
const enviar = document.querySelector("#enviar");
const gracias = document.querySelector("#gracias")
const puntajes = [1, 2, 3, 4, 5];

const imprimirNumeros = () => {
    let plantilla;
    puntajes.forEach(num => {
         plantilla = `<button class="ranking">${num}</button>`;
        calificaciones.innerHTML += plantilla;
    });
    return plantilla

}
const btnNum = () => {
    const calif = calificaciones.childNodes
    calif.forEach(e => {
        e.addEventListener("click", () => {
            const contenido = e.textContent;
            submit(contenido);
        })
    });
}

const submit = e => {
    
     gracias.innerHTML += `<img src="./images/illustration-thank-you.svg" alt="">
                    <div>
                    <p>You select ${e} out of ${puntajes.length}</p>
                    </div>
                    <h2>Thank you!</h2>
                    <h3>We aprecciate you taking the time to give a rating.
                      if you ever need more support, dont hesitate to get in touch!
                    </h3>`
    
    enviar.addEventListener("click", () => {
        gracias.style.display = "block";
        contenedor.style.display = "none";
    })
    
}





imprimirNumeros();
btnNum();

