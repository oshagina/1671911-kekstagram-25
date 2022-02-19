//Функция, возвращающая случайное целое число из переданного диапазона включительно
//из MDN WEB DOCS
const getRandomIntInclusive=(min, max)=>{
  if(max>min||(max-min)>=0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return false;
};
//Функция для проверки максимальной длины строки

const controlMaxLength=(frase,STRING_MAXLENGTH)=>{
  if(frase.length<STRING_MAXLENGTH){
    return true;
  } return false;
};

getRandomIntInclusive(0,10);
controlMaxLength('Hello',140);
