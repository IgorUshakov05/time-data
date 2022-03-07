function butt(params) {
    var p = new Date();
    var day = p.getHours();
    var min = p.getMinutes();
    var Sec = p.getSeconds();
    if (Sec <= 9) {
        Sec = `0${Sec}`;
    }
    else if (day <= 9) {
        Sec = `0${day}`;
    }
    else if (min <= 9) {
        min = `0${min}`
    }
    document.getElementById('date').innerHTML = `${day}:${min}:${Sec}`
}
setInterval(() => {
    butt()
}, 1000);

function date() {
    var Vanya = new Date();
    var data = Vanya.getDate();
    var mount = Vanya.getMonth();
    if (mount <= 9) {
        mount = `0${mount}`;
    }
    if (data <= 9) {
        data = `0${data}`;
    }   
    document.getElementById('date1').innerHTML = `${data}.${mount}`
}

setInterval(() => {
    date();
}, 1000);