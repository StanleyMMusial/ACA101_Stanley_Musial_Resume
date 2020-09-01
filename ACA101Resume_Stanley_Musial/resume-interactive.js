let name = document.getElementById("name")

let isHidden = false

console.log(name)

name.onclick = function() {
    if (isHidden === false) {
        name.classList.remove("animate__fadeIn")
        name.classList.add("animate__animated");
        name.classList.add("animate__fadeOut");
        isHidden = true
    }
    else {
        name.classList.remove("animate__fadeOut")
        name.classList.add("animate__fadeIn")
        isHidden = false
    }
}

let kobe = document.getElementById("kobe")

let isGone = false

kobe.onmouseover = function() {
    if (isGone === false) {
        kobe.classList.remove("animate__fadeIn")
        kobe.classList.add("animate__animated");
        kobe.classList.add("animate__fadeOut");
        isGone = true
    }
}
kobe.onmouseleave = function() {
    if (isGone === true) {
        kobe.classList.remove("animate__fadeOut")
        kobe.classList.add("animate__fadeIn")
        isGone = false
    }
}
 