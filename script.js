const desktopImages = [
   {
      "path": "./images/desktop/image-deep-earth.jpg",
      "title": "Deep earth"
   },
   {
      "path": "./images/desktop/image-night-arcade.jpg",
      "title": "Night arcade"
   },
   {
      "path": "./images/desktop/image-soccer-team.jpg",
      "title": "Soccer team VR"
   },
   {
      "path": "./images/desktop/image-grid.jpg",
      "title": "The grid"
   },
   {
      "path": "./images/desktop/image-from-above.jpg",
      "title": "From up above VR"
   },
   {
      "path": "./images/desktop/image-pocket-borealis.jpg",
      "title": "Pocket borealis"
   },
   {
      "path": "./images/desktop/image-curiosity.jpg",
      "title": "The curiosity"
   },
   {
      "path": "./images/desktop/image-fisheye.jpg",
      "title": "Make it fisheye"
   }
]

const mobileImages = [
   {
      "path": "./images/mobile/image-deep-earth.jpg",
      "title": "Deep earth"
   },
   {
      "path": "./images/mobile/image-night-arcade.jpg",
      "title": "Night arcade"
   },
   {
      "path": "./images/mobile/image-soccer-team.jpg",
      "title": "Soccer team VR"
   },
   {
      "path": "./images/mobile/image-grid.jpg",
      "title": "The grid"
   },
   {
      "path": "./images/mobile/image-from-above.jpg",
      "title": "From up above VR"
   },
   {
      "path": "./images/mobile/image-pocket-borealis.jpg",
      "title": "Pocket borealis"
   },
   {
      "path": "./images/mobile/image-curiosity.jpg",
      "title": "The curiosity"
   },
   {
      "path": "./images/mobile/image-fisheye.jpg",
      "title": "Make it fisheye"
   }
];

const menuToggle = document.querySelector(".hamburger-btn");
const closeMenu = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-block");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const footer = document.querySelector(".footer");
const contentGrid = document.querySelector(".creation-grid");
const desktopImageGrid = document.querySelector(".creation-grid");
const mobileImageGrid = document.querySelector(".mobile-creation-grid");
const desktopGridItems = [];
const mobileGridItems = [];


menuToggle.addEventListener("click", (e) => {
   header.style.display = "none";
   footer.style.display = "none";

   sections.forEach(section => {
      section.style.display = "none";
   });

   mobileMenu.style.display = "block";
});


closeMenu.addEventListener("click", (e) => {
   header.style.display = "block";
   footer.style.display = "block";

   sections.forEach(section => {
      section.style.display = "block";
   });
   
   mobileMenu.style.display = "none";
});


function desktopView() {
   desktopImages.forEach(data => {
      const link = document.createElement("a");
      link.setAttribute("href", "#");
      link.style.textDecoration = "none";
      const gridItems = document.createElement("div");
      gridItems.classList.add("grid-items");
      const image = document.createElement("img");
      image.setAttribute("src", data.path);
      const textBlock = document.createElement("div");
      textBlock.setAttribute("class", "grid-items-text");
      const title = document.createElement("h3");
      title.textContent = data.title;
      textBlock.appendChild(title);
      gridItems.appendChild(image);
      gridItems.appendChild(textBlock);
      link.appendChild(gridItems);
      desktopImageGrid.appendChild(link);
   });
}


function mobileView() {
   mobileImages.forEach(data => {
      const link = document.createElement("a");
      link.setAttribute("href", "#");
      link.style.textDecoration = "none";
      const gridItems = document.createElement("div");
      gridItems.classList.add("grid-items-mobile");
      const image = document.createElement("img");
      image.setAttribute("src", data.path);
      image.style.width = "100%";
      image.style.height = "100%";
      const textBlock = document.createElement("div");
      textBlock.setAttribute("class", "grid-items-text");
      const title = document.createElement("h3");
      title.textContent = data.title;
      textBlock.appendChild(title);
      gridItems.appendChild(image);
      gridItems.appendChild(textBlock);
      gridItems.style.marginBottom = "24px";
      link.appendChild(gridItems);
      mobileImageGrid.appendChild(link);
   });
}


function renderViews() {
   document.addEventListener("DOMContentLoaded", desktopView());
   document.addEventListener("DOMContentLoaded", mobileView());

   if (window.innerWidth > 768) {
      mobileImageGrid.style.display = "none";
   } else {
      desktopImageGrid.style.display = "none";
   }

   window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
         mobileImageGrid.style.display = "none";
         desktopImageGrid.style.display = "grid";
      } else if (window.innerWidth < 768) {
         desktopImageGrid.style.display = "none";
         mobileImageGrid.style.display = "block";
      }
   });
}

renderViews();