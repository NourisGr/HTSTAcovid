<?php
    if (session_id() == '' || !isset($_SESSION) || session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    if (!isset($_POST['email']) || isset($_SESSION['email'])) {
        header('Location: ../index');
    }

    INCLUDE_ONCE './db_connector.php';
    $conn = connectToDb();

    if (strtoupper($_SERVER['REQUEST_METHOD']) === 'POST') {
        $password = $_POST['password'];
        $email = $_POST['email'];
        $rfid = $_POST['rfid'];
        $first_name = $_POST['first_name'];
        $surname = $_POST['last_name'];

        // $sql = $conn->prepare("INSERT INTO employees (user_name, user_password,
        // user_email, user_firstname, user_rfid, user_image) VALUES(?, ?, ?, ?, ?, NULL)");
        // $sql->bind_param("sssss", $username, password_hash($password, PASSWORD_DEFAULT), $email, $first_name, $rfid);
        // if (!$sql->execute()) {
        //     header('Location: ../register');
        // } else {
        //     $_SESSION['username'] = $username;
        //     header('Location: ../index');
        // }
        
        $sql = "SELECT * from employees WHERE email = %s";
        $sql = sprintf($sql, $email);
        if ($conn->query($sql)) {
            header('Location: ../register');
        }

        $sql = "INSERT INTO employees (`first_name`, `last_name`,
        `email`, `password`, `group`, `RFIDBadge`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s')";
        $sql = sprintf($sql, $first_name, $surname, $email, password_hash($password, PASSWORD_DEFAULT), 1, intval($rfid));
       
        if ($conn->query($sql)) {
            $_SESSION['email'] = $email;
            header('Location: ../index');
        } else {
            header('Location: ../register');
        }
    }
?>