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

    //guardo array en JSON
const pacientesJSON = JSON.stringify (pacientes)

console.log (pacientesJSON)
localStorage.setItem ("pacientes", pacientesJSON)
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


