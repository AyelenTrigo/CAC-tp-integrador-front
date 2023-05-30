const btnResumen = document.getElementById("btn_resumen")
const btnBorrar = document.getElementById("btn_borrar")
const VALOR_DE_TICKET = 200
let total = document.getElementById("total_a_pagar")


btnResumen.addEventListener("click", (e)=>{
    e.preventDefault()
    const cantidad = document.getElementById("ticket_cantidad").value
    const opciones = document.getElementById('opciones')
    const opcionSeleccionada = opciones.options[opciones.selectedIndex].value
    calcularDescuento(opcionSeleccionada, cantidad)
    console.log(opcionSeleccionada, cantidad)
})

btnBorrar.addEventListener("submit", (e)=>{
    e.preventDefault()
    const resetFormulario = document.getElementById("venta_tickets")
    resetFormulario.reset()
})


function calcularDescuento(opcionSeleccionada, cantidad){
    var descuento=0
    switch (opcionSeleccionada) {
        case 'estudiante':
            descuento = VALOR_DE_TICKET*cantidad*0.2
            break;
        case 'trainee':
            descuento = VALOR_DE_TICKET*cantidad*0.5
            break;
        case 'junior':
            descuento = VALOR_DE_TICKET*cantidad*0.85
            break;
        default :
            break;
    }
    total.innerHTML = `Total a pagar: $${descuento}`
    return descuento, console.log(descuento)
    
}