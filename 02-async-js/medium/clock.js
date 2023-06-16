
function printCurrentTime()
{
    let currentDate=new Date();
    console.log(currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
    

}

function printtime() {
    console.clear();
    printCurrentTime();
}

setInterval(printtime, 1000);