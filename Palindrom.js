let str = " madam "
let rev = ""
for(let i = str.length-1; i >=0;i-- ){
    rev+=str[i]
}

if(str == rev)
    console.log("String is Palindrom")
else
    console.log("String is not Palindrom")
