let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let count1 = 0
let count2 = 0

function plusOneHome() {
    count1 += 1
    countHome.innerText = count1
}

function plusTwoHome() {
    count1 += 2
    countHome.innerText = count1
}

function plusThreeHome() {
    count1 += 3
    countHome.innerText = count1
}

function resetHome() {
    count1 = 0
    countHome.innerText = count1
}



function plusOneGuest() {
    count2 += 1
    countGuest.innerText = count2
}

function plusTwoGuest() {
    count2 += 2
    countGuest.innerText = count2
}

function plusThreeGuest() {
    count2 += 3
    countGuest.innerText = count2
}

function resetGuest() {
    count2 = 0
    countGuest.innerText = count2
}