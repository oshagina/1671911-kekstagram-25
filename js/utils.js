
//Функция для проверки максимальной длины комментария
const compareMaxLengthText = (string, maxSize) => string.length <= maxSize;

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
  return (...params) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => {
      cb.apply(null, params);
    },
    delayInterval);
  };
};

export {
  showElement,
  closeElement,
  compareMaxLengthText,
  addOverlay,
  removeOverlay,
  removeChild,
  debounce
};
