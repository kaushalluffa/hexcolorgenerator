const color = document.querySelector(".color");

const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");

const genColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  color.textContent = `#${randomColor}`;

  copy.innerHTML = `<i class="fas fa-clipboard"></i>Copy to clipboard`;
};
const copyToClipboard = () => {
  navigator.clipboard.writeText(color.textContent);
  copy.innerHTML = `<i class="fas fa-check"></i>Copied to Clipboard`;
};
generate.addEventListener("click", genColor);
copy.addEventListener("click", copyToClipboard);
