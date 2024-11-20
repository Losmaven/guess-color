const colorCode = document.getElementById("color-code");
const option = document.getElementById("options");

let randomColor = null
let score = 0




function genRandomNumBtw  (min,max){
 return  min + Math.floor(Math.random() * (max - min + 1))
}

function genRandomColr (){

    const red = genRandomNumBtw(0,255)
    const green = genRandomNumBtw(0,255)
    const blue = genRandomNumBtw(0,255)
    return `rgb(${red}, ${green}, ${blue})`
}

function incrScore (){
    score += 1
    document.getElementById("score").innerText = score
}
 function validateResult (el){
   console.log(el.target)
   const selectedColor = el.target.style.backgroundColor
   if(selectedColor === randomColor){
   incrScore()
   } else {
    score = 0
   }
     window.localStorage.setItem("score", score)
       startGame()
 }
// console.log(genRandomNumBtw(0,255))
// console.log(genRandomColr())
function startGame(){
    option.innerHTML = null
    randomColor = genRandomColr()
    colorCode.innerText = randomColor

    const ansIndex = genRandomNumBtw(0,5)

    for(let i = 0; i< 6; i++){
        const div = document.createElement("div")
        div.addEventListener("click",validateResult)
        div.style.backgroundColor = i === ansIndex ? randomColor : genRandomColr()
        option.append(div)
    }
}

window.addEventListener('load', () => startGame())