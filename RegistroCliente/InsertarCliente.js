function confirmar(eleccion){
    if (eleccion==1){
        swal("Cliente agregado")
    }else{
        swal("Registro cancelado")
    }
    document.getElementById('miModal').style.display='none';
}
function abrirVentanaConfirmacion(){
    
    document.getElementById('miModal').style.display='flex';
    event.preventDefault();
}