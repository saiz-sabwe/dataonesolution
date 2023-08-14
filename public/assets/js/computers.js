setInterval("ChangeSlide(3)", 3000);

let numero
let slide
function ChangeSlide(sens){
    numero = numero + sens;
    if (numero < 0){
        numero = slide.length - 1;
    } else{numero = 0}
    document.getElementById("slide").src = slide[numero]
}





// function ChangeSlide(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("slide").src = slide[numero];
// } 