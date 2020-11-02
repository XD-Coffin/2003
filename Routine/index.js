var a = "7:00 - 8:00"

var d = new Date()
if (d.getDay()==0){
    document.write("Today is Sunday");
    document.getElementById("t1").write("10:00 - 11:30")
}
else if (d.getDay()==1){
    document.write("Today is monday");
    var elem = document.getElementById("t1")
    elem.innerHTML = "7:00-8:00"
}
else if (d.getDay()==2){
    document.write("Today is tuesday");
}
else if (d.getDay()==3){
    document.write("Today is wednesday");
}
else if (d.getDay()==4){
    document.write("Today is thursday");
}
else if (d.getDay()==5){
    document.write("Today is friday");
}
else if (d.getDay()==6){
    document.write("Today is saturday");
}
