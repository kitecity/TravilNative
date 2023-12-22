   // Sample data object
   const liveAnywhereData = [
    {
      img: "./img/destination-1.jpg",
      title: "Adventure 1",
    },
    {
      img: "./img/destination-8.jpg",
      title: "Adventure 2",
    },
    // Add more data objects as needed
  ];

  // Create an HTML string with injected data
  const htmlString = liveAnywhereData
    .map(
      (data, index) => `
        <div>
        <a href="#" key=${index}>
          <div class="p-2 duration-300 relative lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
            <div class="relative w-full h-24 sm:h-72 mb-2 md:h-72 lg:h-72 xl:h-72">
              <img src="${data.img}" alt="${data.title}" class="rounded-xl">
            </div>
            <div>
              <h3 class="font-medium leading-5 bg-red-400 text-gray-500 text-md md:text-xl">${data.title}</h3>
            </div>
          </div>
        </a>
        </div>
      `
    )
    .join("");

  // Output the HTML string to the console (for debugging purposes)
  console.log(htmlString);

  // Inject the HTML string into the parent container
  document.getElementById("parentContainer").innerHTML = htmlString;
