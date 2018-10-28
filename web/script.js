var end = new Date('11/09/2022 10:1 AM');

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var year = day * 365;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var years = Math.floor(distance / year);
        var days = Math.floor(distance % year / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);
        document.getElementById('countdown').innerHTML = years + 'y ';
        document.getElementById('countdown').innerHTML += days + 'd ';
        document.getElementById('countdown').innerHTML += hours + 'h ';
        document.getElementById('countdown').innerHTML += minutes + 'm ';
        document.getElementById('countdown').innerHTML += seconds + 's';
    }

    timer = setInterval(showRemaining, 1000);


window.onload = function ()
    {
    document.getElementsById('num').innerHTML = 'penis';
};
