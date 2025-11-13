
function LeapYear(years){

    if(years %4==0 || years % 100==0||years % 400==0)
        console.log("Leap Year")
    else
        console.log("Not leap year")
}
LeapYear(2005)