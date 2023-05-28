function onResponse(response){
    return response.json();
}
function onResponseA_Argomento(response){
    return response.json();
}
function onJsonA_Argomento(json){
    console.log(json);
    if(json[0].MSG==="1"){
      location.reload();
    }
}
function Apri_Argomento(event){
    const id_arg=event.currentTarget.parentNode.parentNode.id
    const titolo=event.currentTarget.parentNode.parentNode.querySelector('.Title').textContent;
    window.open("Argomento.php?id_arg="+id_arg+"&titolo="+encodeURI(titolo),"_self");
}
function onJson(json){
    console.log(json);

    const ArgomentContainer=document.querySelector('.ArgomentContainer');
    if(json.length>0){

        for(i of json){
            const Argomento=document.createElement('div');
            Argomento.classList.add('Argomento');
            Argomento.setAttribute("id",i.ID_arg);

            const InfoContainer =document.createElement('div');
            InfoContainer.classList.add('InfoContainer');

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

            const TipoArgomento=document.createElement('div');
            TipoArgomento.classList.add('ArgomentTag');
            TipoArgomento.textContent="#"+i.Tag;
            TipoArgomento.addEventListener('click',Apri_Artista);

            const ApriArgomento=document.createElement('a');
            ApriArgomento.classList.add('ApriArgomento');
            ApriArgomento.textContent="Apri";
            ApriArgomento.addEventListener('click',Apri_Argomento);

            const EliminaArgomento=document.createElement('div');
            EliminaArgomento.classList.add('EliminaArgomento');
            EliminaArgomento.textContent="Elimina";
            EliminaArgomento.addEventListener('click',Elimina_Argomento);

            BtnContainer.appendChild(TipoArgomento);
            BtnContainer.appendChild(ApriArgomento);
            BtnContainer.appendChild(EliminaArgomento);
        

            Argomento.appendChild(InfoContainer);
            Argomento.appendChild(Contenuto);
            Argomento.appendChild(BtnContainer);

            ArgomentContainer.appendChild(Argomento);
        }
    }else{
        const messaggio=document.createElement('h1');
        messaggio.textContent="Non hai creato nessun argomento";
        ArgomentContainer.appendChild(messaggio);
    }
}
function onResponseR_Argomento(response){
    return response.json();
}
function onJsonR_Argomento(json){
    console.log(json);
}
function Elimina_Argomento(event){
    const id_arg=event.currentTarget.parentNode.parentNode.id;
    console.log(id_arg);

    const fdata=new FormData();
    fdata.append('id_arg',id_arg);
    const form_data={method:'Post',body: fdata};

   fetch("http://localhost/homework1/Database_Requests.php?richiesta=remove_argoment",form_data).then(onResponseR_Argomento).then(onJsonR_Argomento);
    
    const ArgomentContainer=document.querySelector('.ArgomentContainer');
    const Argomento=event.currentTarget.parentNode.parentNode;
    ArgomentContainer.removeChild(Argomento);

    if(ArgomentContainer.childElementCount==0){
        const messaggio=document.createElement('h1');
        messaggio.textContent="Non hai creato nessun argomento";
        ArgomentContainer.appendChild(messaggio);
    }

}
const homebtn= document.querySelector('#homebtn');
const infobtn= document.querySelector('#infobtn');
homebtn.addEventListener('click',ApriHome);
infobtn.addEventListener('click',ApriInfo);
function Logout(event){
    window.open("logout.php","_self");
}
function Apri_Artista(event){
  const artista=event.currentTarget.textContent.replace("#","");
  console.log(artista);
  window.open("Artista.php?nome_artista="+encodeURI(artista),"_self");
}
function Login(event){
    window.open("login.php","_self");
}
function ApriInfo(event){
    window.open("Info.php","_self");
}
function ApriHome(event){
    window.open("Home.php","_self");
}
if(document.body.contains(document.querySelector("#userbtn"))){
  const userbtn= document.querySelector('#userbtn');
  userbtn.addEventListener('click',function(event){ location.reload();});
}
if(document.body.contains(document.querySelector("#logoutbtn"))){
  const logoutbtn= document.querySelector('#logoutbtn');
  logoutbtn.addEventListener('click',Logout);
}
if(document.body.contains(document.querySelector("#loginbtn"))){
  const loginbtn= document.querySelector('#loginbtn');
  loginbtn.addEventListener('click',Login);
}
if(document.body.contains(document.querySelector("#userbtn"))){
    Username=document.querySelector("#ID_USER").textContent;
    const fdata=new FormData();
    fdata.append('id_user',Username);
    const form_data={method:'Post',body: fdata};
    fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_user_argoments",form_data).then(onResponse).then(onJson);
}
if(document.body.contains(document.querySelector("#LogInbutton"))){
    const LogInbutton=document.querySelector("#LogInbutton");
    LogInbutton.addEventListener('click',Login);
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
      fetch("http://localhost/homework1/Database_Requests.php?richiesta=add_argoment",form_data).then(onResponseA_Argomento).then(onJsonA_Argomento);
    }

}
if(document.body.contains(document.querySelector(".InviaArgomento"))){
    const InviaArgomento=document.querySelector('.InviaArgomento');
    InviaArgomento.addEventListener('click',Invia_Argomento);
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
  