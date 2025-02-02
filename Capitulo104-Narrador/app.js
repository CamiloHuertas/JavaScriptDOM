const d = document

d.addEventListener("DOMContentLoaded", () => {
  const speechSelect = d.getElementById("speechSelect")
  const speechTextarea = d.getElementById("speechText")
  const speechBtn = d.getElementById("speechRead")

  const speechMsg = new SpeechSynthesisUtterance()

  let voices = []

  window.speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices()
    voices.forEach((voice) => {
      const option = d.createElement("option")
      option.value = voice.name
      option.textContent = `${voice.name} *** ${voice.lang}`

      speechSelect.appendChild(option)
    })
  })
  
  d.addEventListener("change", (e) => {
    if (e.target === speechSelect){
      speechMsg.voice = voices.find(voice => voice.name === e.target.value)
    }
  })

  speechBtn.addEventListener("click", () => {
    speechMsg.text = speechTextarea.value;
    window.speechSynthesis.speak(speechMsg)
  })

})