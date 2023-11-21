
        /** Fonction récursive
         *  
         *  Une fonction récursive est une fonction qui s'appelle elle-même.
         *  Son code s'exécutera donc autant de fois qu'elle s'appelera.
         *  Mais en général, les données sur lesquelles elle s'exécute sont différentes d'un appel à l'autre.
         *  C'est ce qui permet de faire des choses intéressantes.
         *  Il faut toutefois faire attention à ce que la fonction ne s'appelle pas indéfiniment.
         *  Il faut donc toujours prévoir un cas d'arrêt qui le plus souvent est lié à la taille des données.
         *  Typiquement quand il n'y a plus de données ou en dessous d'un certain seuil, on s'arrête.
         */


        /** Le triangle de Sierpinski
         * 
         *  Le triangle de Sierpinski est une fractale plutôt connue que l'on doit
         *  à Waclaw Sierpinski qui l'a décrite en 1915.
         *  Il s'agit d'un motif récursif que l'on peut obtenir en partant d'un triangle ABC :
         *  - on calcule les milieux des 3 côtés du triangles
         *  - on obtient ainsi 4 sous-triangles, un dont les sommets sont les milieux 
         *    et 3 dont les sommets sont 2 milieux et 1 des sommets de ABC
         *  - on dessine le triangle dont les sommets sont les milieux
         *  - on recommence le processus sur les 3 autres triangles (pas sur celui du milieu)
         * 
         *  Il faut bien sûr s'arrêter à un moment ou un autre et de toute évidence, la taille
         *  d'un pixel est notre limite. Aussi on ne propagera la récursion que si et seulement
         *  si les 3 côtés d'un triangle ont chacun une longueur supérieure à 1 pixel
         * 
         *  La vidéo ojectif.mp4 illustre le résultat à obtenir
         * 
         *  Pour atteindre votre objectif vous disposez des fonctions length, drawSegment et midSegment
         *  décrire ci-dessous.
         * 
         *  Une fonction sirepinskiTriangles est déjà définie à la fin de ce fichier.
         *  Mais elle ne fait pas ce qui est attendu.
         *  Prenez le temps de tester et de comprendre ce qu'elle fait.
         *  Puis modifier la pour qu'elle fasse ce qui est attendu.
         */
         
       
         /** length
          *  paramètre A : un point du plan. Objet au format {x: xpixel, y: ypixel}
          *  paramètre B : un point du plan. Objet au format {x: xpixel, y: ypixel}
          *  > retourne la longueur en pixels du segment [AB]
         */
         let length = function(A, B){
             return Math.sqrt( (B.x-A.x)*(B.x-A.x) + (B.y-A.y)*(B.y-A.y) );
         }
 
        
         /** drawSegment
          *  paramètre A : un point du plan. Objet au format {x: xpixel, y: ypixel}
          *  paramètre B : un point du plan. Objet au format {x: xpixel, y: ypixel}
          * 
          *  Dessine sur le canvas le segment [AB]
         */
         let drawSegment = function(A, B){
             ctx.beginPath();
             ctx.moveTo(A.x, A.y);
             ctx.lineTo(B.x, B.y);
             ctx.closePath();
             ctx.stroke();
         }
 
         /** midSegment
          * paramètre A : un point du plan. Objet au format {x: xpixel, y: ypixel}
          * paramètre B : un point du plan. Objet au format {x: xpixel, y: ypixel}
          * > retourne le milieu du segment [AB] au format {x: xpixel, y: ypixel}
          */
         let midSegment = function(A, B){
             return { x: (A.x+B.x)/2, y: (A.y+B.y)/2 };
         }
 
        
         /** sierpinskiTriangles
          *  Cette fonction est automatiquement appelée tous les 3 clics sur le canvas
          *  avec pour paramètres A, B, C les coordonnées des 3 derniers clics (au format {x: xpixel, y: ypixel})
          *  Vous n'avez pas besoin de l'appeler cette fonction vous même.
          * */
         let sierpinskiTriangles = function(A, B, C){
             let max = 1;
             if (length(A,B)>max && length(B,C)>max && length(A,C)>max){
                 let Mab = midSegment(A, B);
                 let Mbc = midSegment(C, B);
                 let Mca = midSegment(A, C);
                 drawSegment(Mab,Mbc);
                 drawSegment(Mbc,Mca);
                 drawSegment(Mca,Mab);
                 sierpinskiTriangles(Mab, Mbc, Mca);
             }
         }


         