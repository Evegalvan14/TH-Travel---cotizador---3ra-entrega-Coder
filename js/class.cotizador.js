class Cotizador {
    constructor(cantidadPersonas, precioHotel, factorMes, cantidadDias) {
        this.cantidadPersonas = parseInt(cantidadPersonas) || 1
        this.precioHotel = precioHotel || 1
        this.factorMes = parseFloat(factorMes) || 1
        this.cantidadDias = parseInt(cantidadDias) || 1
    }
    cotizar() {
        return ((this.cantidadPersonas * this.precioHotel * this.factorMes * this.cantidadDias) + comision ).toFixed(2)
    }
}