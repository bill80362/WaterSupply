<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
include('../config/auth.php');

$id="";
if( isset($_GET['id'])){
    if($_GET['id']!=""){
        $id = (int)$_GET['id'];
    }
}

if($id==""){
    //列印全部
    $sql = "SELECT * FROM Station ORDER BY id desc  ";
    $result = mysqli_query($conn, $sql);
    $data = "";
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
    exit();
}else{
    //列印單一筆
    $sql = "SELECT * FROM Station WHERE id='".$id."'  ";
    $result = mysqli_query($conn, $sql);
    $row = $result->fetch_assoc();
    $data = $row;
    echo json_encode($data);
    exit();
}
