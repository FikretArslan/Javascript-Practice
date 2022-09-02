//Kullanıcının girdiği yaş ve cinsiyet bilgisine göre askere gidip gidemeyeceğini 
//mesaj olarak bildirin.
function durum(){
let yas = document.querySelector("#yas").value;
let rb_erkek = document.querySelector("#erkek");
let rb_kadin = document.querySelector("#kadin");
let mesaj = document.querySelector("#msg");


if(yas>=20 && rb_erkek.checked){
    mesaj.innerHTML = `<strong><em>Askere gidebilirsiniz.</em></strong>`;
    mesaj.classList.add("yesil")
}
else{
    mesaj.innerHTML = `<strong><em>Askere gidemezsiniz.</em></strong>`;
    mesaj.classList.add("kirmizi")
}

}
function sil(){
   document.querySelector("#msg").innerText = "" ;
   document.querySelector("#msg").style.background="azure";
}

