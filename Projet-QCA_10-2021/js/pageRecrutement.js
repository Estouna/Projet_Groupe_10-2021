// Formulaire Pop-up
const button1 = document.getElementById("button1");
const overlay = document.querySelector(".overlay");
button1.addEventListener("click", function () {
  overlay.style.display = "flex";
}
)

const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
  overlay.style.display = "flex";
}
)

const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  overlay.style.display = "flex";
}
)

 var Cacher = true;
 function CacherDiv() {
 if (Cacher)
    document.getElementsByClassName('overlay').style.display = 'none';
  }

