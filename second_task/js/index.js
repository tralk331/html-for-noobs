//Hivatkozunk a dokumentum elemeire
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navList = document.querySelector(".nav-list");

hamburgerIcon.onclick = () => {
  navList.classList.toggle("nav-open");
};
