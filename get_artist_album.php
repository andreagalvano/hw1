<?php

if(isset($_GET['id_artista'])){
    $client_id =     "ff68fcb0db63440ba648808b5b8a39cd";
    $client_secret = "3e68a3ba553940da89ed6f5d5dd941b3";

    $artista=$_GET['id_artista'];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://accounts.spotify.com/api/token");
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, "grant_type=client_credentials");
    $headers = array("Authorization: Basic ".base64_encode($client_id.":".$client_secret));
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);

    $token = json_decode($result)->access_token;
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://api.spotify.com/v1/artists/".$artista."/albums?offset=0&limit=50&include_groups=album");
    $headers = array("Authorization: Bearer ".$token);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);

    $album= json_decode($result);
    echo json_encode($album);
    curl_close($curl);
}else{
    $messaggio=array(array("MSG" => "0", "Messaggio" => "Errore"));
    echo json_encode($messaggio);
    exit;
}

?>