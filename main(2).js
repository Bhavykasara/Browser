function a() {
    document.getElementById("ans").innerHTML=parseInt(document.getElementById("input1").value)+parseInt(document.getElementById("input2").value);
}

function s() {
    document.getElementById("ans").innerHTML=parseInt(document.getElementById("input1").value)-parseInt(document.getElementById("input2").value);
}

function m() {
    document.getElementById("ans").innerHTML=parseInt(document.getElementById("input1").value)*parseInt(document.getElementById("input2").value);
}

function d() {
    document.getElementById("ans").innerHTML=parseInt(document.getElementById("input1").value)/parseInt(document.getElementById("input2").value);
}