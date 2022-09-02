//TC Kimlik No kontrol eden bir program yazalım

let buton = document.querySelector("#btnEkle");

document.querySelector("#tck").addEventListener("input",(e)=>{
    let deger = e.target.value;
    if(deger.length==11){
        document.querySelector("#mesaj").innerHTML = "";
        buton.removeAttribute("disabled");
    }
    if(isNaN(deger))
    document.querySelector("#mesaj").innerHTML = "TC Kimlik No  hatalı!";
    
    else{
        if(deger.length > 11){
            document.querySelector("#mesaj").innerHTML = "TC Kimlik No  hatalı!";
            buton.setAttribute("disabled",true);
        }
    }
})

buton.addEventListener("click",()=>{
    document.querySelector("#mesaj").innerHTML = "TC Kimlik No geçerli"
})