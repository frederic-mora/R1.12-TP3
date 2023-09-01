
let getRandomArray = function()
{
    let res = [];
    let size = 12 + Math.floor( 17 * Math.random() );
    for (let i=0; i<size; i++){
        res.push( Math.floor( 20*Math.random()) + 0.5*Math.round( Math.random() ) );
    }
    return res;
}


let drawSquare = function(index=0, label="")
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

    document.querySelector('#content').append(container);
}

let renderArray = function(tab)
{
    for(let i in tab)
    {
        drawSquare(i, tab[i]);
    }
}

let switchOnCell = function(index){
    let numbers = document.querySelectorAll(".arrayValue");
    if (0<=index && index <numbers.length)
    {   
        numbers.forEach( nb => nb.classList.remove("lighted") );
        numbers[index].classList.add("lighted");
    }
    else
    {
        console.error(`Cell of index ${index} does not exist`);
    }
}

let getInputValue = function(){
    let val = document.querySelector("input").value;
    return parseFloat(val);
}


let switchOffCells = function()
{
    document.querySelectorAll(".arrayValue").forEach(v=>{v.classList.remove("lighted")})
}