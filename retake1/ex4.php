<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
for ($i=200; $i<=300; $i++)
{
    if( $i %5 == 0)
    {
        print '<span style="color:red">'.$i.'</span></br>' ;
    } else{
        print $i."<br>";
    }
   
}
?>
</body>
</html>