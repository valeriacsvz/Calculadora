let boton = document.getElementById('sumar');
let boton1 = document.getElementById('restar')
let boton2 = document.getElementById('multiplicar')
let boton3 = document.getElementById('dividir')
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);
boton1.addEventListener('click', hacerresta);
boton2.addEventListener('click', multiplicar);
boton3.addEventListener('click', dividir);

function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1-n2;
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

function multiplicar(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicación es: ${n3}`;
}

function dividir(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1/n2;
    respuesta.innerHTML=`El resultado de la división es: ${n3}`;
}