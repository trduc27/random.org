const currentDate = new Date()
const year = currentDate.getUTCFullYear()
const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0')
const day = String(currentDate.getUTCDate()).padStart(2, '0')
const hours = String(currentDate.getUTCHours()).padStart(2, '0')
const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0')
const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0')
const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`
console.log(formattedDate)
let date = document.getElementById("date")
date.innerHTML = formattedDate

let result = document.getElementById("result")
let minDisplay = document.getElementById("min")
let maxDisplay = document.getElementById("max")
let box = document.getElementById("box")

result.style.display = "none"
maxDisplay.style.display = "none"
minDisplay.style.display = "none"
date.style.display = "none"

let box_result = document.getElementById("box-result")
box_result.style.height = "4px"
box.style.height = "160px"

function generate() {
    let min = parseInt(document.getElementById("input-min").value)
    let max = parseInt(document.getElementById("input-max").value)
    let inputMin = document.getElementById("input-min")
    let inputMax = document.getElementById("input-max")
    let generate_btn = document.getElementById("generate")

    inputMin.disabled = true
    inputMax.disabled = true
    generate_btn.disabled = true

    let img_url = "./img/ajax-loader.gif"
    let img = document.createElement("img")
    img.src = img_url
    img.id = "loading"
    box_result.appendChild(img)
    let box = document.getElementById("box")

    result.style.display = "none"
    maxDisplay.style.display = "none"
    minDisplay.style.display = "none"
    date.style.display = "none"
    img.style.display = "block" 
    box_result.style.height = "20px"

    minDisplay.textContent = `Min: ${min},`
    maxDisplay.textContent = `Max: ${max}`

    box.style.height = "180px"

    setTimeout(() => {
        box.style.height = "205px"
        img.style.display = "none"
        result.innerHTML = `<strong>${nums[0]}</strong>`
        nums.shift()
        box_result.style.height = "50px"
        result.style.display = "block"
        maxDisplay.style.display = "block"
        minDisplay.style.display = "block"
        date.style.display = "block"

        inputMin.disabled = false
        inputMax.disabled = false
        generate_btn.disabled = false
    }, 1300)
}

let nums = []

function add() {
    let inputNewNum = document.getElementById("new-num")
    let newNum = parseInt(document.getElementById("new-num").value)
    nums.push(newNum)
    console.log(nums[0])
    inputNewNum.value = ""
}