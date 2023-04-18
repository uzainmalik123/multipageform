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
let num5 = 0;
let num6 = 0;
let num7 = 0;
let Btns = {}
let MonthYear = {};
let DiscountObject = {};
let FeeObject = {};
let MonthObject = {};
let YearObject = {};

arcadeBtn.style.borderColor = "var(--inputs-active)";

for (let i = 5; i < 11; i++) {
  FeeObject[num] = document.getElementsByTagName("p")[i];
  num++;
}

for (let c = 8; c < 11; c++) {
  DiscountObject[num2] = document.getElementsByTagName("span")[c];
  num2++;
}

for (let d = 1; d < 4; d++) {
  Btns[num5] = document.getElementsByTagName('button')[d]
  num5++;
}

for (let g = 11; g < 13; g++) {
  MonthYear[num7] = document.getElementsByTagName('p')[g]
  num7++;
}

MonthYear[0].style.color = "var(--primary-color)";

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
    for (let h = 0; h < 1; h++) {
      MonthYear[h].style.color = 'var(--primary-color)';
      h++;
      MonthYear[h].style.color = 'var(--para-color)';
      h--;
    }
    for (let f = 0; f < 3; f++) {
      Btns[f].style.height = '100%'
    }
  }
  f = 0;
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
      DiscountObject[num4].style.display = 'flex';
      num4++;
      b++;
    }
    for (let j = 0; j < 1; j++) {
      MonthYear[j].style.color = 'var(--para-color)';
      j++;
      MonthYear[j].style.color = 'var(--primary-color)';
      j--;   
    }
    for (let e = 0; e < 3; e++) {
      Btns[e].style.height = '110%'
    }
  }
  e = 0;
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
