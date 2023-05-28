<?php
if(isset($_POST["username"])){

    session_start();
    $username = $_POST["username"];
    $_SESSION["username"]=$username;
    header("Location: home.php");
    exit;

}

?>