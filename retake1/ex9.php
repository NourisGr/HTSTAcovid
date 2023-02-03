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
    $result = 0;
    $arr = [10, 14, 22, 222, 11];
    if (isset($_POST["myselect"])) {
        for ($i = 0; $i < $_POST["myselect"]; $i++) {
            $result = $result + $arr[$i];
        }
        print($result);
    } else {
    ?>
        <form method="POST">
            <select name="myselect">
                <?php
                $result = 0;

                $arrLength = count($arr);
                for ($i = 1; $i <= $arrLength; $i++) {
                ?>

                    <option value="<?= $i  ?>"><?= $i ?> </option>
                <?php
                } ?>
            </select>
            <input name="submit" type="submit" value="Submit">
        </form>
    <?php
    }
    ?>




    /*
    */

</body>

</html>