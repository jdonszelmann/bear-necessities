
function initCopy() {
    for (const i of document.getElementsByTagName("pre")) {
        const c = document.createElement("button");
        c.innerText = "";
        c.classList.add("copy-button");
        c.onclick = () => {
            i.removeChild(c);
            navigator.clipboard.writeText(i.innerText).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
            i.appendChild(c);
        };
        i.appendChild(c);
    }
}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    initCopy();
} else {
    document.addEventListener("DOMContentLoaded", initCopy);
}