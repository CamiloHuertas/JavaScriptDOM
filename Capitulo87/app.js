const d = document,
      w = window

let scrollBtn = d.querySelector(".scrollBox")

let scrollInY 

w.addEventListener("scroll", () => {

  scrollInY = w.scrollY

if (scrollInY >= "300" ) {
  scrollBtn.classList.add("btnActive")
  scrollBtn.classList.remove("btnHidden")
} else {
  scrollBtn.classList.remove("btnActive")
  scrollBtn.classList.add("btnHidden")
}

})

const moveToTop = () => {
  w.scrollTo({
    top: 0,
    behavior:"smooth"
  })
}


scrollBtn.addEventListener("click", moveToTop )