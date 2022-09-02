let body = document.querySelector("body");
let renkAd = document.querySelector(".icerik h2 #renk");
let buton = document.querySelector("#renkDegistir");

const renkler = ["Yellow","Blue","Green","Red","Aqua","Gray","Pink"];

let renkIndex;

const renkDegistir = () => { 

    renkIndex = Math.floor(Math.random()*renkler.length);
    console.log(renkIndex);
    body.style.backgroundColor = renkler[renkIndex];
    renkAd.innerText = renkler[renkIndex];
    buton.innerText = renkler[renkIndex];
 }

//  buton.addEventListener("click",()=> { 

//     renkIndex = Math.floor(Math.random()*renkler.length);
//     console.log(renkIndex);
//     body.style.backgroundColor = renkler[renkIndex];
//     renkAd.innerText = renkler[renkIndex];
//     buton.innerText = renkler[renkIndex];
// })