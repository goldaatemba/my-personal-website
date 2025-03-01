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

        // Simple email validation
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
});
