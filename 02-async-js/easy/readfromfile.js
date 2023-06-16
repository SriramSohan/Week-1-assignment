var fs=require("fs");

fs.readFile("c:/Users/srira/Desktop/OPAssignments/Week-1-assignment/02-async-js/easy/testasync.txt",'utf8',function(err, data){
    if(err) {
        console.log(err);return;
    }

    console.log(data);
});