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
  var mo = today.getMonth() + 1;
  var d = today.getDate();
  var y = today.getYear() - 100;
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
 mo + "/" + d + "/" + y + "   " + "<b>" + h + ":" + m + "</b>";
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "<i class='fas fa-user'>   " + "" + person + "";
  }
  document.getElementById("user").innerHTML = txt;
}

var myVar;

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


function games() {
window.open('http://ultimate-games.github.io', '_blank');  }

function notepad() {
window.open('https://ultimate-games.github.io/experiments/notepad/', '_blank');  }

function web() {
window.open('https://www.google.com/_/chrome/newtab', '_blank');  }

function mail() {
window.open('https://mail.google.com/mail/u/0/', '_blank');  }
