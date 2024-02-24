/**
 * app.js
 * Author: Brantley Cooper
 * Date: February 23, 2024
 * 
 * Description: This JavaScript file includes functionality for dynamic content manipulation,
 * form handling, and user interaction on my personal website. 
 */

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically change "Products" navigation link to "Interests"
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent === 'Products') {
            link.textContent = 'Interests';
        }
    });

    // Customize the home page content
    if (document.getElementById('main-heading') && document.getElementById('main-content')) {
        const mainHeading = document.getElementById('main-heading');
        const mainContent = document.getElementById('main-content');
        const textContainer = document.getElementById('text-container');

        mainHeading.textContent = "Welcome to My Site!";
        mainContent.textContent = "Welcome to my site. This is a site meant to demonstrate Client Side Scripting for INFT 2203";
        
        // Style adjustments for the text container
        textContainer.style.backgroundColor = "white";
        textContainer.style.color = "#333";
        textContainer.style.padding = "20px";
        textContainer.style.borderRadius = "8px";
        textContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        textContainer.style.marginTop = "20px";
    }

    // Page-specific content injections
    injectServicesContent();
    injectInterestsContent();
    injectAboutMeContent();

    // Additional navigation links
    addHumanResourcesLink();
    addFixedBottomNavbar();

    // Form submission handling
    handleContactFormSubmission();

    // Navbar adjustment based on user state
    updateNavbarForLoggedInUser();

    // Login functionality initialization
    if ($('#loginForm').length) {
        initializeLoginHandling();
    }

    // Register functionality initialization
    if ($('#registerForm').length) {
        initializeRegistrationHandling();
    }
});

// Function to inject services content dynamically
function injectServicesContent() {
    const servicesContent = document.getElementById('services-content');
    if (servicesContent) {
        const services = [
            {
                title: "Custom Programming",
                description: "I offer great programming solutions tailored to your business needs.",
                resumeLink: "media/BCResume.pdf"
            },
            {
                title: "Web Design",
                description: "Creating intuitive and beautiful web designs that drive user engagement is one of my hobbies.",
                resumeLink: "media/BCResume.pdf"
            },
            {
                title: "Adaptable",
                description: "I find myself to be very adaptable and a fast learner which can be very helpful in the infancy of my career.",
                resumeLink: "media/BCResume.pdf"
            }
        ];

        // Append each service description to the page
        services.forEach(service => {
            const serviceItemHtml = `
                <div class="service-item">
                    <h2>${service.title}</h2>
                    <p>${service.description} <a href="${service.resumeLink}">Check my resume</a>.</p>
                </div>
            `;
            servicesContent.innerHTML += serviceItemHtml;
        });
    }
}

// Function to inject interests content dynamically
function injectInterestsContent() {
    const interests = [
        {
            title: "The Hunger Games",
            description: "I don't often read but the book I remember enjoying the most was the first Hunger Games Book."
        },
        {
            title: "Star Wars: Episode IV",
            description: "Star Wars is very nostalgic for me as when I was a kid I watched the movies constantly."
        },
        {
            title: "Suits",
            description: "This TV show is compelling due to its glamourization of what it could be like to be a lawyer."
        }
    ];

    // Apply each interest to the corresponding HTML elements
    interests.forEach((item, index) => {
        const titleElement = document.getElementById(`media${index+1}-title`);
        const descriptionElement = document.getElementById(`media${index+1}-description`);
        if (titleElement && descriptionElement) {
            titleElement.textContent = item.title;
            descriptionElement.textContent = item.description;
        }
    });
}

// Function to dynamically add "About Me" content
function injectAboutMeContent() {
    const aboutMeContainer = document.getElementById('about-text');
    if (aboutMeContainer) {
        const aboutMeHtml = `
            <p>Hello! Welcome to my personal space on the web. Here's a little bit about myself:</p>
            <p>I'm passionate about technology, creativity, and learning new things. My journey in the tech world has been filled with exciting challenges and continuous growth. From developing simple websites to building complex applications, each project has been a step forward in my career.</p>
            <p>Outside of work, I enjoy exploring the outdoors, reading, and gaming. These activities help me maintain a balanced life and inspire me to bring creativity into my work.</p>
            <p>Thank you for visiting my site. Feel free to browse around and learn more about my professional experience, projects, and personal interests.</p>
        `;
        aboutMeContainer.innerHTML = aboutMeHtml;
    }
}

// Function to add a "Human Resources" link to the navbar
function addHumanResourcesLink() {
    const aboutUsLink = document.querySelector('.nav-link[href="about.html"]');
    if (aboutUsLink) {
        const hrLink = document.createElement('li');
        hrLink.className = 'nav-item';
        hrLink.innerHTML = '<a class="nav-link" href="human-resources.html">Human Resources <i class="fas fa-users"></i></a>';
        aboutUsLink.parentNode.parentNode.insertBefore(hrLink, aboutUsLink.parentNode.nextSibling);
    }
}

// Function to add a fixed bottom navbar for copyright information
function addFixedBottomNavbar() {
    const fixedBottomNavbar = `
    <nav class="navbar fixed-bottom navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-text">
                Copyright © 2024, Brantley Cooper
            </span>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('beforeend', fixedBottomNavbar);
}

// Function to handle contact form submission with logging
function handleContactFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Capture form data
            const formData = {
                name: document.getElementById('name').value,
                contactNumber: document.getElementById('contactNumber').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Log submission for demonstration purposes
            console.log('Form submission:', formData);
            
            // Simulate form submission feedback
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        });
    }
}

// Function to initialize login handling on the login page
function initializeLoginHandling() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        // Simple check to ensure username and password are not empty
        if (username && password) {
            // Store username in sessionStorage
            sessionStorage.setItem('username', username);

            // Redirect to contact.html
            window.location.replace('contact.html');
        } else {
            alert('Please enter both username and password.'); // Basic validation feedback
        }
    });
}

// Function to initialize registration handling on the registration page
function initializeRegistrationHandling() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        console.log('Register form submitted.');

        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const errorMessage = $('#ErrorMessage');

        // Clear previous error messages
        errorMessage.hide().text('');

        // Validation checks
        let validationPassed = true;

        if (firstName.length < 2 || lastName.length < 2) {
            errorMessage.text('First name and last name must be at least 2 characters.').show();
            validationPassed = false;
        }

        if (email.length < 8 || !email.includes('@')) {
            errorMessage.append('<br>Email must be at least 8 characters long and contain an "@" symbol.').show();
            validationPassed = false;
        }

        if (password !== confirmPassword) {
            errorMessage.append('<br>Passwords do not match.').show();
            validationPassed = false;
        }

        if (password.length < 6) {
            errorMessage.append('<br>Password must be at least 6 characters long.').show();
            validationPassed = false;
        }

        // Proceed if all validations pass
        if (validationPassed) {
            console.log(`Registration Successful: ${firstName} ${lastName}, Username - ${username}, Email - ${email}`);
            // Redirect to the login page after successful validation
            window.location.replace('./login.html');
        }
    });
}


// Function to modify login/logout to current user
function updateNavbarForLoggedInUser() {
    const username = sessionStorage.getItem('username');
    if (username) {
        const loginNavItem = $(".navbar-nav .nav-item").filter(function() {
            return $(this).find("a").text().trim() === "Login/Logout";
        });
        if (loginNavItem.length) {
            loginNavItem.html(`<a class="nav-link">${username}</a>`);
        }
    }
}







