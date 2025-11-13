
function Countspace(str){
    n=str.length
    count=0
    for(i=0;i<=n;i++){
        if(str[i]==' ')
            count++
    }
    console.log(count)
}
str="welcome to kiran academy...!"
Countspace(str)