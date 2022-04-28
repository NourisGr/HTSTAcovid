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

$host="localhost";
$user="root";
$psw="";
$portNo="3306";
$database="ProductsPage";

$connection= new mysqli($host,$user,$psw,$database,$portNo);
$sqlStatement = $connection->prepare("SELECT * from Products");

$sqlStatement->execute();
$reset = $sqlStatement->get_result();?>
 <form action="$_POST">
<select name="MySelect">
<?php

while($row = $reset->fetch_assoc()){
    ?>
   
<option value="<?= $row["ProductsID"];?>"><?= $row["ProductsName"];?></option>

<?php     
}
?>
</select>    
</form>
</body>
</html>a