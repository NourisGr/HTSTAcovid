<?php
    if (session_id() == '' || !isset($_SESSION) || session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    if (isset($_SESSION['email'])) {
        header('Location: ./index.php');
    }
?>

<html>
<head>
    <meta charset="utf-8">
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="styles/register.css">
    <script>
        function verifyRegister() {
            // try {
            //     const error_element = document.querySelector(".error-msg");
            //     const username = document.getElementsByName("username")[0].value;

            //     if (username.length < 3 || username.length > 16) {
            //         throw new Error("Username must be between 3 and 16 characters.");
            //     }

            //     const password = document.getElementsByName("password")[0].value;
            //     if (password.length < 4 || password.length > 32) {
            //         throw new Error("Password must be between 4 and 32 characters.");
            //     }
            // } catch(e) {
            //     console.log(e);
            // }
            const error_element = document.querySelector(".error-msg");
            const username = document.getElementsByName("username")[0].value;

            if (username.length < 3 || username.length > 16) {
               error_element.innerHTML = "Username must be between 3 and 16 characters.";
            } else {
                const password = document.getElementsByName("password")[0].value;
                if (password.length < 4 || password.length > 32) {
                    error_element.innerHTML = "Password must be between 4 and 32 characters.";
                }
            }
        }
    </script>
</head>

<body>
    <div class="register-box">
        <h2>Register</h2>
        <form method="POST" action="./php/register_post">
            <div class="user-box">
                <input type="text" name="first_name" required autocomplete="off">
                <label>First Name</label>
            </div>
            <div class="user-box">
                <input type="text" name="last_name" required autocomplete="off">
                <label>Last Name</label>
            </div>
            <div class="user-box">
                <input type="password" name="password" required autocomplete="off">
                <label>Password</label>
            </div>
            <div class="user-box">
                <input type="email" name="email" required autocomplete="off">
                <label>Email Address</label>
            </div>
            <div class="user-box">
                <input type="text" name="rfid" required autocomplete="off">
                <label>RFID Key</label>
            </div>
            <div class="error error-off">
                <span class="error-msg"></span>
            </div>
            <div class="submit-btn">
                <input type="submit" value="Register" onclick="verifyRegister()">
            </div>
            <div class="redirect-container">
                <span class="redirect-txt">Already have an account? <a href="./login" class="redirect-a">Login now.</a></span>
            </div>
        </form>
    </div>
</body>

</html>