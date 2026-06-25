let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     let a=25;
//     console.log("button 1 was lcicked");
//     a++;
//     console.log(a);
// }


// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// btn1.addEventListener("click",()=>{
//     console.log("ADD the event btn 1 ");
// })
// btn1.addEventListener("click",()=>{
//     console.log("ADD the event btn 2 ");
// })

// let handler3=()=>{
//     console.log("ADD the event btn 3 ");
// }
// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",()=>{
//     console.log("ADD the event btn 4 ");
// })


// btn1.removeEventListener("click",handler3)



// for removing the event listener the callback reference must be the same


let dmode=0;
btn1.addEventListener("click",(eve)=>{
    dmode=!dmode;
    if(dmode){
        document.body.style.backgroundColor="black";
        document.body.style.Color="white";
        
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.Color="black";

    }
})

