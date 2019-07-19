const checkBoxes = document.querySelectorAll('.check');

let lastCheck;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkbox)=>{
      console.log(checkbox);
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
