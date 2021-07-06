/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "favorite", "mini"];
  let noun = ["jogger", "racoon", "person", "dad"];
  let final = [".com", ".net", ".es"];
  for (let i = 0; i < pronoun.length; i++) {
    let pronounIndex = pronoun[Math.floor(Math.random() * i)];
    for (let j = 0; j < adj.length; j++) {
      let adjIndex = adj[Math.floor(Math.random() * j)];
      for (let x = 0; x < noun.length; x++) {
        let nounIndex = noun[Math.floor(Math.random() * x)];
        for (let y = 0; y < final.length; y++) {
          let finalIndex = final[Math.floor(Math.random() * y)];
          console.log(pronounIndex + adjIndex + nounIndex + finalIndex);
        }
      }
    }
  }
};
