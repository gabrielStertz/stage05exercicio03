import Controls from "./controls.js"
import {toggle} from './utils.js'
import Timer from './timer.js'
import { elements } from "./elements.js"
import Sound from './sounds.js'

const sound = Sound()
const controls = Controls({
  elements,
  toggle,
  sound
})
const timer = Timer({
  elements,
  controls,
  sound
})

elements.playButton.addEventListener('click', () => {
  controls.play()
  timer.countDown()
})
elements.pauseButton.addEventListener('click', () => {
  controls.pause()
  timer.hold()
})

elements.stopButton.addEventListener('click', () => {
  sound.buttonPressAudio.play()
  timer.hold()
  timer.reset()
  controls.reset()
})
elements.setButton.addEventListener('click', () => {
  controls.set()
  toggle(elements.stopButton, elements.setButton)
  toggle(elements.playButton, elements.pauseButton)
  timer.countDown()
})

elements.soundOn.addEventListener('click', () => {
  sound.buttonPressAudio.play()
  toggle(elements.soundOn, elements.soundOff)
  sound.bgAudio.pause()
})
elements.soundOff.addEventListener('click', () => {
  sound.buttonPressAudio.play()
  toggle(elements.soundOn, elements.soundOff)
  sound.bgAudio.play()
})