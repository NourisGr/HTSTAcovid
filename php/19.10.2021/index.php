<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    table, th, td {
  border:1px solid black;
}
</style>
</head>

<body>
<?php

$costofCars = array("Dacia"=>"10000","Mercedes"=>"50000","Volvo"=>"60000","BMW"=>"45000","Audi"=>"90000");

?>

<table>
<tr><<th>Car</th><th>Price</th></tr>
<?php
foreach($costofCars as $key=>$value)
{
?>
<tr><td><?=$key?></tb><tb><?=$value?></td></tr>

<?php
}
?>

</table>
</body>
</html>