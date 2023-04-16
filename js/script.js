var intxt = document.getElementById("intxt");
var enbtn = document.getElementById("enbtn");
var desbtn = document.getElementById("desbtn");
var copy = document.getElementById("copy");
var msg1 = document.getElementById("404");
var msg2 = document.getElementById("404i");
var img = document.getElementById("img");
var trad = document.getElementById("traduccion");
var item1 = document.querySelector(".item1");

enbtn.onclick = codeB;
desbtn.onclick = decodeB;
copy.onclick = copyF;
item1.addEventListener("click", fcs, false);

function fcs(){
    intxt.focus();
}

function codeB(){

    if(intxt.value != "" && validar(intxt.value)==true){
        copy.style.display="block";
        trad.style.display="block";
        msg1.style.display="none";
        msg2.style.display="none";
        img.style.display="none";
        code(intxt.value);
    }

}

function decodeB(){

    if(intxt.value != "" && validar(intxt.value)==true){
        copy.style.display="block";
        trad.style.display="block";
        msg1.style.display="none";
        msg2.style.display="none";
        img.style.display="none";
        decode(intxt.value);
    }

}

function copyF(){

    if(trad.value != ""){
        copy.style.display="none";
        trad.style.display="none";
        msg1.style.display="block";
        msg2.style.display="block";
        img.style.display="block";
        intxt.value = trad.textContent;
        navigator.clipboard.writeText(trad.textContent);
    }

}

function validar(msg){

    let ntvalid = /^[a-z\s]+$/;

        if (ntvalid.test(msg)) {
            return true;
        }else{
            alert("Error. Ingresa solo letras minúsculas, sin acentos ni otros caracteres especiales.");
            intxt.value = "";
            return false;  
        }  

}


/*La letra "a" es convertida para "ai"
 *La letra "e" es convertida para "enter"
 *La letra "i" es convertida para "imes"
 *La letra "o" es convertida para "ober"
 *La letra "u" es convertida para "ufat"*/

function code(msg){

    let texto = msg;
    let newtxt="";
    
    for(i=0;i<texto.length;i++){
        if(texto.at(i)=="a"){
            newtxt+="ai";
        }else if(texto.at(i)=="e"){
            newtxt+="enter";
        }else if(texto.at(i)=="i"){
            newtxt+="imes";
        }else if(texto.at(i)=="o"){
            newtxt+="ober";
        }else if(texto.at(i)=="u"){
            newtxt+="ufat";
        }else{
            newtxt+=texto.at(i);
        }
    }

    trad.textContent = newtxt;
    intxt.value = "";

}

function decode(msg){

    let texto = msg;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    trad.textContent = texto;
    intxt.value = "";

}