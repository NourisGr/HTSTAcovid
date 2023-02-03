<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="POST">
        First Number:<input name="n1">
        <select name="myselect">

            <option value="1">+ </option>
            <option value="2">- </option>
            <option value="3">* </option>
            <option value="4">/ </option>

        </select>
        Second Number:<input name="n2">
        <button name="butt">calcul</button>
    </form>
    <?php
    $result = 0;


    if (isset($_POST["n1"], $_POST["n2"], $_POST["myselect"])) {
         

            if ($_POST["myselect"] == "1") {
                $result = $_POST["n1"] + $_POST["n2"];
                print($result);
            }
            if ($_POST["myselect"] == "2") {
                $result = $_POST["n1"] - $_POST["n2"];
                print($result);
            }
            if ($_POST["myselect"] == "3") {
                $result = $_POST["n1"] * $_POST["n2"];
                print($result);
            }
            if ($_POST["myselect"] == "4") {
                if ($_POST["n2"] == 0) {
                    print("error");
                } else {
                    $result = $_POST["n1"] / $_POST["n2"];
                    print($result);
                }
            }
        }
    
    ?>
</body>

</html>