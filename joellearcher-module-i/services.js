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
      wbwyLightBo.removeChild(wbwyLightBox.firstChild);
    }
    wbwyLightBox.appendChild(img);
  });
});

wbwyLightBox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  wbwyLightBox.classList.remove("active");
});
