const wbwyLightBox = document.createElement("div");
wbwyLightBox.id = "wbwyLightBox";
document.body.appendChild(wbwyLightBox);

const images = document.querySelectorAll("img");
images.forEach(image => {
  image.addEventListener("click", e => {
    wbwyLightBox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (wbwyLightBox.firstChild) {
      wbwyLightBox.removeChild(wbwyLightBox.firstChild);
    }
    wbwyLightBox.appendChild(img);
  });
});

wbwyLightBox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  wbwyLightBox.classList.remove("active");
});

let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formPhone = document.getElementById("telephone");
let formPassword = document.getElementById("password");
let formButton = document.querySelector(".btn");
let regEx = /\S+@\S+\.\S+/;

function formChecker() {
  if (
    formName.value.trim() !== "" &&
    regEx.test(formEmail.value) &&
    formPhone.value !== ""
  ) {
    formButton.style.backgroundColor = "#009926";
  } else {
    formButton.style.backgroundColor = "#bd2978";
  }
}

function formChecker2() {
  if (formPassword.value !== "") {
    formButton.style.backgroundColor = "#009926";
  } else {
    formButton.style.backgroundColor = "#bd2978";
  }
}
