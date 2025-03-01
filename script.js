document.addEventListener("DOMContentLoaded", function () {
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sticky Navigation Bar on Scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Dynamic Navbar Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Contact Form Validation and Submission Alert
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.querySelector('input[placeholder="Your Name"]').value.trim();
        let email = document.querySelector('input[placeholder="Your Email"]').value.trim();
        let message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    });

    // Function to validate email format
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});
