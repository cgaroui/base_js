const carré = document.querySelectorAll(".carré"); //selectionner tout les element ayant classe carré


const carré5 = document.querySelector(".carré5");// Sélectionnez l'élément carré5


console.log(carré5)

carré.forEach(carre=>{
 
    // console.log(carre);
    carre.addEventListener('click', function() {
        const cssObj = window.getComputedStyle(carre,null);
        //console.log(cssObj.backgroundColor)
           //document.body.style.background = cssObj.backgroundColor;
        carré5.style.backgroundColor = cssObj.backgroundColor;       // search how to set background color js
    
})
})



