const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors);

//CСЫЛКИ
const refs = {
   startColorBtn: document.querySelector('button[data-action="start"]'),
   stopColorBtn: document.querySelector('button[data-action="stop"]'),
   bodyColor: document.querySelector('body'),
}

//ПЕРЕМЕННЫЕ
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const minColor = 0;
const maxColor = colors.length;

const CHENGE_INTERVAL = 1000;
let intervalId = [];

// СЛУШAТЕЛИ
refs.startColorBtn.addEventListener('click', startСhangeСolor);
refs.stopColorBtn.addEventListener('click', stopСhangeСolor);

buttonNotActiveStop();

// СТАРТ - изменет цвет 
function startСhangeСolor() {
   buttonActiveStop();
   buttonNotActiveStart();

   let interlId = setInterval(() => {
      // const randomColorOld = Math.floor(Math.random() * colors.length);
      const randomColor = randomIntegerFromInterval(minColor, maxColor)
      refs.bodyColor.style.background = colors[randomColor];
      console.log(refs.bodyColor.style.background);
   }, CHENGE_INTERVAL);

   intervalId.length=0;
   intervalId.push(interlId)
};

// СТОП - изменяет цвет
function stopСhangeСolor() {
   buttonActiveStart();
   buttonNotActiveStop();

   clearInterval(intervalId);
}

// Активность кнопок Старт
function buttonNotActiveStart() {
   refs.startColorBtn.setAttribute("disabled", "disabled");
}

function buttonActiveStart() {
   refs.startColorBtn.removeAttribute("disabled", "disabled");
}

// Активность кнопок Стоп
function buttonNotActiveStop() {
   refs.stopColorBtn.setAttribute("disabled", "disabled");
}

function buttonActiveStop() {
   refs.stopColorBtn.removeAttribute("disabled", "disabled");
}





