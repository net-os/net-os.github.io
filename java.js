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
    document.getElementById('clock').innerHTML = mo + "/" + d + "/" + y + "   " + "<b>" + h + ":" + m + "</b>";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
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
    window.open('http://ultimate-games.github.io', '_blank');
}

function web() {
    window.open('https://www.google.com', '_blank');
}

function mail() {
    window.open('https://mail.google.com/mail/u/0/', '_blank');
}

function youtube() {
    window.open('https://www.youtube.com/', '_blank');
}

function logo() {
    window.open('https://github.com/net-os/net-os.github.io/', '_blank');
}

function link() {
    window.open('https://aoms.schoolloop.com/portal/student_home', '_blank');
}

for (;;) {
    var online = navigator.onLine;
    var wifi = document.getElementById("wifi");
    if (online || "true") {
        wifi.style.display = "none";
    } else {
        wifi.style.display = "block";
    }
}

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
if (localStorage.getItem("wallpaper") === null) {
    localStorage.setItem("wallpaper", "https://net-os.github.io/wallpaper.jpg");
}

function loadwall() {
    if (localStorage.getItem("wallpaper") === null) {
        localStorage.setItem("wallpaper", "https://net-os.github.io/wallpaper.jpg");
    }
    
    var wall = localStorage.getItem("wallpaper");
    document.getElementById("thestyle").innerHTML = "body:before {   content: '';  display: block;position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: -10; background: url(" + wall + ") no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; }";
    }

function loadapps() {
    if (localStorage.getItem("apps") === null) {
        var yeet = document.getElementById("apps").innerHTML;
        localStorage.setItem("apps", yeet);
    }
    
    var dfgh = localStorage.getItem("apps");
    document.getElementById("apps").innerHTML = dfgh;
    }

function wallpaperChange() {
    var wall = prompt("Please enter wallpaper url.", "https://");
    document.getElementById("thestyle").innerHTML = "body:before {   content: '';  display: block;position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: -10; background: url(" + wall + ") no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; }";
    localStorage.setItem("wallpaper", wall);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function loadmode() {
    if (localStorage.getItem("mode") === "light") {
        document.getElementById("css").href = "/dark.css";
        document.getElementById("netos").src = "/netdark.svg";
    }
    if (localStorage.getItem("mode") === "dark") {
        document.getElementById("css").href = "/style.css";
        document.getElementById("netos").src = "/net.svg";
    }
}

function lightMode() {
    document.getElementById("css").href = "/dark.css";
    document.getElementById("netos").src = "/netdark.svg";
    localStorage.setItem("mode", "light");
}

function darkMode() {
    document.getElementById("css").href = "/style.css";
    document.getElementById("netos").src = "/net.svg";
    localStorage.setItem("mode", "dark");
}

function reset() {
    localStorage.clear();
    location.reload();
}
function appchange() {
   alertify.prompt("Enter the number of the app you want to  change. From left to right, 1-5.", 'Prompt Value'
               , function(evt, numb) {  });
    var url = prompt("Enter the link you want the app to go to.");
    var icon = prompt("Enter the html of the icon from fontawesome.com/icons or you can use a capitol letter. CAN NOT BE A PRO ICON!");
    var funct = "openApp('" + url + "')"
    var app = "<a onclick=\"openApp('" + url + "')\">" + icon + "</a>";
    document.getElementById(numb).innerHTML = app
    var approw = document.getElementById('apps').innerHTML;
    localStorage.setItem("apps", approw);
}
