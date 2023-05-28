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
                echo $_SESSION["username"];
            }else{
                echo "Richiesto Accesso";
            }
        ?>
    </title>
    <link rel="stylesheet" href="utente.css">
    <link rel="stylesheet" href="Stile_Struttura.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="utente.js" defer="true"></script>
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
        
        <div id="right">
        <?php
          if($login==true){
            echo "<div class='menu-button' id='userbtn'><h4 id='ID_USER'>".$_SESSION["username"]."</h4></div>";
            echo "<div class='divider'></div>";
            echo "<div class='menu-button' id='logoutbtn' ><h4>Logout</h4></div>";
          }else{
            echo "<div class='menu-button' id='loginbtn'><h4>Login</h4></div>";
          }
          ?>
          
        </div>
    </nav>

<div class="ParentContainer">
  <?php
    if($login==true){
      echo "<div class='CreaArgomento'>";
      echo "<h1>Crea un nuovo argomento</h1>";
      echo "<div class='TitleContainer'>";
      echo "<h6>Inserisci un titolo</h6>";
      echo "<input type='text' class='textboxTitle' placeholder='Scrivi un titolo'/>";
      echo "</div>";
      echo "<div class='ArgomentoContainer'>";
      echo "<h6>Inserisci il testo dell'argomento</h6>";
      echo "<textarea  class='textboxArgoment' placeholder='Scrivi un argomento'></textarea>";
      echo "</div>";
      echo  "<div class='CreaArgomentoBtnContainer'>";
      echo  "<div class='tagContainer'>";
      echo  "<h6>Inserisci un cantante o gruppo</h6>";
      echo  "<input type='text' class='textboxTag'placeholder='Scrivi un gruppo es: Linkin Park'/>";
      echo  "</div>";
      echo  "<div class='InviaArgomento'>Invia</div>";
      echo  "</div>";
      echo  "</div>";
    }
  ?>
  <div id="InfoContainer">
        <?php
            if($login==false){
                echo "<div class='ArgomentContainer'>";
                echo "<div class='Benvenuto'>Accedi per leggere</div>";
                echo "<p class='pBenvenuto'>Per poter vedere il contenuto di questa pagina devi accedere!</p>";
                echo "<div id='formDivider'></div>";
                echo "<div id='LogInContainer'>";
                echo "<em>Sei già iscritto? Accedi subito!</em>";
                echo "<div id='LogInbutton'>Accedi!</div>";
                echo "</div>";
                echo "</div>";
            }else{
                

                echo "<div class='ArgomentInfo'>";
                echo "Argomenti creati:";
                echo "</div>";
                echo "<div class='ArgomentContainer'>";
                echo "</div>";
            }
    
        ?>
  </div>
  
</div>
<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>
</body>
</html>
