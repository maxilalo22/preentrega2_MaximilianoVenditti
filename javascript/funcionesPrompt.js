/* function mostrarClientes() {
    console.log("Listado de clientes activos:")
    for (let elemento of Clientes) {
        console.log(elemento.nombre, elemento.direccion, "$" + elemento.saldo)
    }
} */

/* function agregarCliente() {
    let nombreCliente = prompt("Ingrese el nombre del cliente nuevo:")
    let razSoCliente = prompt("Ingrese la razón social del cliente nuevo")
    let direccionCliente = prompt("Ingrese la dirección del cliente nuevo:")
    let saldoCliente = prompt("Ingrese el saldo del cliente nuevo:")

    const clienteNuevo = new Cliente(nombreCliente, razSoCliente, direccionCliente, saldoCliente)
    Clientes.push(clienteNuevo)
} */
/* function eliminarCliente() {
    console.log(Clientes)
    const borrarCliente = prompt("Ingrese el nombre del cliente que desea eliminar:").toUpperCase()
    const clienteBorrar = Clientes.find((elemento) => {
        return elemento.nombre === borrarCliente
    })
    console.log(clienteBorrar)
    const eliminar = (clienteBorrar) => {
        let index = Clientes.indexOf(clienteBorrar)
        if (index != -1) {
            Clientes.splice(index, 1)
        }
    }
    eliminar(clienteBorrar)
} */
/* function nuevaVenta() {
    const ventaCliente = prompt("Ingrese el nombre de la cuenta/cliente a la que desea acceder:").toUpperCase()
    const cliVen = Clientes.find((elemento) => {
        return elemento.nombre === ventaCliente
    })
    console.log(ventaCliente)
    let venta = prompt("Ingrese el valor de la venta")
    console.log("El valor de la venta es $" + venta)
    let pago = prompt("Ingrese el valor del pago recibido")
    console.log("El pago recibido es $" + pago)
    console.log("Saldo anterior $" + cliVen.saldo)
    function nuevoSaldo() {
        cliVen.saldo = cliVen.saldo + parseFloat(venta) - parseFloat(pago)
    }
    nuevoSaldo()
    console.log(ventaCliente, "Saldo actualizado $" + cliVen.saldo)
} */




/* function menu() {
    let salirMenu = true
    do {
        let opcionMenu = prompt(`Ingrese la opción deseada:
        1-Lista de Clientes
        2-Agregar un cliente
        3-Eliminar un cliente
        4-Ventas
        5-Salir`)

        switch (opcionMenu) {
            case "1":
                mostrarClientes(Clientes)
                break
            case "2":
                agregarCliente()
                break
            case "3":
                eliminarCliente()
                break
            case "4":
                nuevaVenta()
                break
            case "5":
                console.log("Salir Menú")
                salirMenu = false
                break
            default:
                console.log("Opción no válida")
        }

    } while (salirMenu)
}
menu() */