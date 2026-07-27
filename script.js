// =========================
// Typed Animation
// =========================

new Typed(".multiple-text", {
    strings: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "Software Developer",
        "Java Programmer"
    ],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

// =========================
// AOS
// =========================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// =========================
// Active Navbar
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Scroll To Top
// =========================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.onclick = function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    };

});

// =========================
// Floating Image
// =========================

const image = document.querySelector(".right img");

image.addEventListener("mousemove", () => {

    image.style.transform =
        "scale(1.08) rotate(3deg)";

});

image.addEventListener("mouseleave", () => {

    image.style.transform =
        "scale(1) rotate(0deg)";

});

// =========================
// Mouse Glow
// =========================

const glow = document.createElement("div");

glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.position = "fixed";
glow.style.pointerEvents = "none";
glow.style.background = "#00e5ff";
glow.style.boxShadow = "0 0 25px #00e5ff";
glow.style.zIndex = "99999";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// =========================
// Hero Parallax
// =========================

document.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    image.style.transform =
        `translate(${x}px,${y}px)`;

});

// =========================
// Loading Animation
// =========================

window.onload = () => {

    document.body.style.opacity = "1";

};

// =========================
// Console
// =========================

console.log("🚀 Premium Portfolio Loaded Successfully");

//