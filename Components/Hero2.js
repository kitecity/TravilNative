// Hero.js

const heroContent = {
    title: "Enjoy Your Vacation With Us",
    description: "It's easy with us because we have more than 8 years of experience and have Professional trainers and safety first you learn fast with fun With iko Instructors.",
    ctaText: "Do not wait !!",
    ctaLink: "/service.html",
    learnMoreText: "Learn more",
    learnMoreLink: "#"
};

function generateHeroHTML(content) {
    return `
        <div class="  relative isolate px-6  lg:px-8">
            <!-- ... (existing code) ... -->

            <div class="mx-auto max-w-2xl py-12 sm:py-32 lg:py-32">
                <!-- ... (existing code) ... -->

                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">${content.title}</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-200">${content.description}</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="${content.ctaLink}" class="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${content.ctaText}</a>
                    </div>
                </div>
            </div>

            <div class="absolute inset-x-0 top-[calc(100%-13rem-200px)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
          </div>
        </div>
    `;
}

// Render the hero section
function renderHero() {
    const heroContainer = document.querySelector('.Hero'); // Change this selector accordingly
    const heroHTML = generateHeroHTML(heroContent);
    heroContainer.innerHTML += heroHTML;
}

// Automatically render hero section when the page loads
window.addEventListener('load', renderHero);
