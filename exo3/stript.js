
var rotation = false ; 
var carre = document.querySelectorAll(carre);

carre.forEach(carre=>{
    carre.addEventListener('click', function() {


        carre.classList.toggle('rotated');
        // degre = rotation ? 0 : 360;
        
        // carre.style.webkitTransform  = 'rotate ('+degre+')';
        // carre.style.backgroundcolor = "#aa716c";
        rotation = !rotation;
       

}
)
})

// document.querySelectorAll('carre').onclick = function() {
//     document.querySelectorAll('carre').classList.toggle('rotated');
// }