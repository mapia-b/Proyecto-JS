//Valores necesarios para el cálculo del score
let estadoMental = prompt("Paciente confuso? Ingresa SI o NO")
let urea = parseInt(prompt("Ingrese el valor de uricemia (mg/dL)"))
let frecuenciaRespiratoria = parseInt(prompt("Ingrese valor de frecuencia respiratoria en reposo"))
let presionSistolica = parseInt(prompt("Ingrese el valor de presion arterial sistólica en reposo (mmHg)"))
let edad = parseInt(prompt("Ingrese la edad del paciente"))


//Defino condicional para c/u de las variables

//Estado de conciencia
if (estadoMental !== 'SI' && estadoMental !== "NO") {
    console.log("Dato inválido")
} else {
    if (estadoMental === "SI") {
        console.log("Paciente confuso")

    } else {
        console.log("Buen estado de conciencia")
    }  
}

//Valor de urea en sangre
if (isNaN(urea)) {
    console.log("Dato inválido")
}
else {
    if (urea >= 20) {
        console.log("Uricemia elevada")
    } else {
        console.log("Uricemia dentro de rango normal")
    }
}

//Valor de frecuencia respiratoria
if (isNaN(frecuenciaRespiratoria)) {
    console.log("Dato inválido")
} else {
    if (frecuenciaRespiratoria >= 30) {
        console.log("FR muy elevada")

    } else if (frecuenciaRespiratoria >= 20 && frecuenciaRespiratoria < 30) {
        console.log("FR elevada, mantener en observación")
    } else if (frecuenciaRespiratoria <= 11) {
        console.log("FR baja")
    } else {
        console.log("FR normal")
    }
}

//Valor de presión arterial sistólica
if (isNaN(presionSistolica)) {
    console.log("Dato inválido")
} else {
    if (presionSistolica <= 90) {
        console.log("PAS baja")

    } else if (presionSistolica >= 140 && presionSistolica < 160) {
        console.log("PAS elevada pero permitida")
    } else if (presionSistolica >= 160) {
        console.log("PAS elevada, se recomienda descender")
    } else {
        console.log("PAS normal")
    }
}

//Valor de edad
if (isNaN(edad)) {
    console.log("Dato inválido")
} else {
    if (edad >= 65) {
        console.log("Paciente mayor de 65 años")

    } else {
        console.log("Paciente menor de 65 años")
    }
}

//Suma del score 
//Inicializo la variable fuera de la función
let score = 0

//Funcion para cálculo del score 
function calculoScore() {

    if (estadoMental !== "NO") {
        score += 1 //suma 1 punto
    }

    if (urea >= 20) {
        score += 1
    }

    if (frecuenciaRespiratoria >= 30) {
        score += 1
    }

    if (presionSistolica <= 90) {
        score += 1
    }

    if (edad >= 65) {
        score += 1
    }

    return score;
}

//Función para determinar severidad segun puntaje 
function severidad(score) {
    if (score === 0 || score === 1) {
        return "Riesgo bajo. Puede realizar tratamiento ambulatorio";
    } else if (score === 2) {
        return "Riesgo moderado. Deberá realizar tratamiento en unidad de cuidados moderados";
    } else {
        return "Riesgo muy alto. Deberá realizar tratamiento en UCI";
    }
}


const puntosDeScore = calculoScore()
const rangoSeveridad = severidad(score)

console.log("Paciente con CURB-65 de: " + puntosDeScore + ", lo cual determina un " + rangoSeveridad)
console.log ("!! Recordar que el score CURB-65 es una herramienta más y deberá ser valorando en conjunto con la presentación clínica del paciente")

//Uso switch para definir que medidas iniciales se deberán tomar segun el puntaje
switch (score){
    case 0:
    case 1:
        console.log ("-->Tratamiento domiciliario: administración de fármacos vía oral. Antibioticoterapia  + analgésicos/antitérmicos + reposo + control en policlínica o a domicilio en 72hs")
        break;
    case 2:
        console.log ("-->Tratamiento en cuidados moderados: administración de fármacos por vía intravenosa. Anttibioticoterapia + analgésicos/antitérmicos + valorar necesidad de oxígeno + control estrecho") 
        break;
    case 3:
    case 4:
    case 5: 
        console.log ("-->Tratamiento en cuidados intermedios o UCI: administración de fármacos por vía intravenosa. Anttibioticoterapia de amplio espectro + analgésicos/antitérmicos + aporte de oxígeno (valorar según cada caso: MFL, MFC, máscara con reservorio, OAF, IOT) + control estrecho")
        break;
    default: 
        console.log ("No se ha podido calcular el score CURB-65 de forma correcta. Ingresa los datos nuevamente")
}


//Guardo los datos en objetos usando sintaxis class
class Paciente {
    constructor(nombre, apellido, puntaje, prestador) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puntaje = puntaje;
        this.prestador = prestador;
    }
    indicar() {
        console.log("Cobertura: " + this.prestador + ". Estado: ACTIVO")
    }
}

const paciente1 = new Paciente ("Walter", "Alonso", 3, "ASSE")
const paciente2 = new Paciente ("Marta", "Gonzalez", 1, "CASMU")
const paciente3 = new Paciente ("Manuel", "Ferreira", 2, "Hospital Británico")
const paciente4 = new Paciente ("Andrea", "Sicco", 4, "Seguro internacional")
