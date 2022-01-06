// Khai bao bien
let txtTitle = document.getElementById("txtTitle");
let txtDesc = document.getElementById("txtDesc");
let btnLuu = document.getElementById("btnLuu");
let tableMovie = document.getElementById("bodyMovie");
let puTitle = document.getElementById("puTitle");
let puDesc = document.getElementById("puDesc");
let puLuu = document.getElementById("puLuu");

// Khai bao ham
function getData() {
    let listNotes = localStorage.getItem("movie");
    let noteObj;
  
    noteObj = listNotes != null ? JSON.parse(listNotes) : [];
  
    return noteObj;
}

function showMovie(){
    tableMovie.innerHTML = '';
    // Lay du lieu
    let movieDatas = [...getData()];

    // Kiem tra movieDatas
    console.log(movieDatas);
    if (movieDatas.length > 0){
        movieDatas.forEach((movie, index) => {
            let movieTr = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${movie.title}</td>
                <td>${movie.desc}</td>
                <td>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showPopup(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="delMovie(${index})">Delete</button>
                </td>
            </tr>
            `

            tableMovie.innerHTML += movieTr;
        })
    }
    else {
        tableMovie.innerHTML = `
            <tr>
                <th colspan="4">No Data</th>
            </tr>
        `;
    }

}

function addMovie() {

    // Lay du lieu tu localStorage
    const movieDataArr = [...getData()];

    movieDataArr.push({
        title: `${txtTitle.value}`,
        desc: `${txtDesc.value}`,
    });
    
    // Luu tru du lieu vao localStorage
    localStorage.setItem("movie", JSON.stringify(movieDataArr));

    // Lam moi form nhap
    resetInput();

    // Cap nhat du lieu vao bang
    showMovie();

}

function resetInput() {
    txtTitle.value = txtDesc.value = '';
};

function delMovie(index) {
    // Lay duu lieu tu localStorage
    const dataMovieArr = [...JSON.parse(localStorage.getItem("movie"))];

    // Xoa du lieu va cap nhat len localStorage
    dataMovieArr.splice(index, 1);
    localStorage.setItem("movie", JSON.stringify(dataMovieArr));

    // Cap nhat du lieu vao bang
    showMovie();
}

//Pop up
function showPopup(index){
    // Lay duu lieu tu localStorage
    let dataMovieArr = [...JSON.parse(localStorage.getItem("movie"))];

    // Show du lieu tren pop up
    let {title, desc} = dataMovieArr[index];
    puTitle.value = title;
    puDesc.value = desc;

    // Dat thuoc tinh data-index cho puLuu
    puLuu.setAttribute("data-index", index);
}

// EditMovie
function editMovie(index){
    // Lay duu lieu tu localStorage
    let dataMovieArr = [...JSON.parse(localStorage.getItem("movie"))];

    // cap nhat du lieu vao mang
    dataMovieArr[index].title = puTitle.value;
    dataMovieArr[index].desc = puDesc.value;

    // Cap nhat du lieu len localstorage
    localStorage.setItem("movie", JSON.stringify(dataMovieArr));

    // Cap nhat du lieu vao bang
    showMovie();

}


// Bat su kien
showMovie();
btnLuu.onclick = addMovie;
puLuu.addEventListener("click", function(){
    editMovie(this.getAttribute("data-index"))
});