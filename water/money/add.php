<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
//include('../config/auth.php');

$s_id = "";
$month = "";
$money = "";
if( isset($_POST['s_id'])){
    if($_POST['s_id']!=""){
        $s_id = $_POST['s_id'];
    }
    if($_POST['month']!=""){
        $month = $_POST['month'];
    }
    if($_POST['money']!=""){
        $money = $_POST['money'];
    }
}
if($s_id=="" || $month=="" || $money=="" ){
    die('...');
}

$month = $month."-01 00:00:00";

//列印全部
$sql = "INSERT INTO Money SET s_id='" . $s_id . "',month='" . $month . "',money='" . $money . "' ";
$result = mysqli_query($conn, $sql);
$data = "";
if ($result) {
    $data = "SUCCESS";
} else {
    $data = "FAIL";
}
echo json_encode($data);