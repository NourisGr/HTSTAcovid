<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post" action="ex15.php">
            <label>Login Name:</label><input type = "text"  name = "name" />
            <label>Password:</label><input type = "password" name = "pwd" />
            <input type = "submit" name="submit_btn" id = "submit" value = "submit"/>
        </form>
    <?php
$auth = false;

if (isset($_POST['submit_btn'])){
$file = explode( PHP_EOL, file_get_contents( "ex14.txt" ));


foreach( $file as $line ) {
    list($username, $password) = explode(",", $line);
    if (isset($_POST['username'], $_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $auth = true;
        break; // use this to stop iterating over $file and end the foreach-loop
    }
}

if($auth) {
    echo "Login successfull!";
} else {
    echo "Invalid username or password";
}
}
?>

</body>
</html>