const selectDestino = document.querySelector("select#destino")
const selectMes = document.querySelector("select#mes")
const inputPersonas = document.querySelector("input#cantidadPersonas")
const cantidadDias = document.querySelector("input#cantidadDias")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorPaquete = document.querySelector("span#valorPaquete")
const btnGuardar = document.querySelector("span.guardar")

 
function cargarPaquete(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    }
}
cargarPaquete(selectDestino, datosDestino)
cargarPaquete(selectMes, datosMes)

//función para realizar la cotización.
function realizarCotizacion() {
    if (selectDestino.value !== "..." & selectMes.value !== "..." && parseInt(inputPersonas.value) <= 20) {
        const cotizo = new Cotizador(parseInt(inputPersonas.value), selectDestino.value, selectMes.value, parseInt(cantidadDias.value))
              valorPaquete.textContent = cotizo.cotizar()
    } else {
        alert("⛔️ Completa todos los valores solicitados en pantalla.")
    }
}

btnCotizar.addEventListener("click", realizarCotizacion)

btnGuardar.addEventListener("click", ()=> {
    const historialCotizacion = {
        Destino: selectDestino[selectDestino.options.selectedIndex].textContent,
        Mes: selectMes[selectMes.options.selectedIndex].textContent,
        Personas: inputPersonas.value,
        fecha: new Date(),
        Dias: cantidadDias.value
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(historialCotizacion))
    //Guardamos en LocalStorage
})