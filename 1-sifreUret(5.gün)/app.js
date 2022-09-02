/* elementlerime ulaşıp değer ataması yapacağım */
const ekranEl = document.querySelector("#ekran");
const lenEl = document.querySelector("#len");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const sayiEl = document.getElementById("sayi");
const sembolEl = document.getElementById("sembol");
const uretEl = document.getElementById("uret");

/* büyük-küçük harf, sayı ve sembollerimi bir değere atıyorum. */
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$%^&*()_+=";

/* random olarak küçük harf getiren method */
const getLowercase = () => {
  return kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
};
/* random olarak büyük harf getiren method */
const getUppercase = () => {
  return buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
};
/* random olarak sayi getiren method */
const getNumber = () => {
  return sayi[Math.floor(Math.random() * sayi.length)];
};
/* random olarak sembol getiren method */
const getSembol = () => {
  return sembol[Math.floor(Math.random() * sembol.length)];
};

/* kullanıcının seçimlerine göre sifre üreten temel method */
const sifreUret = () => {
  const len = lenEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }
  if (lowerEl.checked) {
    password += getLowercase();
  }
  if (sayiEl.checked) {
    password += getNumber();
  }
  if (sembolEl.checked) {
    password += getSembol();
  }

  for (let i = password.length; i < len; i++) {
    const x = tamamla();
    password += x;
  }

  ekranEl.innerText = password;
};
/*kullanıcının seçimleriyle belirlediği şifre uzunluğu arasındaki boşluğu
yine kullanıcının seçimlerine göre tamamlama methodu  */

const tamamla = () => {
  const ekle = [];
  if (upperEl.checked) {
    ekle.push(getUppercase());
  }

  if (lowerEl.checked) {
    ekle.push(getLowercase());
  }
  if (sayiEl.checked) {
    ekle.push(getNumber());
  }
  if (sembolEl.checked) {
    ekle.push(getSembol());
  }
  if (ekle.length === 0) return "";
  return ekle[Math.floor(Math.random() * ekle.length)];
};

/* buton tıklandığında sifreUret methodum gelsin */
uretEl.addEventListener("click", sifreUret);
