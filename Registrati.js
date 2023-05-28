
function validazione(event){
    
    // Verifica se tutti i campi sono riempiti
    if(t_username.value.length == 0){
        t_username.placeholder="Inserisci un username!";
        t_username.classList.add('redBorder');
        t_username.classList.add('hshaking');
        event.preventDefault();
    }else{
        if(t_username.value.length < 8){
            t_username.placeholder="Username troppo corto!";
            t_username.value="";
            t_username.classList.add('redBorder');
            t_username.classList.add('hshaking');
            event.preventDefault();
        }else{
            for(usr of lista_user){
                if(usr===t_username.value){
                    t_username.placeholder="Username: " + t_username.value + " già in uso";
                    t_username.value="";
                    t_username.classList.add('redBorder');
                    t_username.classList.add('hshaking');
                    event.preventDefault();
                }
            }
        }
        t_username.value=t_username.value.toLowerCase();
    }
    if(t_email.value.length == 0){
        t_email.placeholder="Inserisci una email!";
        t_email.classList.add('redBorder');
        t_email.classList.add('hshaking');
        event.preventDefault();
    }
    t_email.value=t_email.value.toLowerCase();
    if(t_password.value.length == 0){
        t_password.placeholder="Inserisci una password!";
        t_password.classList.add('redBorder');
        t_password.classList.add('hshaking');
        event.preventDefault();
    }else{
        if(t_password.value.length < 8){
            t_password.value="";
            t_password.placeholder="Password troppo corta!";
            t_password.classList.add('redBorder');
            t_password.classList.add('hshaking');
            event.preventDefault();
        }else{
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            if(specialChars.test(t_password.value)===false){
                t_password.value="";
                t_password.placeholder="La password deve avere un carattere speciale";
                t_password.classList.add('redBorder');
                t_password.classList.add('hshaking');
                event.preventDefault();
            }
        }
    }
    if(t_rpassword.value.length == 0){
        t_rpassword.placeholder="Ripeti la password";
        t_rpassword.classList.add('redBorder');
        t_rpassword.classList.add('hshaking');
        event.preventDefault();
    }
    if(t_password.value.length !=0 && t_rpassword.value.length !=0){

        if(t_password.value !== t_rpassword.value){
            t_rpassword.value="";
            t_rpassword.placeholder="Le password non coincidono!";
            t_rpassword.classList.add('redBorder');
            t_rpassword.classList.add('hshaking');
            event.preventDefault();
        }

    }
        
}
function Username_focusOut(event){
    if(t_username.value.length == 0){
        t_username.placeholder="Inserisci un username!";
        t_username.classList.add('redBorder');
        t_username.classList.add('hshaking');
        event.preventDefault();
    }else{
        for(usr of lista_user){
            if(usr===t_username.value){
                t_username.placeholder="Username: " + t_username.value + " già in uso";
                t_username.value="";
                t_username.classList.add('redBorder');
                t_username.classList.add('hshaking');
                event.preventDefault();
            }
        }
    }
}

function Email_focusOut(event){
    if(t_email.value.length == 0){
        t_email.placeholder="Inserisci una email!";
        t_email.classList.add('redBorder');
        t_email.classList.add('hshaking');
        event.preventDefault();
    }
}
function Password_focusOut(event){
    if(t_password.value.length == 0){
        t_password.placeholder="Inserisci una password!";
        t_password.classList.add('redBorder');
        t_password.classList.add('hshaking');
        event.preventDefault();
    }
}
function RPassword_focusOut(event){
    if(t_rpassword.value.length == 0){
        t_rpassword.placeholder="Ripeti la password";
        t_rpassword.classList.add('redBorder');
        t_rpassword.classList.add('hshaking');
        event.preventDefault();
    }
}
function Username_Control(event){
    t_username.classList.remove('redBorder');
    t_username.classList.remove('hshaking');
}
function Email_Control(event){
    t_email.classList.remove('redBorder');
    t_email.classList.remove('hshaking');
}
function Password_Control(event){
    t_password.classList.remove('redBorder');
    t_password.classList.remove('hshaking');
}
function RPassword_Control(event){
    t_rpassword.classList.remove('redBorder');
    t_rpassword.classList.remove('hshaking');
}
function onResponse(response){
    return response.json();
}
function onJson(json){
    for(usr of json){
        lista_user.push(usr.username);
    }
}

function ApriLogin(event){
    window.open("login.php","_self");
}
// Riferimento al form
const form = document.forms['registrazione'];
const t_username =form.username;
const t_email=form.email;
const t_password=form.password;
const t_rpassword=form.Rpassword;
// Aggiungi listener
form.addEventListener('submit', validazione);
form.username.addEventListener('keyup',Username_Control);
form.email.addEventListener('keyup',Email_Control);
form.password.addEventListener('keyup',Password_Control);
form.Rpassword.addEventListener('keyup',RPassword_Control);

form.username.addEventListener('focusout',Username_focusOut);
form.email.addEventListener('focusout',Email_focusOut);
form.password.addEventListener('focusout',Password_focusOut);
form.Rpassword.addEventListener('focusout',RPassword_focusOut);

form.username.addEventListener('focus',Username_Control);
form.email.addEventListener('focus',Email_Control);
form.password.addEventListener('focus',Password_Control);
form.Rpassword.addEventListener('focus',RPassword_Control);

fetch("http://localhost/homework1/Database_Requests.php?richiesta=get_users").then(onResponse).then(onJson);
const lista_user=[];

const Accedi =document.querySelector("#SigInbtn");
Accedi.addEventListener("click",ApriLogin);

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