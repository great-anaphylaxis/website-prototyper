// scrolling
let navbar = document.querySelector('header');
let pastScrollPercent;
let scrollPercent = getScrollPercent();

function getScrollPercent() {
    return ((document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight)) * 100;
}

window.addEventListener('scroll', e => {
    // get current scroll percent
    scrollPercent = getScrollPercent();

    // how much the scroll progress has changed since the past scroll
    let scrollDelta = scrollPercent - pastScrollPercent;

    // if no scroll
    if (scrollDelta == 0) {

    }

    // if scrolling up
    else if (scrollPercent > pastScrollPercent) {
        // to avoid executing without actually scrolling
        if (pastScrollPercent > 0) {
            navbar.style.animation = "0.5s ease 0s 1 normal forwards running navbar1_hide";
        }
    }

    // if scrolling down
    else if (scrollPercent < pastScrollPercent) {
        // to avoid executing without actually scrolling
        if (pastScrollPercent > 0) {
            navbar.style.animation = "0.5s ease 0s 1 normal forwards running navbar1_show";
        }
    }

    // set the past scroll percent to current scroll percent
    pastScrollPercent = scrollPercent;
});





// for advanced animations

function addAnimation(element, className) {
    element.classList.add(className);
}

function removeAnimation(element, className) {
    element.classList.remove(className);
}


/* type1-7 */
let type1_7 = document.getElementsByClassName("type1-7");

for (let i = 0; i < type1_7.length; i++) {
    let items = type1_7[i].getElementsByClassName("item");

    for (let j = 0; j < items.length; j++) {
        items[j].addEventListener("mouseenter", e => {
            let progress = items[j].getElementsByClassName("progress")[0];
            let progressBar = items[j].getElementsByClassName("progressbar")[0];
            
            addAnimation(progress, "type1-7_animation1-1");
            addAnimation(progress, "type1-7_animation1-2");
            addAnimation(progressBar, "type1-7_animation1-3");
        });

        items[j].addEventListener("mouseleave", e => {
            let progress = items[j].getElementsByClassName("progress")[0];
            let progressBar = items[j].getElementsByClassName("progressbar")[0];

            removeAnimation(progress, "type1-7_animation1-2");
            removeAnimation(progressBar, "type1-7_animation1-3");
        })

        items[j].getElementsByClassName("progress")[0].addEventListener("animationend", e => {
            if (e.animationName === "type1-7_animation1-1") {
                removeAnimation(e.target, "type1-7_animation1-1");
            }
        })
    }
}




/* type1-8 */
let type1_8 = document.getElementsByClassName("type1-8");

for (let i = 0; i < type1_8.length; i++) {
    let items = type1_8[i].querySelectorAll(".container1 > .list > .item") || [];

    for (let j = 0; j < items.length; j++) {
        items[j].addEventListener("mouseenter", e => {
            let items2 = items[j].querySelectorAll(".container2 > .list > .item");

            for (let k = 0; k < items2.length; k++) {
                console.log(items2[k]);
                addAnimation(items2[k], "type1-8_animation1-1");
            }
        });

        items[j].addEventListener("mouseleave", e => {
            let items2 = items[j].querySelectorAll(".container2 > .list > .item");
            
            for (let k = 0; k < items2.length; k++) {
                console.log(items2[k]);
                removeAnimation(items2[k], "type1-8_animation1-1");
            }
        })
    }
}