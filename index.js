let timosha = null;
if(confirm("Ты точно Тимоша?")) {
  timosha = prompt("Как зовут твою игрушечную крысу?");
}
else {
  alert("Уходи, это все только для Тимоши");
}
console.log(timosha);

let ura = 0;
let perekruti = 0;
let heart = document.querySelector(".heart");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    heart.style.animation = "none";
    if (i) {
        setTimeout(function () {
            heart.style.animation = "spin-otnyash 3s forwards";
        }, 100);
        ura++;
    } else {
        setTimeout(function () {
            heart.style.animation = "spin-brawl 3s forwards";
        }, 100);
        perekruti++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#ura-count").textContent = `ura: ${ura}`;
    document.querySelector("#perekruti-count").textContent = `perekruti: ${perekruti}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    heart.style.animation = "none";
    ura = 0;
    perekruti = 0;
    updateStats();
})

const display = document.getElementById("skushitem");

const spisok = [{
  bodypart: "носик",
}, {
  bodypart: "животик",
}, {
  bodypart: "шея",
}, {
  bodypart: "лобик",
}, {
  bodypart: "ушки",
}, {
  bodypart: "пальцы",
}, {
  bodypart: "волосы",
}, {
  bodypart: "щёчки",
}, {
  bodypart: "кошмар!",
}, {
  bodypart: "ключицы",
}, {
  bodypart: "г-губ-бы",
}];

function skushMe() {
  const listLength = spisok.length;
  const randVal = spisok[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<br><br><br><q>${randVal.bodypart}</q>`;
}

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer () {
	seconds++;

	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}

document.addEventListener('DOMContentLoaded', function() {
  // конечная дата
  const deadline = new Date(2023, 07, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

let btn = document.querySelector('butt');
let el = document.querySelector('show');

btn.addEventListener('click', () => {
  el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
});
