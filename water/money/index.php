<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
//include('../config/auth.php');

$id="";
if( isset($_GET['id'])){
    if($_GET['id']!=""){
        $id = (int)$_GET['id'];
    }
}

if($id==""){
    //列印全部
    $sql = "SELECT M.id as id,M.s_id,M.month as month,M.money as money,S.name as name FROM Money as M join Station as S on S.id=M.s_id ORDER BY M.id desc   ";
    $result = mysqli_query($conn, $sql);
    $data = "";
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
    exit();
}else{
    //列印單一筆
    $sql = "SELECT M.id as id,M.s_id,M.month as month,M.money as money,S.name as name FROM Money as M join Station as S on S.id=M.s_id  WHERE M.id='".$id."'  ";
    $result = mysqli_query($conn, $sql);
    $row = $result->fetch_assoc();
    $data = $row;
    echo json_encode($data);
    exit();
}
