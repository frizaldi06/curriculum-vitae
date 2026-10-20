const btnEn = document.getElementById("En");
const btnJp = document.getElementById("Jp");

if (btnEn) {
  btnEn.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

if (btnrentcar) {
  btnEn.addEventListener("click", () => {
    window.location.href = "./rentcar.html";
  });
}

if (btnJp) {
  btnJp.addEventListener("click", () => {
    window.location.href = "./index-jp.html";
  });
}



