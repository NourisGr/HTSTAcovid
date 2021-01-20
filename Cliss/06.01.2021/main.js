function startCode()
{
    m = 50;
  
    for(let i=m;i!=0;)
    {
        if(m<0)
        {
            i++;
        }
        else
        {
            i--;
        }
        document.getElementById("dataHere").innerHTML += "<div>" + i ;
    }    
}