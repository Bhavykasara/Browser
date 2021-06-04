var lc=setInterval(function(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (today.getMinutes()<10) {
        if (today.getHours()<10 && today.getSeconds()<10) {
            time='0'+today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds();
        }
        else if (today.getHours()<10) {
            time='0'+today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
        }
        else if (today.getSeconds()<10) {
            time=today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds();
        }
        else {
            time=today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
        }
    }
    if (today.getSeconds()<10) {
        if (today.getMinutes()<10) {
            time=today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds();
        }
        if (today.getHours()<10) {
            time='0'+today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
        }
        if (today.getHours()<10 && today.getMinutes()<10) {
            time='0'+today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds();
        }
        else {
            time=today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
        }
    }
    if (today.getHours()<10) {
        if (today.getMinutes()<10 && today.getSeconds()<10) {
            time='0'+today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds();
        }
        else if (today.getMinutes()<10) {
            time='0'+today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
        }
        else if (today.getSeconds()<10) {
            time='0'+today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
        }
        else {
            time='0'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
    }
    console.log(time);
    document.getElementById("time").innerText=time;
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var dateTime = date
    document.getElementById("date").innerHTML = dateTime + ' <br> Day - ' + daylist[day];

},1000);

sec=00;
min=00;
hor=00;

io=0;

var starto;

function start() {
    starto = setInterval(function(){
        sec=sec+1;
        if (min<10) {
            if (hor<10 && sec<10) {
                io='0'+hor + ":0" + min + ":0" + sec;
            }
            else if (hor<10) {
                io='0'+hor + ":0" + min + ":" + sec;
            }
            else if (sec<10) {
                io=hor + ":0" + min + ":0" + sec;
            }
            else {
                io=hor + ":0" + min + ":" + sec;
            }
        }
        else if (sec<10) {
            if (min<10) {
                io=hor + ":0" + min + ":0" + sec;
            }
            if (hor<10) {
                io='0'+hor + ":" + min + ":0" + sec;
            }
            if (hor<10 && min<10) {
                io='0'+hor + ":0" + min + ":0" + sec;
            }
            else {
                io=hor + ":" + min + ":0" + sec;
            }
        }
        else if (hor<10) {
            if (min<10 && sec<10) {
                io='0'+hor + ":0" + min + ":0" + sec;
            }
            else if (min<10) {
                io='0'+hor + ":0" + min + ":" + sec;
            }
            else if (sec<10) {
                io='0'+hor + ":" + min + ":0" + sec;
            }
            else {
                io='0'+hor + ":" + min + ":" + sec;
            }
        }
        else {
            io=hor+':'+min+':'+sec;
        }
        if (sec==60) {
            sec=00;
            min=min+1;
        }
        if (min==60) {
            min=00;
            hor=hor+1;
        }
        document.getElementById("stop").innerHTML=io;
    },1000);
}

function stop() {
    clearInterval(starto);
}

function reset() {
    clearInterval(starto);
    sec=00;
    min=00;
    hor=00;
    io='00:00:00';
    document.getElementById("stop").innerHTML=io;
}

var h1=setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var sec=date.getSeconds();
    
    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM'; 
    
    // Find current hour in AM-PM Format
    hours = hours % 12; 
    
    // To display "0" as "12"
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.getElementById("hr12").innerHTML = 
      hours + ':' + minutes + ':'+sec+ ' ' + newformat;
    },1000);