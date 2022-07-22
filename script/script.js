// PASSWORD VALIDATION //
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#cPass");
const btn = document.querySelector("button[type='submit']");
let alert0 = document.querySelector(".alert0");
let alert1 = document.querySelector(".alert1");
btn.addEventListener("click", () => {
  if (pass1.value === "") {
    alert0.textContent = "*Password field cannot be empty";
    alert0.style.display = "block";
    pass1.style.border = "2px solid red";
  } else if (pass2.value === "") {
    alert1.textContent = "*Password field cannot be empty";
    alert1.style.display = "block";
    pass2.style.border = "2px solid red";
  } else if (pass1.value.length < 8) {
    alert0.textContent = "*password should be atleast 8 character long";
    alert0.style.display = "block";
    pass1.style.border = "2px solid red";
  } else if (pass2.value.length < 8) {
    alert1.textContent = "*password should be atleast 8 character long";
    alert1.style.display = "block";
    pass2.style.border = "2px solid red";
  } else if (pass1.value !== pass2.value) {
    alert1.textContent = "*Passwords do not match";
    alert1.style.display = "block";
    pass1.style.border = "2px solid red";
    pass2.style.border = "2px solid red";
  } else {
    alert0.style.display = "none";
    alert1.style.display = "none";
    pass1.style.border = "null";
    pass2.style.border = "null";
  }
});
