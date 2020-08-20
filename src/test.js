import string from './css'
let n = 1
demo.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)

let time = 100
const run = () => {
  n += 1
  if (n > string.length){
    window.clearInterval(id)
    return;
  }
  demo.innerText = string.substr(0,n)
  demo2.innerHTML = string.substr(0,n)
  demo.scrollTop = demo.scrollHeight
}
const playAgian = () => {
  return setInterval(run,time)
}
let id = playAgian()

const stop = () => {
  return window.clearInterval(id)
}

pause.onclick = () => {
  stop()
}
play.onclick = () => {
  id =  playAgian()
}
slow.onclick = () => {
  stop()
  time = 300
  id = playAgian()
}
normal.onclick = () => {
  stop()
  time = 50
  id = playAgian()
}
fast.onclick = () => {
  stop()
  time = 0
  id = playAgian()
}
