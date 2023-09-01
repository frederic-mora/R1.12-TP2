/*
    Objectif : regarder ./asset/objectif.jpg

    Pour réaliser l'exercice, vous disposez :
    . de la fonction drawGrid qui permet d'afficher une grille sur le canvas pour vous aider
    à placer et dimensionner vos cercles. C'est juste une aide visuelle, ça n'est pas indispensable
    pour réaliser l'exercice.
    La fonction drawGrid ne prend pas de paramètre et ne retourne pas de valeur.

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Au besoin, quelques liens sur la documentation liée aux notions utiles à l'exercice :
    . https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function
    . Et voir aussi les exercices sur les tableaux vus en TD !
    

*/


/*  Q1 

    Observer et tester le code donné ci dessous.
    Identifier les valeurs qui correspondent au centre du cercle, son rayon et sa couleur.
    Puis, utiliser et adapter ce code pour déclarer une fonction drawCircle qui permet de
    dessiner un cercle. Donner à votre fonction les bons paramètres afin que l'on puisse
    choisir lors de son appel les coordonnées du centre du cercle, de son rayon et sa couleur.
    Pour vérifier le bon fonctionnement de votre fonction appelez là pour dessiner le même
    cercle que le code initial.
*/


// accès à l'élément canvas pour dessiner
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
// début du dessin
ctx.beginPath();
// choix de la couleur
ctx.strokeStyle = 'orange';
// définition du cercle
ctx.arc(400, 400, 200, 0, Math.PI*2);
// affichage du cercle
ctx.stroke();



/*  Q2

    En utilisant exclusivement votre fonction drawCircle, reproduisez un dessin analogue à celui
    de l'image asset/objectf.jpg
*/


/*  Q3

    En vous inspirant de la structure des données de l'exercice 2 du TP2, proposez un tableau d'objets,
    chaque objet représentant un cercle (centre, rayon, couleur). Puis à l'aide d'une boucle, dessiner
    l'ensemble des cercles. drawCircle ne doit être écrit qu'une seule fois dans votre code dans cette
    version.
*/