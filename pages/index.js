const rightBtn = document.querySelector(".button_type_right-arrow"),
  leftBtn = document.querySelector(".button_type_left-arrow"),
  sideBar = document.querySelector(".social-project__container"),
  slidesCnt = sideBar.querySelectorAll("div"),
  slideNum = document.querySelector(".social-project__slider-num");
let activeIdx = 0;

const changeSlide = (direction) => {
  switch (direction) {
    case "right": {
      // console.log(activeIdx);
      activeIdx++;
      if (activeIdx >= slidesCnt.length) activeIdx = 0;
      sideBar.style.transform = `translateX(-${activeIdx * 110}%)`;
      slideNum.textContent = `${activeIdx + 1}/${slidesCnt.length}`;
      break;
    }
    case "left": {
      console.log(activeIdx);
      activeIdx--;
      if (activeIdx < 0) activeIdx = slidesCnt.length - 1;
      sideBar.style.transform = `translateX(-${activeIdx * 110}%)`;
      slideNum.textContent = `${activeIdx + 1}/${slidesCnt.length}`;
      break;
    }
  }
};

rightBtn.addEventListener("click", () => changeSlide("right"));
leftBtn.addEventListener("click", () => changeSlide("left"));
console.log(`${activeIdx + 1}`);
// const myTimer = setInterval(() => changeSlide("right"), 10000);
