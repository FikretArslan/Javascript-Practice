let baslat = document.querySelector("#baslat");
let yukari = document.querySelector("#yukari");
let asagi = document.querySelector("#asagi");
let bitir = document.querySelector("#bitir");
let mesaj = document.querySelector("#mesaj");

let hak = 1, alt=1, ust=100, tahmin=0;

baslat.addEventListener("click",()=>{
    baslat.disabled = true;
    yukari.disabled = false;
    asagi.disabled = false;
    bitir.disabled = false;
    hak=1;
    alt=1;
    ust=100;
    sayiTahmin(alt,ust);
})

const sayiTahmin = (alt,ust)=>{
    tahmin = Math.floor(Math.random()*(ust-alt+1)+alt);
    mesaj.innerHTML = `Bilgisayarın Tahmini : ${tahmin} <br><br>
                       <span style="color:red;">Kalan Hak : ${10-hak}`;

    if(hak==10){
        mesaj.innerHTML = "Hakkınız doldu, oyunu kaybettiniz.";
        oyunBitir();
    }
    hak++;
}

yukari.addEventListener("click",()=>{
    alt = tahmin+1; 
    sayiTahmin(alt,ust);

})
asagi.addEventListener("click",()=>{
    ust = tahmin-1; 
    sayiTahmin(alt,ust);
})
bitir.addEventListener("click",()=>{
    mesaj.innerHTML = `Tebrikler, ${hak}. hakkınızda oyunu kazandınız.`
    oyunBitir();
})
const oyunBitir = () => {
    baslat.disabled = false ;
    yukari.disabled = true;
    asagi.disabled = true;
    bitir.disabled = true;
 }


