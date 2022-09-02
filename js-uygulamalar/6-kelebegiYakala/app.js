const kareler = document.querySelectorAll(".kare");
const resim = document.querySelector(".resim");
const kalanZaman = document.querySelector("#kalan-zaman");
const score = document.querySelector("#score");
const mesaj = document.querySelector(".mesaj");

let sonuc = 0;
let konum;
let zaman = 20;

/* random olarak bir kare divi seçilsin ve buna resim eklensin,
önceki resim kaldırılsın. */
const rndmKare = () => {
  kareler.forEach((kare) => {
    kare.classList.remove("resim");
  });
  let rndmKare = kareler[Math.floor(Math.random * 9)];
  rndmKare.classList.add("resim");

  konum = rndmKare.id;
};
/* karelere mousedown özelliğiye idleri kontrol edelim.
random olarak seçilenle aynıysa puan artırılsın ve score a yerleştirilin. */

/* yarımsaniyede bir rndmKare methodu çalışsın. */

/* resim hareket etmeye devam etsin */

/* gerisayım yapılsın ve süre dolunca clear interval yapılsın.
gerisayım methodu sanyede bir çalışsın. */
