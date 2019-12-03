//javascript code
calculate = function()
{
    var resources = document.getElementById('a1').nodeValue;
    var minutes = document.getElementById('a2').nodeValue;
    document.getElementById('a3').value = parseInt(resources)+parseInt(minutes);
    
}