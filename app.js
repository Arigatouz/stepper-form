const mainTabs = document.getElementsByClassName("tabs");
const btnNext = document.querySelector(".button-next");
const btnPrevious = document.querySelector(".button-previous");
const btnSubmit = document.querySelector(".button-submit");
const bulletPoint = document.querySelectorAll(".bullet-point");
const btnReload = document.querySelector(".button-reload");



let currentVIew = 0;

const tabPreview = tabIndex => {
  mainTabs[tabIndex].style.display = "block";
  tabIndex !== 0
    ? (btnPrevious.style.display = "inline-block")
    : (btnPrevious.style.display = "none");

  if (tabIndex == mainTabs.length - 1) {
    btnNext.style.display = "none";
    btnSubmit.style.display = "inline-block";
  } else {
    btnNext.style.display = "inline-block";
    btnSubmit.style.display = "none";
  }
  bulletPoint[currentVIew].id = "finish";
};
tabPreview(currentVIew);

const nextPreview = () => {
  mainTabs[currentVIew].style.display = "none";
  currentVIew++;
  tabPreview(currentVIew);
  bulletPoint[currentVIew].id = "finish";
};
btnNext.addEventListener("click", nextPreview);

const previousPreview = () => {
  mainTabs[currentVIew].style.display = "none";
  currentVIew--;
  tabPreview(currentVIew);
  bulletPoint[currentVIew + 1].id = "";
};
btnPrevious.addEventListener("click", previousPreview);

const submitted = () => {
  btnPrevious.style.display = "none";
  const h1 = document.createElement("h1");
  h1.textContent = "CONGRATULATIONS";
  mainTabs[currentVIew].style.display = "none";
  const message = document.querySelector(".message");
  message.appendChild(h1);
  btnSubmit.style.display = "none";
  btnReload.style.display = 'block'
  
};
btnSubmit.addEventListener("click", submitted);
btnReload.addEventListener('click' , ()=>{
  window.location.reload();
})