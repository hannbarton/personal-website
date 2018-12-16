const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  // for each section, do the calculations
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection

    const image = section.querySelector("img")
    const contentTag = section.querySelector("div")

    // weight down this distance
    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2

    // for all the even sections, rotate the other way
    // is the index divisible by two
    // is the index's remainder zero?
    // the modulo operator 5 % 2 = 1, 4 % 2 = 0
    if (index % 2 == 1) {
      rotation = rotation * - 1
    }

    // apply the parallax
    image.style.transform = `rotate(${rotation}deg)`

    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`

    // check the background
    if (distanceToSection > - 100) {
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = dataBackground
    }
  })
}

// // run on page load
// addMovement()

// // run on scroll
// document.addEventListener("scroll", function () {
//   addMovement()
// })

// // run on resize
// window.addEventListener("resize", function () {
//   addMovement()
// })

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const addMove = function() {
  if (viewportWidth < 1066) {

  }
  else {
    addMovement()
    document.addEventListener("scroll", function () {
      addMovement()
    })
    window.addEventListener("resize", function () {
      addMovement()
    })
  }
}

addMove()
