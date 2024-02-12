
let numeroSecreto = Math.floor (Math.random ()*50)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez"; 
let maximosIntentos = 6;
while(numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 50 por favor:"));

        console.log(typeof(numeroUsuario));

        if (numeroUsuario == numeroSecreto) {
            alert(`Acertaste, el numero es : ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
        //la condicion no se cumplio

        } else {
            if (numeroUsuario > numeroSecreto){
            alert ("el numero secreto es menor")
        } else {
            alert ("el numero secreto es mayor")
        }
             alert("lo siento no acertaste el numero")
        }
        intentos++;
        //palabraVeces = "veces"
        if (intentos > maximosIntentos ) {
            alert (`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
}