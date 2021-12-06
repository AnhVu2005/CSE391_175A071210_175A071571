// let paragraph = document.getElementById("text");
// let btnChange = document.getElementById("btnChange");

// btnChange.addEventListener("click", changeValueParagraph);

// function changeValueParagraph() {
//   paragraph.textContent = "Nội dung mới";
//   paragraph.style.backgroundColor = "#03046a";
//   paragraph.style.color = "#fff";
// }

const foodList = [
    {
      foodName: "Apple",
      foodImage: "./img/apple.jpg",
    },
    {
      foodName: "Banana",
      foodImage: "./img/banana.jfif",
    },
    {
      foodName: "Mango",
      foodImage: "./img/mango.jpg",
    },
    {
      foodName: "Orange",
      foodImage: "./img/orange.jfif",
    },
    {
      foodName: "Grape",
      foodImage: "./img/grapes.jpg",
    },
  ];
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function checkDataValue(data) {
    for (let i = 0; i < foodList.length; i++) {
      if (
        data == capitalizeFirstLetter(foodList[i].foodName) ||
        data == foodList[i].foodName.toUpperCase() ||
        data == foodList[i].foodName.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
  }
  
  const showFruit = document.querySelector("#showFruit");
  showFruit.addEventListener("click", () => {
    const fruitDataSearch = document.querySelector("#fruitSearch").value;
  
    if (fruitDataSearch != "") {
      if (checkDataValue(fruitDataSearch)) {
        for (let i = 0; i < foodList.length; i++) {
          if (
            fruitDataSearch == capitalizeFirstLetter(foodList[i].foodName) ||
            fruitDataSearch == foodList[i].foodName.toUpperCase() ||
            fruitDataSearch == foodList[i].foodName.toLowerCase()
          ) {
            document.querySelector("#fruitName").textContent =
              capitalizeFirstLetter(foodList[i].foodName);
            document
              .querySelector("#fruitImg")
              .setAttribute("src", foodList[i].foodImage);
          }
        }
      } else {
        alert("Frust is not excited");
      }
    } else {
      alert("You must input a fruit");
    }
  
    document.querySelector("#fruitSearch").value = "";
  });