// Khai bao bien

const txtHoTen = document.getElementById("txtHoTen");
const txtEmail = document.getElementById("txtEmail");
const txtTel = document.getElementById("txtTel");
const txtQueQuan = document.getElementById("txtQueQuan");
const btnLuu = document.getElementById("btnLuu");
const tableUser = document.getElementById("bodyUser");

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
                    <button class="btn btn-primary" onclick="editUser(${index})">Edit</button>
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
    const userDataArr = [...getData()];

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
    const dataUserArr = [...JSON.parse(localStorage.getItem("user"))];

    // Xoa du lieu va cap nhat len localStorage
    dataUserArr.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(dataUserArr));

    // Cap nhat du lieu vao bang
    showUser();
}

// Bat su kien
showUser();
btnLuu.onclick = addUser;
