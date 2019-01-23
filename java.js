function startTime() {
  var today = new Date();
  var h = today.getHours();
  if (h > 12) {
    h -= 12;
} else if (h === 0) {
   h = 12;
}
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
 "<b>" + h + ":" + m + "</b>";
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

