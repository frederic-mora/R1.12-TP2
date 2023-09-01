/*
    Objectif : regarder ./asset/objectif.mp4

    Pour réaliser l'exercice, vous disposez :
    . de la fonction drawBloc qui permet de dessiner un carré de couleur aléatoire sur la grille de dessin.
    Pour cela drawBloc attend deux paramètres :
        - l'abcisse de la colonne où dessiner le carré
        - l'ordonnée de la ligne où dessiner le carré
    Note : le coin supérieur gauche du carré dessiné coïncidera avec l'intersection des lignes de la grilles
    
    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Au besoin, quelques liens sur la documentation liée aux notions utiles à l'exercice :
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    . Et voir aussi les exercices sur les tableaux vus en TD !
    

*/

/*  Q1

    Compléter les étapes ci-dessous pour aboutir au même dessin que sur la vidéo.
    Notez que ce n'est pas grave si le dessin ne se forme pas dans le même ordre ou dans le même sens
    que sur la vidéo. Du moment qu'à la fin, on a bien la même chose.

    Note : a priori, il sera plus "direct" d'utiliser une boucle for qu'une boucle for..of dans cet exercice. 

*/


// Dessin du bord supérieur
for(let col=0; col<25; col++)
{
    drawBloc(col, 0);
}
// dessin du bord indérieur
for(let col=0; col<25; col++)
{
    drawBloc(col, 24);
}
// dessin du côté gauche
for(let lig=0; lig<25; lig++)
{
    drawBloc(0, lig);
}
// dessin du côté droit
for(let lig=0; lig<25; lig++)
{
    drawBloc(24, lig);
}
// dessin de la diagonale descendante
for(let lig=0; lig<25; lig++)
{
    drawBloc(lig, lig);
}
// dessin de la diagonale montante
for(let lig=0; lig<25; lig++)
{
    drawBloc(lig, 24-lig);
}

/*  Q2

    Pouvez-vous ré-écrire la même chose mais en utilisant qu'une seule et unique boucle ? (si c'est déjà fait)
*/