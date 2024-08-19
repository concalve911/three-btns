"use strict";

const btnContainer = document.querySelector(".btn__inner");

btnContainer.addEventListener("click", (event) => {
  const clikedElement = event.target;

  if (clikedElement.tagName === "BUTTON") {
    alert(`You press ${clikedElement.textContent}`);
  }
});
