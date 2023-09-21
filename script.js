/* Iteration 4: Make the Canvas App Functional */

let groundButton = document.querySelector('#ground-btn');
let ground = document.getElementById('ground');
groundButton.oninput = () => {
  let colorCode = groundButton.value;
  ground.style.fill = colorCode;
}

let bodyButton = document.querySelector("#body-btn");
let body = document.getElementById("body");
bodyButton.oninput = () => {
  let colorCode = bodyButton.value;
  body.style.fill = colorCode;
}

let earsButton = document.getElementById("ears-btn");
let ears = document.getElementById("ears");
earsButton.oninput = () => {
  let colorCode = earsButton.value;
  ears.style.fill = colorCode;
}

let cheeksButton = document.getElementById("cheeks-btn");
let cheeks = document.getElementById("cheeks");
cheeksButton.oninput = () => {
  let colorCode = cheeksButton.value;
  cheeks.style.fill = colorCode;
}


let skyButton = document.getElementById("sky-btn");
let sky = document.getElementById("sky");
skyButton.oninput = () => {
  let colorCode = skyButton.value;
  sky.style.fill = colorCode;
}

let eyesButton = document.getElementById("eyes-btn");
let eyes = document.getElementsByClassName("eyes");

console.log(eyes);

eyesButton.oninput = () => {
  let colorCode=eyesButton.value;
  for(let i=0;i<eyes.length;i++){
        eyes[i].style.fill = colorCode;
  }
}
