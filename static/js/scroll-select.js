
let clicked = false;

function changeSelection() {
    const content = document.getElementsByClassName("content")[0];
    if (!content) {
        return;
    }

    let bestDiff = -Infinity;
    let bestElem = null;
    const height = (window.innerHeight || document.documentElement.clientHeight);
    const onscreenPercentage = 0.33;

    for (const heading of content.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
        const rect = heading.getBoundingClientRect();
        const diff = rect.bottom - height;

        if (diff <= -(height * onscreenPercentage) && diff > bestDiff && typeof heading.id !== "undefined") {
            bestDiff = diff;
            bestElem = heading;
        }
    }

    if (bestElem === null) {
        return;
    }

    if (!clicked) {
        setSelection(bestElem.id);
    } else {
        clicked = false;
    }
}

function setSelection(id) {
    const currPage = document.getElementsByClassName("page selected")[0];
    if (!currPage) {
        return;
    }

    for (const li of currPage.nextSibling.querySelectorAll("li")) {
        if (id === li.dataset.id) {
            li.classList.add("selected");
        } else {
            li.classList.remove("selected");
        }
    }
}

function registerListeners() {
    for (const i of document.querySelectorAll("aside.left li.heading.section")) {
        i.addEventListener("click", () => {
            clicked = true;
            setSelection(i.dataset.id);
        })
    }
}

window.addEventListener("load", registerListeners);
window.addEventListener("load", changeSelection)
window.addEventListener("scroll", changeSelection);

