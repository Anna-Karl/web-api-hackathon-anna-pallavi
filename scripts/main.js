const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
// console.log(url)


const dropdown = document.querySelectorAll(".dropdown select")
const btn =document.querySelector("#btn")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg=document.querySelector(".msg")
for(let i=0;i< dropdown.length;i++){
    let select = dropdown[i]

    for(currCode in countrylist){
        let element=document.createElement("option");
        element.innerText=currCode;
        element.value=currCode;
        select.append(element)
    }
 select.addEventListener("change",(event)=>{
    changeflag(event.target)

 })
    }
const changeflag=(event)=>{
let currCode =event.value;
let countryCode=countrylist[currCode]
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
let img=event.parentElement.querySelector("img");
img.src=newSrc;

}
btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    let amt=document.querySelector(".amount input");
    let amtV=amt.value
    

    const UrlNew=`${url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json;`
    let response= await fetch (UrlNew)
    let data=await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmt=amtV*rate;
    msg.innerText=`${amtV} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`

})