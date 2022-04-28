<?php

session_start();
if(!isset($_SESSION["userIsLoggedIn"]))
{
    $_SESSION["userIsLoggedIn"] = false;
}

?>

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

if (isset($_POST["login"], $_POST["username"]))
{
    $_SESSION["username"] =$_POST["username"];
    $_SESSION["userIsLoggedIn"] = true;
}

if (isset($_POST["logout"]))
{
    $_SESSION["userIsLoggedIn"] = false;
}

if($_SESSION["userIsLoggedIn"]) {
    print ($_SESSION["username"]);
    ?>
    <form method="POST">
        <input type="submit" name="logout" value="logout">    
    </form>
    <?php
}

else { 
    
?>
<form method="POST">   
    <input type="text" name="username">
    <input type="submit" name="login" value="login"> 
</form> 
<?php } ?>

</body>
</html>