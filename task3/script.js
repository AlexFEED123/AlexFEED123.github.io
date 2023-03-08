const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const trafficLightEl2 = document.querySelector('#trafficLight2');

alert('Чёт не до конца смог)')
//не хватило времени додумать до конца.
function makeBlack(){
    trafficLightEl.style.background = ('black');
    trafficLightEl.addEventListener('click', makeGreen);
}
function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeBlack)
}

function makeBlack3(){
    trafficLightEl3.style.background = ('black');
   trafficLightEl3.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl3.style.background = ('yellow');
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeBlack3);
}

function makeBlack2(){
    trafficLightEl2.style.background = ('black');
   trafficLightEl2.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl2.style.background = ('red');
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeBlack2);
}

trafficLightEl.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeYellow);
trafficLightEl2.addEventListener('click', makeRed);