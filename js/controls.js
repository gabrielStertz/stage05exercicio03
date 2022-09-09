export default function Controls({
  elements,
  toggle,
  sound
}){
  let timex
  
  function reset(){
    elements.playButton.classList.remove('hide')
    elements.pauseButton.classList.add('hide')
    elements.stopButton.classList.add('hide')
    elements.setButton.classList.remove('hide')
  }
  function play(){
    sound.buttonPressAudio.play()
    toggle(elements.playButton, elements.pauseButton)
    elements.setButton.classList.add('hide')
    elements.stopButton.classList.remove('hide')
  }
  function pause(){
    sound.buttonPressAudio.play()
    toggle(elements.pauseButton, elements.playButton)
  }
  function isNotANumber(value){
    return isNaN(value) || value == ""
  }
  function isNotBetweenZeroAndSixty(value){
    return (value <= 0) || (value > 60)
  }
  function set(){
    sound.buttonPressAudio.play()
    timex = Number(prompt('Determine o timer (minutos)'))
    let timerIsNotANumber = isNotANumber(timex)
    let isNotBetween = isNotBetweenZeroAndSixty(timex)
    while(timerIsNotANumber || isNotBetween){
      if(timerIsNotANumber) {
        alert('Digite apenas Números')
      } else if(isNotBetween){
        alert('Digite um número entre 0 e 60 (minutos)')
      }
      timex = Number(prompt('Determine o timer (minutos)'))
      timerIsNotANumber = isNotANumber(timex)
      isNotBetween = isNotBetweenZeroAndSixty(timex)
    }
    elements.minutes.textContent = String(timex).padStart(2, '0')
  }

  return {reset, play, pause, set}
} 

