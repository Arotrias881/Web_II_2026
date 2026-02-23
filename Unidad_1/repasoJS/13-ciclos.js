const pais = ["Bolvia","ecuador","brasil","vanezuela","italia","francia"];
const preciosPaises = [500,200,300,400,600,700];
const presupuestos=250;
let i=0;

while(preciosPaises[i]>presupuestos && i<pais.length){
    i++;
}
if(i==pais.length){
    console.log("no existe pasaje");

}else{
    console.log('puedes comprar el pasaje')
}
