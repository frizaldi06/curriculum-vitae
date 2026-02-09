const btnEn = document.getElementById("En");
const btnJp = document.getElementById("Jp");

if (btnEn) {
  btnEn.addEventListener("click", () => {
    window.location.href = "/curriculum-vitae/index.html";
  });
}

if (btnJp) {
  btnJp.addEventListener("click", () => {
    window.location.href = "/curriculum-vitae/index-jp.html";
  });
}
