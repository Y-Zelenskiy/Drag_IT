let body = document.getElementsByTagName('body')[0];
let drag_cont = document.getElementsByClassName('drag_on');


let boofer_DOM = null;

let move_func = null;


document.addEventListener("mousedown", function(e) {
    if(e.target.closest(".drag_on")) {
        e.preventDefault();
        e.target.closest(".drag_on").style.cssText += `
        z-index: 10;
        `
        if(boofer_DOM) {
            boofer_DOM.style.cssText += `
            z-index: 9;
            `
        }
        boofer_DOM = e.target.closest(".drag_on");
        boofer_DOM.classList.add("active");
        document.addEventListener("mousemove", move_func = function(event_mouse) {
            boofer_DOM.style.cssText += `
            position: absolute;
            left: ${event_mouse.clientX - boofer_DOM.clientWidth / 2}px;
            top: ${event_mouse.clientY - boofer_DOM.clientHeight / 2}px;
            z-index: 10;
            `
        })
    }
})
document.addEventListener("mouseup", function(e) {
    try {
        boofer_DOM.classList.remove("active");
    } catch(error) {
        // this error is thrown when boofer_DOM is not defined, which happens when the mouse button is released outside the dragged element
    }
   
    
    document.removeEventListener("mousemove", move_func);
})

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
})
