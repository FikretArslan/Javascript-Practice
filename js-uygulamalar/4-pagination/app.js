import fetchFollowers from "./fetchFollowers.js";
import displayButtons from "./displayButtons.js";
import paginate from "./paginate.js";
import display from "./displayFollowers.js";
/* 
1)display fonksiyonuna dizi göndermem gerekiyor.
2)displayButtons fonksiyonuna üç parametre göndermem gerekiyor:
a.butonları yerleştireceğim yerin bilgisi,
b.sayfaların bilgisi,
c.index değeri
3)fetchFollowers methodumu çağırarak oradaki verileri paginate methoduna
göndermem gerekiyor.
4)butonların ilerleme veya bir öncekine gitme durumlarıyla ilgili
ayarlamaları yaptığım fonksiyonları oluşturmam gerekiyor.
*/
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  display(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }

  setupUI();
});

window.addEventListener("load", init);
