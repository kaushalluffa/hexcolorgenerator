const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
let c = 0;
count.textContent = c;
const subVal = () => {
  c -= 1;
  count.textContent = c;
  if (c < 0) {
    count.style.color = "red";
  }
};
const resetVal = () => {
  c = 0;
  count.textContent = c;
  if (c == 0) {
    count.style.color = "white";
  }
};
const addVal = () => {
  c += 1;
  count.textContent = c;
  if (c > 0) {
    count.style.color = "green";
  }
};

subtract.addEventListener("click", subVal);
reset.addEventListener("click", resetVal);
add.addEventListener("click", addVal);
