let number = 0;

let inputNumber = 0;

let limitNumber = 0;

let savedInput = +localStorage.getItem('Input Number', inputNumber);
let savedLimit = +localStorage.getItem('Limit number', limitNumber);

let inputValue = document.getElementById('inc-and-dec-input');
let limitInput = document.getElementById('limit-input');

const inputNumberTag = document.getElementById('current-input-number');
const limitNumberTag = document.getElementById('current-limit-number');
if (savedInput != 0) {
  inputNumber = savedInput;
  inputNumberTag.textContent = (`Current increment/decrement value is ${inputNumber}`);
}

if (savedLimit != 0) {
  limitNumber = savedLimit;
  limitNumberTag.textContent = (`Current boom limit is ${limitNumber}`);

}



const saveToLocalStorage = () => {
  inputNumber = +inputValue.value;
  limitNumber = +limitInput.value;
  localStorage.setItem('Input Number', inputNumber);
  localStorage.setItem('Limit number', limitNumber);
  inputNumberTag.textContent = (`Current increment/decrement value is ${inputNumber}`);
  limitNumberTag.textContent = (`Current boom limit is ${limitNumber}`);
}

const getItemFromLocalStorage = () => {
  savedInput = +localStorage.getItem('Input Number', inputNumber);
  savedLimit = +localStorage.getItem('Limit number', limitNumber);
  inputNumber = savedInput;
  limitNumber = savedLimit;
  inputNumberTag.textContent = (`Current increment/decrement value is ${inputNumber}`);
  limitNumberTag.textContent = (`Current boom limit is ${limitNumber}`);
}

const numberTag = document.getElementById('number');

const list = document.getElementById('boom-list');

const isEmpty = (id) => {
  return document.getElementById(id).innerHTML.trim() == ''
}

const onIncrementClick = () => {
  number = number + inputNumber;
  numberTag.textContent = number;
  if ((number >= limitNumber) && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (number < limitNumber && number > -Math.abs(limitNumber)) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

const onDecrementClick = () => {
  number = number - inputNumber;
  numberTag.textContent = number;
  if ((number <= -Math.abs(limitNumber)) && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (number < limitNumber && number > -Math.abs(limitNumber)) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}