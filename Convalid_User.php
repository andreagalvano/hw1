<?php
if(isset($_POST["username"]) && isset($_POST["password"])){
  $conn = mysqli_connect("localhost", "root", "", "homework1");

  $username =mysqli_real_escape_string($conn, $_POST["username"]);
  $password =mysqli_real_escape_string($conn, $_POST["password"]);

  $key_enc = '0274'; //chiave per la crittografia
  $met_enc = 'aes256'; //metodo per la crittografia: aes128, aes192, aes256, blowfish, cast-cbc
  $iv = 'ma1R0ikDD56_hG12'; //una stringa random con 16 caratteri
  $pass_enc = openssl_encrypt($password, $met_enc, $key_enc, 0, $iv);

  $query1= "SELECT username FROM Utente WHERE username = '".$username."'";
  $res1=mysqli_query($conn,$query1);

  if(mysqli_num_rows($res1)>0){

    $query="SELECT *FROM Utente WHERE username = '".$username."' and usr_password = '".$pass_enc."'";
    $res=mysqli_query($conn,$query);
  
    if(mysqli_num_rows($res)>0){
      $Log=array(array("Login" => "OK", "Messaggio" => "Benvenuto"));
      $_SESSION["username"]=$username;
      echo json_encode($Log);
    }else{
      $errore=array(array("Errore" => "0", "Messaggio" => "Passowrd Errata"));
      echo json_encode($errore);
    }

  }else{
      $errore=array(array("Errore" => "1", "Messaggio" => "Utente non trovato"));
      echo json_encode($errore);
}
  mysqli_close($conn);
}



?>