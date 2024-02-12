document.addEventListener('DOMContentLoaded', () => {
  // Change "Products" to "Interests"
  document.querySelectorAll('.nav-link').forEach(link => {
      if (link.textContent === 'Products') {
          link.textContent = 'Interests';
      }
  });

  // Home page content
  if (document.getElementById('main-heading') && document.getElementById('main-content')) {
      const mainHeading = document.getElementById('main-heading');
      const mainContent = document.getElementById('main-content');
      const textContainer = document.getElementById('text-container');

      mainHeading.textContent = "Welcome to My Site!";
      mainContent.textContent = "I have a passion for playing World of Warcraft and enjoy exploring its vast, immersive world. Stay awhile and listen to tales of adventure!";
      
      textContainer.style.backgroundColor = "white";
      textContainer.style.color = "#333";
      textContainer.style.padding = "20px";
      textContainer.style.borderRadius = "8px";
      textContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
      textContainer.style.marginTop = "20px";
  }

  // Services page content
  injectServicesContent();

  // Interests page content
  injectInterestsContent();

  // Add "Human Resources" link
  addHumanResourcesLink();

  // Add a fixed bottom navbar
  addFixedBottomNavbar();

  // Contact form submission
  handleContactFormSubmission();
});

function injectServicesContent() {
  const servicesContent = document.getElementById('services-content');
  if (servicesContent) {
      // Example services data
      const services = [
          {
              title: "Custom Programming",
              description: "I offer great programming solutions tailored to your business needs.",
              resumeLink: "path/to/programming-resume.pdf"
          },
          {
              title: "Web Design",
              description: "Creating intuitive and beautiful web designs that drive user engagement is on of my hobbies.",
              resumeLink: "path/to/design-resume.pdf"
          },
          {
              title: "Adaptable",
              description: "I find myself to be very adaptable and a fast learner which can be very helpful in the infancy of my career.",
              resumeLink: "path/to/mobile-dev-resume.pdf"
          }
      ];

      services.forEach((service, index) => {
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

  interests.forEach((item, index) => {
      const titleElement = document.getElementById(`media${index+1}-title`);
      const descriptionElement = document.getElementById(`media${index+1}-description`);
      if (titleElement && descriptionElement) {
          titleElement.textContent = item.title;
          descriptionElement.textContent = item.description;
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Update avatar image source
  const avatarImg = document.getElementById('avatar-img');
  if (avatarImg) {
      avatarImg.src = "images/avatar.jpg";
  }

  // Inject text for About Me
  const aboutTextContainer = document.getElementById('about-text');
  if (aboutTextContainer) {
      const aboutText = `
          <p>Hello! I’m Brantley Cooper, and here’s a little about my world. From coding to gaming, I find joy in many activities. My family and pets are a big part of my life, and we often spend time at our Cottage in the summer.</p>
          <p>Volunteering at the Town of Whitby has allowed me to give back to the community, while playing on the local Hockey keeps me active and engaged. I love sharing these experiences, so stay tuned for more!</p>
      `;
      aboutTextContainer.innerHTML = aboutText;
  }
});

function addHumanResourcesLink() {
  const aboutUsLink = document.querySelector('.nav-link[href="about.html"]');
  if (aboutUsLink) {
      const hrLink = document.createElement('li');
      hrLink.className = 'nav-item';
      hrLink.innerHTML = '<a class="nav-link" href="human-resources.html">Human Resources <i class="fas fa-users"></i></a>';
      aboutUsLink.parentNode.parentNode.insertBefore(hrLink, aboutUsLink.parentNode.nextSibling);
  }
}

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

function handleContactFormSubmission() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const formData = {
              name: document.getElementById('name').value,
              contactNumber: document.getElementById('contactNumber').value,
              email: document.getElementById('email').value,
              message: document.getElementById('message').value
          };
          
          console.log('Form submission:', formData);
          
          setTimeout(() => {
              window.location.href = 'index.html';
          }, 3000);
      });
  }
}
