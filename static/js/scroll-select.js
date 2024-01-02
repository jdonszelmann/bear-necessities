
function changeSelection() {
    const currPage = document.getElementsByClassName("page selected")[0];
    if (!currPage) {
        return;
    }


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

    for (const li of currPage.nextSibling.querySelectorAll("li")) {
        if (bestElem.id === li.dataset.id) {
            li.classList.add("selected");
        } else {
            li.classList.remove("selected");
        }
    }
}

window.addEventListener("readystatechange", changeSelection)
window.addEventListener("scroll", changeSelection)

