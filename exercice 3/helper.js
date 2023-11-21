
let getRandomArray = function()
{
    let res = [];
    let size = 8 + Math.floor( 9 * Math.random() );
    for (let i=0; i<size; i++){
        res.push( Math.floor( 20*Math.random()) + 0.5*Math.round( Math.random() ) );
    }
    return res;
}


let drawSquare = function(index=0, label="", where)
{
    let container = document.createElement("div");
    let number = document.createElement("div");
    let ind = document.createElement("div"); 
    container.classList.add("arrayElement");
    number.classList.add("arrayValue");
    ind.classList.add("arrayIndex");
    container.append(number, ind);

    number.append(label);
    ind.append(index);

    document.querySelector(where).append(container);
}

let renderArray = function(tab, w)
{
    
    for(let i in tab)
    {
        drawSquare(i, tab[i], w);
    }
   // document.querySelector('#content').innerHTML += "<br><br>";
}

let litCell = function(value){
    let numbers = document.querySelectorAll(".arrayValue");
    numbers.forEach( nb =>  {
        if (nb.textContent==value) nb.classList.add("lighted");
    });
   
}

let getInputValue = function(){
    let val = document.querySelector("input").value;
    return parseFloat(val);
}


let switchOffCells = function()
{
    document.querySelectorAll(".arrayValue").forEach(v=>{v.classList.remove("lighted")})
}