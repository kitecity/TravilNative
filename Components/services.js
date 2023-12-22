// services.js

const servicesData = [
    {
        icon: "./SVGs/one.svg",
        title: "Kiteboarding - Kitesurfing",
        description: "Four course types: beginner, free ride, professional, and children's. Learn the basics, improve your skills, prepare for a career, or introduce your kids to new activities. Equipment rental available."
    },
    {
        icon: "./SVGs/two.svg",
        title: "Windsurfing",
        description: "Beginner, professional, kids courses and equipment rental available. We take care of you, our speedboat is watching you."
    },
    {
        icon: "./SVGs/three.svg",
        title: "Stand up Biddle",
        description: "Trees, area, dropship down from the second world war."
    },
    {
        icon: "./SVGs/four.svg",
        title: "Weak boarding water ski",
        description: "Beginner, free ride, professional, and children's courses, plus equipment rental. Everything you need to learn and enjoy your favorite activity."
    }
];

function generateServiceHTML(service) {
    return `
        <div class="wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded pt-3 highoftheservice">
                <div class="p-4">
                    <div class="gg">
                        <img src="${service.icon}" alt="${service.title}">
                    </div>
                    <h3 class="text-2xl">${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        </div>
    `;
}

function renderServices() {
    const servicesContainer = document.querySelector('.flex-wrap');
    servicesData.forEach(service => {
        const serviceHTML = generateServiceHTML(service);
        servicesContainer.innerHTML += serviceHTML;
    });
}

// Automatically render services when the page loads
window.addEventListener('load', renderServices);
