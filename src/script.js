/*HAMBURGER MENU*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// search bar
const camps = [
  {
    id: 0,
    image: "src/Assets/Camp Images/Compressed Images/MountUlap.jpg",
    title: "Mount Ulap",
    text: "One of the most famous hikes in Benguet is Mt Ulap in Itogan.",
  },

  {
    id: 1,
    image: "src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
    title: "Calaguas Island",
    text: "A paradise of islands that can rival the white sand beauty of Boracay.",
  },

  {
    id: 2,
    image: "src/Assets/Camp Images/Compressed Images/OnayBeach.jpg",
    title: "Onay Beach",
    text: "This is one of the best beach camping sites, beautiful and pristine.",
  },

  {
    id: 3,
    image: "src/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg",
    title: "Seven Sisters Waterfall",
    text: "The seven sisters is the 39th tallest waterfall in Norway.",
  },

  {
    id: 4,
    image: "src/Assets/Camp Images/Compressed Images/LatikRiverside.jpg",
    title: "Latik Riverside",
    text: "Philippines is one of the most dazzling countries in all of Asia.",
  },

  {
    id: 5,
    image: "src/Assets/Camp Images/Compressed Images/BuloySprings.jpg",
    title: "Buloy Springs",
    text: "This is one of the best beach camping sites,beautiful and pristine.",
  },
];

const categories = [
  ...new Set(
    camps.map((item) => {
      return item;
    })
  ),
];

document.getElementById("searchbar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById("list").innerHTML = items
    .map((item) => {
      var { image, title, text } = item;
      return `<li class="border-gray-300 border-solid border-[1px] w-full rounded-md p-2 camps">
                <img class="w-full rounded-md" src= "${image}">
                <div>
                    <h1 class="mt-3 font-bold">${title} </h1>
                    <p class="py-2">
                        ${text}
                    </p>
                </div> 
                <div class="overflow-hidden text-center">
                    <a href="indiv.html" class="my-3 font-bold w-full py-3 block rounded-md border-gray-300 border-solid border-[1px] hover:bg-black hover:text-white hover:border-black view-campground-button" data-campground-id="1">
                    View campground
                    </a>
                </div>
                
              </li>`;
    })
    .join("");
};
displayItem(categories);




// const indivcamps = [
//     {
//       id: 0,
//       image: "src/Assets/Camp Images/Compressed Images/MountUlap.jpg",
//       title: "Mount Ulap",
//       price: "$104.99",
//       name: "Andrew Mike",
//     },
  
//     {
//       id: 1,
//       image: "src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
//       title: "Calaguas Island",
//       price: "$150.99",
//       name: "Henry Roberts",
//     },
  
//     {
//       id: 2,
//       image: "src/Assets/Camp Images/Compressed Images/OnayBeach.jpg",
//       title: "Onay Beach",
//       price: "$234.99",
//       name: "John Doe",
//     },
  
//     {
//       id: 3,
//       image: "src/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg",
//       title: "Seven Sisters Waterfall",
//       price: "$304.99",
//       name: "Leon King",
//     },
  
//     {
//       id: 4,
//       image: "src/Assets/Camp Images/Compressed Images/LatikRiverside.jpg",
//       title: "Latik Riverside",
//       price: "$290.99",
//       name: "James Jones",
//     },
  
//     {
//       id: 5,
//       image: "src/Assets/Camp Images/Compressed Images/BuloySprings.jpg",
//       title: "Buloy Springs",
//       price: "$254.99",
//       name: "Grace Price",
//     },
//   ];
  
//   const campData = [
//     ...new Set(
//       indivcamps.map((item) => {
//         return item;
//       })
//     ),
//   ];


//   const displaycamp = (items) => {
//     document.getElementById("campDetails").innerHTML = items
//       .map((item) => {
//         var { image, title, price, name } = item;
//         return `<img src="${image}" alt="" class="w-full rounded-md">
//         <div class="flex justify-between items-center my-5">
//             <h1 class="font-bold text-lg">${title}</h1>
//             <p>${price}/night</p>
//         </div> 
//         <div class="text-gray-800">
//             ${title} is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.
//         </div>

//         <p class="py-3 italic text-gray-700">
//             Submitted by ${name}
//         </p>`;
//       })
//       .join("");
//   };
//   displaycamp(campData);


  