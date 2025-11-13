let n = 10
let a =0;
let b = 1;
console.log(a)

for(let i = 2 ; i < n;i++){
    let temp = a+b
    console.log(" " +temp)
    a = b;
    b=temp

}