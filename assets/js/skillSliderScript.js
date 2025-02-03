let webImage = document.getElementById("imageWeb");             //0
let pyImage = document.getElementById("imagePython");           //1
let mathImage = document.getElementById("imageMath");           //2
let graphicImage = document.getElementById("imageGraphic");     //3
let editImage = document.getElementById("imageEdit");           //4

let webDesc = document.getElementById("webdesc");
let pyDesc = document.getElementById("pydesc");
let mathDesc = document.getElementById("mathdesc");
let graphicDesc = document.getElementById("graphicdesc");
let editDesc = document.getElementById("editdesc");

let current = 0;

function prevSlide() {
  switch (current) {
    case 0:
      current = 4;
      webImage.style.display = "none";
      editImage.style.display = "block";
      webDesc.style.display = "none";
      editDesc.style.display = "block";
      break;
    case 1:
      current = 0;
      pyImage.style.display = "none";
      webImage.style.display = "block";
      pyDesc.style.display="none";
      webDesc.style.display="block";
      break;
    case 2:
      current = 1;
      mathImage.style.display = "none";
      pyImage.style.display = "block";
      mathDesc.style.display="none";
      pyDesc.style.display="block";
      break;
    case 3:
      current = 2;
      graphicImage.style.display = "none";
      mathImage.style.display = "block";
      graphicDesc.style.display = "none";
      mathDesc.style.display = "block";
      break;
    case 4:
      current = 3;
      editImage.style.display = "none";
      graphicImage.style.display = "block";
      editDesc.style.display = "none";
      graphicDesc.style.display = "block";
      break;
  }
}

function nextSlide() {
  switch (current) {
    case 0:
      current = 1;
      webImage.style.display = "none";
      pyImage.style.display = "block";
      webDesc.style.display = "none";
      pyDesc.style.display = "block";
      break;
    case 1:
      current = 2;
      pyImage.style.display = "none";
      mathImage.style.display = "block";
      pyDesc.style.display="none";
      mathDesc.style.display="block";
      break;
    case 2:
      current = 3;
      mathImage.style.display = "none";
      graphicImage.style.display = "block";
      mathDesc.style.display = "none";
      graphicDesc.style.display = "block";
      break;
    case 3:
      current = 4;
      graphicImage.style.display = "none";
      editImage.style.display = "block";
      graphicDesc.style.display = "none";
      editDesc.style.display = "block";
      break;
    case 4:
      current = 0;
      editImage.style.display = "none";
      webImage.style.display = "block";
      editDesc.style.display = "none";
      webDesc.style.display = "block";
      break;
  }
}