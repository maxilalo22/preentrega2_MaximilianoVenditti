
let clientesDiv = document.getElementById("clientes")
let carteraButton = document.getElementById("botonCartera")
let cierreBoton = document.getElementById("botonCierre")
let agregarBoton = document.getElementById("botonAgregar")
let modal = document.getElementById("modalAgregar")
let clienteGuardar = document.getElementById("guardarCliente")
let eliminarBtton = document.getElementById("eliminarCliente")
let modal2 = document.getElementById("modal2")
let borrarCliente = document.getElementById("borrarCliente")
let ventaBotton = document.getElementById("ventaBtton")
let modal3 = document.getElementById("modal3")
let generarVenta = document.getElementById("generarVenta")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
let coincidencia = document.getElementById("coincidencia")

function buscarCliente (buscador, Clientes){
    let clienteBuscado = Clientes.filter(
        (cliente) => cliente.nombre.toUpperCase() == buscador.value.toUpperCase()
    )
    if(clienteBuscado.length == 0){
        coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
    }else{
        coincidencia.innerHTML = ""
        verCartera(clienteBuscado)
    }
}

buscar.addEventListener("click", function(){
    buscarCliente(buscador, Clientes);
    buscador.value=""
    
})



ventaBotton.addEventListener("click", function(){
    modal3.style.display ="block";
})

function nuevaVenta(Clientes){
    let inputCuenta = document.getElementById("cuentaInput")
    let inputVenta = document.getElementById("ventaInput")
    let inputPago = document.getElementById("pagoInput")
    
    const ventaCliente = (inputCuenta.value).toUpperCase()
    const cliVen = Clientes.find((elemento) => {
        return elemento.nombre === ventaCliente
    })
    console.log(ventaCliente)
    let venta = parseInt(inputVenta.value)
    console.log("El valor de la venta es $" + venta)
    let pago = parseInt(inputPago.value)
    console.log("El pago recibido es $" + pago)
    console.log("Saldo anterior $" + cliVen.saldo)
    function nuevoSaldo() {
        cliVen.saldo = cliVen.saldo + parseFloat(venta) - parseFloat(pago)
    }
    nuevoSaldo()
    console.log(ventaCliente, "Saldo actualizado $" + cliVen.saldo)
    formVentas.reset()
}

generarVenta.addEventListener("click", function(){
    nuevaVenta(Clientes)
})

window.addEventListener("click", function(event){
    if (event.target == modal3) {
    modal3.style.display = "none";}
})


function eliminarCliente() {
    console.log(Clientes)
    const borrarCliente = (nombreInput2.value).toUpperCase()
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
    formBajas.reset()
}
borrarCliente.addEventListener("click", function(){
    eliminarCliente(Clientes)
})
eliminarBtton.addEventListener("click", function(){
    modal2.style.display ="block";
})

window.addEventListener("click", function(event){
    if (event.target == modal2) {
    modal2.style.display = "none";}
})


function cargarCliente (Clientes){
    let inputNombre = document.getElementById("nombreInput")
    let inputRazonSocial = document.getElementById("razonSocialInput")
    let inputDireccion = document.getElementById("direccionInput")
    let inputSaldo = document.getElementById("saldoInput")
    
    const clienteNuevo = new Cliente(inputNombre.value, inputRazonSocial.value, inputDireccion.value, parseInt(inputSaldo.value))
    Clientes.push(clienteNuevo)

    localStorage.setItem("clientes",JSON.stringify(Clientes))

    let formNuevo = document.getElementById("formNuevoCliente")
    formNuevo.reset()
}

clienteGuardar.addEventListener("click", function(){
    cargarCliente(Clientes)
})

agregarBoton.addEventListener("click", function(){
    modalAgregar.style.display ="block";
})
window.addEventListener("click", function(event){
        if (event.target == modal) {
        modal.style.display = "none";}
})


function verCartera(Clientes){
    clientesDiv.innerHTML =""
    for (let cliente of Clientes){
    let nuevoClientesDiv = document.createElement("div")
    nuevoClientesDiv.className = ""
    nuevoClientesDiv.innerHTML = `
    <div class="card">
        <h5 class="card-header"> Razón Social - ${cliente.razonSocial}</h5>
        <div class="card-body">
            <h2 class="card-title">${cliente.nombre}</h2>
            <p class="card-text">${cliente.direccion}</p>
            <p class="card-text">Saldo $${cliente.saldo}</p>
        </div>
    </div>  
`
    document.getElementById("botonCierre").style.display ="block"
    clientesDiv.appendChild(nuevoClientesDiv)
}
}
cierreBoton.onclick = function(){
    clientesDiv.innerHTML= ""
}
carteraButton.onclick = function(){
    verCartera(Clientes)
}

