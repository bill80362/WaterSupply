<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
include('../config/auth.php');

$update_id = "";
$month = "";
$money = "";
if( isset($_POST['update_id'])){
    if($_POST['update_id']!=""){
        $update_id = $_POST['update_id'];
    }
    if($_POST['month']!=""){
        $month = $_POST['month'];
    }
    if($_POST['money']!=""){
        $money = $_POST['money'];
    }
}

if($update_id=="" || $month=="" || $money=="" ){
    die('...');
}

$month = $month."-01 00:00:00";

//列印全部
$sql = "UPDATE Money SET month='" . $month . "',money='" . $money . "'  WHERE id='".$update_id."' ";
$result = mysqli_query($conn, $sql);
$data = "";
if ($result) {
    $data = "SUCCESS";
} else {
    $data = "FAIL";
}
echo json_encode($data);