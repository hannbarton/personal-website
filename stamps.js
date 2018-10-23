let number = 0
const stamps = [
  "assets/uranus.svg",
  "assets/comet.svg",
  "assets/sputnik.svg",
  "assets/mercury.svg",
  "assets/ursa-major.svg",
  "assets/sun.svg",
  "assets/meteorite.svg",
  "assets/comet-1.svg",
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {

  const img = document.createElement("img")
  img.setAttribute("src", stamps[number])

  // remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px"
  img.style.top = y + "px"
  img.style.width = "55px"

  stampsTag.appendChild(img)

  // add some audio
  const audio = document.createElement("audio")
  audio.setAttribute("src", "assets/plop.mp3")
  audio.play()

  number = number + 1
  if (number > stamps.length - 1) {
    number = 0
  }
}

document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY)
})
