let number = 0
const stamps = [
  "assets/uranus.svg",
  "assets/comet.svg",
  "assets/sputnik.svg",
  "assets/mercury.svg",
  "assets/ursa-major.svg",
  "assets/meteorite.svg",
  "assets/comet-1.svg",
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {

  const img = document.createElement("img")
  img.setAttribute("src", stamps[number])

  img.style.left = (x - window.innerWidth / 2) + "px"
  img.style.top = y + "px"
  img.style.width = "55px"

  stampsTag.appendChild(img)

  number = number + 1
  if (number > stamps.length - 1) {
    number = 0
  }
}

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const addStick = function() {
  if (viewportWidth < 1279) {

  }
  else if (viewportWidth > 1280) {
    document.addEventListener("click", function (event) {
      addStamp(event.pageX, event.pageY)
      document.querySelector("h5").setAttribute("style", "opacity: .0; transition: opacity 1s;")
    })
  }
}

