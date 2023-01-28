class Cliente {
    constructor(nombre, razonSocial, direccion, saldo) {
        this.nombre = nombre.toUpperCase();
        this.razonSocial = razonSocial.toUpperCase();
        this.direccion = direccion.toUpperCase();
        this.saldo = parseFloat(saldo);
    }
}
const Clientes = []
const cliente1 = (new Cliente("Pizzaiolo", "Peck", "Sarmiento 234", 120000))
const cliente2 = (new Cliente("Shagui", "Carina Velazquez", "Azcuenaga 3445", 345000))
const cliente3 = (new Cliente("Charly", "Carlos Flores", "Houssay 567", 224000))
const cliente4 = (new Cliente("La Florencia", "La Florencia Sa", "Perú 654", 30000))
const cliente5 = (new Cliente("DiCaprio", "CaprichoSA", "Maipú 123", 51000))
const cliente6 = (new Cliente("Vendimia", "LaVendimia", "Bolougne Sur Mer 1234", 190000))
const cliente7 = (new Cliente("Paprika", "CocinaFestiva", "Martinez de Rosas 789", 0))
Clientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7)



function mostrarClientes() {
    console.log("Listado de clientes activos:")
    for (let elemento of Clientes) {
        console.log(elemento.nombre, elemento.direccion, "$" + elemento.saldo)
    }
}

function agregarCliente() {
    let nombreCliente = prompt("Ingrese el nombre del cliente nuevo:")
    let razSoCliente = prompt("Ingrese la razón social del cliente nuevo")
    let direccionCliente = prompt("Ingrese la dirección del cliente nuevo:")
    let saldoCliente = prompt("Ingrese el saldo del cliente nuevo:")

    const clienteNuevo = new Cliente(nombreCliente, razSoCliente, direccionCliente, saldoCliente)
    Clientes.push(clienteNuevo)
}
function eliminarCliente() {
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
}
function nuevaVenta() {
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
}




function menu() {
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
menu()








