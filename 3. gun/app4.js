//Girilen iki sayı arasındaki 4'e bölünüp 8'e bölünmeyen sayıların toplamını ve adedini mesaj
//olarak yazdırın

function hesapla(){
    let sayi1 = document.querySelector("#sayi1").value;
    sayi1=Number(sayi1);
    let sayi2 = document.querySelector("#sayi2").value;
    sayi2=Number(sayi2);
    let mesaj = document.querySelector("#msg");
    let toplam = 0 ;
    let sayac = 0;

    if(sayi1>sayi2){
        let temp = sayi1;
        sayi1 = sayi2;
        sayi2 = temp;
    }
    console.log(sayi1);
    console.log(sayi2);

    for(let i=sayi1;i<=sayi2;i++){
    
        if(i%4==0 && i%8!=0){
            toplam+=i;
            sayac++;
        }
    }
    console.log(toplam)
    
    mesaj.innerHTML=`Sayıların adedi : ${sayac}, Toplamı : ${toplam}`
}