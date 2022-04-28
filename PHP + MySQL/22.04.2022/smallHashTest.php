<?php

$pswSignup = "1234";
$hashPsw= password_hash($pswSignup,PASSWORD_DEFAULT);

var_dump($hashPsw);

/* I am done with the SIGNUP */

/* ON LOGIN */

$pswLogin = "1234";

if (password_verify($pswLogin,$hashPsw)){
    print("Login ok");
}
else{
    print("Not ok");
}


?>