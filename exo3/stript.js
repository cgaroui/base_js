
var reseauS = document.querySelectorAll('.container');


   
reseauS.forEach(container => {
     container.addEventListener('click', function() {
        const cssObj = window.getComputedStyle(container,null);
        container.classList.toggle('transformation')      // fonction toggle sert a aller dans les 2 sens add et remove (la transition choisie )
        document.body.style.backgroundColor = cssObj.backgroundColor;   
        // alert.
        
})

})


const cssObj = window.getComputedStyle(carre,null);
carré5.style.backgroundColor = cssObj.backgroundColor;   
// var reseauS = document.querySelectorAll('.container');

// reseauS.forEach(container => {
//     container.addEventListener('click', function() {
//         container.classList.toggle('rotation'); // Ajoute ou supprime la classe rotation à l'élément cliqué
//         document.body.style.backgroundColor = window.getComputedStyle(container).getPropertyValue('background-color'); // Récupère la couleur d'arrière-plan de l'élément cliqué et l'applique au fond du document
//     });
// });
