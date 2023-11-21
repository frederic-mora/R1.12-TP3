/*
    Objectif : Fonctions, boucles et tableaux

    Pour cet exercice, vous n'aurez besoin que de la console du navigateur pour répondre aux questions.
    Il vous faudra toutefois déclarer les fonctions demandées dans ce fichier.
    Vous noterez en commentaire les réponses obtenues dans la console du navigateur si besoin.
*/

/**
 *  fruits est un tableau qui contient des objets décrivant des fruits par leur nom, leur prix (au kilo) et leur stock (en kilo).
 */
let fruits = [
  {
    name: "Banane",
    price: 4,
    stock: 101
  },
  {
    name: "Pomme",
    price: 2,
    stock: 97
  },
  {
    name: "Orange",
    price: 3,
    stock: 83
  },
  {
    name: "Poire",
    price: 3.5,
    stock: 65
  }
];

/**
 *  vegetables est un tableau qui contient des objets décrivant des légumes par leur nom, leur prix (au kilo) et leur stock (en kilo).
 */
let vegetables = [
  {
    name: "Carotte",
    price: 1.2,
    stock: 50
  },
  {
    name: "Poireau",
    price: 2.5,
    stock: 115
  },
  {
    name: "Choux",
    price: 1.8,
    stock: 84
  },
  {
    name: "Tomate",
    price: 4.99,
    stock: 52
  }];

/** Q1
 *  Ecrire une fonction concatArray qui prend en PARAMETRE deux tableaux tab1 et tab2 et qui RETOURNE un nouveau tableau 
 *  contenant tous les éléments de tab1 et tous les éléments de tab2 (ordre indifférent).
 */



/** Q2
 *  Modifier la déclaration de products pour qu'il contienne tous les éléments des tableaux fruits et de vegetables.
 * 
 *  Vérifier dans la console du navigateur que products contient bien tous les éléments de fruits et de vegetables.
 */
let products = undefined;


/** Q3
 *  Ecrire une fonction getProduct qui prend en paramètre le nom d'un produit et qui retourne le produit correspondant dans products.
 *  On retournera l'objet qui décrit le produit {name, price, stock}.
 *  Si le produit n'existe pas, la fonction retourne null.
 * 
 *  Vérifier dans la console du navigateur que getProduct retourne bien le produit correspondant au nom passé en paramètre.
 */

/** Q4
 *  Ecrire une fonction getPrice qui prend en paramètre le nom d'un produit et qui retourne le prix du produit.
 *  Si le produit n'existe pas, la fonction retourne -1.
 * 
 *  Vérifier dans la console du navigateur que getPrice retourne bien le prix du produit correspondant au nom passé en paramètre.
 */

/** Q5
 *  Ecrire une fonction getStock qui prend en paramètre le nom d'un produit et qui retourne le stock du produit.
 *  Si le produit n'existe pas, la fonction retourne -1.
 * 
 *  Vérifier dans la console du navigateur que getStock retourne bien le stock du produit correspondant au nom passé en paramètre.
 */

/** Q6
 *  Ecrire une fonction getStockPrice qui prend en paramètre le nom d'un produit
 *  et qui retourne la valeur total de son stock.
 *  Si le produit n'existe pas, la fonction retourne -1.
 * 
 *  Vérifier dans la console du navigateur que getStockPrice retourne bien la valeur totale du stock du produit correspondant au nom passé en paramètre.
 */

/** Q7
 *  Ecrire une fonction getStockWeight qui retourne le poids total de tous les produits en stock.
 * 
 *  Quel est le poids total de tous les produits en stock ? 
 */

/** Q8
 *  Ecrire une fonction getStockPriceTotal qui retourne la valeur totale de tous les produits en stock.
 * 
 *  Quel est la valeur totale de tous les produits en stock ? 
 */

/** Q9
 *  Ecrire une fonction getMostExpensiveProduct qui retourne le produit le plus cher (au kilo).
 * 
 *  Quel est le produit le plus cher ? 
 */

/** Q10
 *  Ecrire une fonction getLowestStockProduct qui retourne le produit qui a le moins de stock.
 * 
 *  Quel est le produi avec le stock le plus faible ?
 */

/** Q11
 *  Ecrire une fonction getMostExpensiveProductStock qui retourne le produit dont le stock a le plus de valeur.
 * 
 *  Quel est le produit dont le stock a le plus de valeur ? -> Banane
 */

/** Q12
 *  Ecrire une fonction filterProductsByPrice qui prend en paramètre un prix minimum (minPrice) et un prix maximum (maxPrice)
 *  et qui retourne un tableau contenant tous les produits dont le prix est compris entre minPrice (inclus) et maxPrice (inclus)
 * 
 *  Quels sont les produits dont le prix est compris entre 2 et 4 ? -> Banane, Pomme, Orange, Poire, Poireau
 */
