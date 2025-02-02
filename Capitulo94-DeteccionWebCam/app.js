const d = document;
const n = navigator;

d.addEventListener("DOMContentLoaded", () => {
  getWebcam()
  getScreen()
})


function getWebcam(){
  const video = d.querySelector("#webcam")
  n.mediaDevices.getUserMedia({video: MediaSource, audio: false})
  .then(stream => {
    video.srcObject = stream
    video.play()
  })
  .catch(err => console.log(err))
}
// El metodo getDisplayMedia toma la pantalla, Bildschrimaufnahme