document.addEventListener("DOMContentLoaded", () => {
  setInterval(increaseSecond, 1000)
  document.querySelector("#plus").addEventListener("click", incrementor)
  document.querySelector("#minus").addEventListener("click", decrementor)
  document.querySelector("#pause").addEventListener("click", pauser)
  document.querySelector("#heart").addEventListener("click", like)
  document.querySelector('form#comment-form button').addEventListener("click", addComment)
})

let paused = false

function increaseSecond(){
  if (!paused) { adjustCounterinDom(1) }
}

function incrementor(){
  adjustCounterinDom(1)
}

function decrementor(){
  adjustCounterinDom(-1)
}

function adjustCounterinDom(change){
  const currSecond = Number.parseInt(document.querySelector("#counter").innerText)
  document.querySelector("#counter").innerText = currSecond + change
}

function pauser(){
  if (paused) {
    paused = false
    this.innerText = "pause"
  } else {
    paused = true
    this.innerText = "resume"
  }
}

function like(){
  let times = 1
  let newLike
  const currSecond = Number.parseInt(document.querySelector("#counter").innerText)
  if (document.querySelector(`#number-${currSecond}`)) {
    newLike = document.querySelector(`#number-${currSecond}`)
    times = Number.parseInt(newLike.innerText.split(' ')[3]) + 1
    newLike.innerText = `${currSecond} was liked ${times} time(s)`
  } else {
    newLike = document.createElement('li')
    newLike.id = `number-${currSecond}`
    newLike.innerText = `${currSecond} was liked ${times} time(s)`
    document.querySelector(".likes").appendChild(newLike)
  }
}

function addComment(e){
  e.preventDefault()
  const comment = this.parentElement.children[0].value
  let commentDiv = document.querySelector('.comments')
  let newComment = document.createElement('p')
  newComment.innerText = comment
  commentDiv.appendChild(newComment)
  this.parentElement.children[0].value = ""
}
