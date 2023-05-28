<?php
$conn = mysqli_connect("localhost", "root", "", "homework1");

if(isset($_POST['artista'])){
    $artista=mysqli_real_escape_string($conn,$_POST['artista']);
    $quary="SELECT * FROM argomenti WHERE Tag='".$artista."' ORDER BY  Data_Pubblicazione DESC";
    $res=mysqli_query($conn,$quary);
    $argomenti=array();
    while($row=mysqli_fetch_assoc($res)){
        $argomenti[]=$row;
    }

    mysqli_free_result($res);
    mysqli_close($conn);

    echo json_encode($argomenti);
}


?>