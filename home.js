
const homebtn= document.querySelector('#homebtn');
const infobtn= document.querySelector('#infobtn');

if(document.body.contains(document.querySelector("#logoutbtn"))){
  const logoutbtn= document.querySelector('#logoutbtn');
  logoutbtn.addEventListener('click',Logout);
}
if(document.body.contains(document.querySelector("#loginbtn"))){
  const loginbtn= document.querySelector('#loginbtn');
  loginbtn.addEventListener('click',Login);
}

function Apri_Artista(event){
  const artista=event.currentTarget.textContent.replace("#","");
  window.open("Artista.php?nome_artista="+encodeURI(artista),"_self");
}

homebtn.addEventListener('click',function(event){ location.reload();});
infobtn.addEventListener('click',ApriInfo);

function Logout(event){
  window.open("logout.php","_self");
}
function Login(event){
  window.open("login.php","_self");
}
function ApriInfo(event){
  window.open("Info.php","_self");
}
function Apri_User(event){
  window.open("utente.php","_self");
}
function Apri_Argomento(event){
  const id_arg=event.currentTarget.parentNode.parentNode.id
  const titolo=event.currentTarget.parentNode.parentNode.querySelector('.Title').textContent;
  window.open("Argomento.php?id_arg="+id_arg+"&titolo="+encodeURI(titolo),"_self");
}
function MettiLike(event){
  
  if(event.currentTarget.id==="Checked"){
    event.currentTarget.setAttribute("id","UnChecked");
    event.currentTarget.src="Images/Heart_Empty.png"
    const fdata=new FormData();
    fdata.append('id_like',event.currentTarget.dataset.likeid);
    const form_data={method:'Post',body: fdata};
    fetch("Database_Requests.php?richiesta=remove_like",form_data).then(onResponseR_Like).then(onJsonR_Like);
    const BtnContainer=event.currentTarget.parentNode;
    const nLike=BtnContainer.querySelector('.nLike');
    nLike.textContent=parseInt(nLike.textContent)-1;
    event.preventDefault();
  }else{
    event.currentTarget.setAttribute("id","Checked");
    event.currentTarget.src="Images/Heart_Filled.png";
    const fdata=new FormData();
    fdata.append('username',Username);
    const Argomento=event.currentTarget.parentNode.parentNode;
    fdata.append('ID_arg',Argomento.id);
    const form_data={method:'Post',body: fdata};
    fetch("Database_Requests.php?richiesta=add_like",form_data).then(onResponseA_Like).then(onJsonA_Like);
    const BtnContainer=event.currentTarget.parentNode;
    const nLike=BtnContainer.querySelector('.nLike');
    nLike.textContent=parseInt(nLike.textContent)+1;
    event.preventDefault();
  }
}

function onResponse(response){
  return response.json();
}
function onResponseLikes(response){
  return response.json();
}
function onResponsenLike(response){
  return response.json();
}
function onResponseR_Like(response){
  return response.json();
}
function onResponseA_Argomento(response){
  return response.json();
}
function onJsonA_Argomento(json){
  if(json[0].MSG==="1"){
    location.reload();
  }
}
function onJsonR_Like(json){
}
function onResponseA_Like(response){
  return response.json();
}
function onJsonA_Like(json){
  const ListaArgomenti=document.querySelectorAll('.Argomento');
  for(argomento of ListaArgomenti){
    const Arg_Like=argomento.querySelector('.Like')
      if(json.ID_argomento===argomento.id){
        Arg_Like.dataset.likeid=json.ID_like;
      }
  }
}
function onJsonnLike(json){
  const ListaArgomenti=document.querySelectorAll('.Argomento');

  for(argomento of ListaArgomenti){
    const Arg_nLike=argomento.querySelector('.nLike')
      if(json.ID_argomento===argomento.id){
        Arg_nLike.textContent=json.numLike;
      }
  }
}
function onJson(json){
  if(json.length>0){
    for(elemento of json){

      const Argomento=document.createElement('div');
      Argomento.classList.add('Argomento');
      Argomento.setAttribute("id",elemento.ID_arg);

      const InfoContainer =document.createElement('div');
      InfoContainer.classList.add('InfoContainer');

      const UserInfo=document.createElement('div');
      UserInfo.classList.add('UserInfo');

      const UserImg=document.createElement('img');
      UserImg.classList.add('UserImg');
      UserImg.src="images/utente.png";

      const Username=document.createElement('div');
      Username.classList.add('Username');
      Username.textContent=elemento.ID_User;

      const DataPubblicazione=document.createElement('div');
      DataPubblicazione.classList.add('DataPubblicazione');
      DataPubblicazione.textContent=elemento.Data_Pubblicazione;
      UserInfo.appendChild(UserImg);
      UserInfo.appendChild(Username);

      InfoContainer.appendChild(UserInfo);
      InfoContainer.appendChild(DataPubblicazione);

      const Title=document.createElement('div');
      Title.classList.add('Title');
      Title.textContent=elemento.Titolo;

      const Contenuto=document.createElement('p');
      Contenuto.classList.add('Contenuto');
      Contenuto.textContent=elemento.Contenuto;

      const BtnContainer=document.createElement('div');
      BtnContainer.classList.add('BtnContainer');

      const Like=document.createElement('img');
      Like.classList.add('Like');
      Like.addEventListener('click',MettiLike);
      const nLike=document.createElement('em');
      nLike.classList.add('nLike');
      const ApriArgomento=document.createElement('a');
      ApriArgomento.classList.add('ApriArgomento');
      ApriArgomento.textContent="Apri";
      ApriArgomento.addEventListener('click',Apri_Argomento);

      BtnContainer.appendChild(Like);
      BtnContainer.appendChild(nLike);
      BtnContainer.appendChild(ApriArgomento);

      const TipoArgomento=document.createElement('div');
      TipoArgomento.classList.add('ArgomentTag');
      TipoArgomento.textContent="#"+elemento.Tag;
      TipoArgomento.addEventListener('click',Apri_Artista);

      Argomento.appendChild(InfoContainer);
      Argomento.appendChild(Title);
      Argomento.appendChild(Contenuto);
      Argomento.appendChild(TipoArgomento);
      Argomento.appendChild(BtnContainer);

      document.querySelector('.ParentContainer').appendChild(Argomento);
    }
    fetch("Database_Requests.php?richiesta=get_likes").then(onResponseLikes).then(onJsonLikes);
  }else{
    const container=document.createElement('div');
    container.classList.add('Argomento');
    const messaggio=document.createElement('h1');
    messaggio.textContent="Non ci sono argomenti :(";
    container.appendChild(messaggio);
    document.querySelector('.ParentContainer').appendChild(container);
  }
  
}

function onJsonLikes(json){
  if(json.length===0){
    const argomenti=document.querySelectorAll('.Argomento');
    for(let argomento of argomenti){
      const nLike=argomento.querySelector('.nLike');
      nLike.textContent=0;
      const Like=argomento.querySelector('.Like');
      Like.src="Images/Heart_Empty.png";
      Like.setAttribute("id","UnChecked");
    }
  }else{
    const ListaArgomenti=document.querySelectorAll('.Argomento');
    
    for(argomento of ListaArgomenti){
      const Arg_Like=argomento.querySelector('.Like');
      const Arg_nLike=argomento.querySelector('.nLike');
      for(let i of json){
        if(argomento.id===i.ID_argomento){
          if(i.ID_User===Username){
            Arg_Like.src="Images/Heart_Filled.png";
            Arg_Like.setAttribute("data-likeid",i.ID_Like);
            Arg_Like.setAttribute("id","Checked");
          }
          const fdata=new FormData();
          fdata.append('id_arg',i.ID_argomento);
          const form_data={method:'Post',body: fdata};
          fetch("Database_Requests.php?richiesta=num_like",form_data).then(onResponsenLike).then(onJsonnLike);
        }
      }
      if(Arg_Like.id!=="Checked"){
        Arg_Like.src="Images/Heart_Empty.png";
        Arg_Like.setAttribute("data-likeid","none");
        Arg_Like.setAttribute("id","UnChecked");
        Arg_nLike.textContent="0";
      }
    
    }
    
  }
}

function Invia_Argomento(event){
  const titolo=document.querySelector('.textboxTitle');
  const contenuto=document.querySelector('.textboxArgoment');
  const tag=document.querySelector('.textboxTag');
  const currentdate = new Date(); 
  const datetime = currentdate.getDate() + "-"+ (currentdate.getMonth()+1)  + "-" + currentdate.getFullYear() + " "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":"   + currentdate.getSeconds();
  if(titolo.value!=="" && contenuto.value!=="" && tag.value!==""){
    const fdata=new FormData();
    fdata.append('titolo',titolo.value);
    fdata.append('contenuto',contenuto.value);
    fdata.append('id_user',Username);
    fdata.append('data_pubblicazione',datetime);
    fdata.append('tag',tag.value);
    const form_data={method:'Post',body: fdata};
    fetch("Database_Requests.php?richiesta=add_argoment",form_data).then(onResponseA_Argomento).then(onJsonA_Argomento);
  }
}
let Username="";
if(document.body.contains(document.querySelector("#userbtn"))){
  const userbtn=document.querySelector("#userbtn");
  userbtn.addEventListener('click',Apri_User);
  Username=document.querySelector("#ID_USER").textContent;
  fetch("Database_Requests.php?richiesta=get_argoments").then(onResponse).then(onJson);
  const InviaArgomento=document.querySelector('.InviaArgomento');
  InviaArgomento.addEventListener('click',Invia_Argomento);
}
if(document.body.contains(document.querySelector("#LogInbutton"))){
  const LogInbutton=document.querySelector("#LogInbutton");
  LogInbutton.addEventListener('click',Login);
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

