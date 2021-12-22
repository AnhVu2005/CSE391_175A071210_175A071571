const fqaCollapseGroups = document.querySelectorAll(".fqa--collapse__group");
const fqaCollapseBtns = document.querySelectorAll(".fqa--collapse__group--question");

fqaCollapseBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        fqaCollapseGroups[index].classList.toggle("active");
    })
})