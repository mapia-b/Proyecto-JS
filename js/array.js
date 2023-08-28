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
    Swal.fire({
        icon: 'success', 
        title: 'Correcto',
        text: 'Nuevo paciente agregado al listado',     
      })
     
})

//Trabajo con API: indicar fecha y hora 
document.addEventListener ("DOMContentLoaded", function (){
    const fecha = document.getElementById ("date")
    const url ="https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
    fetch (url)
    .then (response => response.json())
    .then (data => {
        //cambio formato de como se muestran los datos
        const fechaHora = new Date(data.datetime);
        const formatoFechaHora = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
           
        }
        const datosCambiados = fechaHora.toLocaleDateString ("es-UY", formatoFechaHora)

        fecha.textContent = `Datos cargados en la fecha y hora: ${datosCambiados}`;
    })
    .catch ( error => {
        console.error("Error:", error);
      fecha.textContent = "Error, no se pudo obtener la informacion requerida";
    })
})



