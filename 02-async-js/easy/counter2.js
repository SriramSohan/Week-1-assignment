var counter = 1 ;

function counter2() {
    console.clear()
    console.log(counter);
    counter+=1;
}

for(var i=0;i<1000;i++) {
setTimeout(counter2,(i+1)*1000  );
}