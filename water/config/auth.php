<?php
/**
 * Created by PhpStorm.
 * User: user2
 * Date: 2019/5/23
 * Time: 下午 02:35
 */

$RequsetHeader = apache_request_headers();
if( !isset($RequsetHeader['Authorization'])){
    die('Login First Please!');
}
$auth = $RequsetHeader['Authorization'];
$auth = explode(" ",$auth);
$auth = base64_decode($auth[1]);
$auth = explode(":",$auth);
$user = $auth[0];
$password = $auth[1];
if( $user!="bill" || $password!="1234" ){
    die('Login Error');
}