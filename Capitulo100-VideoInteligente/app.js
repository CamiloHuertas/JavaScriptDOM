const d = document
const w = window

d.addEventListener("DOMContentLoaded" , () => {
  const videos = d.querySelectorAll("video[data-smart-video]")

  let options = {
    threshold: 1
  }

  const observer = new IntersectionObserver(cb, options)

  function cb(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.play()
      } else {
        entry.target.pause()
      }

      
      
      w.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible" ? entry.target.play() : entry.target.pause() 
      })
      
    })
  }
  
  videos.forEach((vid) => observer.observe(vid))
  
  
})