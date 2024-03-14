let number = 1;

let inputNumber = 1;

let limitNumber = 1;

let clickNumber = 0;


let inputValue = document.getElementById('inc-and-dec-input');
let limitInput = document.getElementById('limit-input');


const inputNumberTag = document.getElementById('current-input-number');
const limitNumberTag = document.getElementById('current-limit-number');

const saveToLocalStorage = () => {
  clickNumber = 0;
  inputNumber = +inputValue.value;
  limitNumber = +limitInput.value;
  localStorage.setItem('Input Number', inputNumber);
  localStorage.setItem('Limit number', limitNumber);
  inputNumberTag.textContent = (`Current increment/decrement value is ${inputNumber}`);
  limitNumberTag.textContent = (`Current boom limit is ${limitNumber}`);
}

const getItemFromLocalStorage = () => {
  inputNumber = 0;
  limitNumber = 0;
  clickNumber = 0;
  const savedInput = +localStorage.getItem('Input Number', inputNumber);
  const savedLimit = +localStorage.getItem('Limit number', limitNumber);
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
  number = number * inputNumber;
  numberTag.textContent = number;
  ++clickNumber;
  if ((clickNumber === limitNumber || clickNumber === -Math.abs(limitNumber)) && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (clickNumber < limitNumber && clickNumber > -Math.abs(limitNumber)) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

const onDecrementClick = () => {
  number = number / inputNumber;
  numberTag.textContent = number;
  --clickNumber;
  if ((clickNumber === limitNumber || clickNumber === -Math.abs(limitNumber)) && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (clickNumber < limitNumber && clickNumber > -Math.abs(limitNumber)) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}