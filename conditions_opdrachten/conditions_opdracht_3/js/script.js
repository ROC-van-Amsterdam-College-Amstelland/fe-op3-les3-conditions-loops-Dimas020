//javascript code
function check() {
    var saldo = document.getElementById("saldo").nodeValue;

    if(saldo==500) {
        document.getElementById("tekst").innerHTML = "uw salaris is gestort";
    } else if(saldo>=500) {
        document.getElementById("tekst").innerHTML = "Uw heeft een bonus gekregen";
    }
    else{
        document.getElementById("tekst").innerHTML = "Uw salaris is niet gestort";
        
    }
}