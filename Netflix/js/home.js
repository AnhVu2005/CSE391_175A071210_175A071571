const fqaCollapseGroups = document.querySelectorAll(".fqa--collapse__group");
const fqaCollapseBtns = document.querySelectorAll(".fqa--collapse__group--question");

fqaCollapseBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        fqaCollapseGroups[index].classList.toggle("active");
    })
})

// login
function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin"  && password == "admin") {
        document.querySelector(".login--form").setAttribute("action", "../admin/user.html")
    }
    if (email == "jasont@gmail.com" && password == "12345678") {
        document.querySelector(".login--form").setAttribute("action", "../browse.html")
    }

    if (email == "" || password == ""){
        alert("Login Failed!");
    }
}