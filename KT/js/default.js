const determineBtn = document.getElementById("determine");
const defaultResultBox = document.getElementsByClassName("default-box");

determineBtn.addEventListener("click", function () {
  const defaultAns = document.getElementsByClassName("defaultAns");

  defaultResultBox[0].innerHTML = "";
  const heading = document.createElement("h2");
  heading.classList.add("default-heading");

  const image = document.createElement("img");
  image.classList.add("default-img");

  if (
    defaultAns[0].selectedIndex == 0 &&
    defaultAns[1].selectedIndex == 2 &&
    defaultAns[2].selectedIndex == 1
  ) {
    heading.textContent = "You're an alien";
    image.setAttribute("src", "img/alien.jpg");
  } else if (
    defaultAns[0].selectedIndex == 2 &&
    defaultAns[1].selectedIndex == 0 &&
    defaultAns[2].selectedIndex == 0
  ) {
    heading.textContent = "You're bizarre";
    image.setAttribute("src", "img/bizarre-person.jpg");
  } else {
    heading.textContent = "You're normal";
    image.setAttribute("src", "img/normal-person.jpg");
  }

  for (let i = 0; i < defaultAns.length; i++) {
    defaultAns[i].selectedIndex = 0;
  }

  defaultResultBox[0].appendChild(heading);
  defaultResultBox[0].appendChild(image);
});