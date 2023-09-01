/*
    Objectif : regarder ./asset/objectif.mp4 (correspond à la Q3)

    Pour réaliser l'exercice, vous disposez :
    . de la fonction renderOneLego qui prend en paramètre un objet contenant les informations 
    relatives à un modèle de Lego. La fonction se charge ensuite de mettre en forme et de présenter
    ces informations dans la page web.

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

    Pour rappel : la variable legos ci-après est un tableau, repérable aux caractères [ pour débuter le tableau
    et ] pour le terminer. Un tableau permet de regrouper plusieurs valeurs (nombre, chaînes, objets, autres tableaux...) 
    comme c'est aussi le cas pour les objets. C'est donc une variable complexe ou composite. Contrairement à un objet,
    les données dans un tableau sont ordonnées. chaque valeur du tableau est "rangée" dans une de ses cases et chaque 
    case est repérable par un indice. Les cases d'un tableau sont toujours indicées (numérotées) à partir de 0.

    Notre tableau legos contient plusieurs objets (repérables eux à { ... } ). Chaque objet regroupe les informations 
    relatives à un modèle de Lego. Tous les objets du tableau ont les mêmes propriétés (collection, id, name, etc...)
*/

let legos = [
    {
        collection: "Creator Expert",
        id: 10252,
        name: "La coccinelle Volkswagen",
        description: "Construis une réplique LEGO® Creator Expert de l'automobile la plus populaire au monde. Ce magnifique modèle LEGO est plein de détails authentiques qui capturent le charme et la personnalité de la voiture, notamment un coloris bleu ciel, des ailes arrondies, des jantes blanches avec des enjoliveurs caractéristiques, des phares ronds et des clignotants montés sur les ailes.",
        price: 94.99,
        pieces: 1167,
        images: {
            box: "./asset/LEGO_10252_Box.png",
            bg: "./asset/LEGO_10252_Main.jpg"
        }
    },
    {
        collection: "Creator",
        id: 31046,
        name: "La voiture rapide",
        description: "Prends la route avec cette splendide voiture de sport, avec des coloris jaune, blanc et noir, un énorme aileron, des jantes élégantes avec des pneus profil bas, un capot qui s'ouvre et un moteur détaillé. Ouvre les portes ciseaux, mets-toi au volant, ouvre le toit et profite du soleil !",
        price: 19.99,
        pieces: 222,
        images: {
            box: "./asset/LEGO_31046_Box.png",
            bg: "./asset/LEGO_31046_Main.jpg"
        }
    },
    {
        collection: "Creator",
        id: 31064,
        name: "Les aventures sur l'île",
        description: "Trouve une carte dans une bouteille et aventure-toi vers une île tropicale lointaine à bord de l’hydravion avec ses flotteurs d’atte rrissage et ses coloris jaune vif, blanc et bleu foncé. Charge le compartiment à marchandises, ouvre le cockpit et monte à bord, puis fais tourner l'énorme hélice et envole-toi dans les airs. Utilise tes talents de pilote pour localiser l'île '",
        price: 29.99,
        pieces: 359,
        images: {
            box: "./asset/LEGO_31064_Box.png",
            bg: "./asset/LEGO_31064_Main.jpg"
        }
    },
    {
        collection: "Creator",
        id: 31062,
        name: "Le robot explorateur",
        description: "Impressionne tes amis avec ce modèle génial ! Ce robot explorateur comprend des coloris bleu, noir et gris, des yeux vert vif, des chenilles qui fonctionnent, une tête et un corps qui tournent, et des bras mobiles avec des pinces et un projecteur qui fonctionnent. ",
        price: 19.99,
        pieces: 205,
        images: {
            box: "./asset/LEGO_31062_Box.png",
            bg: "./asset/LEGO_31062_Main.jpg"
        }
    },
    {
        collection: "Star Wars",
        id: 75102,
        name: "Poe's X-Wing Fighter",
        description: "Lutte contre les forces du Premier Ordre avec le X-Wing Fighter de Poe. Ce starfighter personnalisé est plein de fonctions, avec notamment 4 fusils à ressorts, 2 fusils à tenons, un train d'atterrissage rétractable, des ailes qui s'ouvrent, un cockpit qui s'ouvre avec de la place pour une figurine, et de la place derrière pour le droïde astromech BB-8.",
        pieces: 717,
        price: 89.99,
        images: {
            box: "./asset/LEGO_75102_Box.png",
            bg: "./asset/LEGO_75102_Main.jpg"
        }
    },
    {
        collection: "Creator",
        id: 31065,
        name: "La maison de ville",
        description: "Monte les marches vers la porte bleue de cette charmante maison à trois étages. Tu découvriras à l’intérieur de nombreuses fonctions, notamment un salon confortable avec une télé à écran plat et un canapé, plus une chambre avec une cheminée et une cuisine détaillée. Prends l'escalier vers le deuxième étage et tu trouveras une chambre confortable.",
        price: 54.99,
        pieces: 566,
        images: {
            box: "./asset/LEGO_31065_Box.png",
            bg: "./asset/LEGO_31065_Main.jpg"
        }
    },
    {
        collection: "Star Wars",
        id: 75192,
        name: "Millenium Falcon",
        description: "Ce nouveau modèle LEGO® Star Wars Millennium Falcon est le plus grand et le plus détaillé jamais conçu. En réalité, avec ses 7 500 pièces, c’est tout simplement l’un des plus grands modèles LEGO ! Cette fantastique version LEGO de l’inoubliable cargo Corellien de Han Solo présente les moindres détails dont rêvent tous les fans de Star Wars, quel que soit leur âge.",
        pieces: 7541,
        price: 799.99,
        images: {
            box: "./asset/LEGO_75192_Box.jpg",
            bg: "./asset/LEGO_75192_Main.png"
        }
    }
    
    
    
];

/*  Q1

    En faisant bon usage de la fonction renderOneLego, faites apparaître dans la page le modèle
    correspondant à la Coccinelle Volkswagen.
*/


/*  Q2

    Même question mais pour le modèle Poe's X-Wing Fighter
*/


/*  Q3

    A présent, faites afficher tous les modèles contenus dans le tableau legos.
    Attention, dites vous que si l'on devait ajouter ou supprimer un modèle du tableau, votre code
    doit continuer à fonctionner sans avoir à la modifier.

    Essayer de proposer une solution basée sur la boucle for, et une autre sur la boucle for..of
    (La logique sera la même, seule la syntaxe sera différente)
*/


/*  Q4

    Faites afficher uniquement les modèles de la collection Star Wars.
    Attention, là encore, même si l'on ajoutait ou supprimait des modèles Star Wars dans le tableau legos,
    votre code devrait toujours fonctionner sans avoir besoin de le modifier.

*/