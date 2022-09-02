//Kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanalara
//%50 indirim, diğerlerine %10 indirim uygulayarak bunu mesajla gösterelim.
function hesapla(){
    let yas = document.querySelector("#yas").value;
    let fiyat = document.querySelector("#fiyat").value;
    let indirim;
    //Ternary çözümü
    /* let indirim = yas>=65 ? fiyat*0.5 : fiyat*0.9; */

    //If Else Çözümü
/*     if(yas>=65)
        // indirim=fiyat-fiyat*50/100;
        indirim=fiyat*0.50;
    else
        indirim=fiyat*0.90; */
     
    //Short Cut Çözümü
    yas>=65 && (indirim=fiyat*0.50);
    yas<65 && (indirim=fiyat*0.90);

    document.querySelector("#mesaj").innerText = `Ürünün indirimli fiyatı : ${indirim}`
    
}
