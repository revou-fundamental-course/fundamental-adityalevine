document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const homeHeading = document.querySelector(".home-content h3");
  homeHeading.textContent = `Hi, ${name}`;
  const born = document.querySelector('input[name="born"]').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
  const message = document.querySelector('textarea[name="message"]').value;

  document.getElementById("output-name").textContent = name;
  document.getElementById("output-born").textContent = born;
  document.getElementById("output-gender").textContent = gender;
  document.getElementById("output-message").textContent = message;
  document.getElementById("current-time").textContent = new Date().toLocaleString();
  document.getElementById("message-form").reset();
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".navbar a.active").classList.remove("active");
    this.classList.add("active");
  });
});

document.getElementById("hamburger-icon").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});
