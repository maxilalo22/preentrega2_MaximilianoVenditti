
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
let clienteAgregado = document.getElementById("nombreInput")

function buscarCliente (buscador, Clientes){
    let clienteBuscado = Clientes.filter(
        (cliente) => cliente.nombre.toUpperCase() == buscador.value.toUpperCase()
    )
    /* clienteBuscado.length == 0 ? coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>` :  coincidencia.innerHTML = "",
    verCartera(clienteBuscado)  */
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

function corroborarVenta (){
    let inputCuenta = document.getElementById("cuentaInput")
    let inputVenta = document.getElementById("ventaInput")
    let inputPago = document.getElementById("pagoInput")
    if (inputCuenta.value ==="" || inputVenta.value ==="" || inputPago.value ===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar con la información necesaria',
        })
        }else{
            nuevaVenta(Clientes)
            verCartera(Clientes)
        }
}

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
    
    let pago = parseInt(inputPago.value)
    
    
    function nuevoSaldo() {
        cliVen.saldo = cliVen.saldo + parseFloat(venta) - parseFloat(pago)
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Confirmar venta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Nueva venta generada'
        )
        nuevoSaldo()
        formVentas.reset()
        verCartera(Clientes)
        localStorage.setItem("clientes",JSON.stringify(Clientes))

        } else if (    
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Cancelado'
        )
        }
    })
    
}

generarVenta.addEventListener("click", function(){
    corroborarVenta()
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
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir este cambio!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'ELIMINADO!',
            'El cliente ha sido eliminado.',
        )
        eliminar(clienteBorrar)
        formBajas.reset()
        verCartera(Clientes)
        localStorage.setItem("clientes",JSON.stringify(Clientes))
        }
    })
    
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
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cliente Guardado',
        showConfirmButton: false,
        timer: 1500
    })
}

function corroborarInputs (){
    let inputNombre = document.getElementById("nombreInput")
    let inputRazonSocial = document.getElementById("razonSocialInput")
    let inputDireccion = document.getElementById("direccionInput")
    let inputSaldo = document.getElementById("saldoInput")
    if (inputNombre.value === "" || inputRazonSocial.value ==="" || inputDireccion.value ==="" || inputSaldo.value ===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar con la información necesaria',
        })
        }else{
            cargarCliente(Clientes)
            verCartera(Clientes)
        }
}

clienteGuardar.addEventListener("click", function(){
    corroborarInputs()
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
    cierreBoton.style.display="none"
}
carteraButton.onclick = function(){
    verCartera(Clientes)
}

