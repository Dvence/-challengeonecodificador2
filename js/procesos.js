var $enctryptar = document.querySelector('#encryptar-button');
var $desEncryptar = document.querySelector('#desEncryptar-button');

 $enctryptar.addEventListener('click', function(){
    let $frase = document.querySelector('#texto-ingreso').value;
    let nueva = "";
    var verificado;
    verificado = controlDatos($frase);
       
    controlDatos($frase);
    for(let i=0; i< $frase.length;  i++){
        switch($frase[i]){
            case 'a': nueva += 'ai';
            break;
            case 'e': nueva += 'enter';
            break;
            case 'i': nueva += 'imes';
            break;
            case 'o': nueva += 'ober';
            break;
            case 'u': nueva += 'ufat';
            break;
            default: nueva += $frase[i];
            break;
        }
    }
    let cajaMostrar = document.querySelector('#resultado');
    cajaMostrar.textContent = nueva;
    if (verificado == true) {
        document.querySelector('#resultado').value = "Texto invalido";
    } else {
        document.querySelector('#resultado').value = nueva;
    }
    ocultar();
    limpiarEntrada();
    
});

$desEncryptar.addEventListener('click', function(){
    let $fraseDesen = document.querySelector('#texto-ingreso').value;
    let nueva = "";
    var verificado;
    verificado = controlDatos($fraseDesen);
    controlDatos($fraseDesen);

    var nuevaDesen = $fraseDesen.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    
    let mostrar = document.querySelector('#resultado');
    mostrar.value = nuevaDesen;

    if (verificado == true) {
        document.querySelector('#resultado').value = "Texto invalido";
    } else {
        document.querySelector('#resultado').value = nuevaDesen;
    }
    limpiarEntrada();
    ocultar();
        
});

function limpiarEntrada(){
    document.querySelector('#texto-ingreso').value="";
}

function controlDatos($frase){
    let  letras ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i=0; i<$frase.length; i++){
        for (let c=0; c<letras.length; c++){
            if ($frase[i] === letras[c]) {
                return true;
            }
        }
    }
} 

function ocultar(){
    
    var imagen = document.getElementById("imagen-error");
    var mensajeCabecera = document.getElementById("cabecera-mensaje");
    var mensajeCuerpo = document.getElementById("cuerpo-error");
    document.getElementById("copiar-button").style.display="block";
    var resultado = document.getElementById("resultado");

    imagen.classList.add('desaparecer');
    mensajeCabecera.classList.add('desaparecer');
    mensajeCuerpo.classList.add('desaparecer');
    resultado.classList.add('aparecer');
}

let copiarEncriptado = document.querySelector('#copiar-button');
copiarEncriptado.addEventListener('click', function(){
  let copiar = document.querySelector('#resultado');
  navigator.clipboard.writeText(copiar.textContent);
});

let copiarDesEncriptado = document.querySelector('#copiar-button');
copiarDesEncriptado.addEventListener('click', function(){
  let copiar = document.querySelector('#resultado');
  navigator.clipboard.writeText(copiar.textContent);
});
