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
if(isset($_GET["car"]))
{        
print $_GET["car"];
} 
else
{
    print("please fill in the form:");
}      
?>
    <form>
        <imput name "car">
        <imput type="submit">
    </form>
</body>
</html>