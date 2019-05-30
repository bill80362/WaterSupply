<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
include('../config/auth.php');

$update_id = "";
$name = "";
if( isset($_POST['update_id'])){
    if($_POST['update_id']!=""){
        $update_id = (int)$_POST['update_id'];
    }
}
if($update_id=="" || $name==""){
    die('...');
}

//列印全部
$sql = "UPDATE Station SET name='" . $name . "'  WHERE id='".$update_id."' ";
$result = mysqli_query($conn, $sql);
$data = "";
if ($result) {
    $data = "SUCCESS";
} else {
    $data = "FAIL";
}
echo json_encode($data);