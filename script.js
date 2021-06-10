// Pages
document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "block";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "none";
  });
});
document.querySelectorAll(".login").forEach((login) => {
  login.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "block";
    document.querySelector(".signup-page").style.display = "none";
  });
});
document.querySelectorAll(".signup").forEach((signup) => {
  signup.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "flex";
  });
});
// End of Pages

// Navigation
const dropDownItems = document.querySelectorAll(".dropdown-hover");

dropDownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener("mouseover", () => {
    dropdownItem.lastElementChild.style.cssText =
      "opacity:1;visibility:visible";
    document.querySelector(".navbar-wrapper").style.background =
      "linear-gradient(to right,#066399,#2f8fdf,#066399 ";
  });
  dropdownItem.addEventListener("mouseout", () => {
    dropdownItem.lastElementChild.style.cssText = "opacity:0;visibility:hidden";
    document.querySelector(".navbar-wrapper").style.background = "none";
  });
});
// End of navigation
