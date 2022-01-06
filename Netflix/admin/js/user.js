// Khai bao bien

let txtHoTen = document.getElementById("txtHoTen");
let txtEmail = document.getElementById("txtEmail");
let txtTel = document.getElementById("txtTel");
let txtQueQuan = document.getElementById("txtQueQuan");
let btnLuu = document.getElementById("btnLuu");
let tableUser = document.getElementById("bodyUser");
let puHoTen = document.getElementById("puHoTen");
let puEmail = document.getElementById("puEmail");
let puTel = document.getElementById("puTel");
let puQueQuan = document.getElementById("puQueQuan");
let puLuu = document.getElementById("puLuu");

// Khai bao ham

function getData() {
  let listNotes = localStorage.getItem("user");
  let noteObj;

  noteObj = listNotes != null ? JSON.parse(listNotes) : [];

  return noteObj;
}

function showUser(){
    tableUser.innerHTML = '';
    // Lay du lieu
    let userDatas = [...getData()];

    // Kiem tra userDatas
    console.log(userDatas);
    if (userDatas.length > 0){
        userDatas.forEach((user, index) => {
            let userTr = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.country}</td>
                <td>${user.role}</td>
                <td>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showPopup(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="delUser(${index})">Delete</button>
                </td>
            </tr>
            `

            tableUser.innerHTML += userTr;
        })
    }
    else {
        tableUser.innerHTML = `
            <tr>
                <th colspan="7">No Data</th>
            </tr>
        `;
    }

}

function addUser() {

    // Lay du lieu tu localStorage
    let userDataArr = [...getData()];

    userDataArr.push({
        name: `${txtHoTen.value}`,
        email: `${txtEmail.value}`,
        phone: `${txtTel.value}`,
        country: `${txtQueQuan.value}`,
        role: 'user',
    });
    
    // Luu tru du lieu vao localStorage
    localStorage.setItem("user", JSON.stringify(userDataArr));

    // Lam moi form nhap
    resetInput();

    // Cap nhat du lieu vao bang
    showUser();

};

function resetInput() {
    txtHoTen.value = txtEmail.value = txtTel.value = txtQueQuan.value = '';
};

function delUser(index) {
    // Lay duu lieu tu localStorage
    let dataUserArr = [...JSON.parse(localStorage.getItem("user"))];

    // Xoa du lieu va cap nhat len localStorage
    dataUserArr.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(dataUserArr));

    // Cap nhat du lieu vao bang
    showUser();
}

//Pop up
function showPopup(index){
    // Lay duu lieu tu localStorage
    let dataUserArr = [...JSON.parse(localStorage.getItem("user"))];

    // Show du lieu tren pop up
    let {name, email, phone, country} = dataUserArr[index];
    puHoTen.value = name;
    puEmail.value = email;
    puTel.value = phone;
    puQueQuan.value = country;

    // Dat thuoc tinh data-index cho puLuu
    puLuu.setAttribute("data-index", index);
}

// EditUser
function editUser(index){
    // Lay duu lieu tu localStorage
    let dataUserArr = [...JSON.parse(localStorage.getItem("user"))];

    // cap nhat du lieu vao mang
    dataUserArr[index].name = puHoTen.value;
    dataUserArr[index].email = puEmail.value;
    dataUserArr[index].phone = puTel.value;
    dataUserArr[index].country = puQueQuan.value;

    // Cap nhat du lieu len localstorage
    localStorage.setItem("user", JSON.stringify(dataUserArr));

    // Cap nhat du lieu vao bang
    showUser();

}


// Bat su kien
showUser();
btnLuu.onclick = addUser;
puLuu.addEventListener("click", function(){
    editUser(this.getAttribute("data-index"))
});