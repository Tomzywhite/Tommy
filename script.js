// script.js

// Project data
const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "project1.jpg",
        link: "https://www.project1.com"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        image: "project2.jpg",
        link: "https://www.project2.com"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
        image: "project3.jpg",
        link: "https://www.project3.com"
    }
];

// Function to generate project list
function generateProjectList() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear the list before generating new items
    projects.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        `;
        projectList.appendChild(projectItem);
    });
}

// Call the function to generate the project list
generateProjectList();

// Add event listener to the project list
document.getElementById("project-list").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        window.open(e.target.href, "_blank");
    }
});
// Contact Form Submission Handler

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://example.com/contact', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message. Please try again.');
    }
  };
  xhr.send(formData);
});