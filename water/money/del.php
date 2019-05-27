<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
//include('../config/auth.php');

if( isset($_GET['id'])){
    if($_GET['id']!=""){
        $del_id = (int)$_GET['id'];
    }
}
if($del_id==""){
    die('...');
}

//列印全部
$sql = "DELETE FROM Money WHERE id=".$del_id;
$result = mysqli_query($conn, $sql);
$data = "";
if($result){
    $data = "SUCCESS";
}else{
    $data = "FAIL";
}
echo json_encode($data);