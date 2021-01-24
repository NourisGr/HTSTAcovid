function DecideifYearIsLeap()
{
    let = yeaer = Number(document.getElementById("yearNo").value);
    if(year%4==0){
        document.getElementById("Answer").innerHTML = "You wrote a Leap Year";
    }
}