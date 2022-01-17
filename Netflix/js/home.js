//Khai bao bien
const fqaCollapseGroups = document.querySelectorAll(".fqa--collapse__group");
const fqaCollapseBtns = document.querySelectorAll(".fqa--collapse__group--question");
const showPw = document.querySelector(".show-pw");
const emailInput = document.getElementById("email");
const pwInput = document.getElementById("password");
const emailWarning = document.getElementById("email-warning");
const pwWarning = document.getElementById("pw-warning");

// FQA Collapse Event
fqaCollapseBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        fqaCollapseGroups[index].classList.toggle("active");
    })
})

// Login
function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin"  && password == "admin") {
        document.querySelector(".login--form").setAttribute("action", "./admin/user.html")
    }
    if (email == "jasont@gmail.com" && password == "12345678") {
        document.querySelector(".login--form").setAttribute("action", "./browse.html")
    }

    if (email == "" || password == "") {
        alert("Login Failed!");
    }
}

// Check input validate
let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
emailInput.onblur = function () {
    emailWarning.textContent = "";
    if (this.value) {
        if (emailReg.test(this.value)) {
            emailWarning.textContent = "";
        }
        else {
            emailWarning.textContent = "Vui lòng nhập email hợp lệ.";
        }
    }
    else {
        emailWarning.textContent = "Vui lòng nhập email hoặc số điện thoại hợp lệ.";
    }
}

let pwReg = /^[0-9a-zA-Z]{4,}$/;
pwInput.oninput = function () {
    console.log(pwReg.test(this.value));
    if (pwReg.test(this.value)) {
        pwWarning.textContent = "";
    }
    else {
        pwWarning.textContent = "Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.";
    }
}

// Show PW
showPw.addEventListener("click", function (){
    var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    showPw.textContent = "Ẩn";
  } else {
    x.type = "password";
    showPw.textContent = "Hiện";
  }
})