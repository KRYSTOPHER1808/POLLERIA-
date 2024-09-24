function Seleccion() {
    let cantidad = 0;
    let plural='';
    if (document.getElementById("check1").checked) {
        cantidad++;
    }
    if (document.getElementById("check2").checked) {
        cantidad++;
    }
    if (document.getElementById("check3").checked) {
        cantidad++;
    }
    if (document.getElementById("check4").checked) {
        cantidad++;
    }
    if (document.getElementById("check5").checked) {
        cantidad++;
    }
    if (cantidad>1){
    plural=plural + 's'
    }
    alert(document.getElementById('check1').nextSibling.textContent)
    swal("conoces " + cantidad + " lenguaje"+ plural);
}
function SeleccionD(){
    if(document.getElementById('radio1').checked){
        swal('HORARIO DE 8AM A 12PM')
    }
    if(document.getElementById('radio2').checked){
        swal('HORARIO DE 2PM A 6PM')
    }
    if(document.getElementById('radio3').checked){
        swal('HORARIO DE 7PM A 11PM')
    }
}
