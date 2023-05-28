
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="Stile_Struttura.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="login.js" defer="true"></script>
  </head>
<body>
<div id="menu">
    <div id="left">
      <h1>OurMusic</h1>
      <div class="menu-button" id="homebtn"> <h4>Home</h4></div>
      <div class="divider"></div>
      <div class="menu-button" id="infobtn"><h4>Info</h4></div>
    </div>
  </div>
  <div class="ParentContainer">
  <div class="container">
    <div id="UpperForm">
      <div id="IMGUSR"></div>
    <h1>Login</h1>
    </div>
    <form name='login' method='post' action="login_User.php">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <div id="BtnContainer">
      <input type="submit" value="Accedi" class="btn" />
      </div>

    </form>
    <div id="formDivider"></div>
    <div id="SignUpContainer">
      <em>Non sei iscritto? Registrati subito!</em>
      <div id="SignUpbtn">Registrati!</div>
    </div>
    
  </div>
  
</div>
<footer>
Creato da Andrea Michele Galvano O46002030
<em>Corso di Web-Programming 2022-2023</em>
</footer>
</body>
</html>
