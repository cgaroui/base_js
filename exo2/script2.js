const carré = document.querySelectorAll(".carré"); //selectionner tout les element ayant classe carré


const carré5 = document.querySelector(".carré5");// Sélectionnez l'élément carré5




carré.forEach(carre=>{
    const cssObj2 = window.getComputedStyle(carré5,null);
    console.log(cssObj2.backgroundColor)
   
    // console.log(carre);
    carre.addEventListener('click', function() {
        const cssObj = window.getComputedStyle(carre,null);
        console.log(cssObj.backgroundColor)
        // carré5.cssObj2.backgroundColor = cssObj.backgroundColor;       // search how to set background color js
    
})
})



