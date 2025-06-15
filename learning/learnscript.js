// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuBtn = document.getElementById("toggleMenuBtn");
  const leftMenu = document.getElementById("leftMenu");
  const videoContainer = document.getElementById("videoContainer");
  const videoElement = document.getElementById("videoElement");
  const description = document.getElementById("description");

  toggleMenuBtn.addEventListener("click", () => {
    if (leftMenu.style.display === "none") {
      leftMenu.style.display = "block";
      toggleMenuBtn.querySelector("span").textContent = "Hide menu";
    } else {
      leftMenu.style.display = "none";
      toggleMenuBtn.querySelector("span").textContent = "Show menu";
    }
  });

  videoContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
   
    const isSmall = videoElement.classList.contains("w-1/3");

    if (!isSmall) {
      videoElement.classList.remove("md:w-2/3");
      videoElement.classList.add("w-full", "md:w-1/3", "max-h-[180px]");
      description.classList.remove("md:w-1/3");
      description.classList.add("md:w-2/3");
    } else {
      
      videoElement.classList.remove("w-full", "md:w-1/3", "max-h-[180px]");
      videoElement.classList.add("md:w-2/3");
      description.classList.remove("md:w-2/3");
      description.classList.add("md:w-1/3");
    }
  });
});