let boxes=document.querySelectorAll("#box");
let reset=document.querySelector("#reset");

let turnO=true;

let newgamebtn=document.querySelector("#new-btn");
let msgctr=document.querySelector(".msg-ctn");
let msg1=document.querySelector("#msgX");

const resetG = () =>{
    turnO=true;
    enableB();
    msgctr.classList.add("hide");
}

const disableB = () =>{
    for(let box of boxes){
        box.disabled=true;  
    }
}

const enableB = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";   

    }
}
const winP=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const showWinnner = (winner) =>{
    msg1.innerText = `Congratulation to ${winner}`;
    msgctr.classList.remove("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText ="o";
        turnO=false;
    }
    else{
        box.innerText="x";
        turnO=true;
    }
    box.disabled=true;

    checkWin();
})
});

function checkWin(){
    for(let pattern of winP){

    let posval1=boxes[pattern[0]].innerText;
    let posval2=boxes[pattern[1]].innerText;
    let posval3=boxes[pattern[2]].innerText;

    if(posval1 != "" && posval2 != "" && posval3 != ""){
        if(posval1 == posval2 && posval2 == posval3)
            {
                console.log("winner",posval1);
                showWinnner(posval1);
                disableB();
            }
    }
    }
}

newgamebtn.addEventListener("click",resetG);
reset.addEventListener("click",resetG);