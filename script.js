
const daysB=document.getElementById("days");

const hourB=document.getElementById("hours");
const minB=document.getElementById("mins");
const secB=document.getElementById("sec");

function countDown(){
    
    const val=document.getElementById("date").value;
    
    const birthDate=new Date(`${val}T00:00`);
    const currDate=new Date();
    
    const Totalseconds=(birthDate-currDate)/1000;
   
    const days=Math.floor(Totalseconds/3600/24);
    const hours=Math.floor(Totalseconds/3600)%24;
    const minutes=Math.floor(Totalseconds/60)%60;
    const seconds=Math.floor(Totalseconds)%60;
    
    daysB.innerHTML=isNaN(days)?0:days;
    hourB.innerHTML=isNaN(hours)?0:formatdate(hours);

    minB.innerHTML=isNaN(hours)?0:formatdate(minutes);
    secB.innerHTML=isNaN(hours)?0:formatdate(seconds);

}

function formatdate(a)
{
    if(a<10)
    {
        return `0${a}`;
    }
    else{
        return a;
    }
}

setInterval(countDown,1000);



