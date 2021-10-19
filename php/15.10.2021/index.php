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

$age = ["Dacia","Volvo","BMW"];
for($i=0;$i<sizeof($age);$i++)    
{
    ?>
    <p><?= $age[$i];?></p>
<?php }
?>

</body>
</html>