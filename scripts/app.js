const main = document.getElementById("main")

const sections = Array.from(document.getElementsByClassName("section"))

sections.forEach(e => e.classList.add("hide"))

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show")
            e.target.classList.remove("hide")
            observer.unobserve(e.target)
        }
    })
}, {
    root: main,
    threshold: .5
})

sections.forEach(e => observer.observe(e))