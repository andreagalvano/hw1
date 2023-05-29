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
    <title>
        <?php
        if($login==true){
            if(isset($_GET['nome_artista'])){
                echo $_GET['nome_artista'];
            }else{
              echo "Errore";
            }
        }else{
            echo"Richiesto accesso";
        }
        ?>
    </title>
    <link rel="stylesheet" href="Artista.css">
    <link rel="stylesheet" href="Stile_Struttura.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <script src="Artista.js" defer="true"></script>
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
        echo "<div class='Benvenuto'>Accedi per leggere</div>";
        echo "<p class='pBenvenuto'>Per poter vedere il contenuto di questa pagina devi accedere!</p>";
        echo "<div id='formDivider'></div>";
        echo "<div id='LogInContainer'>";
        echo "<em>Sei già iscritto? Accedi subito!</em>";
        echo "<div id='LogInbutton'>Accedi!</div>";
        echo "</div>";
        echo "</div>";
      }
    ?>  

  </div>

<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>

</body>
</html>
