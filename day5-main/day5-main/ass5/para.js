function applyColor(color) {
    let ptag = document.querySelector("p");
    ptag.style.color = color;
  }
  
  function toggleDisable() {
    let ptag = document.querySelector("p");
    let buttons = document.querySelectorAll(".color-buttons button");
    let toggleButton = document.querySelector(".toggle-button button");
  
    if (ptag.classList.contains("disabled")) {
      ptag.classList.remove("disabled");
      toggleButton.textContent = "Disable";
      buttons.forEach((button) => (button.disabled = false));
    } else {
      ptag.classList.add("disabled");
      toggleButton.textContent = "Enable";
      buttons.forEach((button) => (button.disabled = true));
    }
  }
  