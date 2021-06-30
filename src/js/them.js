const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

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
      const randomColor = Math.floor(Math.random() * colors.length);
      refs.bodyColor.style.background = colors[randomColor];
   }, CHENGE_INTERVAL);

   intervalId.splice(0,intervalId.length)
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





