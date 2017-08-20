document.querySelector("body").onload = timeChange();

function timeChange() {

    var dateObj = new Date();
    var dateNowHour = dateObj.getHours();
    var dateNowMinute = dateObj.getMinutes();
    var dateNowSecond = dateObj.getSeconds();

    dateNowHour = checkTime(dateNowHour);
    dateNowMinute = checkTime(dateNowMinute);
    dateNowSecond = checkTime(dateNowSecond);

    document.querySelector("#hora").innerHTML = dateNowHour;
    document.querySelector("#minuto").innerHTML = dateNowMinute;
    document.querySelector("#segundo").innerHTML = dateNowSecond;

    var t = setTimeout(timeChange, 500)
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}