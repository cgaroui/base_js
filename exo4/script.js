
var reseauS = document.querySelectorAll('.reseau');
// console.log(reseauS);


   
reseauS.forEach(reseau1 => {                            //foreach pour parcourir chacun des reseau et lui appliquer les propriétées de mon code 
    // console.log(reseau1);
     reseau1.addEventListener('click', function() {
       
        const cssObj = window.getComputedStyle(reseau1,null);
        reseau1.classList.toggle('transformation')      // fonction toggle sert a aller dans les 2 sens add et remove (la transition choisie )
        if(reseau1.classList.contains('transformation')) {  // le if verifie si la classe transformation exite (et a été apliqué)

            wrapper.style.backgroundColor = cssObj.backgroundColor;   // si la classe est verifié ,le background du wrapper prend la couleur de fond de l'element cliqué 
        }
        else {
           
            wrapper.style.backgroundColor = "#c0c0c0";      // dans le cas du reclique les propriété de la classe transformation ne sont pas appliqués (et la couleur du fond redeviens gris ) 
        }   
    })
})



