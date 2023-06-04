const btnResumen = document.getElementById("btn_resumen")
const btnBorrar = document.getElementById("btn_borrar")
let total = document.getElementById("total_a_pagar")
const VALOR_DE_TICKET = 200
const error = document.getElementById('mensaje_error_validacion')
let errorInnerText = error.innerText
let errorInput = document.getElementById('error_input')


btnResumen.addEventListener("click", (e)=>{
    e.preventDefault()
    let validacion = true;
    let cantidad = document.getElementById("ticket_cantidad").value
    const opciones = document.getElementById('opciones')
    const opcionSeleccionada = opciones.options[opciones.selectedIndex].value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    
    if(validarEmail(email.value)==false){
        error.innerHTML = `Por favor, ingrese un email válido`
        email.classList.add("error_input")
        validacion=false
    }
    if(apellido==''){
        error.innerText = `Por favor, ingrese el apellido`
        validacion=false
    }
    if(nombre==''){
        error.innerText = `Por favor, ingrese el nombre`
        console.log(typeof(nombre))
        nombre.classList.add
        validacion=false
    }
    if (validacion){
        error.innerText = ` `
        calcularDescuento(opcionSeleccionada, cantidad)
    } else{
        total.innerText = `Total a pagar: $`
    }
   return opcionSeleccionada, cantidad
})
btnBorrar.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("boton borrar")
    total.innerText = `Total a pagar: $`
    const resetFormulario = document.getElementById("venta_tickets")
    resetFormulario.reset()
})

function validarEmail() {
    const email = document.getElementById("email").value
    const regex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    return regex.test(email);
}

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
    return descuento
    
}