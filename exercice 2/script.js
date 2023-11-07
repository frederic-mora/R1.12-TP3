/*
    Objectif : regarder ./asset/objectif.mp4 

    Ce fichier comporte (entre autres) une fonction clickOnButton qui est vide pour le moment.
    Le navigateur appellera cette fonction automatiquement à chaque fois que l'on clique sur 
    le bouton "Find the max !"

    L'objectif est de compléter cette fonction afin de trouver le plus grand nombre présent
    dans deux tableaux T1 et T2 et, une fois trouvé, modifié la couleur de sa case à l'affichage.

    Pour vous aider, vous disposez des fonctions suivantes prêtes à l'emploi :
    . getRandomArray : pour générer T1 et T2, tableaux de valeurs aléatoires
    . litCell : cette fonction prend en paramètre un value (un nombre) et modifie la couleur des 
      cases si elles contiennent le value

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

     
    Il y a plusieurs questions pour vous aider à compléter in fine la fonction clickOnButton.

*/



/*
    La fonction getRandomArray appelée ci-dessous retourne un tableau de taille aléatoire et 
    contenant des nombres réels eux aussi choisis aléatoirement.
    Le contenu de T1 et T2 sont affichés automatiquement sur la page.
    Vous pouvez aussi les "voir" en frappant T1 ou T2 directement dans la console du navigateur.
*/
let T1 = getRandomArray();
let T2 = getRandomArray();

/** Q1
 *  Ecrire une fonction getMax qui prend deux nombres en paramètres et retourne le plus grand des deux.
 *  Utilisez la console pour tester votre fonction.
 */


/** Q2 
 *  Ecrire une fonction getMaxInArray qui prend un tableau (de nombres) en paramètre et qui retourne 
 *  le plus grand nombre contenu dans le tableau.
 *  Utilisez la console pour tester votre fonction.
*/

/** Q3
 *  Ecrire une fonction getMaxInTwoArrays qui prend deux tableaux (de nombres) en paramètre et qui retourne
 *  le plus grand nombre contenu dans les deux tableaux.
 *  Utilisez la console pour tester votre fonction.
 */


/** Q4
 * 
 *  Complétez les fonction clickOnButton pour obtenir le comportement demandé.
 */

let clickOnButton = function()
{
 
}
