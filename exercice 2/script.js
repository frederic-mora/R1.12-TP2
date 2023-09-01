/*
    Objectif : regarder ./asset/objectif.mp4

    Pour réaliser l'exercice, vous disposez :
    . de la fonction addMenu qui prend en paramètre une chaîne de caractères et la fait apparaître
    dans la page en tant que menu principal. La fonction addMenu ne retourne pas de valeur.
    . de la fonction addSubMenu qui prend deux paramètres :
        - premier paramètre : une chaine de caractère correspondant au nom du menu principal auquel ajouter le sous-menu
        - second paramètre : une chaine de caractère correspondant au nom du sous-menu à ajouter au menu principal
    La fonction fera apparaître le sous-menu dans la page web. Elle ne retourne pas de valeur.

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Au besoin, quelques liens sur la documentation liée aux notions utiles à l'exercice :
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    . Et voir aussi les exercices sur les tableaux vus en TD !
    
    Il y a plusieurs questions. Commentez vos réponses avant de passer à la suivante pour qu'il n'y
    ait pas d'interférence dans l'exécution de votre code.

*/

/*  README

    le tableau nav ci-dessous décrit (à peu près) les menus et sous-menus associés du site d'information Le Monde
    Chaque objet du tableau comprend une propriété menuname qui est le nom d'un menu principal.
    Chaque objet comprend aussi une propriété submenu qui est un tableau listant les entrées du sous-menu associé.
*/


let nav = [
    { 
        menuname: "Actualités", 
        submenu:  ["International", "Politique", "Société", "Les Décodeurs", "Sport", "Sciences", "Planète", "Pixels"] 
    },
    { 
        menuname: "Economie",
        submenu:  ["Economie mondiale", "Economie française", "Médias", "Emploi"]
    },
    { 
        menuname: "Vidéos",
        submenu:  ["Les explications", "Les séries", "Enquêtes vidéos"] 
    },
    { 
        menuname: "Débats", 
        submenu:  ["Editoriaux", "Chroniques", "Analyses", "Tribunes", "Vie des idées"] 
    },
    { 
        menuname: "Culture",
        submenu:  ["Cinéma", "Télévision", "Livres", "Musiques", "Arts", "Scènes"] 
    }
];

/*  Q1

    Avant toute chose, utilisez la console pour tester les fonctions addMenu et addSubMenu. 
    Vous n'irez pas beaucoup plus loin sans comprendre ce qu'elles font.
    Par exemple, essayez de créer un menu "foo" dans lequel on trouvera le sous-menu "bar" et le sous-menu "baz"
*/

/*  Q2 

    A présent, faites apparaître sur la page web les menus et sous-menus décrits par le tableau nav.
    Eventuellement, vous pouvez procéder en 2 temps. D'abord les menus, puis les menus avec sous-menus.

    Essayez d'écrire 2 versions de votre code, une avec la boucle for..of, l'autre avec la boucle for
*/
