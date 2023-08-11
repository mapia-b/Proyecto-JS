//Valores necesarios para el cálculo del score
const form = document.getElementById("formulario")
const btn = document.getElementById("botonCalculo")
const resultado = document.getElementById("resultado")


//Suma del score al hacer click en el boton 
btn.addEventListener("click", calculoScore);

//Funcion para cálculo del score
function calculoScore(e) {
    e.preventDefault()
    const items = document.querySelectorAll("input[type=checkbox]:checked")
    //inicializo la variable en 0
    let score = 0
    //itero sobre los inputs seleccionados y voy sumando 1
    items.forEach(item => {
        score += parseInt(item.value);
    })
    console.log("El score es: " + score)
    //agrego el resultado al html
    resultado.innerText = `El Score CURB-65 para este paciente es: ${score}`
    descripcion.innerText = severidad(score)
    mensajeResaltado.innerText = mensaje(score)
    //desmarco los checkboxs
    items.forEach(item => {
        item.checked = false
    })
}

//Funcion que explica el riesgo
function severidad(score) {
    if (score === 0 || score === 1) {
        return "Riesgo bajo. Puede realizar tratamiento ambulatorio";
    } else if (score === 2) {
        return "Riesgo moderado. Deberá realizar tratamiento en unidad de cuidados moderados";
    } else {
        return "Riesgo muy alto. Deberá realizar tratamiento en UCI";
    }
}

//Defino que medidas se deben tomar en cada caso
function mensaje(score) {
    switch (score) {
        case 0:
        case 1:
            return `Tratamiento domiciliario: administración de fármacos vía oral. Antibioticoterapia  + analgésicos/antitérmicos + reposo + control en policlínica o a domicilio en 72hs`

        case 2:
            return `Tratamiento en cuidados moderados: administración de fármacos por vía intravenosa. Anttibioticoterapia + analgésicos/antitérmicos + valorar necesidad de oxígeno + control estrecho`

        case 3:
        case 4:
        case 5:
            return `Tratamiento en cuidados intermedios o UCI: administración de fármacos por vía intravenosa. Anttibioticoterapia de amplio espectro + analgésicos/antitérmicos + aporte de oxígeno (valorar según cada caso: MFL, MFC, máscara con reservorio, OAF, IOT) + control estrecho`

        default:
            return `No se ha podido calcular el score CURB-65 de forma correcta. Ingresa los datos nuevamente`
    }
}

let nombre = document.getElementById ("persona") 
let puntaje = document.getElementById ("suScore") 
let boton = document.getElementById ("btn")
let list = document.getElementById ("lista")
const pacientes = []
console.log(pacientes)

//Agregar lista de pacientes y su puntaje
nuevoPaciente = () => { 
    const paciente = nombre.value 
    const puntos = puntaje.value
    pacientes.push ([paciente, puntos]) 
    nombre.value = ""
    puntaje.value = ""
    console.log (pacientes); 
}

//Interactuo con el DOM
function verPacientes () { 
    list.innerHTML = ""
    //recorro el array tareas con forEach 
   pacientes.forEach ((item)=> (
    list.innerHTML += `
        <li>
        <span>${item[0]}</span>
         <span>${item[1]}</span>
        </li>`
  ))}


boton.addEventListener("click", () => {
    nuevoPaciente()
    verPacientes()
})












