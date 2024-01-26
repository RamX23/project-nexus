let butto=document.querySelector(".login");
let inp=document.querySelector("#id");


function check (){
    console.log("calle");
    if(inp.value===""){
        alert("error");
        console.log("error");
    }
};
butto.addEventListener("click",check);
