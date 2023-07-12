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