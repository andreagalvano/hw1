<?php
session_start();
if(!isset($_SESSION["username"])){
  $login=false;
}else{
  $login=true;
}
?>
<html>
<head>
    <title>Info</title>
    <link rel="stylesheet" href="info.css">
    <link rel="stylesheet" href="Stile_Struttura.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <script src="info.js" defer="true"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
<body>
    <nav id="menu">
    <div id="left">
    <h1>OurMusic</h1>
          <?php
          if($login==true){
            echo "<input type='text' id='searchBox' class='textbox' placeholder='Cerca un argomento' />";
            echo "<div class='divider'></div>";
          }
          ?>
          <div class="menu-button" id="homebtn"> <h4>Home</h4></div>
          <div class="divider"></div>
          <div class="menu-button" id="infobtn"><h4>Info</h4></div>
        </div>
        <div id="hambMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="right">
        <?php
          if($login==true){
            echo "<div class='menu-button' id='userbtn'><h4>".$_SESSION["username"]."</h4></div>";
            echo "<div class='divider'></div>";
            echo "<div class='menu-button' id='logoutbtn' ><h4>Logout</h4></div>";
          }else{
            echo "<div class='menu-button' id='loginbtn'><h4>Login</h4></div>";
          }
          ?>
          
        </div>
    </nav>
    <div id="MenuTendina" class="nonVisible">
        <div class="MenuTendinaBtn" id="homebtn"> <h4>Home</h4></div>
        <div class="MenuTendinaBtn" id="infobtn"><h4>Info</h4></div>
        <?php

          if($login==true){
            echo "<div class='MenuTendinaBtn' id='userbtn'><h4 id='ID_USER'>".$_SESSION["username"]."</h4></div>";
            echo "<div class='MenuTendinaBtn' id='logoutbtn'><h4>Logout</h4></div>";
          }else{
            echo "<div class='MenuTendinaBtn' id='loginbtn' ><h4>Login</h4></div>";
          }
          ?>
    </div>
<div class="ParentContainer">
    <div id="InfoContainer">
        <div id="InfoLeft">

          <div id="CreatorInfo">
          <div id="IMG"></div>
          <h1>Andrea Michele Galvano</h1>
          <em>Studente di Ingegneria Informatica L-8</em>
          <div id="InfoDivider"></div>
          <div id="SocialContainer">
            <div class="Element" id="FB">
              <div id="FBIMG"></div>
              <h2>Facebook</h2>
            </div>
            <div class="Element" id="IG">
              <div id="IGIMG"></div>
              <h2>Instagram</h2>
            </div>
            <div class="Element" id="GH">
              <div id="GHIMG"></div>
              <h2>GitHub</h2>
            </div>
          </div>  
        </div>
        </div>
        <div id="InfoRight">
          <h1>Benvenuto su OurMusic!</h1>
          <p>In questo forum parleremo di musica!
          Iscriviti, Crea argomenti nuovi itinerenti al tuo gruppo preferito o su qualsiasi altro cantante.
          Grazie all'uso delle Api di Spotify puoi vedere tutte le informazioni dell'artista andando a cliccare sul tag presente su ogni argomento.
          Spero di poterci prendere 30!</p>
        </div>
    </div>
  
</div>
<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>
</body>
</html>
