let redBtns = document.querySelectorAll("button");
let header = document.querySelector("h1");

redBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    header.style.color = `${this.id}`;
    header.style.width = "100px";
  });
});
