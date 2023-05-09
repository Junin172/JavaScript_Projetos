var hora = document.getElementById('hora');
var minuto = document.getElementById('minuto');
var segundo = document.getElementById('segundo');

function updateTime() {
  var date_now = new Date();
  var hr = date_now.getHours();
  var min = date_now.getMinutes();
  var sec = date_now.getSeconds();

  if (hr < 10) {
    hr = '0' + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hora.textContent = hr;
  minuto.textContent = min;
  segundo.textContent = sec;
}

var relogio = setInterval(updateTime, 1000);
