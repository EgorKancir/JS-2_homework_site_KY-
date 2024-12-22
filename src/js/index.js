// Додаткові завдання
// 1
const userList = document.getElementById('userList');

userList.addEventListener("click", (event) => {
    let btn = event.target;    
    
    if (btn.className === "deleteButton") {
        let parentElement = btn.parentNode;
        deleteUser(parentElement);
    }
});

function deleteUser(parentElement) {
    parentElement.style.display = "none";
}

// 2

let taskList = document.getElementById("taskList");
let userTask = document.getElementById("newTask");
const addTaskBtn = document.getElementById("addTask");

function addNewTask(newTask) {
    if (newTask.trim() === "") {
        alert("Будь ласка, введіть завдання!");
        return;
    }
    let newLi = document.createElement("li");
    newLi.classList.add("taskListElement");
    taskList.appendChild(newLi);
    newLi.innerHTML = `<label for="userTaskCheckbox" class="taskListLabel"> <input type="checkbox" id="userTaskCheckbox">${newTask}</label> <button type="button" class="remove-btn">Delete</button>`;
    userTask.value = "";
}

function removeUserTask(parent) {
    parent.remove();
}

addTaskBtn.addEventListener("click", () => addNewTask(userTask.value));
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userTask) {
        event.preventDefault();
        addNewTask(userTask.value)
    }    
})

taskList.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.classList.contains("remove-btn")) {
        let parentElement = btn.parentNode;
        removeUserTask(parentElement);
    }
});

taskList.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        const listItem = event.target.closest("li");
        if (event.target.checked) {
            listItem.classList.add("active-task");
        } else {
            listItem.classList.remove("active-task");
        }
    }
});

// Творчі завдання

const navGroup = document.querySelector(".js-nav");
const navBtn = document.querySelectorAll(".btn");

function aciveBtn(btn) {
    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
    } else {
        navBtn.forEach(element => {
            element.classList.remove("active");
        });
        btn.classList.add("active");
    }
}

navGroup.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.classList.contains("btn")) {
        aciveBtn(btn);
    }
})

// HW 
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
let currentIndex = null;

const galleryItems = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
        index: 0,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
        index: 1,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
        index: 2,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
        index: 3,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
        index: 4,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
        index: 5,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
        index: 6,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
        index: 7,
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
        index: 8,
    },
];
galleryItems.forEach(element => {
    let img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute('src', element.preview);
    img.setAttribute('alt', element.description);
    img.setAttribute('data-index', element.index);
    gallery.appendChild(img);
});

function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.add("is-open");
    const { original, description } = galleryItems[index];
    lightboxImage.setAttribute('src', original);
    lightboxImage.setAttribute('alt', description);
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImage.setAttribute('src', '');
    lightboxImage.setAttribute('alt', '');
    currentIndex = null;
}

function switchImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    const { original, description } = galleryItems[currentIndex];
    lightboxImage.setAttribute('src', original);
    lightboxImage.setAttribute('alt', description);
}

gallery.addEventListener("click", (event) => {
    let image = event.target;
    const index = Number(image.dataset.index)
    if (image.classList.contains("gallery__image")) {
        openLightbox(index);
    }
})

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    switch (event.key) {
        case "Escape":
            closeLightbox();
            break;
        case "ArrowRight": 
            switchImage(1);
            break;
        case "ArrowLeft": 
            switchImage(-1);
            break;
    }
});

lightbox.addEventListener("click", closeLightbox);

closeButton.addEventListener("click", closeLightbox);