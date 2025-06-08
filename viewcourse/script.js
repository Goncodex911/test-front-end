const sectionHeaders = Array.from(document.querySelectorAll(".section-header"))
const sectionBodys = Array.from(document.querySelectorAll(".section-body"))


let status = [];

sectionHeaders.forEach(function(sectionHeader, index) {
    sectionHeader.onclick = function() {
        if (!status[index]) {
            status[index] = true
            sectionBodys[index].style.display = "block"
        }  else {
            status[index] = false
            sectionBodys[index].style.display = "none"
        }
    }
})