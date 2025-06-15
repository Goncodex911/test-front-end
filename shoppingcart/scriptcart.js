
  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeader = document.querySelector(".section-header");
    const selectedSpan = sectionHeader.querySelector("span");
    const sectionBody = document.querySelector(".section-body");
    const options = sectionBody.querySelectorAll("li span");
    
    sectionHeader.addEventListener("click", function () {
      sectionBody.classList.toggle("show");
    });

    options.forEach(option => {
      option.addEventListener("click", function (e) {
        e.stopPropagation(); 
        const newValue = this.textContent;
        selectedSpan.textContent = newValue;
        sectionBody.classList.remove("show"); 
      });
    });

    document.addEventListener("click", function (e) {
      if (!sectionHeader.contains(e.target)) {
        sectionBody.classList.remove("show");
      }
    });
  });
