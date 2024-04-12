
var carre = document.querySelectorAll('.carre');


   
carre.forEach(carre => {
     carre.addEventListener('click', function() {
        carre.classList.toggle('rotation')      // fonction toggle sert a aller dans les 2 sens add et remove (la transition choisie )
})
})