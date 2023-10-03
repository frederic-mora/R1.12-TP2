/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/while-for#la-boucle-for
    . https://fr.javascript.info/array
    . https://fr.javascript.info/array#boucles


    Objectifs : 
        . Savoir parcourir un tableau à l'aide d'une boucle
*/

/*
    Regarder ./asset/objectif.mp4

    Pour réaliser l'exercice, vous disposez d'un objet V qui regroupe plusieurs fonctions vous permettant
    de contrôler l'affichage de la page. 
    
    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Commentez au fur et à mesure vos réponses à chaque question pour qu'il n'y ait pas d'interférence.
*/

/*  README

    data est un objet qui regroupe les données sur toutes les pièces visitables dans le jeu.
    Chaque propriété de l'objet data correspond à une pièce. Une pièce correspond à un objet
    avec deux propriétés. Une propriété description qui contient la description de la pièce.
    Une propriété portes qui est un tableau contenant le nom des autres pièces accessibles depuis
    la pièce courante.
*/


let data = {

    entree: {
        description: "Vous vous trouvez dans l'entrée de la maison. 3 options s'offrent à vous.",
        portes: ["couloir", "salon", "cuisine"]
    },

    couloir: {
        description: "Le couloir est étroit et sombre. Mieux ne vaut pas s'y attarder...",
        portes: ["escalier", "entree", "salon"],
    },

    salon: {
        description: "Le salon est crasseux, canapés et fauteuils sont éventrés. On devine qu'ils n'ont pas été les seuls à cause des tâches de sang sur les murs...",
        portes: ["terrasse", "entree", "couloir"],
    },

    terrasse: {
        description: "La terrasse est envahie d'une épaisse et épineuse végétation, impossible de passer par là.",
        portes: ["salon"]
    },

    cuisine: {
        description: "La cuisine ? Au robinet qui émerge de la mer de détritus tel un périscope, on suppose que c'est bien la cuisine.",
        portes: ["entree", "cellier"],
    },

    cellier: {
        description: "Le cellier fait tampon entre la cuisine et l'entrée, l'odeur y est insupportable, ne trainez pas.",
        portes: ["entree"],
    },

    escalier: {
        description: "L'escalier est piégeur, plusieurs marches sont cassées. En dessous scintillent de curieuses pointes métalliques.",
        portes: ["couloir", "chambre", "bureau"],
    },

    chambre: {
        description: "Etonnamment, la chambre est exceptionnellement propre et parfaitement rangée. Quelles traces a-t-on voulur faire disparaître dans cette pièce ?",
        portes: ["escalier", "grenier"],
    },

    grenier: {
        description: "Le grenier est sombre et poussiéreux. Des choses sont pendues aux poutres. Mais il y a trop de toiles d'araignées pour deviner ce dont il s'agit.",
        portes: ["chambre", "velux"],
    },

    bureau: {
        description: "Le bureau sent le papier et le cuir moisis. Des documents sont éparpillées aux quatres coins de la pièce. Clairement la pièce a déjà été fouillée. Etes-vous bien seul dans cette bâtisse ?",
        portes: ["couloir", "balcon"],
    },

    balcon: {
        description: "Le balcon vous offre un bon bol d'air frais. La végétation envahissante vous empêche d'appréhender les alentours. Le vent bruisse dans les buissons. Etes-vous certain que ce n'est que le vent ?",
        portes: ["bureau"],
    },

    velux: {
        description: "Le velux semble bloqué. Perché sur une chaise, vous y portez un bon coup d'épaule.",
        portes: ["sortie"],
    },

    sortie: {
        description: "Ouf, vous voici hors d'atteinte ! Juste derrière vous une main noueuse referme le vélux ! Vous vous laissez glisser le long de la gouttière et vous enfuyez aussi vite que vous le pouvez !",
        portes: ["sortie"],
    },

}; // fin de l'objet data


/*  Q1

    Avant toute chose, vous devez comprendre comment exploiter/accéder aux données organisées dans 
    l'objet data.
    Sachez qu'un objet est ** itérable **. Ca veut dire que l'on peut le parcourir avec une boucle 
    comme on parcourt un tableau par exemple.
    Répondez aux sous-questions ci-après pour maîtriser l'objet data.
*/
// SQ1
// Dans la console, faites afficher l'objet salon et l'objet balcon en utilisant les deux notations
// possibles pour accéder aux propriétés d'un objet.
// Au besoin, regarder ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

// SQ2 : A l'aide d'une boucle for...in, faites afficher les noms de toutes les pièces présentes dans data
// Aide -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...in


// SQ3 : A l'aide d'une boucle (for...of/in) faites afficher toutes les descriptions de toutes les pièces.


/*  Q2

    Maintenant que vous avez savez un peu mieux comment exploiter data, il vous faut comprendre ce que
    vous pouvez faire avec l'objet V et ce qu'il contient.
    Ouvrez le fichier helper.js et regarder les descriptions de ces fonctions pour savoir ce que vous
    pouvez faire avec et comment. Ne cherchez pas à comprendre le code de ces fonctions. Vous n'avez pas
    encore les connaissances pour.
*/


// SQ1 : Depuis la console, utilisez V.clearDescription pour faire disparaître le texte "room description"

// SQ2 : Depuis la console, utilisez V.renderDescription pour faire apparaître le texte "une bien jolie pièce"

// SQ3 : Depuis la console, utilisez V.renderOption pour faire apparaître la direction "buanderie"

// SQ4 : depuis la console, utilisez V.clearOptions pour supprimer toutes les directions affichées

// SQ5 : Depuis la console, utilisez V.clearQuestion pour supprimer la question "Où allez-vous ?"

// SQ6 : Depuis la console, utilisez V.setBackgroundImage pour définir en arrière plan l'image out.jpg
// disponible dans le répertoire asset.

// SQ7 : V contient aussi une propriété next, que l'on accédera donc en écrivant V.next
// Dans la console, faites  afficher la description de la pièce correspondant à V.next.
// Attention : pas le droit d'écrire vous même le nom de la pièce, il vous faut utiliser V.next 


/* Q3

    Prenez bien soin de commenter vos réponses précédentes avant de poursuivre.

    Les instructions que vous écrirez ci-après seront automatiquement exécutées au 
    chargement de la page index.html et chaque fois que l'utilisateur cliquera sur une direction.
    Vous n'avez pas à gérer vous même les 'click', c'est déjà pris en charge automatiquement.

    Il faut donc à chaque fois faire afficher la description de la pièce dans laquelle on se trouve,
    ainsi qu'ajouter un "bouton" pour chacune des directions accessibles de puis la pièce courante.
    La propriété V.next sera automatiquement tenue à jour pour vous. Elle contiendra donc toujours
    le nom de la pièce courante.

    Dans un second temps, ajouter les instructions permettant de gérer la fin du jeu conformément à 
    ce que vous avez vu dans la vidéo objectif.mp4.

*/
