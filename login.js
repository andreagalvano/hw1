
function validazione(event){
    
    // Verifica se tutti i campi sono riempiti
    if(t_username.value.length == 0){
        t_username.placeholder="Inserisci username";
        t_username.classList.add('redBorder');
        t_username.classList.add('hshaking');
        event.preventDefault();
    }

    if(t_password.value.length == 0){
        t_password.placeholder="Inserisci password";
        t_password.classList.add('redBorder');
        t_password.classList.add('hshaking');
        event.preventDefault();
    }

    if(t_username.value.length !=0 && t_password.value.length !=0 && login==false){
        const form_data ={ method: 'POST', body: new FormData(form)};
        fetch("http://localhost/homework1/Convalid_User.php",form_data).then(onResponse).then(onJson);
        event.preventDefault();
    }
        
}

function onResponse(response){
    return response.json();
}
function onJson(json){
    t_username.classList.remove('redBorder');
    t_username.classList.remove('hshaking');
    t_password.classList.remove('redBorder');
    t_password.classList.remove('hshaking');

    if(json[0].Errore==='1'){
        t_username.value="";
        t_username.placeholder=json[0].Messaggio;
        t_username.classList.add('redBorder');
        t_username.classList.add('hshaking');
    }else {
        if(json[0].Errore==='0'){
        t_password.value="";
        t_password.placeholder=json[0].Messaggio;
        t_password.classList.add('redBorder');
        t_password.classList.add('hshaking');
        }
    }
    if(json[0].Login ==="OK"){
        login=true;
        form.submit();
    }
}

function Username_focusOut(event){
    if(t_username.value.length == 0){
        t_username.placeholder="Inserisci username";
        t_username.classList.add('redBorder');
        t_username.classList.add('hshaking');
        event.preventDefault();
    }
}

function Password_focusOut(event){
    if(t_password.value.length == 0){
        t_password.placeholder="Inserisci password";
        t_password.classList.add('redBorder');
        t_password.classList.add('hshaking');
        event.preventDefault();
    }
}

function Username_Control(event){
    t_username.classList.remove('redBorder');
    t_username.classList.remove('hshaking');
}

function Password_Control(event){
    t_password.classList.remove('redBorder');
    t_password.classList.remove('hshaking');
}
function ApriRegistrati(event){
    window.open("Registrati.php","_self");
}
// Riferimento al form
const form = document.forms['login'];
const t_username =form.username;
const t_password=form.password;
// Aggiungi listener
form.addEventListener('submit', validazione);
form.username.addEventListener('keyup',Username_Control);
form.password.addEventListener('keyup',Password_Control);

form.username.addEventListener('focusout',Username_focusOut);
form.password.addEventListener('focusout',Password_focusOut);

form.username.addEventListener('focus',Username_Control);
form.password.addEventListener('focus',Password_Control);

let login=false;

const Registrati =document.querySelector("#SignUpbtn");
Registrati.addEventListener("click",ApriRegistrati)

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