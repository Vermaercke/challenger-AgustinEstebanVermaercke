var msj = document.querySelector("#textarea"); 
var btnEncriptar = document.querySelector("#encriptar"); 
var btnDesencriptar = document.querySelector("#desencriptar"); 
var btnCopiar = document.querySelector("#copiar"); 
var msjFinal = document.querySelector("#resultado"); 


/*Funcion encriptar*/
    function msjEncriptar (txt){
        
        if(txt=="a"){
        txt="ia";
        return txt;
        }

        else if(txt=="e"){
        txt="enter";
        return txt;
        }

        else if(txt=="i"){
        txt="imes";
        return txt;
        } 

        else if (txt == "o") {
        txt = "ober";
        return txt;
        } 

        else if (txt == "u") {
        txt = "ufat";
        return txt;
        }
    }

    function encriptar(txt){
        var msjEncriptado = txt.replace(/a|e|i|o|u/g,msjEncriptar); 
        let noEncontrado = document.getElementById("ocultar");
        let mensajeFinal = document.getElementById("resultado");
        let copiar = document.getElementById("copiar");
        let enter = document.getElementById("encriptar");
        noEncontrado.style.display = "none";
        mensajeFinal.style.display = "flex";
        copiar.style.display = "block";
        return msjEncriptado;
    }

   

    function msjDesencriptar(txt){
        if(txt=="ia"){
            txt="a";
            return txt;
        }
        else if(txt=="enter"){
            txt="e";
            return txt;
        }
        else if(txt=="imes"){
            txt="i";
            return txt;
        }
        else if(txt=="ober"){
            txt="o";
            return txt;
        }
        else if(txt=="ufat"){
            txt="u";
            return txt;
        }
    }

    function desencriptar(txt){
        var msjDesencriptado = txt.replace(/ia|enter|imes|ober|ufat/g,msjDesencriptar);
        return msjDesencriptado;
    }


    btnEncriptar.addEventListener("click", function(event){
        event.preventDefault();
        var txt = msj.value;
        var msjSeguro = encriptar(txt);
        msjFinal.value = msjSeguro;
        console.log(msjSeguro);
    });

    btnDesencriptar.addEventListener("click", function(event){
        event.preventDefault();
        var txt = msj.value;
        var msjSeguro = desencriptar(txt);
        msjFinal.value = msjSeguro;
        console.log(msjSeguro);
    });

    btnCopiar.addEventListener("click", function(event){
        event.preventDefault();
        msjFinal.select();
        navigator.clipboard.writeText(msjFinal.value);
    });