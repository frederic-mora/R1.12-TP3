  // globals
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(0,25,0,0.5)";

  let handler = function(ev){
      let P = {x:ev.clientX, y:ev.clientY};
      points.push(P);
      if (points.length==3){
          let A = points.shift();
          let B = points.shift();
          let C = points.shift();
          drawSegment(A,B);
          drawSegment(B,C);
          drawSegment(C,A);
          sierpinskiTriangles(A,B,C);
      }
  }
  
  canvas.addEventListener("click", handler);


  let points = []; // petit tableau pour stocker les points/clics sur le canvas (point au format {x: xpixel, y: ypixel})
 