let switchCirclehrefOne = document.getElementById("switch_circle-1");
let switchCirclehrefTwo = document.getElementById("switch_circle-2");
let switchStatusOne = switchCirclehrefOne.getAttribute("data-status");
let switchStatusTwo = switchCirclehrefTwo.getAttribute("data-status");
let switchCircle = document.getElementById("switchcircle");
let arcadeBtn = document.getElementById("arcade-btn");
let advancedBtn = document.getElementById("advanced-btn");
let proBtn = document.getElementById("pro-btn");
let arcadeBtnValue = arcadeBtn.getAttribute("value");
let advancedBtnValue = advancedBtn.getAttribute("value");
let proBtnValue = proBtn.getAttribute("value");
let num = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let DiscountObject = {};
let FeeObject = {};
let MonthObject = {};
let YearObject = {};

for (let i = 5; i < 11; i++) {
  FeeObject[num] = document.getElementsByTagName("p")[i];
  num++;
}

for (let c = 8; c < 11; c++) {
  DiscountObject[num2] = document.getElementsByTagName("span")[c];
  num2++;
}

switchCirclehrefOne.addEventListener("click", () => {
  switchCircle.style.marginLeft = "5px";
  switchCircle.style.transition = "0.2s";
  switchStatusOne = "active";
  switchStatusTwo = "notactive";
  if (switchStatusOne == "active") {
    for (let a = 0; a < 6; a++) {
      FeeObject[a].style.display = "block";
      FeeObject[a + 1].style.display = "none";
      DiscountObject[num3].style.display = 'none';
      num3++;
      a++;
    }
  }
  a = 0;
  num3 = 0;
});
switchCirclehrefTwo.addEventListener("click", () => {
  switchCircle.style.marginLeft = "30px";
  switchCircle.style.transition = "0.2s";
  switchStatusOne = "notactive";
  switchStatusTwo = "active";
  if (switchStatusTwo == "active") {
    for (let b = 0; b < 6; b++) {
      FeeObject[b].style.display = "none";
      FeeObject[b + 1].style.display = "block";
      DiscountObject[num4].style.display = 'block';
      num4++;
      b++;
    }
  }
  b = 0;
  num4 = 0;
});

arcadeBtn.addEventListener("click", () => {
  arcadeBtnValue = "active";
  advancedBtnValue = "notactive";
  proBtnValue = "notactive";

  arcadeBtn.style.borderColor = "var(--inputs-active)";
  advancedBtn.style.borderColor = "var(--off-white)";
  proBtn.style.borderColor = "var(--off-white)";
});
advancedBtn.addEventListener("click", () => {
  arcadeBtnValue = "notactive";
  advancedBtnValue = "active";
  proBtnValue = "notactive";

  arcadeBtn.style.borderColor = "var(--off-white)";
  advancedBtn.style.borderColor = "var(--inputs-active)";
  proBtn.style.borderColor = "var(--off-white)";
});
proBtn.addEventListener("click", () => {
  arcadeBtnValue = "notactive";
  advancedBtnValue = "notactive";
  proBtnValue = "active";

  arcadeBtn.style.borderColor = "var(--off-white)";
  advancedBtn.style.borderColor = "var(--off-white)";
  proBtn.style.borderColor = "var(--inputs-active)";
});
