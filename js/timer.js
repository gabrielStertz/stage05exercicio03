export default function Timer({
  elements,
  controls,
  sound
}){
  const minutes = elements.minutes
  const seconds = elements.seconds
  function reset(){
    minutes.textContent = '00'
    seconds.textContent = '00'
  }
  let timerTimeOut
  function countDown(){
    timerTimeOut = setTimeout(function() {
      let secondsDisplay = Number(seconds.textContent)
      let minutesDisplay = Number(minutes.textContent)
      if(minutesDisplay <= 0 && secondsDisplay <= 0){
        sound.kitchenTimer.play()
        controls.reset()
        return timerTimeOut
      }
      if(secondsDisplay <= 0){
        secondsDisplay = 60
        updateTimerDisplay(minutes, minutesDisplay)
      }
      updateTimerDisplay(seconds, secondsDisplay)
      countDown()
    }, 1000)
  }
  function updateTimerDisplay(minutesOrSeconds, value){
    minutesOrSeconds.textContent = String(value - 1).padStart(2, "0")
  }
  
  function hold(){
    clearTimeout(timerTimeOut)
  }
  return {
    countDown,
    reset,
    hold
  }
}
