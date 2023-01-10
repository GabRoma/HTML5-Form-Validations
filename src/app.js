/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { placements } from "@popperjs/core";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var form = document.getElementById("form");

  form.addEventListener("submit", prueba);
  let allValues = document.querySelectorAll(
    "input[type=text], input[type=number], textarea"
  );

  let alertError = document.getElementById("alertError");
  let state = document.getElementById("inputState");
  let please = document.getElementById("please");

  function prueba(e) {
    e.preventDefault();
    for (var values of allValues) {
      if (values.value === "") {
        values.style.background = "pink";
        alertError.classList.remove("invisible");
        values.placeholder = "incomplete";
      } else {
        console.log("All good, form send");
        values.style.background = "#fff";
        alertError.classList.add("invisible");
      }
    }
    if (state.value === "Pick a state") {
      console.log("El campo state está vacío");
      alertError.classList.remove("invisible");
      state.style.background = "pink";
    } else {
      alertError.classList.add("invisible");
      state.style.background = "#fff";
    }
    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (!elementoActivo) {
      console.log("El campo credit card esta vacio");
      alertError.classList.remove("invisible");
      please.classList.remove("invisible");
    } else {
      please.classList.add("invisible");
    }
  }
};
