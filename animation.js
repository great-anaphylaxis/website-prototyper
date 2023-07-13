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
            addAnimation(items[j].getElementsByClassName("progress")[0], "type1-7_animation1-1");
        });

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