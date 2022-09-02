document.addEventListener("DOMContentLoaded", () => {
  const liste = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
  liste.sort(() => 0.5 - Math.random());

  const containerEl = document.querySelector(".container");
  const sonucEl = document.querySelector("#sonuc");
  const mesajEl = document.querySelector(".mesaj");

  let secilen = [];
  let secilenId = [];
  let kazanilan = [];

  const yerlestir = () => {
    for (let i = 0; i < liste.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", cevir);
      containerEl.appendChild(card);
    }
  };

  const kontrol = () => {
    const cards = document.querySelectorAll("img");
    const birinci = secilenId[0];
    const ikinci = secilenId[1];

    if (birinci == ikinci) {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesajEl.innerHTML = `<h3>Aynı şeyi tıkladınız!</h3>`;
    } else if (secilen[0] === secilen[1]) {
      mesajEl.innerHTML = `<h3>Doğru eşleştirdiniz!</h3>`;
      cards[birinci].setAttribute("src", "images/white.png");
      cards[ikinci].setAttribute("src", "images/white.png");
      cards[birinci].removeEventListener("click", cevir);
      cards[ikinci].removeEventListener("click", cevir);
      kazanilan.push(secilen);
    } else {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesajEl.innerHTML = `<h3>Tekrar Deneyiniz!</h3>`;
    }
    secilen = [];
    secilenId = [];
    sonucEl.textContent = kazanilan.length;
    if (kazanilan.length === liste.length / 2) {
      sonucEl.textContent = "Tebrikler!.. Hepsini doğru eşleştirdiniz.";
    }
  };

  const cevir = (e) => {
    let cardId = e.target.getAttribute("data-id");
    secilen.push(liste[cardId].name);
    secilenId.push(cardId);
    e.target.setAttribute("src", liste[cardId].img);
    if (secilen.length === 2) {
      setTimeout(kontrol, 500);
    }
  };

  yerlestir();
});
