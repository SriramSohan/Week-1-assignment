var fs=require("fs");

let data="Hi i am not there";
function afterchangee(err)
{
    if(err) return;
}

console.log("file changed");
fs.writeFile('c:/Users/srira/Desktop/OPAssignments/Week-1-assignment/02-async-js/easy/testasync.txt', data,'utf8',afterchangee)