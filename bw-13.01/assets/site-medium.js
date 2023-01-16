let nav = document.querySelector("nav")
let lista = document.querySelector(".button-nav")
const header = document.querySelector("header").offsetHeight

window.onscroll = function () {
  if (window.scrollY > header) {
    nav.classList.add("bianca")
    lista.classList.add("button-verde")
  } else {
    nav.classList.remove("bianca")
    lista.classList.remove("button-verde")
  }
}

const m = document.querySelectorAll("svg g[stroke-linecap='butt']")
const intervallo = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * m.length)
  const ranM = m[randomNumber]
  ranM.getElementsByClassName.transition = "1s"
  if (ranM.getAttribute("opacity") == 1) {
    ranM.setAttribute("opacity", "0")
  } else {
    ranM.setAttribute("opacity", "1")
  }
}, 40)
