function apriFB(event){
    window.open("https://www.facebook.com/andrea.galvano01/");
}

function apriIG(event){
    window.open("https://www.instagram.com/andrea_lp99/");
}

function apriGH(event){
    window.open("https://github.com/andreagalvano");
}
function Apri_User(event){
    window.open("utente.php","_self");
}
const facebook=document.querySelector("#FB");
facebook.addEventListener("click",apriFB);
const Instagram=document.querySelector("#IG");
Instagram.addEventListener("click",apriIG);
const GitHub=document.querySelector("#GH");
GitHub.addEventListener("click",apriGH);

const homebtn=document.querySelector('#homebtn');
homebtn.addEventListener('click',ApriHome);

function ApriHome(event){
    window.open("home.php","_self");
}
if(document.body.contains(document.querySelector("#loginbtn"))){
    const loginbtn =document.querySelector("#loginbtn");
    loginbtn.addEventListener('click',ApriLogin);
}

if(document.body.contains(document.querySelector("#logoutbtn"))){
    const logoutbtn =document.querySelector("#logoutbtn");
    logoutbtn.addEventListener('click',Logout);
}

function Logout(event){
    window.open("logout.php","_self");
  }

function ApriLogin(event){
    window.open("login.php","_self");
}

if(document.body.contains(document.querySelector("#userbtn"))){
    const userbtn=document.querySelector("#userbtn");
    userbtn.addEventListener('click',Apri_User);
}
function CercaArgomento(event){
    if (event.key === "Enter") {
      const argomento=event.currentTarget.value;
      if (argomento !== "") {
        window.open("Cerca.php?argomento="+encodeURI(argomento),"_self");
      }
    }
  }
  if(document.body.contains(document.querySelector("#searchBox"))){
    const searchBox = document.querySelector('#searchBox');
    searchBox.addEventListener("keydown", CercaArgomento);
  }
  