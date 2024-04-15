
 // pour Sélectionner l'élément HTML (l'endroit où j'affiche mes citations)
var quoteContainer = document.getElementById("quoteContainer");

// le for in pour Parcourir les citations et les affichez dans l'élément HTML
for (const property in quotes) {
    var quoteCard = document.createElement("div"); // Créez un élément <div> pour chaque carte de citation
    quoteCard.classList.add("quote-card");    // Ajoutez la classe CSS à la carte de citation
    quoteCard.innerHTML = `<em>“${quotes[property]}”</em><div class="author">${property}</div>`;  // pour Ajouter le contenu HTML avec la citation
    quoteContainer.appendChild(quoteCard);      // pour Ajouter la card de citation au conteneur des citations


    var contentHeight = quoteCard.scrollHeight; // Hauteur du contenu de la card (en fonction de la citation )
    var authorHeight = quoteCard.querySelector('.author').offsetHeight; // Hauteur du nom de l'auteur, offsetHeight renvoie hauteur avec padding et margin compris 
    var totalHeight = contentHeight + authorHeight;              // Hauteur totale de la carte
    quoteCard.style.height = totalHeight + 'px';               // style.height =>prop css qui controle la hauteur , px ici pour specifier unité de la valeur calculé dans totalHeight
  }