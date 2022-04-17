
//Функция для проверки максимальной длины комментария
const compareMaxLengthText = (text, COMMENT_SIZE) => text.trim().length <= COMMENT_SIZE;

//функция получения случайного элемента из массива
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length-1)];

const showElement = (element) => element.classList.remove('hidden');
const closeElement = (element) => element.classList.add('hidden');
const addOverlay = (element) => element.classList.add('modal-open');
const removeOverlay = (element) => element.classList.remove('modal-open');

const removeChild = (parent) => {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};

const debounce =(cb, delayInterval) => {
  let lastTimeout = null;
  return function () {
    const argums = arguments;
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => {
      cb.apply(null, argums);
    },
    delayInterval);
  };
};

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  showElement,
  closeElement,
  compareMaxLengthText,
  addOverlay,
  removeOverlay,
  removeChild,
  debounce
};
