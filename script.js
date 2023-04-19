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
let firstAddon = document.getElementById("first-addon-btn");
let secondAddon = document.getElementById("second-addon-btn");
let thirdAddon = document.getElementById("third-addon-btn");
let firstAddonStatus = firstAddon.getAttribute("value");
let secondAddonStatus = secondAddon.getAttribute("value");
let thirdAddonStatus = thirdAddon.getAttribute("value");
let changingHeadingYrMo = document.getElementById("heading-change-moyr");
let changeBtn = document.getElementById("change-btn");
let headingPerMonth = document.getElementById("heading-per-month");
let headingPerYear = document.getElementById("heading-per-year");
let paraTotal = document.getElementById("para-total");
let headingTotal = document.getElementById("heading-total");
let StepOne = document.getElementById('step-1');
let StepTwo = document.getElementById('step-2');
let StepThree = document.getElementById('step-3');
let StepFour = document.getElementById('step-4');
let StepFive = document.getElementById('step-5');
let defaultArMoPrice = 9;
let defaultAdMoPrice = 12;
let defaultPrMoPrice = 15;
let defaultArYrPrice = 90;
let defaultAdYrPrice = 120;
let defaultPrYrPrice = 150;
let addonOne = "0";
let addonTwo = "0";
let addonThree = "0";
let count = 0;
let count2 = 0;
let num = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;
let num11 = 0;
let num12 = 0;
let num13 = 0;
let num14 = 0;
let num15 = 0;
let num16 = 0;
let stepOneInputsErrors = [];
let stepOneInputs = [];
let NextBtns = [];
let BackBtns = [];
let ConfirmBtn = document.getElementById('confirm-btn');
let AddonServicesPrice = [];
let AddonServices = [];
let AddonsFee = [];
let IonIcons = [];
let Btns = {};
let MonthYear = {};
let DiscountObject = {};
let FeeObject = {};
let MonthObject = {};
let YearObject = {};
BackBtns[0] = document.getElementsByTagName('button')[4];
BackBtns[1] = document.getElementsByTagName('button')[9];
BackBtns[2] = document.getElementsByTagName('button')[12];
NextBtns[0] = document.getElementsByTagName('button')[0];
NextBtns[1] = document.getElementsByTagName('button')[5];
NextBtns[2] = document.getElementsByTagName('button')[10];

arcadeBtn.style.borderColor = "var(--inputs-active)";
setTimeout(() => {
  document.getElementById("switch_circle-1").click();
  document.getElementById("switch_circle-1").click();
}, 100)

for (let u = 1; u < 4; u++) {
  stepOneInputsErrors[num16] = document.getElementsByTagName('p')[u];
  num16++;
}

for (let t = 0; t < 3; t++) {
  stepOneInputs[t] = document.getElementsByTagName('input')[t];
}

for (let s = 27; s < 30; s++) {
  AddonServicesPrice[num14] = document.getElementsByTagName("p")[s];
  num14++;
}

for (let r = 24; r < 27; r++) {
  AddonServices[num13] = document.getElementsByTagName("p")[r];
  num13++;
}

for (let m = 15; m < 23; m++) {
  AddonsFee[num8] = document.getElementsByTagName("p")[m];
  num8++;
  m++;
  AddonsFee[num8] = document.getElementsByTagName("p")[m];
  m++;
  num8++;
}

for (let l = 0; l < 3; l++) {
  IonIcons[l] = document.getElementsByTagName("ion-icon")[l];
}

for (let i = 5; i < 11; i++) {
  FeeObject[num] = document.getElementsByTagName("p")[i];
  num++;
}

for (let c = 8; c < 11; c++) {
  DiscountObject[num2] = document.getElementsByTagName("span")[c];
  num2++;
}

for (let d = 1; d < 4; d++) {
  Btns[num5] = document.getElementsByTagName("button")[d];
  num5++;
}

for (let g = 11; g < 13; g++) {
  MonthYear[num7] = document.getElementsByTagName("p")[g];
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
      DiscountObject[num3].style.display = "none";
      num3++;
      a++;
    }
    for (let h = 0; h < 1; h++) {
      MonthYear[h].style.color = "var(--primary-color)";
      h++;
      MonthYear[h].style.color = "var(--para-color)";
      h--;
    }
    for (let f = 0; f < 3; f++) {
      Btns[f].style.height = "100%";
    }
    for (let n = 0; n < 5; n++) {
      AddonsFee[n].style.display = "block";
      n++;
    }
    for (let o = 1; o < 6; o++) {
      AddonsFee[o].style.display = "none";
      o++;
    }
    changeValueofPlan();
    changePriceofAddonYrMo();
  }
  f = 0;
  a = 0;
  n = 0;
  o = 1;
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
      DiscountObject[num4].style.display = "flex";
      num4++;
      b++;
    }
    for (let j = 0; j < 1; j++) {
      MonthYear[j].style.color = "var(--para-color)";
      j++;
      MonthYear[j].style.color = "var(--primary-color)";
      j--;
    }
    for (let e = 0; e < 3; e++) {
      Btns[e].style.height = "110%";
    }
    for (let p = 1; p < 6; p++) {
      AddonsFee[p].style.display = "block";
      p++;
    }
    for (let q = 0; q < 5; q++) {
      AddonsFee[q].style.display = "none";
      q++;
    }
    changeValueofPlan();
    changePriceofAddonYrMo();
  }
  e = 0;
  b = 0;
  p = 1;
  q = 0;
  num4 = 0;
});

arcadeBtn.addEventListener("click", () => {
  arcadeBtnValue = "active";
  advancedBtnValue = "notactive";
  proBtnValue = "notactive";

  //BORDER COLOR

  arcadeBtn.style.borderColor = "var(--inputs-active)";
  advancedBtn.style.borderColor = "var(--off-white)";
  proBtn.style.borderColor = "var(--off-white)";

  //BACKGROUND COLOR

  arcadeBtn.style.backgroundColor = "var(--alabaster-color)";
  advancedBtn.style.backgroundColor = "var(--white-color)";
  proBtn.style.backgroundColor = "var(--white-color)";

  changeValueofPlan();
});
advancedBtn.addEventListener("click", () => {
  arcadeBtnValue = "notactive";
  advancedBtnValue = "active";
  proBtnValue = "notactive";

  //BORDER COLOR

  arcadeBtn.style.borderColor = "var(--off-white)";
  advancedBtn.style.borderColor = "var(--inputs-active)";
  proBtn.style.borderColor = "var(--off-white)";

  //BACKGROUND COLOR

  arcadeBtn.style.backgroundColor = "var(--white-color)";
  advancedBtn.style.backgroundColor = "var(--alabaster-color)";
  proBtn.style.backgroundColor = "var(--white-color)";

  changeValueofPlan();
});
proBtn.addEventListener("click", () => {
  arcadeBtnValue = "notactive";
  advancedBtnValue = "notactive";
  proBtnValue = "active";

  //BORDER COLOR

  arcadeBtn.style.borderColor = "var(--off-white)";
  advancedBtn.style.borderColor = "var(--off-white)";
  proBtn.style.borderColor = "var(--inputs-active)";

  //BACKGROUND COLOR

  arcadeBtn.style.backgroundColor = "var(--white-color)";
  advancedBtn.style.backgroundColor = "var(--white-color)";
  proBtn.style.backgroundColor = "var(--alabaster-color)";

  changeValueofPlan();
});

const checkFirstAddonStatus = () => {
  if (firstAddonStatus == "notactive") {
    firstAddonStatus = "active";
    firstAddon.style.borderColor = "var(--inputs-active)";
    firstAddon.style.backgroundColor = "var(--alabaster-color)";
    IonIcons[0].style.color = "var(--inputs-active)";
    IonIcons[0].style.backgroundColor = "var(--alabaster-color)";
  } else if (firstAddonStatus == "active") {
    firstAddonStatus = "notactive";
    firstAddon.style.borderColor = "var(--off-white)";
    firstAddon.style.backgroundColor = "var(--white-color)";
    IonIcons[0].style.color = "var(--white-color)";
    IonIcons[0].style.backgroundColor = "var(--inputs-active)";
  }
};
const checkSecondAddonStatus = () => {
  if (secondAddonStatus == "notactive") {
    secondAddonStatus = "active";
    secondAddon.style.borderColor = "var(--inputs-active)";
    secondAddon.style.backgroundColor = "var(--alabaster-color)";
    IonIcons[1].style.color = "var(--inputs-active)";
    IonIcons[1].style.backgroundColor = "var(--alabaster-color)";
  } else if (secondAddonStatus == "active") {
    secondAddonStatus = "notactive";
    secondAddon.style.borderColor = "var(--off-white)";
    secondAddon.style.backgroundColor = "var(--white-color)";
    IonIcons[1].style.color = "var(--white-color)";
    IonIcons[1].style.backgroundColor = "var(--inputs-active)";
  }
};
const checkThirdAddonStatus = () => {
  if (thirdAddonStatus == "notactive") {
    thirdAddonStatus = "active";
    thirdAddon.style.borderColor = "var(--inputs-active)";
    thirdAddon.style.backgroundColor = "var(--alabaster-color)";
    IonIcons[2].style.color = "var(--inputs-active)";
    IonIcons[2].style.backgroundColor = "var(--alabaster-color)";
  } else if (thirdAddonStatus == "active") {
    thirdAddonStatus = "notactive";
    thirdAddon.style.borderColor = "var(--off-white)";
    thirdAddon.style.backgroundColor = "var(--white-color)";
    IonIcons[2].style.color = "var(--white-color)";
    IonIcons[2].style.backgroundColor = "var(--inputs-active)";
  }
};

firstAddon.addEventListener("click", () => {
  checkFirstAddonStatus();
});
secondAddon.addEventListener("click", () => {
  checkSecondAddonStatus();
});
thirdAddon.addEventListener("click", () => {
  checkThirdAddonStatus();
});

firstAddon.addEventListener("click", () => {
  if (firstAddonStatus == "active") {
    defaultArMoPrice += 1;
    defaultAdMoPrice += 1;
    defaultPrMoPrice += 1;
    defaultArYrPrice += 10;
    defaultAdYrPrice += 10;
    defaultPrYrPrice += 10;
    AddonServices[0].style.display = "block";
    if(switchStatusOne == 'active'){
      AddonServicesPrice[0].style.display = 'block';
      AddonServicesPrice[0].textContent = '+$1/mo';
    }
    else if(switchStatusTwo == 'active'){
      AddonServicesPrice[0].style.display = 'block';
      AddonServicesPrice[0].textContent = '+$10/yr';
    }
    changeValueofPlan();
    // // displayPrices();
  } else if (firstAddonStatus == "notactive") {
    defaultArMoPrice -= 1;
    defaultAdMoPrice -= 1;
    defaultPrMoPrice -= 1;
    defaultArYrPrice -= 10;
    defaultAdYrPrice -= 10;
    defaultPrYrPrice -= 10;
    AddonServices[0].style.display = "none";
    AddonServicesPrice[0].style.display = 'none'
    changeValueofPlan();
    // // displayPrices();
  }
});
secondAddon.addEventListener("click", () => {
  if (secondAddonStatus == "active") {
    defaultArMoPrice += 2;
    defaultAdMoPrice += 2;
    defaultPrMoPrice += 2;
    defaultArYrPrice += 20;
    defaultAdYrPrice += 20;
    defaultPrYrPrice += 20;
    AddonServices[1].style.display = "block";
    if(switchStatusOne == 'active'){
      AddonServicesPrice[1].style.display = 'block';
      AddonServicesPrice[1].textContent = '+$2/mo';
    }
    else if(switchStatusTwo == 'active'){
      AddonServicesPrice[1].style.display = 'block';
      AddonServicesPrice[1].textContent = '+$20/yr';
    }
    changeValueofPlan();
    // // displayPrices();
  } else if (secondAddonStatus == "notactive") {
    defaultArMoPrice -= 2;
    defaultAdMoPrice -= 2;
    defaultPrMoPrice -= 2;
    defaultArYrPrice -= 20;
    defaultAdYrPrice -= 20;
    defaultPrYrPrice -= 20;
    AddonServices[1].style.display = "none";
    AddonServicesPrice[1].style.display = 'none';
    changeValueofPlan();
    // displayPrices();
  }
});
thirdAddon.addEventListener("click", () => {
  if (thirdAddonStatus == "active") {
    defaultArMoPrice += 2;
    defaultAdMoPrice += 2;
    defaultPrMoPrice += 2;
    defaultArYrPrice += 20;
    defaultAdYrPrice += 20;
    defaultPrYrPrice += 20;
    AddonServices[2].style.display = "block";
    if(switchStatusOne == 'active'){
      AddonServicesPrice[2].style.display = 'block';
      AddonServicesPrice[2].textContent = '+$2/mo';
    }
    else if(switchStatusTwo == 'active'){
      AddonServicesPrice[2].style.display = 'block';
      AddonServicesPrice[2].textContent = '+$20/yr';
    }
    changeValueofPlan();
    // displayPrices();
  } else if (thirdAddonStatus == "notactive") {
    defaultArMoPrice -= 2;
    defaultAdMoPrice -= 2;
    defaultPrMoPrice -= 2;
    defaultArYrPrice -= 20;
    defaultAdYrPrice -= 20;
    defaultPrYrPrice -= 20;
    AddonServices[2].style.display = "none";
    AddonServicesPrice[2].style.display = 'none';
    changeValueofPlan();
    // displayPrices();
  }
});

const changePlans = () => {
  if (count == 0) {
    document.getElementById("switch_circle-2").click();
    count += 1;
  } else if (count == 1) {
    document.getElementById("switch_circle-1").click();
    count -= 1;
  }
};

const changeValueofPlan = () => {
  if (switchStatusOne == "active") {
    if (arcadeBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultArMoPrice + "/mo";
      changingHeadingYrMo.textContent = "Arcade (Monthly)";
      headingPerMonth.textContent = "+$9/mo";
    } else if (advancedBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultAdMoPrice + "/mo";
      changingHeadingYrMo.textContent = "Advanced (Monthly)";
      headingPerMonth.textContent = "+$12/mo";
    } else if (proBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultPrMoPrice + "/mo";
      changingHeadingYrMo.textContent = "Pro (Monthly)";
      headingPerMonth.textContent = "+$15/mo";
    }
    paraTotal.textContent = "Total (per month)";
  } else if (switchStatusTwo == "active") {
    if (arcadeBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultArYrPrice + "/yr";
      changingHeadingYrMo.textContent = "Arcade (Yearly)";
      headingPerMonth.textContent = "+$90/yr";
    } else if (advancedBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultAdYrPrice + "/yr";
      changingHeadingYrMo.textContent = "Advanced (Yearly)";
      headingPerMonth.textContent = "+$120/yr";
    } else if (proBtnValue == "active") {
      headingTotal.textContent = "+$" + defaultPrYrPrice + "/yr";
      changingHeadingYrMo.textContent = "Pro (Yearly)";
      headingPerMonth.textContent = "+$150/yr";
    }
    paraTotal.textContent = "Total (per year)";
  }
};

const changePriceofAddonYrMo = () => {
  if(switchStatusOne == 'active'){
    AddonServicesPrice[0].textContent = '+$1/mo';
    AddonServicesPrice[1].textContent = '+$2/mo';
    AddonServicesPrice[2].textContent = '+$2/mo';
  }
  else if(switchStatusTwo == 'active'){
    AddonServicesPrice[0].textContent = '+$10/yr';
    AddonServicesPrice[1].textContent = '+$20/yr';
    AddonServicesPrice[2].textContent = '+$20/yr';
  }
}

let stepOneInputsEmail = stepOneInputs[1];

const changeSteps = () => {
  if(count2 == 0){
    StepOne.style.display = 'flex';
    StepTwo.style.display = 'none';
  }
  else if(count2 == 1){
    StepOne.style.display = 'none';
    StepTwo.style.display = 'flex';
    StepThree.style.display = 'none';
  }
  else if(count2 == 2){
    StepTwo.style.display = 'none';
    StepThree.style.display = 'flex';
    StepFour.style.display = 'none';
  }
  else if(count2 == 3){
    StepThree.style.display = 'none';
    StepFour.style.display = 'flex';
    StepFive.style.display = 'none';
  }
  else if(count2 == 4){
    StepFour.style.display = 'none';
    StepFive.style.display = 'flex';
  }
}

NextBtns[0].addEventListener('click', () => {
  let stepOneInputsEmailVal = stepOneInputsEmail.value;
  if(stepOneInputs[0].value == ''){
    stepOneInputsErrors[0].style.display = 'block';
    stepOneInputsErrors[0].style.transition = '0.2s';
    stepOneInputs[0].style.borderColor = 'var(--error-color)';
  }
  else {
    stepOneInputsErrors[0].style.display = 'none';
    stepOneInputs[0].style.borderColor = 'var(--off-white)';
  }
  if(stepOneInputs[1].value == ''){
    stepOneInputsErrors[1].style.display = 'block';
    stepOneInputsErrors[1].style.transition = '0.2s';
    stepOneInputs[1].style.borderColor = 'var(--error-color)';
  }
  else {
    if(stepOneInputsEmailVal.includes('@') == false){
       stepOneInputsErrors[1].style.display = 'block';
       stepOneInputs[1].style.borderColor = 'var(--error-color)';
    }
    else {
       stepOneInputsErrors[1].style.display = 'none';
       stepOneInputs[1].style.borderColor = 'var(--off-white)';
    }
  }
  if(stepOneInputs[2].value.length != 10){
    stepOneInputsErrors[2].style.display = 'block';
    stepOneInputs[2].style.borderColor = 'var(--error-color)';
  }
  else {
    stepOneInputsErrors[2].style.display = 'none';
    stepOneInputs[2].style.borderColor = 'var(--off-white)';
  }
  if(stepOneInputs[0].value != '' && stepOneInputsEmailVal.includes('@') == true && stepOneInputs[2].value.length == 10) {
    count2 += 1 
    changeSteps();
  }
  else {
    count2 = 0
  }
})
NextBtns[1].addEventListener('click', () => {
  count2 += 1;
  changeSteps();
})
NextBtns[2].addEventListener('click', () => {
  count2 += 1;
  changeSteps();
})
ConfirmBtn.addEventListener('click', () => {
  count2 += 1;
  changeSteps();
})
BackBtns[0].addEventListener('click', () => {
  count2 -= 1;
  changeSteps();
})
BackBtns[1].addEventListener('click', () => {
  count2 -= 1;
  changeSteps();
})
BackBtns[2].addEventListener('click', () => {
  count2 -= 1;
  changeSteps();
})

changeBtn.addEventListener("click", () => {
  changePlans();
  changeValueofPlan();
  changePriceofAddonYrMo();
});
