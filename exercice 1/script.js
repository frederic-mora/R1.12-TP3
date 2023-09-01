/*
    Objectif : regarder ./asset/objectif.mp4 

    Ce fichier comporte (entre autres) une fonction onNewImput qui est vide ou presque pour le moment.
    Le navigateur appellera cette fonction automatiquement à chaque fois que le champ de saisi sur
    la page sera modifié.
    Donc à vous de compléter le code de la fonction onNewInput de sorte à ce qu'elle recherche
    dans le tableau le nombre saisie et, si elle le trouve, modifie la couleur de sa case.

    Pour vous aider, vous disposez toutefois des fonctions suivantes prêtes à l'emploi :
    . getInputValue : cette fonction, sans paramètre, retourne la valeur contenue dans le champ
      input de la page
    . switchOnCell : cette fonction prend en paramètre un indice (un nombre entier) et "allume"
      la case correspondante du tableau affiché sur la page
    . switchOffCells : cette fonction, sans paramètre, "éteint" toutes les cases du tableau 
      affiché sur la page web.

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

     
    Il y a plusieurs questions. Commentez vos réponses avant de passer à la suivante pour qu'il n'y
    ait pas d'interférence dans l'exécution de votre code.

*/



/*
    La fonction getRandomArray appelée ci-dessous retourne un tableau de taille aléatoire et 
    contenant des nombres réels eux aussi choisis aléatoirement.
    Le tableau ainsi retournée par la fonction est mémorisé dans la variable numbers.
    C'est le tableau numbers qui est automatiquement affiché sur la page web et dans lequel
    il faudra rechercher les valeurs saisies dans le champ input.
*/
let numbers = getRandomArray();


/*  Q1
    
    Déclarer une fonction search avec 2 paramètres :
    . paramètre nb : représente un nombre à rechercher
    . paramètre tab : représente un tableau de nombres dans lequel faire la recherche
    
    La fonction search devra retourner : 
    . -1 si nb n'est pas présent dans tab
    . l'indice de la case contenant nb si celui-ci est présent dans tab

    Note : si nb est présent plusieurs fois dans le tableau, alors on retournera
    l'indice de la première case qui le contient.

    Pour tester : A ce stade, utiliser la console pour tester le bon fonctionnement de 
    votre fonction search. Sur la page, vous voyez affiché le contenu du tableau numbers.
    Donc depuis la console, faites des appels à search en utilisant des valeurs que vous 
    savez être dans numbers et d'autres qui n'y sont pas. Vérifiez que l'indice retournée
    par search est correct.
*/


/*  Q2
    Complétez la fonction onNewImput pour obtenir un comportement analogue à objectif.mp4
    C'est ici que vous aurez usage de votre fonction search mais aussi de getInputValue,
    switchOnCell et switchOffCells
*/
let onNewImput = function()
{
  console.log("I am the onNewInput function and I do nothing, upgrade my code please");
}
