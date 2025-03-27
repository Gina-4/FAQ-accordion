let button1 = document.getElementById("button1");
let toggle = function (para, button) {
  let show = para.style.display === "none";
  if (show) {
    button.src = "/assets/images/icon-minus.svg"
    para.style.display = "block";
  } else {
    button.src = "/assets/images/icon-plus.svg"
    para.style.display = "none";
  }
};

let para1 = document.getElementById("para1");
button1.addEventListener("click", () => toggle(para1, button1));
let para2 = document.getElementById("para2");
button2.addEventListener("click", () => toggle(para2, button2));
let para3 = document.getElementById("para3");
button3.addEventListener("click", () => toggle(para3, button3));
let para4 = document.getElementById("para4");
button4.addEventListener("click", () => toggle(para4, button4));