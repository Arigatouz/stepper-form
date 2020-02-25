const mainTabs = document.getElementsByClassName("tabs");
const btnNext = document.querySelector(".button-next");
const btnPrevious = document.querySelector(".button-previous");
const btnSubmit = document.querySelector(".button-submit");
const bulletPoint = document.querySelectorAll(".bullet-point");

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
  // bulletColor(tabIndex);
};
tabPreview(currentVIew);

const nextPreview = () => {
  mainTabs[currentVIew].style.display = "none";
  currentVIew++;
  tabPreview(currentVIew);
};
btnNext.addEventListener("click", nextPreview);

const previousPreview = () => {
  mainTabs[currentVIew].style.display = "none";
  currentVIew--;
  tabPreview(currentVIew);
};
btnPrevious.addEventListener("click", previousPreview);

// function bulletColor(index) {
//   for (let i = 0; i <= bulletPoint.length; i++) {
//     if (index === i) {
//       bulletPoint[i].id = "finish";
//     }else{
//       bulletPoint[i].id = "";
//     }
//   }
// }
