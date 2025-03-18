
const form = document.querySelector('.formulario');
const mascara = document.querySelector('.mascara-formulario');


function cliqueiNoBotao() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    form.style.zIndex = "1";
    mascara.style.visibility = "visible";
}

function cliqueiNaMascara() {
    mascara.style.visibility = "hidden";
    form.style.transform = "translateX(0)"
    form.style.left = "-100%";
}

