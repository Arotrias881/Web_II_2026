const  paisDestino ="Ecuador";
const pais = ["Bolvia","ecuador","brasil","vanezuela","italia","francia"];

/*
if(paisDestino == "bolivia"){
    valorPasaje=100;

} else(pasDestino == "ecuador"){
    valorPasaje=200;
}*/

switch(paisDestino){
    case "bolivia":
        valorPasaje=500;
        break;
    case "ecuador":
        valorPasaje=200;
        break;
    case "brasil":        
        valorPasaje=300;
        break;
    default:
        valorPasaje=('no se encuentra el pais destino');
        break;
}
if(valorPasaje>0)
    console.log(`el valor del pasaje es ${valorPasaje}`);

