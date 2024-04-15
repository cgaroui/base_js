
var reseauS = document.querySelectorAll('.container');


   
reseauS.forEach(container => {
     container.addEventListener('click', function() {
        const cssObj = window.getComputedStyle(container,null);
        // container.classList.toggle('transformation')      // fonction toggle sert a aller dans les 2 sens add et remove (la transition choisie )
        container.style.backgroundColor = cssObj.backgroundColor;   
        
        
    })

})
