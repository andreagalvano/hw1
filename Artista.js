const homebtn= document.querySelector('#homebtn');
homebtn.addEventListener('click',Apri_Home);

function convertiNumero(numero) {
  const numeroStringa = numero.toString();
  const lunghezza = numeroStringa.length;

  let risultato = "";

  for (let i = 0; i < lunghezza; i++) {
    if ((lunghezza - i) % 3 === 0 && i !== 0) { 
      risultato += ".";
    }

    risultato += numeroStringa[i];
  }

  return risultato;
}

const infobtn= document.querySelector('#infobtn');
function onJsonR_Like(json){
  console.log(json);
}
function onResponseR_Like(response){
  return response.json();
}
function onResponseA_Like(response){
  return response.json();
}
function onJsonA_Like(json){
  console.log(json);
  const ListaArgomenti=document.querySelectorAll('.Argomento');
  for(argomento of ListaArgomenti){
    const Arg_Like=argomento.querySelector('.Like')
      if(json.ID_argomento===argomento.id){
        Arg_Like.dataset.likeid=json.ID_like;
      }
  }
}
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
if(document.body.contains(document.querySelector("#userbtn"))){
  const userbtn= document.querySelector('#userbtn');
  userbtn.addEventListener('click',Apri_User);
  Username=document.querySelector("#ID_USER").textContent;
  const queryString = window.location.search; //ottengo l'url della pagina
  const urlParams = new URLSearchParams(queryString); //ottengo tutti i parametri
  nome_artista=urlParams.get('nome_artista');
  if(nome_artista!=null){
    fetch("http://localhost/homework1/get_artist_info.php?nome_artista="+encodeURI(nome_artista)).then(onResponse).then(onJson);
  }  
}
if(document.body.contains(document.querySelector("#logoutbtn"))){
  const logoutbtn= document.querySelector('#logoutbtn');
  logoutbtn.addEventListener('click',Logout);
}
if(document.body.contains(document.querySelector("#loginbtn"))){
  const loginbtn= document.querySelector('#loginbtn');
  loginbtn.addEventListener('click',Login);
}
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
function Apri_Home(event){
    window.open("home.php","_self");
}
function onResponse(response){
    return response.json();
}
function onResponseArgomenti(response){
  return response.json();
}
function onResponseAlbum(response){
  return response.json();
}
function onResponsenLike(response){
  return response.json();
}
function onJsonnLike(json){
  const ListaArgomenti=document.querySelectorAll('.Single_Argomento');
  console.log(json);

  for(argomento of ListaArgomenti){
    const Arg_nLike=argomento.querySelector('.nLike')
      if(json.ID_argomento===argomento.id){
        Arg_nLike.textContent=json.numLike;
      }
  }
}
function Apri_Spotify(event){
  const url_ticket=event.currentTarget.id;
    window.open(url_ticket);
    window.focus();
}
function onResponseLikes(response){
  return response.json();
}
function onJsonLikes(json){
  console.log(json);
  if(json.length===0){
    const argomenti=document.querySelectorAll('.ArgomentContainer');
    for(let argomento of argomenti){
      const nLike=argomento.querySelector('.nLike');
      nLike.textContent=0;
      const Like=argomento.querySelector('.Like');
      Like.src="Images/Heart_Empty.png";
      Like.setAttribute("id","UnChecked");
    }
  }else{
    const ListaArgomenti=document.querySelectorAll('.Single_Argomento');
    
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
          fetch("http://localhost/homework1/Database_Requests.php?richiesta=num_like",form_data).then(onResponsenLike).then(onJsonnLike);
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
function Apri_Argomento(event){
  const id_arg=event.currentTarget.parentNode.parentNode.id
  const titolo=event.currentTarget.parentNode.parentNode.querySelector('.Title').textContent;
  window.open("Argomento.php?id_arg="+id_arg+"&titolo="+encodeURI(titolo),"_self");
}
function onJsonArgomenti(json){
  console.log(json);
  const ParentContainer=document.querySelector('.ParentContainer');
  const ArgomentContainer=document.createElement('div');
  ArgomentContainer.classList.add('ArgomentContainer');
  ParentContainer.appendChild(ArgomentContainer);
  if(json.length>0){

    for(i of json){
        const Argomento=document.createElement('div');
        Argomento.classList.add('Single_Argomento');
        Argomento.setAttribute("id",i.ID_arg);

        const InfoContainer =document.createElement('div');
        InfoContainer.classList.add('InfoContainer');
        
        const UserInfo=document.createElement('div');
        UserInfo.classList.add('UserInfo');
  
        const UserImg=document.createElement('img');
        UserImg.classList.add('UserImg');
        UserImg.src="images/utente.png";
        
        const Username=document.createElement('div');
        Username.classList.add('Username');
        Username.textContent=i.ID_User;
        
        UserInfo.appendChild(UserImg);
        UserInfo.appendChild(Username);
  

        const Title=document.createElement('div');
        Title.classList.add('Title');
        Title.textContent=i.Titolo;

        const DataPubblicazione=document.createElement('div');
        DataPubblicazione.classList.add('DataPubblicazione');
        DataPubblicazione.textContent=i.Data_Pubblicazione;

        InfoContainer.appendChild(Title);
        InfoContainer.appendChild(DataPubblicazione);

        const Contenuto=document.createElement('p');
        Contenuto.classList.add('Contenuto');
        Contenuto.textContent=i.Contenuto;

        const BtnContainer=document.createElement('div');
        BtnContainer.classList.add('BtnContainer');

        const ApriArgomento=document.createElement('a');
        ApriArgomento.classList.add('ApriArgomento');
        ApriArgomento.textContent="Apri";
        ApriArgomento.addEventListener('click',Apri_Argomento);

        const Like=document.createElement('img');
        Like.classList.add('Like');
        Like.addEventListener('click',MettiLike);
        const nLike=document.createElement('em');
        nLike.classList.add('nLike');

        BtnContainer.appendChild(Like);
        BtnContainer.appendChild(nLike);
        BtnContainer.appendChild(ApriArgomento);

        Argomento.appendChild(UserInfo);
        Argomento.appendChild(InfoContainer);
        Argomento.appendChild(Contenuto);
        Argomento.appendChild(BtnContainer);

        ArgomentContainer.appendChild(Argomento);
    }
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_likes").then(onResponseLikes).then(onJsonLikes);
}else{
    const messaggio=document.createElement('h1');
    messaggio.textContent="Non sono stati creati argomenti su "+nome_artista;
    ArgomentContainer.appendChild(messaggio);
}

}
function onJsonAlbum(json){
  console.log(json);
  const lista_album=json.items;
  const ParentContainer=document.querySelector('.ParentContainer');
  const vista_album=document.createElement('div');
  vista_album.classList.add('AlbumContainer');
  ParentContainer.appendChild(vista_album);
  for(album of lista_album){

      const div_content =document.createElement('div');
      div_content.classList.add('content');
      div_content.setAttribute("id",album.uri);
      div_content.addEventListener('click',Apri_Spotify);

      const div_left =document.createElement('div');
      div_left.classList.add('left');
      const div_right =document.createElement('div');
      div_right.classList.add('right');
  
      const immagine =document.createElement('img');
      immagine.src=album.images[0].url;
      div_left.appendChild(immagine);
      
      const nome_album=document.createElement('h1');
      nome_album.textContent=album.name;
      
      const data_rilascio=document.createElement('em');
      data_rilascio.textContent="Data di rilascio: " + album.release_date;
  
      const num_tracks=document.createElement('em');
      num_tracks.textContent ="Numero di tracce: "+album.total_tracks;

      div_right.appendChild(nome_album);
      div_right.appendChild(data_rilascio);
      div_right.appendChild(num_tracks);

      div_content.appendChild(div_left);
      div_content.appendChild(div_right);
      vista_album.appendChild(div_content);
  }
  const ArgomentInfo=document.createElement('div');
  ArgomentInfo.classList.add('ArgomentInfo');
  ArgomentInfo.textContent="Argomenti creati";

  ParentContainer.appendChild(ArgomentInfo);

  const fdata=new FormData();
  fdata.append('artista',nome_artista);
  const form_data={method:'Post',body: fdata};
  fetch("http://localhost/homework1/get_artist_argoments.php",form_data).then(onResponseArgomenti).then(onJsonArgomenti);
}
function onJson(json){
    console.log(json);
    const artista=json;
    const ParentContainer=document.querySelector('.ParentContainer');
    const immagine_artista=artista.images[0].url;
    const contenitore=document.createElement('div');
    contenitore.classList.add('Contenitore');
    const panelArtista=document.createElement('div');
    panelArtista.classList.add('Panel');
    panelArtista.innerHTML="";

    const titolo_elem=document.createElement('h1');
    const enfasi_elem=document.createElement('em');
    const immagine=document.createElement('img');
    immagine.classList.add('ArtistImage');
    titolo_elem.textContent=artista.name;
    const followers= artista.followers.total;
    enfasi_elem.textContent=convertiNumero(followers)+" Followers";
    immagine.src=immagine_artista;

    panelArtista.appendChild(titolo_elem);
    panelArtista.appendChild(enfasi_elem);

    contenitore.appendChild(panelArtista);
    contenitore.appendChild(immagine);

    ParentContainer.appendChild(contenitore);

    artista_id=artista.id;

    const ArgomentInfo=document.createElement('div');
    ArgomentInfo.classList.add('ArgomentInfo');
    ArgomentInfo.textContent="Album Pubblicati";

    ParentContainer.appendChild(ArgomentInfo);
    fetch("http://localhost/homework1/get_artist_album.php?id_artista="+encodeURI(artista_id)).then(onResponseAlbum).then(onJsonAlbum);
    
}
if(document.body.contains(document.querySelector("#LogInbutton"))){
    const LogInbutton=document.querySelector("#LogInbutton");
    LogInbutton.addEventListener('click',Login);
}
let artista_id;
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
