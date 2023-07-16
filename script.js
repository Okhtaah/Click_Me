"use strict";

const sadFace = document.querySelector(".sad"); //closed
const happyFace = document.querySelector(".happy"); //open

//Add event listener
sadFace.addEventListener("click", () => {
  if (happyFace.classList.contains("happy")) {
    happyFace.classList.add("active");
    sadFace.classList.remove("active");
  }
});

happyFace.addEventListener("click", () => {
  if (sadFace.classList.contains("sad")) {
    sadFace.classList.add("active");
    happyFace.classList.remove("active");
  }
});
