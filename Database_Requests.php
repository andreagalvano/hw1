<?php

if(isset($_GET['richiesta'])){
    $conn = mysqli_connect("localhost", "root", "", "homework1");

    $richiesta=mysqli_real_escape_string($conn,$_GET['richiesta']);

    if($richiesta=="add_argoment"){

        if(isset($_POST['titolo']) && isset($_POST['contenuto']) && isset($_POST['id_user']) && isset($_POST['data_pubblicazione']) && isset($_POST['tag'])){

            $titolo=mysqli_real_escape_string($conn,$_POST['titolo']);
            $contenuto=mysqli_real_escape_string($conn,$_POST['contenuto']);
            $ID_User=mysqli_real_escape_string($conn,$_POST['id_user']);
            $orario=mysqli_real_escape_string($conn,$_POST['data_pubblicazione']);
            $tag=mysqli_real_escape_string($conn,$_POST['tag']);
        
            $quary="INSERT INTO argomenti (Titolo,Contenuto,ID_User,Data_Pubblicazione,tag) VALUES(\"$titolo\",\"$contenuto\",\"$ID_User\",\"$orario\",\"$tag\")";
        
            $res=mysqli_query($conn,$quary);
            if(!$res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "Errore Argomento"));
                echo json_encode($messaggio);
                mysqli_close($conn);
                exit;
            }else{
                $messaggio=array(array("MSG" => "1", "Messaggio" => "OK"));
                echo json_encode($messaggio);
                mysqli_close($conn);
                exit;
            }
        
        }


    }elseif($richiesta=="add_comment"){

        if(isset($_POST['username']) && isset($_POST['id_arg']) && isset($_POST['commento']) && isset($_POST['orario'])){

            $ID_User=mysqli_real_escape_string($conn,$_POST['username']);
            $id_arg=mysqli_real_escape_string($conn,$_POST['id_arg']);
            $commento=mysqli_real_escape_string($conn,$_POST['commento']);
            $orario=mysqli_real_escape_string($conn,$_POST['orario']);
            $quary="INSERT INTO commenti (ID_argomento,ID_User,Commento,orario) VALUES(\"$id_arg\",\"$ID_User\",\"$commento\",\"$orario\")";
        
            $res=mysqli_query($conn,$quary);
            if(!$res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "Errore Commento"));
                echo json_encode($messaggio);
                mysqli_close($conn);
                exit;
            }
            $quary1="SELECT * from commenti WHERE ID_argomento='".$id_arg."' AND ID_User='".$ID_User."' AND Commento='".$commento."' AND orario='".$orario."'";
            $res1=mysqli_query($conn,$quary1);
            $row=mysqli_fetch_assoc($res1);
            echo json_encode($row);
            mysqli_close($conn);
        
        }
    }elseif($richiesta=="add_like"){

        if(isset($_POST['username']) && isset($_POST['ID_arg'])){

            $username=mysqli_real_escape_string($conn,$_POST['username']);
            $id_arg=mysqli_real_escape_string($conn,$_POST['ID_arg']);
            $quary="INSERT INTO likes (ID_argomento,ID_user) VALUES(\"$id_arg\",\"$username\")";
           
            $res=mysqli_query($conn,$quary);
            if(!$res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "Errore Like"));
                echo json_encode($messaggio);
                mysqli_close($conn);
                exit;
            }
            $quary1="SELECT ID_like, ID_argomento from likes WHERE ID_argomento='".$id_arg."' AND ID_User='".$username."'";
            $res1=mysqli_query($conn,$quary1);
            $row=mysqli_fetch_assoc($res1);
            echo json_encode($row);
            mysqli_close($conn);
        }

    }elseif($richiesta=="add_user"){

        if(isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"])){
          
            $username =mysqli_real_escape_string($conn, $_POST["username"]);
            $email =mysqli_real_escape_string($conn, $_POST["email"]);
            $password =mysqli_real_escape_string($conn, $_POST["password"]);
          
            $key_enc = '0274'; //chiave per la crittografia
            $met_enc = 'aes256'; //metodo per la crittografia: aes128, aes192, aes256, blowfish, cast-cbc
            $iv = 'ma1R0ikDD56_hG12'; //una stringa random con 16 caratteri
            $pass_enc = openssl_encrypt($password, $met_enc, $key_enc, 0, $iv);
            
            $query= "INSERT INTO Utente VALUES(\"$username\",\"$email\",\"$pass_enc\")";
            $res=mysqli_query($conn,$query);
          
            mysqli_close($conn);
            
            header("Location: login.php");
            
        }
    }elseif($richiesta=="get_argoment_comments"){

        if(isset($_POST['id_arg'])){
            $id_arg=mysqli_real_escape_string($conn,$_POST['id_arg']);
            $commenti=array();
            $quary="SELECT * FROM commenti WHERE ID_argomento='".$id_arg."' ORDER BY orario ASC";
            $res=mysqli_query($conn,$quary);
            while($row=mysqli_fetch_assoc($res)){
                $commenti[]=$row;
            }
        
            mysqli_free_result($res);
            mysqli_close($conn);
            
            echo json_encode($commenti);
        }
    }elseif($richiesta=="get_argoment"){

        if(isset($_POST['id_arg'])){
            $id_arg=mysqli_real_escape_string($conn,$_POST['id_arg']);
            $quary="SELECT * FROM argomenti WHERE ID_arg='".$id_arg."'";
            $res=mysqli_query($conn,$quary);
            $argomento=mysqli_fetch_assoc($res);
            mysqli_free_result($res);
            mysqli_close($conn);
        
            echo json_encode($argomento);
        }
        
    }elseif($richiesta=="get_argoments"){

        $argomenti=array();
        $quary="SELECT * FROM argomenti order by Data_Pubblicazione DESC";
        $res=mysqli_query($conn,$quary);

        while($row=mysqli_fetch_assoc($res)){
            $argomenti[]=$row;
        }

        mysqli_free_result($res);
        mysqli_close($conn);

        echo json_encode($argomenti);

    }elseif($richiesta=="get_likes"){

        $like=array();
        $quary="SELECT * FROM likes";
        $res=mysqli_query($conn,$quary);
    
        while($row=mysqli_fetch_assoc($res)){
            $like[]=$row;
        }
    
        mysqli_free_result($res);
        mysqli_close($conn);
    
        echo json_encode($like);
    
    }elseif($richiesta=="get_user_argoments"){

        if(isset($_POST['id_user'])){
            $id_user=mysqli_real_escape_string($conn,$_POST['id_user']);
            $quary="SELECT * FROM argomenti WHERE ID_User='".$id_user."' ORDER BY  Data_Pubblicazione DESC";
            $res=mysqli_query($conn,$quary);
            $argomenti=array();
            while($row=mysqli_fetch_assoc($res)){
                $argomenti[]=$row;
            }
        
            mysqli_free_result($res);
            mysqli_close($conn);
        
            echo json_encode($argomenti);
        }
        
    }elseif($richiesta=="remove_argoment"){

        if(isset($_POST['id_arg'])){

            $id_arg=mysqli_real_escape_string($conn,$_POST['id_arg']);
            $quary="DELETE FROM argomenti WHERE (ID_arg = '".$id_arg."')";
            $res=mysqli_query($conn,$quary);
            if($res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "OK"));
                echo json_encode($messaggio);
            }else{
                $errore=array(array("MSG" => "1", "Messaggio" => "Errore!"));
                echo json_encode($errore);
            }
            mysqli_close($conn);
        }
    }elseif($richiesta=="remove_comment"){

        if(isset($_POST['id_comm'])){

            $id_comm=mysqli_real_escape_string($conn,$_POST['id_comm']);
            $quary="DELETE FROM commenti WHERE (ID_Comm = '".$id_comm."')";
            $res=mysqli_query($conn,$quary);
            if($res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "OK"));
                echo json_encode($messaggio);
            }else{
                $errore=array(array("MSG" => "1", "Messaggio" => "Errore!"));
                echo json_encode($errore);
            }
            mysqli_close($conn);
        }
    }elseif($richiesta=="remove_like"){

        if(isset($_POST['id_like'])){

            $id_like=mysqli_real_escape_string($conn,$_POST['id_like']);
            $quary="DELETE FROM likes WHERE (ID_Like = '".$id_like."')";
            $res=mysqli_query($conn,$quary);
            if($res){
                $messaggio=array(array("MSG" => "0", "Messaggio" => "OK"));
                echo json_encode($messaggio);
            }else{
                $errore=array(array("MSG" => "1", "Messaggio" => "Errore!"));
                echo json_encode($errore);
            }
            mysqli_close($conn);
        }
        
    }elseif($richiesta=="get_users"){

        $utenti=array();
        $quary="SELECT username FROM Utente";
        $res=mysqli_query($conn,$quary);

        while($row=mysqli_fetch_assoc($res)){
            $utenti[]=$row;
        }

        mysqli_free_result($res);
        mysqli_close($conn);

        echo json_encode($utenti);

    }elseif($richiesta=="num_like"){

        if(isset($_POST['id_arg'])){

            $id_argomento=mysqli_real_escape_string($conn,$_POST['id_arg']);
            $quary= "SELECT count(*) as numLike, ID_argomento from likes where ID_argomento ='".$id_argomento."'";
            $res=mysqli_query($conn,$quary);
            $row=mysqli_fetch_assoc($res);
            mysqli_free_result($res);
            mysqli_close($conn);
            echo json_encode($row);
            
        }
            
    }

}

?>