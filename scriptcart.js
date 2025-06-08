
  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeader = document.querySelector(".section-header");
    const selectedSpan = sectionHeader.querySelector("span");
    const sectionBody = document.querySelector(".section-body");
    const options = sectionBody.querySelectorAll("li span");

    // Toggle hiển thị các lựa chọn
    sectionHeader.addEventListener("click", function () {
      sectionBody.classList.toggle("show");
    });

    // Khi chọn 1 mục trong danh sách
    options.forEach(option => {
      option.addEventListener("click", function (e) {
        e.stopPropagation(); // Ngăn event lan lên header
        const newValue = this.textContent;
        selectedSpan.textContent = newValue;
        sectionBody.classList.remove("show"); // Đóng lại
      });
    });

    // Bấm ngoài sẽ đóng lại menu
    document.addEventListener("click", function (e) {
      if (!sectionHeader.contains(e.target)) {
        sectionBody.classList.remove("show");
      }
    });
  });
