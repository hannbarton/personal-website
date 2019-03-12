const headerTag = document.querySelector("header")
const scrollTag = document.querySelector("#scroll-down")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  if (pixels > 80) {
    headerTag.classList.add("scrolled")

  } else {
    headerTag.classList.remove("scrolled")
    scrollTag.setAttribute("style", "opacity: .0; transition: opacity 2.5s;")
  }
})
