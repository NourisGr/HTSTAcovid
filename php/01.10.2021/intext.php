<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>
    </title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <div>Hello my name is Fanourios</div>
    <a href="http://192.168.6.31:930/STH.php">Go to Mustafa</a>
    
    <?php
    print("Hello from php");
    
    $firstname = "Fanourios";
    print($firstname);
    ?>

    <h1>I AM HTML</h1>

    <?php
    print("OHH I FORGOT MY FAMILY NAME");
    $lastname = "Miniatis";
    ?>
    <?php
    $fullname = $firstname." ".$lastname;
      print($fullname);
    ?>
    
      <div>This is a div</div>
    <?php
    for ($i=0;$i<10;$i++)
    {
        ?>
       <div> This is a Vlad <?php print($i);?></div>
        <img src="image0.jpg">
        <?php
    }
?>

    <div>
        <?php
        $a=3;
        $b=2;
        print($a/ $b);
    // phpinfo();
        ?>
    <div> 

    </div>

</body> 
</html>