function hello(){
    console.log("Hello bhai logo kia haal hai.");
}


hello();


const multi=(a,b)=>{
    return a*b;
}

console.log(multi(5,6));


let arr=[1,2,3,4,5];

arr.forEach(function  oddprint(val){
    if(val%2!=0) {
        console.log(val);
    }
});

arr.forEach(function  oddprint(val,idx){
    
        console.log(val,idx);
    
});
// this is only for eth array

arr.forEach(function  oddprint(val,idx,arr){
    
        console.log(val,idx,arr);
    
});


// highe rorder fucntion or method ar ethe function that take another function or method as a parmater and return teh method or function 


// Some more array methods

// for each do work on array whiel mapp create another array


let newarr=arr.map((val)=>{
    return val*2;
})

console.log(newarr);


let boolarr=arr.filter((val)=>{
    return val%2==0
})
console.log(boolarr);


let sum=0;

let output =arr.reduce((sum,val) =>{
    return  sum+val;
});

console.log(output);

let prev=0;

let max=arr.reduce((pre,curr)=>{
    return prev>curr?prev:curr;
});

console.log(max);


// Practice questions


let marks=[98,99,78,98,34];

let ans=marks.filter((val)=>{
    return val>90;
})

console.log(ans);