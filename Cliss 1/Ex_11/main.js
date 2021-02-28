function ComputeSum()
{
        let startNumber = 1;
        let endNumber = 9;
        let sum = 0;
    for(let i=startNumber;i<=endNumber;i++)
    {
        sum = sum + i;
        document.getElementById("myOutput").innerHTML += "<div>" + i + ":" + sum + "</div>"
        console.log(i);
    }
}