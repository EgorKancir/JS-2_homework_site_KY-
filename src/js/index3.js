// Додаткові завдання

// 1
const fruitsList = document.querySelectorAll('.fruit-element');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
        }
    );
}, {threschold: 0.2});

fruitsList.forEach(element => {
    observer.observe(element);
});


// Творчі завдання

const fruitsImage = document.querySelectorAll('.fruits-group__element');

const fruitObserver = new IntersectionObserver((entries)  => {
    entries.forEach((e, index) => {
        if (e.isIntersecting) {
            e.target.style.transitionDelay = `${index * 0.3}s`; 
            e.target.classList.add('visible');
        } else {
            e.target.classList.remove('visible');
            e.target.style.transitionDelay = '0s'; 
        }
    });
}, {
    threshold: 1
});

fruitsImage.forEach(element => {
    fruitObserver.observe(element);
})

// HW

const lazyGroupImage = document.querySelectorAll(".lazy-group__img");

const lazyImageObserver = new IntersectionObserver ((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;    
            entry.target.classList.add('visible');        
            observer.unobserve(entry.target)
        }
    });
}, {
    threshold: 0.2
});

lazyGroupImage.forEach(element => {
    lazyImageObserver.observe(element);
})