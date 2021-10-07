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

$cars = ["Volvo","Mercedes","Dacia","Tesla"];
?>

<select>

<?php
for ($=i;$i<count($cars);$i++)
{
?> 
<option> <?= $cars[$i]; ?></option>
<?php 
}
?>
</select>

</body>
</html>