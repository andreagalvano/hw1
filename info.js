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

const homebtn= document.querySelectorAll('#homebtn');
const infobtn= document.querySelectorAll('#infobtn');

for(elemento of homebtn){
  elemento.addEventListener('click',ApriHome);
}
for(elemento of infobtn){
  elemento.addEventListener('click',function(event){ location.reload();});
}


function ApriHome(event){
    window.open("home.php","_self");
}
if(document.body.contains(document.querySelector("#loginbtn"))){
    const loginbtn =document.querySelectorAll("#loginbtn");
    for(elemento of loginbtn){
        elemento.addEventListener('click',ApriLogin);
    }
}

if(document.body.contains(document.querySelector("#logoutbtn"))){
    const logoutbtn =document.querySelectorAll("#logoutbtn");
    for(elemento of logoutbtn){
        elemento.addEventListener('click',Logout);
    }
}

function Logout(event){
    window.open("logout.php","_self");
  }

function ApriLogin(event){
    window.open("login.php","_self");
}

if(document.body.contains(document.querySelector("#userbtn"))){
    const userbtn=document.querySelectorAll("#userbtn");
    for(elemento of userbtn){
        elemento.addEventListener('click',Apri_User);
    }
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
  function apriMenu(event){
    const menuTendina=document.querySelector('#MenuTendina');
    if(menuTendina.dataset.mostra==="1"){
        menuTendina.classList.add('nonVisible');
        menuTendina.classList.remove('visible');
        menuTendina.dataset.mostra="0";
    }else{
        menuTendina.classList.add('visible');
        menuTendina.classList.remove('nonVisible');
        menuTendina.dataset.mostra="1";
    }
  }
  const hambMenu=document.querySelector('#hambMenu');
  hambMenu.addEventListener('click',apriMenu);
