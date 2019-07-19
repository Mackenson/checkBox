const checkBoxes = document.querySelectorAll('.check');

let lastCheck;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkbox)=>{
      if (checkbox === this || checkbox === lastCheck) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastCheck = this;
}

checkBoxes.forEach((checkbox)=>{
  checkbox.addEventListener('click', handleCheck);
});

const checkAll = document.querySelector('#checkAll');

const checkEach = document.querySelectorAll('.check2');

console.log(checkEach.length-1);

function clickAll() {
  checkEach.forEach((checkbox)=>{
    if (checkAll.checked) {
      checkbox.checked = true;
    } else if (!checkAll.checked) {
      checkbox.checked = false;
    }
  });

}

function handleCheck2() {
  checkEach.forEach((checkbox)=>{
    if (checkbox.checked) {
      checkAll.checked = true;
    } else if (!checkbox.checked) {
      checkAll.checked = false;
      checkbox.checked = false;
    }
  });
}


checkEach.forEach((checkbox)=>{
  checkbox.addEventListener('click', handleCheck2);
});
