/*
    Objectif : regarder ./asset/objectif.mp4

    Pour réaliser l'exercice, vous disposez :
    . de la fonction drawBloc qui permet de dessiner un carré de couleur aléatoire sur la grille de dessin.
    Pour cela drawBloc attend trois paramètres :
        - l'abcisse de la colonne où dessiner le carré
        - l'ordonnée de la ligne où dessiner le carré
        - une chaîne de caractère correspondant à la couleur du carré (tout format web autorisé)
    Note : le coin supérieur gauche du carré dessiné coïncidera avec l'intersection des lignes de la grilles

    Eventuellement, pour "aller plus vite", vous pouvez aussi utiliser la fonction speedyDrawBloc qui fait la 
    même chose que drawBloc mais très rapidement (vous n'aurez pas le temps de voir dans quel ordre le dessin
    apparaît)
    
    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Au besoin, quelques liens sur la documentation liée aux notions utiles à l'exercice :
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    . Et voir aussi les exercices sur les tableaux vus en TD !
    

*/

/*  README

    le tableau smiley ci-après contient 20 (autres) tableaux de 20 entiers chacun.
    Il y a donc autant d'entiers que de cases sur la grille de dessin.
    L'idée est que chaque entier correspond à un code couleur pour colorier la case correspondante sur la grille de dessin.
*/
let smiley = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
    [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 0],
    [4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 0],
    [4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 0],
    [4, 4, 4    , 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 0],
    [4, 4, 3, 3, 3, 3, 1, 2, 3, 3, 3, 3, 1, 2, 3, 3, 3, 3, 4, 0],
    [4, 4, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 4, 0],
    [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0],
    [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0],
    [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0],
    [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0],
    [0, 0, 3, 3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3, 3, 0, 0],
    [0, 0, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



/*  Q1

    Ecrire un code qui "convertit" le tableau smiley en dessin sur la grille.
    Note 1 : dans la vidéo, les couleurs utilisées dans 'cadetblue', 'orange', 'black' et 'white'.
    Mais vous pouvez en choisir d'autres
    Note 2 : a priori, il sera plus "direct" d'utiliser une boucle for qu'une boucle for..of dans cet exercice. Mais ce n'est pas impossible non plus.
*/

let color = ['cadetblue', 'white', 'black', 'orange', 'red'];

for(let li=0; li<smiley.length; li++)
{
    let row = smiley[li];
    for(let co=0; co<row.length; co++)
    {  
        let codeCouleur = row[co];
        drawBloc(co, li, color[ codeCouleur ]);
    }
}