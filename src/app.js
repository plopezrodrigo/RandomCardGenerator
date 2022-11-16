/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let values = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9"];
  let randomValues = Math.floor(Math.random() * values.length);
  let suits = ["♥", "♦", "♣", "♠"];
  let randomsuits = Math.floor(Math.random() * suits.length);
  document.querySelector("#randomNumber").innerHTML = values[randomValues];
  document.querySelector("#topSuit").innerHTML = suits[randomsuits];
  document.querySelector("#bottomSuit").innerHTML = suits[randomsuits];
  if (randomsuits <= 1) {
    document.querySelector("#topSuit").classList.add("red");
    document.querySelector("#bottomSuit").classList.add("red");
  }
};
