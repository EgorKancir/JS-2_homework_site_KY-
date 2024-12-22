// Додаткові завданн

// 1

const inputThrottle = document.getElementById("input-throttle");

function randomText(text) {
    console.log(text);
}

inputThrottle.addEventListener("input", _.throttle(() => { 
    randomText(inputThrottle.value)
    }, 500)
);

// 2

const inputDebounce = document.getElementById("input-debounce");

function randomText(text) {
    console.log(text);
}

inputDebounce.addEventListener("input", _.debounce(() => { 
    randomText(inputDebounce.value)
    }, 5000)
);

// 3

let counterScroll = 0;

function randomText(text) {
    console.log(text);
}

window.addEventListener("scroll", _.debounce(() => { 
    counterScroll += 1;
    randomText(`Виклик ${counterScroll}`)
    }, 100)
);

// Творчі завдання

// 1

const userName = document.getElementById("input-user-name");
let welkomUserText = document.querySelector(".user-name-text");

function welkomUser(name) {
    welkomUserText.textContent = (`Вітаємо, ${name}!`);
}

userName.addEventListener("input", _.debounce(() => { 
    welkomUser(userName.value)
    }, 5000)
);

// 2

const pointBox = document.querySelector(".point-box");
const point = document.querySelector(".point");

let isDragging = false;
let rect;
let mouseX, mouseY;

function startDragging(event) {
    isDragging = true;
    rect = pointBox.getBoundingClientRect();
    mouseX = event.clientX - rect.left - point.offsetLeft;
    mouseY = event.clientY - rect.top - point.offsetTop;
}
function movePoint(event) {
    if (!isDragging) return;
    
    const pointX = event.clientX - rect.left - mouseX;
    const pointY = event.clientY - rect.top - mouseY;

    const clampedX = Math.max(0, Math.min(rect.width - point.offsetWidth, pointX));
    const clampedY = Math.max(0, Math.min(rect.height - point.offsetHeight, pointY));

    point.style.transform = "none";
    point.style.left = `${clampedX}px`;
    point.style.top = `${clampedY}px`;
}
function stopDragging() {
    isDragging = false;
}
point.addEventListener("mousedown", startDragging);
pointBox.addEventListener("mousemove", _.throttle((e) => {
    if (isDragging) movePoint(e);
    }, 50)
);
document.addEventListener("mouseup", stopDragging);

// HW

// 1

const rangeInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

rangeInput.addEventListener("input", _.debounce(() => {
        sliderImage.style.width = `${rangeInput.value}px`
        sliderImage.style.height = `${rangeInput.value}px`
    }, 100)
);

// 2

const box = document.getElementById("box");

function boxColor() {
    box.style.background = "green";
}
document.addEventListener("mousemove", _.debounce(() => {
        boxColor();
    }, 100)
);