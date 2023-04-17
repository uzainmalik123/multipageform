let switchCirclehrefOne = document.getElementById('switch_circle-1');
let switchCirclehrefTwo = document.getElementById('switch_circle-2');
let switchCircle = document.getElementById('switchcircle');
let arcadeBtn = document.getElementById('arcade-btn');
let advancedBtn = document.getElementById('advanced-btn');
let proBtn = document.getElementById('pro-btn');
let arcadeBtnValue = arcadeBtn.getAttribute('value');
let advancedBtnValue = advancedBtn.getAttribute('value');
let proBtnValue = proBtn.getAttribute('value');
let num = 0;
let FeeObject = {
}

for(let i = 5; i < 11; i++){
    FeeObject[num] = document.getElementsByTagName('p')[i];
    num++;
}

console.log(FeeObject);

switchCirclehrefOne.addEventListener('click', () => {
    switchCircle.style.marginLeft = '5px'
    switchCircle.style.transition = '0.2s'
})
switchCirclehrefTwo.addEventListener('click', () => {
    switchCircle.style.marginLeft = '30px'
    switchCircle.style.transition = '0.2s'
    yearlyFee.style.display = 'flex'
})

arcadeBtn.addEventListener('click', () => {
    arcadeBtnValue = 'active'
    advancedBtnValue = 'notactive'
    proBtnValue = 'notactive'

    arcadeBtn.style.borderColor = 'var(--inputs-active)'
    advancedBtn.style.borderColor = 'var(--off-white)'
    proBtn.style.borderColor = 'var(--off-white)'
})
advancedBtn.addEventListener('click', () => {
    arcadeBtnValue = 'notactive'
    advancedBtnValue = 'active'
    proBtnValue = 'notactive'

    arcadeBtn.style.borderColor = 'var(--off-white)'
    advancedBtn.style.borderColor = 'var(--inputs-active)'
    proBtn.style.borderColor = 'var(--off-white)'
})
proBtn.addEventListener('click', () => {
    arcadeBtnValue = 'notactive'
    advancedBtnValue = 'notactive'
    proBtnValue = 'active'

    arcadeBtn.style.borderColor = 'var(--off-white)'
    advancedBtn.style.borderColor = 'var(--off-white)'
    proBtn.style.borderColor = 'var(--inputs-active)'
})
