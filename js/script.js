let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
    
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
function clearAll(){
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous Entries: "
}
let promptyng = prompt("Can i touch u?")

if (promptyng.toLowerCase() === "yes"){
    alert("YOU WANT TO BE TOUCHED!!")
    
}else{
    alert("Alright")
}


