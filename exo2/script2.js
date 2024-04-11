const carré = document.querySelectorAll(".carré"); //selectionner tout les element ayant classe carré


const carré5 = document.querySelector(".carré5");// Sélectionnez l'élément carré5


console.log(carré5)

carré.forEach(carre=>{

    // console.log(carre);
    carre.addEventListener('click', function() {
        const cssObj = window.getComputedStyle(carre,null);
        //console.log(cssObj.backgroundColor)
           //document.body.style.background = cssObj.backgroundColor;
        carré5.style.backgroundColor = cssObj.backgroundColor;       //accede au style du carré5 et lui attribue la couleur du carré cliqué 

        carré5.innerHTML= `<div class="msg"> ${cssObj.backgroundColor}</div>`
})
})
