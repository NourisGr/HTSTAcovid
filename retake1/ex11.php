<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .red {
            background-color: red;
        }
        .green {
            background-color: green;
        }
        .blue {
            background-color: blue;
        }
        .box {
            width: 50px;
            height: 50px;
            margin: 5px;
        }
        div {
            display: flex;
            margin: 20px;
        } 
    </style>
</head>
<body>
<form method="post">
        <select name="boxcolors">
            <optgroup value="select color" label="Select color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </optgroup>
        </select>
        <input type="number" name="number">
        <input type="submit" value="Append boxes">
    </form>
<?php
 if (isset($_POST["boxcolors"], $_POST["number"])){   
    $file = fopen("ex11.txt", "a");
    fputs($file, $_POST["boxcolors"].";".$_POST["number"]."\n");
}

?>
<?php 
  
    $file = fopen("ex11.txt", "r");
    while(!feof($file)) {
        $line = fgets($file);
        $parts = explode(";", trim($line));
        ?>
        <div class="container">
        <?php  
        if (count($parts)==2) {
            for ($i=0; $i < $parts[1]; $i++) { 
                ?>
            <div class="box <?=$parts[0]?>"></div>
            <?php
        }
    }
    ?>
        </div>
    <?php
    }

?>


    
</body>
</html>