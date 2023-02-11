class Cliente {
    constructor(nombre, razonSocial, direccion, saldo) {
        this.nombre = nombre.toUpperCase();
        this.razonSocial = razonSocial.toUpperCase();
        this.direccion = direccion.toUpperCase();
        this.saldo = parseFloat(saldo);
    }
}
let Clientes = []
if (localStorage.getItem("clientes")){
    Clientes = JSON.parse(localStorage.getItem("clientes"))
}else{
    const cliente1 = (new Cliente("Pizzaiolo", "Peck", "Sarmiento 234", 120000))
    const cliente2 = (new Cliente("Shagui", "Carina Velazquez", "Azcuenaga 3445", 345000))
    const cliente3 = (new Cliente("Charly", "Carlos Flores", "Houssay 567", 224000))
    const cliente4 = (new Cliente("La Florencia", "La Florencia Sa", "Perú 654", 30000))
    const cliente5 = (new Cliente("DiCaprio", "CaprichoSA", "Maipú 123", 51000))
    const cliente6 = (new Cliente("Vendimia", "LaVendimia", "Bolougne Sur Mer 1234", 190000))
    const cliente7 = (new Cliente("Paprika", "CocinaFestiva", "Martinez de Rosas 789", 0))
    Clientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7)
    localStorage.setItem("clientes", JSON.stringify(Clientes))
}