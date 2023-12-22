// teamCard.js

// Sample data for team members
const teamMembers = [
    {
      name: "Oliver Aguilerra",
      role: "Product Manager",
      description: "Vincent Van Gogh’s most popular painting, The Starry Night.",
      imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      FacebookURL: "https://www.facebook.com/oliver.aguilerra.1"
   
    },
    // Add other team members similarly
  ];
  
  // Function to generate HTML for a team card
function generateTeamCard(member) {
    return `
        <div class="relative overflow-hidden transition duration-300 transform rounded-2xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="${member.imageSrc}" alt="${member.name}" />
            <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p class="mb-1 text-2xl font-bold text-gray-100">${member.name}</p>
                <p class="mb-4 text-xs text-gray-100">${member.role}</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">${member.description}</p>
                <div class="flex items-center justify-center space-x-3">
                    <a href="${member.FacebookURL}" target="_blank" rel="noopener noreferrer" class="text-white  rounded-full overflow-hidden w-full flex justify-center transition-colors duration-300 hover:text-teal-accent-400">
                        <svg class="text-gray-500 h-12 w-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="12px" y="12px" fill="white" width="12" height="12" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled">
                            <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}
  
  // Map and join the generated HTML for each team member
  const teamCardsHTML = teamMembers.map(generateTeamCard).join("");
  
  // Append the generated HTML to a container in the main HTML file
  const teamContainer = document.getElementById("team-container");
  teamContainer.innerHTML = teamCardsHTML;
  