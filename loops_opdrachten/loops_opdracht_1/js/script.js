//javascript code
function showLoop() {
    let a;
    let text = "";
  
    for (a = 1; a <= 5; a++) {
      console.log(a);
      text += "Nummer " + a + "<br>";
    }
    document.getElementById("loop").innerHTML = text;
  }