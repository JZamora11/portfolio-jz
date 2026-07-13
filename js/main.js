// NAVBAR
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".list-navbar a");

    const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((section) => observer.observe(section));
});

// FORM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');
    const submitBtn = form.querySelector('.btn-submit');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonRes = await response.json();
                result.style.display = "block";
                
                if (response.status == 200) {
                    result.style.color = "var(--accent-color)";
                    result.innerHTML = "¡Message sent successfully! I will contact you soon. ✨";
                    form.reset(); 
                } else {
                    result.style.color = "#ff4a4a";
                    result.innerHTML = jsonRes.message || "Something went wrong. Please try again.";
                }
            })
            .catch(error => {
                result.style.display = "block";
                result.style.color = "#ff4a4a";
                result.innerHTML = "Network error. Please check your connection.";
            })
            .then(() => {
                submitBtn.innerText = "Send message";
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    result.style.display = "none";
                }, 6000);
            });
        });
    }
});