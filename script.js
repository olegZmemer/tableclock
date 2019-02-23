let time = document.querySelector('.time');
let day = document.querySelector('.day');
let temp = document.querySelector('.temp-value');
let termometrValue = document.getElementsByTagName('progress')[0].getAttribute('value');
function getWeekday(date){
    let days = ['SUN' ,'MON' , 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return days[date.getDay()];
}
function showClock(){
    let date = new Date();
    time.innerHTML = date.getHours() + ':' + date.getMinutes();
    day.innerHTML = getWeekday(date) + "  " + (date.getMonth()+1) + "/" + date.getDate();
    temp.innerHTML = termometrValue + '<sup>o<sup>';
}
setInterval(showClock, 1000)
