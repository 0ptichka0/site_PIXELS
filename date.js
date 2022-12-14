

var date = new Date();
var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var days = date.getDay();

var ans = document.getElementById("txx");

ans = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+dayOfWeek[days];

document.writeln(ans);
