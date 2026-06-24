// alert("Hello");
// console.dir(window.document);
// console.dir(document.body);

// document.body.style.backgroundColor="green";
// document.body.childNodes[1].innerText="abcd";

// let h=document.getElementById("heading");
// console.log(h);

// let p=document.getElementsByTagName("p");
// console.log(p);

// let firstel=document.querySelector("p");
// console.log(firstel);

// let allel=document.querySelectorAll("p");
// console.log(allel);


// for teh class tag we mostly us ethe  queryslectorall 
// for teh id we mostly use the queryselectorr only

// using .before a classname
// using # before teh id


// console.log(document.body.firstChild)


// let con=document.getElementById("heading");
// console.dir(con.innerText);

// con.innerText=con.innerText+"from apna college";


// let data=document.querySelectorAll(".box");

// data[0].innerText=data[0].innerText+" PUCIT ";
// data[1].innerText=data[1].innerText+" FCIT ";
// data[2].innerText=data[2].innerText+" CSS ";


// Dom part 2
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let par=document.querySelector("p");
// console.log(par.setAttribute("para","newclass"));

// let div=document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.visibility="hidden";

// insert teh elements   firts creta and the then add

let el=document.createElement("button");
el.innerText="Click me";
el.style.backgroundColor="red";
el.style.color="white";
// console.log(el.innerText);

let div=document.querySelector("div");
// // div.append(el);
div.prepend(el);
// // div.after(el);
// div.before(el);


let newheading=document.createElement("h1");
newheading.innerHTML="<i>this is teh new one </i>";  


let bod=document.querySelector("body");
bod.prepend(newheading);


let para=document.querySelector("p");
para.remove();

