<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action = "" method="POST">
     <h1> Please enter your information to create a new login account</h1>
       <p>  
         <label>Login Name:</label><input type = "text"  name = "name" />
         <label>Password:</label><input type = "password" name = "pwd" />
         <label>Passwordrepaet:</label><input type = "password" name = "pwd2" />
         <br/>
         <br/>
       </p>
     <input type = "submit" name="submit_btn" id = "submit" value = "submit"/>
   </form>
<?php
if(isset($_POST['submit_btn'])){
if($_POST["pwd"] == $_POST["pwd2"])
{
 $username = $_POST['name'];
 $password = $_POST['pwd'];
 $password2 = $_POST['pwd2'];
 $text = $username . "," . $password . "\n";
 $fp = fopen('ex14.txt', 'a+');
}
   if(fwrite($fp, $text))  {
       echo 'saved';

   }
fclose ($fp);    
}
?>

</body>
</html>