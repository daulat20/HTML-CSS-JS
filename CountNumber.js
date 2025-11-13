let num=123456
let count=0
let temp=0
while(num>0){
    let digit = num %10
    temp = temp * 10 +digit
    num=Math.floor(num/10)
    count++

}
console.log(count)