/*// inline event handling
function inlineEvtHandling() {
    console.log("Watch video for learning JS events")
}*/

/*// JS event handling: assigning value

let btn = document.querySelector(".evtBtn")
btn.onclick = (evt) => {
    console.log('watch video for learning JS events')
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX)
    console.log(evt.clientY)
}

// JS event handling: event listener

let btn2 = document.querySelector(".evtBtn")
btn2.addEventListener('click', (evt) => {
    console.log('watch video for learning JS events')
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX)
    console.log(evt.clientY)
})*/

/*// now we see differents events which are mostly in usage.

let hoverEl = document.querySelector('.hover')
let outEl = document.querySelector('.out')
let hoverOutEl = document.querySelector('.hoverOut')

let click = document.querySelector('.click')
let dblClick = document.querySelector('.dblClick')
let rightClick = document.querySelector('.rightClick')

hoverEl.addEventListener('mouseover', (evt) => {
    console.log('you hover the div')
    console.log(evt)
    console.log(evt.type)
})

outEl.addEventListener('mouseout', (evt) => {
    console.log('you hover out the div')
    console.log(evt)
    console.log(evt.type)
})

hoverOutEl.addEventListener('mouseover', (evt) => {
    console.log('you hover the div')
    console.log(evt)
    console.log(evt.type)
})

hoverOutEl.addEventListener('mouseout', (evt) => {
    console.log('you hover out the div')
    console.log(evt)
    console.log(evt.type)
})

click.addEventListener('click', (evt) => {
    console.log('button clicked')
    console.log(evt)
    console.log(evt.type)
})

dblClick.addEventListener('dblclick', (evt) => {
    console.log('button clicked 2x')
    console.log(evt)
    console.log(evt.type)
})

rightClick.addEventListener('contextmenu', (evt) => {
    console.log('Right button clicked')
    console.log(evt)
    console.log(evt.type)
})*/

/*// JS handling vs event listener
let btn = document.querySelector('.btn')

// btn.onclick = (evt) => {
//     console.log('clicked 1x')
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX)
//     console.log(evt.clientY)
// }

// btn.onclick = () => {
//     alert('btn was clicked')
// }
//now from the above handlers 1st one is overwrite. that's drawback of JS handling without event listener. it's solution is event listener

// btn.addEventListener('click', (evt) => {
//     console.log('button clicked')
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX)
//     console.log(evt.clientY)
// })

// btn.addEventListener('click', () => {
//     alert('button was clicked')
// })

// btn.addEventListener('click', () => {
//     document.write('hello events button')
// })
// and it will not overwrite

// now we give defined function to events

const handler1 = () => {
    console.log('handler1')
}

const handler2 = () => {
    console.log('handler2')
}

const handler3 = () => {
    console.log('handler3')
}

// btn.onclick = handler1
// btn.onclick = handler2
// btn.onclick = handler3

btn.addEventListener('click', handler1)
btn.addEventListener('click', handler2)
btn.addEventListener('click', handler3)

// remove event listener
btn.removeEventListener('click', handler2)
btn.removeEventListener("click", handler3)*/

/*practice question: */

let toggleBtn = document.querySelector('.toggleBtn')
let heading = document.querySelector('.heading')
let container = document.querySelector('.container')

let theme = 'light';

const lightTheme = () => {
    container.style.backgroundColor = 'white';
    heading.style.color = 'black';
    toggleBtn.style.color = 'white';
    toggleBtn.style.backgroundColor = 'black';
    toggleBtn.style.boxShadow = '0px 0px 5px black';
}

const darkTheme = () => {
    container.style.backgroundColor = 'black';
    heading.style.color = 'white';
    toggleBtn.style.color = 'black';
    toggleBtn.style.backgroundColor = 'white';
    toggleBtn.style.boxShadow = '0px 0px 5px white';
}

toggleBtn.addEventListener('click', () => {
    if(theme === 'light') {
        darkTheme()
        theme = 'dark'
    }

    else{
        lightTheme()
        theme = 'light'
    }
})