var today = new Date();
//var year = today.getFullYear();
//var month = today.getMonth();
//var day = today.getDate();
var hourNow = today.getHours();
//var minuteNow = today.getMinutes();
var greeting;


if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

function CurrentTime()
{ 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
} 

var clock  = CurrentTime();    
document.write('<h1>' + clock + '</h1>')
document.write('<h2>' + greeting + '</h2>')
console.log("can you see me?")