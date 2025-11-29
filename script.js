/********************************************
 ARAVALLI HEIGHTS SCHOOL - SCRIPT.JS
 Complete website interactivity & animations
*********************************************/

/* -----------------------------------------
   STICKY NAVBAR ON SCROLL
----------------------------------------- */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* -----------------------------------------
   DARK / LIGHT MODE TOGGLE
----------------------------------------- */
const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "Light Mode";
    } else {
        modeBtn.textContent = "Dark Mode";
    }
});


/* -----------------------------------------
   HERO SLIDER (AUTO + MANUAL)
----------------------------------------- */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Show slide
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

// Next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
}

// Auto play every 4 seconds
setInterval(nextSlide, 4000);


/* -----------------------------------------
   COUNTERS ANIMATION (HOME PAGE)
----------------------------------------- */
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function animateCounters() {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
            count += target / 200;
            if (count < target) {
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".counter-section");
    if (!counterSection) return;

    const top = counterSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        animateCounters();
    }
});


/* -----------------------------------------
   FACULTY SEARCH (faculty.html)
----------------------------------------- */
const facultySearch = document.getElementById("facultySearch");
const facultyCards = document.querySelectorAll(".faculty-card");

if (facultySearch) {
    facultySearch.addEventListener("keyup", () => {
        const value = facultySearch.value.toLowerCase();

        facultyCards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}


/* -----------------------------------------
   LIBRARY SEARCH (library.html)
----------------------------------------- */
const bookSearch = document.getElementById("bookSearch");
const libraryItems = document.querySelectorAll(".library-item");

if (bookSearch) {
    bookSearch.addEventListener("keyup", () => {
        const value = bookSearch.value.toLowerCase();

        libraryItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            item.style.display = text.includes(value) ? "block" : "none";
        });
    });
}


/* -----------------------------------------
   SPORTS TIMELINE SCROLL ANIMATION
----------------------------------------- */
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
    const trigger = window.innerHeight - 120;

    timelineItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < trigger) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);


/* -----------------------------------------
   ANNOUNCEMENT MODAL (Home Page)
----------------------------------------- */
const modal = document.getElementById("announcementModal");
const closeModal = document.getElementById("closeModal");

// Show modal after 2 sec on homepage
if (modal) {
    setTimeout(() => {
        modal.style.display = "flex";
    }, 2000);
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close by clicking outside
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


/* -----------------------------------------
   SMOOTH SCROLL (optional)
----------------------------------------- */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
        });
    });
});
