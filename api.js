const URL = "https://catfact.ninja/fact";

const para=document.querySelector("#fact");
const btn=document.querySelector("#btn1");



const getfacts = async () => {
    try {
        console.log("getting data...");

        let response = await fetch(URL);
        let data = await response.json();

        console.log(response)
        
        // console.log(data.fact);
        para.innerText=data.fact;
    } catch (err) {
        console.log("Error:", err);
    }
};

btn.addEventListener("click",getfacts);
