const toggle = document.querySelector("#hamburger-wrapper");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  navigation.classList.toggle("active");
});

