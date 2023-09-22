const form = document.getElementById("myForm");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const validationMessage = document.getElementById("validationMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const valueA = parseFloat(campoA.value);
  const valueB = parseFloat(campoB.value);

  if (isNaN(valueA) || isNaN(valueB)) {
    validationMessage.textContent =
      "Por favor, insira números válidos em ambos os campos.";
    validationMessage.className = "message invalid";
  } else if (valueB > valueA) {
    validationMessage.textContent = "Formulário válido. B é maior que A.";
    validationMessage.className = "message valid";
  } else {
    validationMessage.textContent =
      "Formulário inválido. B deve ser maior que A.";
    validationMessage.className = "message invalid";
  }
});
