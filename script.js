let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

showSlides();

// popup
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

document.querySelectorAll(".popup-img").forEach(img=>{
  img.onclick = ()=>{
    popup.style.display="flex";
    popupImg.src = img.src;
  }
});

popup.onclick = ()=>{
  popup.style.display="none";
}
