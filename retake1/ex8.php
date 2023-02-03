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
    $n1 = 0;
    $n2 = 1;
    for ($num=0;$num<20;$num=$num+1) {
        $n3 = $n2 + $n1;
        $n1 = $n2;
        $n2 = $n3;
        if ($n1 % 2 == 0) {
            print '<span style="color:red">' . $n1 . '</span></br>';
        } else {
            print $n1 . "<br>";
        }
    }

    ?>
</body>

</html>