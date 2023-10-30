const time= document.getElementById('time');
const timeformat=document.getElementById('timeformat');
document.addEventListener('DOMContentLoaded',()=>{//document-object-model
    setInterval(showTime, 1000);
});
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const showTime=()=>{
    let date=new Date();
    let hr=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let d=date.getDay();
    let mon=date.getMonth();
    let yr=date.getFullYear();
    let date1=date.getDate();
    timeformat.innerHTML=hr>12?"PM":"AM";
    hr=hr>12?`${hr-12}`:hr;
    hr=hr<10?`0${hr}`:hr;
    m=m<10?`0${m}`:m;
    s=s<10?`0${s}`:s; 
    time.innerHTML=`${hr}:${m}:${s}`
    document.getElementById("day").innerHTML=  `${date1}/${mon+1}/${yr}  ${days[d]}`;
}