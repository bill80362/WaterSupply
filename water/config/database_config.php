<?php
//資料庫連線
$servername = "localhost";
$username = "root";
$password = "bill1234";
$dbname = "WaterSystem";
// 创建连接
//$conn = mysqli_connect($servername, $username, $password, $dbname);
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) 
    die("連接失敗: " . $conn->connect_error);
//設定 utf8
mysqli_set_charset($conn, "UTF8");

//台灣時區
date_default_timezone_set("Asia/Taipei");

//JSON
header('Content-Type: application/json; charset=utf-8');

// 允许 fizzday.net 发起的跨域请求
header("Access-Control-Allow-Origin: fizzday.net");

//如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *
header("Access-Control-Allow-Origin: *");

?>