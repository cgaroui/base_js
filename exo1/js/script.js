
var carré = document.querySelector('.carré');   //selectionner le carré dans le DOM
const cssObj = window.getComputedStyle(carré); //accéeder propriétés de style calculées de l'élément "carré"

//ajout ecouteur d'evenement pour qu'il detecte le click et effectue une tache 
carré.addEventListener('click',function(){
    //ici la tache c'est afficher un message alerte avec les propriétés css
    alert("Class : carré\n" +
    "backgroundColor : " + cssObj.backgroundColor + "\n" +
    "color : " + cssObj.color + "\n" +
    "height : " + cssObj.height + "\n" +
    "width : " + cssObj.width + "\n" +
    "Display :" + cssObj.fontFamily);
}
)

 