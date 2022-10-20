let countDown = new Date('Dec 31, 2022 23:59:59').getTime();

let hide = document.querySelector('.timer');
let x = setInterval(() => {
    let timeNow = new Date().getTime();

    let diffTime = countDown - timeNow;

    let days = Math.floor(diffTime / (1000 * 60 * 60 *24));
    document.querySelector('.days').innerHTML = days < 10 ? '0' + days : days;

    let hours = Math.floor(diffTime % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    document.querySelector('.hours').innerHTML = hours < 10 ? '0' + hours : hours;

    let minutes = Math.floor(diffTime % (1000 * 60 * 60) /(1000 * 60));
    document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;

    let seconds = Math.floor(diffTime % (1000 * 60) / 1000);
    document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if(diffTime < 0) {
        clearInterval(x);
        hide.display = 'none'
        hide.innerHTML = 'Happy New Year';
        hide.className = 'hide';
    }
}, 1000);