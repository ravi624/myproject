setInterval(() => {

    d =new Date();
    hourtime=d.getHours();
    minutetime=d.getMinutes();
    secondtime=d.getSeconds();
    hrotate =30*hourtime+minutetime/2;
    mrotate =6*minutetime;
    srotate =6*secondtime;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
    
}, 1000);