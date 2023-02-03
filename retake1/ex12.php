<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            background-color: green;
            width: 100px;
            height: 100px;
            border: 1px solid blue;
        }
        .boxred {
            background-color: red;
            width: 100px;
            height: 100px;
            border: 1px solid blue;
        }
    </style>
</head>

<body>

    <?php
    $booked = [1,0,0,1,0,1,0,1,1,0];
    

    for ($i = 0; $i < 9 ; $i++) {

        
        if($booked[$i] == 0){
            print('<div class="box">' . ($i + 8) . '-' . ($i + 9)  . '</div>' . '<br>');
        }else {
            print('<a href="ex12.php?roomnumber='.$i.'<div class="boxred">' . ($i + 8). '-' . ($i + 9) . '</div> </a>' . '<br>');
        }
    }
    ?>
</body>

</html>