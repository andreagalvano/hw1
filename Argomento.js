
function MettiLike(event){
  
    if(event.currentTarget.id==="Checked"){
      event.currentTarget.setAttribute("id","UnChecked");
      event.currentTarget.src="Images/Heart_Empty.png"
      const fdata=new FormData();
      fdata.append('id_like',event.currentTarget.dataset.likeid);
      const form_data={method:'Post',body: fdata};
      fetch("http://localhost/homework1/Database_Requests.php?richiesta=remove_like",form_data).then(onResponseR_Like).then(onJsonR_Like);
      const BtnContainer=event.currentTarget.parentNode;
      const nLike=BtnContainer.querySelector('.nLike');
      nLike.textContent=parseInt(nLike.textContent)-1;
      event.preventDefault();
    }else{
      event.currentTarget.setAttribute("id","Checked");
      event.currentTarget.src="Images/Heart_Filled.png";
      const fdata=new FormData();
      fdata.append('username',Username);
      console.log(Username);
      const Argomento=event.currentTarget.parentNode.parentNode;
      fdata.append('ID_arg',Argomento.id);
      const form_data={method:'Post',body: fdata};
      fetch("http://localhost/homework1/Database_Requests.php?richiesta=add_like",form_data).then(onResponseA_Like).then(onJsonA_Like);
      const BtnContainer=event.currentTarget.parentNode;
      const nLike=BtnContainer.querySelector('.nLike');
      nLike.textContent=parseInt(nLike.textContent)+1;
      event.preventDefault();
    }
}
function InviaCommenti(event){
    const container=event.currentTarget.parentNode
    const textbox=container.querySelector('input');
    const commento=textbox.value;
    const currentdate = new Date(); 
    const datetime = currentdate.getDate() + "-"+ (currentdate.getMonth()+1)  + "-" + currentdate.getFullYear() + " "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":"   + currentdate.getSeconds();
    if(commento!==""){
        const fdata=new FormData();
        fdata.append('username',Username);
        fdata.append('id_arg',id_arg);
        fdata.append('commento',commento);
        fdata.append('orario',datetime);
        const form_data={method:'Post',body: fdata};
        fetch("http://localhost/homework1/Database_Requests.php?richiesta=add_comment",form_data).then(onResponseA_Commento).then(onJsonA_Commento);
    }
    textbox.value="";
}
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        InviaCommenti(event)
    }
}
function EliminaCommento(event){
    const id_commento=event.currentTarget.id;
    console.log(id_commento);

    const fdata=new FormData();
    fdata.append('id_comm',id_commento);
    const form_data={method:'Post',body: fdata};
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=remove_comment",form_data).then(onResponseR_Comment).then(onJsonR_Comment);
    
    const InfoContainerRight=event.currentTarget.parentNode;
    const InfoContainer=InfoContainerRight.parentNode;
    const Commento=InfoContainer.parentNode;
    const CommentContainer=Commento.parentNode;
    CommentContainer.removeChild(Commento);
}
function onResponse(response){
    return response.json();
}
function onResponseLikes(response){
    return response.json();
}
function onResponseComments(response){
    return response.json();
}
function onResponsenLike(response){
    return response.json();
}
function onResponseR_Like(response){
    return response.json();
}
function onResponseR_Comment(response){
    return response.json();
}
function onJsonR_Comment(json){
    console.log(json);
}
function onResponseA_Like(response){
    return response.json();
}
function onResponseA_Commento(response){
    return response.json();
}
function onJsonR_Like(json){
    console.log(json);
}
function onJsonComments(json){
    console.log(json);
    const CommentContainer =document.createElement('div');
    CommentContainer.classList.add('CommentContainer');

    for(singlecomment of json){
        const commento=document.createElement('div');
        commento.classList.add('Commento');
        commento.setAttribute("id",singlecomment.ID_Comm);
        const InfoContainer=document.createElement('div');
        InfoContainer.classList.add('InfoContainer');

        const UserInfo=document.createElement('div');
        UserInfo.classList.add('UserInfo');

        const UserImg=document.createElement('img');
        UserImg.classList.add('UserImg');
        UserImg.src="images/utente.png";

        const id_Username=document.createElement('div');
        id_Username.classList.add('Username');
        id_Username.textContent=singlecomment.ID_User;

        UserInfo.appendChild(UserImg);
        UserInfo.appendChild(id_Username);

        const InfoContainerRight=document.createElement('div');
        InfoContainerRight.classList.add('InfoContainerRight');

        const DataPubblicazione=document.createElement('div');
        DataPubblicazione.classList.add('DataPubblicazione');
        DataPubblicazione.textContent=singlecomment.orario;

        InfoContainerRight.appendChild(DataPubblicazione);

        if(singlecomment.ID_User===Username){
            const DeleteButton=document.createElement('img');
            DeleteButton.classList.add('DeleteButton');
            DeleteButton.src="Images/close.png";
            DeleteButton.setAttribute("id",singlecomment.ID_Comm);
            DeleteButton.addEventListener('click',EliminaCommento);
            InfoContainerRight.appendChild(DeleteButton);
        
        }
    
        InfoContainer.appendChild(UserInfo);
        InfoContainer.appendChild(InfoContainerRight);

        const Contenuto=document.createElement('p');
        Contenuto.classList.add('Contenuto');
        Contenuto.textContent=singlecomment.Commento;

        commento.appendChild(InfoContainer);
        commento.appendChild(Contenuto);

        CommentContainer.appendChild(commento);
        
    }

    const CreaCommento=document.createElement('div');
    CreaCommento.classList.add('CreaCommento');

    const InputCommento=document.createElement('input');
    InputCommento.classList.add('InputCommento');
    InputCommento.type="text";
    InputCommento.placeholder="Invia un commento";
    InputCommento.addEventListener('keypress',enterKeyPressed);

    const Inviabutton=document.createElement('div');
    Inviabutton.classList.add('Inviabutton');
    Inviabutton.textContent="Invia";
    Inviabutton.addEventListener('click',InviaCommenti);

    CreaCommento.appendChild(InputCommento);
    CreaCommento.appendChild(Inviabutton);

    CommentContainer.appendChild(CreaCommento);

    const Argomento=document.querySelector('.Argomento');
    Argomento.appendChild(CommentContainer);

}
function onJsonA_Like(json){
    console.log(json);
    const Argomento=document.querySelector('.Argomento');
    const Arg_Like=Argomento.querySelector('.Like')
    if(json.ID_argomento===Argomento.id){
        Arg_Like.dataset.likeid=json.ID_like;
    }
}
function onJsonA_Commento(json){
    console.log(json);
    const CommentContainer =document.querySelector('.CommentContainer');
    const CreaCommento =document.querySelector('.CreaCommento');

    const commento=document.createElement('div');
    commento.classList.add('Commento');
    const InfoContainer=document.createElement('div');
    InfoContainer.classList.add('InfoContainer');

    const UserInfo=document.createElement('div');
    UserInfo.classList.add('UserInfo');

    const UserImg=document.createElement('img');
    UserImg.classList.add('UserImg');
    UserImg.src="images/utente.png";

    const id_Username=document.createElement('div');
    id_Username.classList.add('Username');
    id_Username.textContent=Username;

    UserInfo.appendChild(UserImg);
    UserInfo.appendChild(id_Username);

    const InfoContainerRight=document.createElement('div');
    InfoContainerRight.classList.add('InfoContainerRight');

    const DataPubblicazione=document.createElement('div');
    DataPubblicazione.classList.add('DataPubblicazione');
    DataPubblicazione.textContent=json.orario;

    InfoContainerRight.appendChild(DataPubblicazione);

    const DeleteButton=document.createElement('img');
    DeleteButton.classList.add('DeleteButton');
    DeleteButton.src="Images/close.png";
    DeleteButton.setAttribute("id",json.ID_Comm);
    DeleteButton.addEventListener('click',EliminaCommento);
    InfoContainerRight.appendChild(DeleteButton);
    
    InfoContainer.appendChild(UserInfo);
    InfoContainer.appendChild(InfoContainerRight);

    const Contenuto=document.createElement('p');
    Contenuto.classList.add('Contenuto');
    Contenuto.textContent=json.Commento;

    commento.appendChild(InfoContainer);
    commento.appendChild(Contenuto);

    CommentContainer.insertBefore(commento,CreaCommento);
        
}
function onJsonnLike(json){
    const Argomento=document.querySelector('.Argomento');
    console.log(json);
    const Arg_nLike=Argomento.querySelector('.nLike');
    if(json.ID_argomento===Argomento.id){
        Arg_nLike.textContent=json.numLike;
    }
}

function onJsonLikes(json){
    console.log(json);
    if(json.length===0){
        const argomento=document.querySelector('.Argomento');
        const nLike=argomento.querySelector('.nLike');
        nLike.textContent=0;
        const Like=argomento.querySelector('.Like');
        Like.src="Images/Heart_Empty.png";
        Like.setAttribute("id","UnChecked");
    }else{
        const argomento=document.querySelector('.Argomento');
        console.log(argomento);
        const Arg_Like=argomento.querySelector('.Like');
        const Arg_nLike=argomento.querySelector('.nLike');
        for(let i of json){
          if(argomento.id===i.ID_argomento){
            if(i.ID_User===Username){
              Arg_Like.src="Images/Heart_Filled.png";
              Arg_Like.setAttribute("data-likeid",i.ID_Like);
              Arg_Like.setAttribute("id","Checked");
            }
          }
        }
        const fdata=new FormData();
        fdata.append('id_arg',id_arg);
        const form_data={method:'Post',body: fdata};
        fetch("http://localhost/homework1/Database_Requests.php?richiesta=num_like",form_data).then(onResponsenLike).then(onJsonnLike);
        if(Arg_Like.id!=="Checked"){
          Arg_Like.src="Images/Heart_Empty.png";
          Arg_Like.setAttribute("data-likeid","none");
          Arg_Like.setAttribute("id","UnChecked");
          Arg_nLike.textContent="0";
        }

    }
}
function onJson(json){
    console.log(json);
    const ParentContainer=document.querySelector('.ParentContainer');
    const Argomento=document.createElement('div');
    Argomento.classList.add('Argomento');
    Argomento.setAttribute("id",json.ID_arg);

    const InfoContainer =document.createElement('div');
    InfoContainer.classList.add('InfoContainer');

    const UserInfo=document.createElement('div');
    UserInfo.classList.add('UserInfo');

    const UserImg=document.createElement('img');
    UserImg.classList.add('UserImg');
    UserImg.src="images/utente.png";

    const Username=document.createElement('div');
    Username.classList.add('Username');
    Username.textContent=json.ID_User;

    const DataPubblicazione=document.createElement('div');
    DataPubblicazione.classList.add('DataPubblicazione');
    DataPubblicazione.textContent=json.Data_Pubblicazione;
    UserInfo.appendChild(UserImg);
    UserInfo.appendChild(Username);

    InfoContainer.appendChild(UserInfo);
    InfoContainer.appendChild(DataPubblicazione);

    const Title=document.createElement('div');
    Title.classList.add('Title');
    Title.textContent=json.Titolo;

    const Contenuto=document.createElement('p');
    Contenuto.classList.add('Contenuto');
    Contenuto.textContent=json.Contenuto;

    const BtnContainer=document.createElement('div');
    BtnContainer.classList.add('BtnContainer');

    const Like=document.createElement('img');
    Like.classList.add('Like');
    Like.addEventListener('click',MettiLike);
    const nLike=document.createElement('em');
    nLike.classList.add('nLike');
  
    const TipoArgomento=document.createElement('div');
    TipoArgomento.classList.add('ArgomentTag');
    TipoArgomento.textContent="#"+json.Tag;
    TipoArgomento.addEventListener('click',Apri_Artista);
    
    BtnContainer.appendChild(Like);
    BtnContainer.appendChild(nLike);
    BtnContainer.appendChild(TipoArgomento);


    Argomento.appendChild(InfoContainer);
    Argomento.appendChild(Title);
    Argomento.appendChild(Contenuto);
    Argomento.appendChild(BtnContainer);

    ParentContainer.appendChild(Argomento);
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_likes").then(onResponseLikes).then(onJsonLikes);

    const fdata1=new FormData();
    fdata1.append('id_arg',id_arg);
    const form_data1={method:'Post',body: fdata1};
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_argoment_comments",form_data1).then(onResponseComments).then(onJsonComments);
}
function Apri_User(event){
    window.open("utente.php","_self");
  }
if(document.body.contains(document.querySelector("#userbtn"))){
    const userbtn=document.querySelector("#userbtn");
    userbtn.addEventListener('click',Apri_User);
    Username=document.querySelector("#ID_USER").textContent;
    const queryString = window.location.search; //ottengo l'url della pagina
    const urlParams = new URLSearchParams(queryString); //ottengo tutti i parametri
    id_arg=urlParams.get('id_arg');
    const fdata=new FormData();
    fdata.append('id_arg',id_arg);
    const form_data={method:'Post',body: fdata};
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_argoment",form_data).then(onResponse).then(onJson);
}
if(document.body.contains(document.querySelector("#logoutbtn"))){
    const logoutbtn= document.querySelector('#logoutbtn');
    logoutbtn.addEventListener('click',Logout);
}
const homebtn= document.querySelector('#homebtn');
const infobtn= document.querySelector('#infobtn');
homebtn.addEventListener('click',ApriHome);
infobtn.addEventListener('click',ApriInfo);
function ApriInfo(event){
    window.open("Info.php","_self");
}
function ApriHome(event){
    window.open("Home.php","_self");
}
function Logout(event){
    window.open("logout.php","_self");
}
function Apri_Artista(event){
    const artista=event.currentTarget.textContent.replace("#","");
    console.log(artista);
    window.open("Artista.php?nome_artista="+encodeURI(artista),"_self");
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
if(document.body.contains(document.querySelector("#LogInbutton"))){
    const LogInbutton=document.querySelector("#LogInbutton");
    LogInbutton.addEventListener('click',Login);
}
function Login(event){
    window.open("login.php","_self");
}  