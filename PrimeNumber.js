let num=100

for(i = 2; i <= num; i++) {
    let count=0
    for(j = 2; j <= i/2; j++) {

    if(i %j== 0) {
        count++;
    }
    
    }
 if(count<2) {
    console.log(i)
 }
 
}
