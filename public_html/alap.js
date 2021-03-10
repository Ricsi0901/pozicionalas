

//alert("hello világ!");
document.write("Hello világ section!");
console.log("uzenet - debug");
document.getElementById("szoveg").innerHTML = "valami";
var valtA ="";
var valtb ="";

function szamolas() {
     valtA = document.getElementById("a").value;
     valtb = document.getElementById("b").value;
    var muvJel = document.getElementById("muv").value;
    if(muvJel==="+"){
       let osszeg=osszead();
    }
    if(muvJel==="-"){
    var osszeg = Number(valtA) - Number(valtb);    
    }
    if(muvJel==="*"){
    var osszeg = Number(valtA) * Number(valtb);    
    }
    if(muvJel==="/"){
    var osszeg = Number(valtA) / Number(valtb);    
    }
    document.getElementById("szoveg").innerHTML = osszeg;
}
function osszead(){
    var osszeg = Number(valtA) + Number(valtb);
    return osszeg;
}

