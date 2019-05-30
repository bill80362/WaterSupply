<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
include('../config/auth.php');

if( isset($_POST['name'])){
    if($_POST['name']!=""){
        $name = $_POST['name'];
    }
}
if($name==""){
    die('...');
}

//列印全部
$sql = "INSERT INTO Station SET name='" . $name . "' ";
$result = mysqli_query($conn, $sql);
$data = "";
if ($result) {
    $data = "SUCCESS";
} else {
    $data = "FAIL";
}
echo json_encode($data);