<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form>

        <input type="submit" name="submit">
    </form>
    <?php


    $file = fopen("ex10.txt", "r");

    $linenum = 1;
    ?>
    <form>
    <select name="mySelect">
        <?php while (!feof($file)) {
            $line = fgets($file);

            if ((isset($_GET["mySelect"])) && ($_GET["mySelect"] == $line)) {
        ?>
                <option value="<?= $linenum ?>" selected> <?= $line ?> </option>
            <?php } else {
            ?>
                <option value="<?= $linenum ?>" > <?= $line ?> </option>
        <?php }
            $linenum = $linenum + 1;
        }
        ?>
    </select>
    </form>
</body>

</html>