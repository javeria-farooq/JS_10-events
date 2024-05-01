/*/////////event handle in JS */
/*let btn1 = document.querySelector("#btn1")

btn1.onclick = () => {
    console.log("HANDLER 1")
    alert("button 1 click hgya")
}

btn1.onclick = () => {
    console.log("HANDLER2")
}

let btn2 = document.querySelector("#btn2")
btn2.ondblclick = () => {
    console.log("button 2 was clicked at 2x")
}

let div1 = document.querySelector("#div1")
div1.onmouseover = () => {
    console.log("you are inside div")
}

div1.onmouseleave = () => {
    console.log("you leaved div")
}*/

/*now we try these from without using evt listener and using fnc variable */

/*const handler1 = () => {
    console.log("HANDLER 1")
}

const handler2 = () => {
    console.log("HANDLER2")
}

btn1.onclick = handler1
btn1.onclick = handler2*/

/*//////////access event obj's properties */

/*let btn1 = document.querySelector("#btn1")
btn1.onclick = (evt) => {
    console.log(`evt = ${evt}`)
    console.log(`type of evt = ${evt.type}`)
    console.log(`target of evt = ${evt.target}`)
    console.log(`clientX of evt = ${evt.clientX} and clientY of evt = ${evt.clientY}`)

    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}

let div1 = document.querySelector("#div1")
div1.onmouseover = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}

let btn1 = document.querySelector("#btn1")
btn1.onclick = () => {
    console.log("handler 1")
}

btn1.onclick = () => {
    console.log("handler 2")
}*/

/*/////Evt handling by evt listener */

/*let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", () => {
    console.log("btn1-evt listener_handler-1")
})

btn1.addEventListener("click", () => {
    console.log("btn1-evt listener_handler-2")
})

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("dblclick", (evt) => {
    console.log(evt)
    console.log(`type of event = ${evt.type}`)
    console.log(`target of event = ${evt.target}`)
    console.log("btn2-evt listener_handler-1")
})

btn2.addEventListener("mouseover", () => {
    console.log("you hover the button2")
})*/

/*now we try these from using evt listener and fnc variable */

/*const evtListHandler1 = () => {
    console.log("evt listen HANDLER 1")
}

const evtListHandler2 = () => {
    console.log("evt listen HANDLER2")
}

btn1.addEventListener("click", evtListHandler1)
btn1.addEventListener("click", evtListHandler2)*/

/*//////////////remove event listener */

/*const handler3 = () => {
    console.log("evt listener HANDLER - 3")
}

let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    console.log("evt listener HANDLER - 1")
})

btn1.addEventListener("click", () => {
    console.log("evt listener HANDLER - 2")
})

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () => {
    console.log("evt listener HANDLER - 4")
})

btn1.removeEventListener("click", handler3)*/



/*//////////PRACTICE QUESTIONS: */

/*let modeBtn = document.querySelector("#modeBtn")
let currMode = "light"

modeBtn.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark"
    console.log(`your current mode is ${currMode}`)
    let body = document.querySelector("body")
    body.setAttribute("class", "dark")
    body.style.color = "white"
   }

   else{
    currMode = "light"
    console.log(`your current mode is ${currMode}`)
    let body = document.querySelector("body")
    body.setAttribute("class", "light")
    body.style.color = "black"
   }
})*/

/*////toggle button */

let modeBtn = document.querySelector("#modeBtn")

let currMode = "light"

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark"
        let body = document.querySelector("body")
        body.classList.add("dark")
        body.classList.remove("light")
        modeBtn.classList.add("modeBtnDark")
        modeBtn.classList.remove("modeBtnLight")
    }

    else{
        currMode = "light"
        let body = document.querySelector("body")
        body.classList.add("light")
        body.classList.remove("dark")
        modeBtn.classList.add("modeBtnLight")
        modeBtn.classList.remove("modeBtnDark")
    }
})