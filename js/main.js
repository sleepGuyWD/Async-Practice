//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

//Code 02
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout(() => console.log('Paper delivered to house 2'), 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)

//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

//Code 05
// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve('Promise has been fullfilled')
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 06
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 07
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }

// getPaid()

//Code 08

//Promise + Resolve Value


function asyncTry () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(`Nice job with learning async/await. Here's a dog.`)
    }, 3000)
  })
}
//
async function getACuteDogPhoto(){
    const awaitTry = await asyncTry()
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    //console.log(data.message)
    document.querySelector('img').src = data.message
    document.querySelector('h2').innerText = awaitTry

    let imageEl = document.getElementById('imgElement')
    imageEl.style.boxShadow = '0 1px 2px black'

    let body = document.getElementsByTagName('body')[0]

    let video = document.createElement('video')

    body.appendChild(video)
    video.autoplay = "autoplay"
    video.controls = "controls"
    video.playsInline = "playsinline"
    video.loop = "loop"
    video.muted = 'muted'

    let videoHolder = document.getElementsByTagName('video')[0]
    let videoSource = document.createElement('source')
    videoHolder.appendChild(videoSource)
    videoSource.setAttribute('src', 'js/dog.mp4')
    videoSource.setAttribute('type', 'video/mp4')
    
}

getACuteDogPhoto()

function asyncMessage() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(`Alright, GOODBYYYYEEEEE`)
    }, 5500)
  })
}

function asyncButton() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Get Another Dog')
    }, 2000)
  })
}

async function goodByeMessage() {
  const awaitBye = await asyncMessage()
  const awaitButton = await asyncButton()
  document.querySelector('h3').innerText = awaitBye
  let button = document.createElement('button') 
  let body = document.getElementsByTagName('body')[0]
  body.appendChild(button)
  button.innerHTML = awaitButton

  document.querySelector('button').addEventListener('click', randomDog )
}

goodByeMessage()

async function randomDog () {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    document.querySelector('img').src = data.message
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}

