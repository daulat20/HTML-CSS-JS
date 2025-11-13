
function SumOfDIgit(num){
let digit=0
let sum = 0
    while(num>0){
         digit = num %10
         sum=sum+digit
         num = Math.floor(num/10)
        
    }
    return sum
    
}
console.log(SumOfDIgit(1234))