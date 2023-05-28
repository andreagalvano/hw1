<html>
<head>
    <title>Regisrazione</title>
    <link rel="stylesheet" href="Registrati.css">
    <link rel="stylesheet" href="Stile_Struttura.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="Registrati.js" defer="true"></script>
  </head>
<body>
<nav id="menu">
    <div id="left">
      <h1>OurMusic</h1>
      <div class="menu-button" id="homebtn"> <h4>Home</h4></div>
      <div class="divider"></div>
      <div class="menu-button" id="infobtn"><h4>Info</h4></div>
    </div>
  </nav>
  <div class="ParentContainer">
  <div class="container">
  <div id="UpperForm">
      <div id="IMGUSR"></div>
    <h1>Registrati</h1>
</div>
    <form name='registrazione' method='post' action="Database_Requests.php?richiesta=add_user">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />

      <label for="Rpassword">Ripeti Password:</label>
      <input type="password" id="Rpassword" name="confirm-password" />

      <div id="BtnContainer">
      <input type="submit" value="Registrati" class="btn" />
      </div>

      
    </form>

    <div id="formDivider"></div>
    <div id="SigInContainer">
      <em>Sei già iscritto? Accedi subito!</em>
      <div id="SigInbtn">Accedi!</div>
    </div>
  </div>
  
</div>

<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>
</body>
</html>
