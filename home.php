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
    <title>Home</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="Stile_Struttura.css"> 
    <script src="home.js" defer="true"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
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
            echo "<div class='menu-button' id='userbtn'><h4 id='ID_USER'>".$_SESSION["username"]."</h4></div>";
            echo "<div class='divider'></div>";
            echo "<div class='menu-button' id='logoutbtn'><h4>Logout</h4></div>";
          }else{
            echo "<div class='menu-button' id='loginbtn' ><h4>Login</h4></div>";
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
    <?php
      if($login==false){
        echo "<div class='Argomento'>";
        echo "<div class='Benvenuto'>Benvenuto in questo Forum!</div>";
        echo "<p class='pBenvenuto'>In questo forum parleremo di musica!<br>Iscriviti, crea nuovi argomenti inerenti al tuo gruppo preferito o su qualsiasi altro cantante.<br>Grazie all'uso dell'API di Spotify puoi vedere tutte le informazioni dell'artista andando a cliccare sul #TAG presente su ogni argomento.<br>Spero di poterci prendere 30!</p>";
        echo "<div id='formDivider'></div>";
        echo "<div id='LogInContainer'>";
        echo "<em>Sei già iscritto? Accedi subito!</em>";
        echo "<div id='LogInbutton'>Accedi!</div>";
        echo "</div>";
        echo "</div>";
      }else{
        echo "<div class='CreaArgomento'>";
        echo  "<h1>Crea un nuovo argomento</h1>";
        echo "<div class='TitleContainer'>";
        echo  "<h6>Inserisci un titolo</h6>";
        echo  "<input type='text' class='textboxTitle' placeholder='Scrivi un titolo'/>";
        echo  "</div>";
        echo  "<div class='ArgomentContainer'>";
        echo  "<h6>Inserisci il testo dell'argomento</h6>";
        echo  "<textarea  class='textboxArgoment' placeholder='Scrivi un argomento'></textarea>";
        echo  "</div>";
        echo  "<div class='CreaArgomentoBtnContainer'>";
        echo  "<div class='tagContainer'>";
        echo  "<h6>Inserisci un cantante o gruppo</h6>";
        echo  "<input type='text' class='textboxTag' placeholder='Scrivi un gruppo es: Linkin Park'/>";
        echo  "</div>";
        echo  "<div class='InviaArgomento'>Invia</div>";
        echo  "</div>";
        echo  "</div>";
      }
    ?>
    
  </div>

<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>

</body>
</html>
