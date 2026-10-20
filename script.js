document.addEventListener("DOMContentLoaded", () => {
  const btnRentcar = document.getElementById("rentcar");
  const btnEn = document.getElementById("En");
  const btnJp = document.getElementById("Jp");

  if (btnEn) {
    btnEn.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }

  if (btnRentcar) {
    btnRentcar.addEventListener("click", () => {
      window.location.href = "./rentcar.html";
    });
  }

  if (btnJp) {
    btnJp.addEventListener("click", () => {
      window.location.href = "./index-jp.html";
    });
  }
});
