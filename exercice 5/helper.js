/*  V

    Cet objet V (pour View / Vue) symbolise l'interface et toutes les opérations/fonctions
    qui s'y rapportent. On va donc y retrouver toutes les fonctions qui permettent de 
    modifier/mettre à jour l'interface.
*/
let V = {};


/* 
  La propriété next contiendra toujours le nom de la pièce vers laquelle l'utilisateur veut aller.
  Cette propriété est mise à jour à chaque fois que l'utilisateur clique sur une direction.
*/
V.next = "entree";


/*  V.renderDescription

  Paramètre texte : une chaîne de caractères qui décrit la pièce dans laquelle se trouve l'utilisateur
  Cette fonction ne retourne pas de valeur.

  La fonction fait apparaître dans la page (dans le paragraphe avec la classe .description) 
  le texte donné en paramètre.
*/
V.renderDescription = function( texte ){
  document.querySelector('.description').textContent += texte;
}


/*  V.clearDescription

  Pas de paramètre.
  Pas de valeur de retour.

  Cette fonction efface le contenu du paragraphe de classe .description.
*/
V.clearDescription = function(){
  document.querySelector('.description').textContent = "";
}


/*  V.renderOption

  Paramètre opt : une chaîne de caractères qui correspond au nom d'une pièce.
  Pas de valeur de retour.

  Cette fonction ajoute un bouton cliquable dans la page, bouton portant le nom de la pièce
  donné en paramètre.
*/
V.renderOption = function( opt ){
  let b = document.createElement('button');
  b.dataset.id = opt;
  b.textContent = opt;
  document.querySelector('section div').insertAdjacentElement('beforeEnd', b);
}


/*  V.clearOptions

  Pas de parmaètre.
  Pas de valeur de retour.

  Cette fonction supprime de la page tous les boutons cliquables.
*/
V.clearOptions = function(){
  document.querySelectorAll('button').forEach( b=>{b.remove()});
}


/*  V.setBackgroundImage

  Paramètre imgpath : une chaîne de caractères correspondant à l'emplacement d'une image (fichier).
  Pas de valeur de retour.

  Cette fonction change l'image de fond de la page par celle indiquée par le paramètre imgpath
*/
V.setBackgroundImage = function( imgpath ){
  document.body.style.backgroundImage = "url(" + imgpath + ")";
}


/*  V.clearQuestion

  Pas de paramètre.
  Pas de valeur de retour.

  La fonction efface de la page la question "Où allez-vous ?"
*/
V.clearQuestion = function(){
  document.querySelector('p:not(.description)').remove();
}
