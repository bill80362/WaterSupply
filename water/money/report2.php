<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
include('../config/auth.php');

$objDateTime = new DateTime();
$ThisYear = $objDateTime->format('Y-01-01 00:00:00');

//今年營收列表
$sql = "SELECT 

        M.id as id,M.s_id,M.month as month,
        M.money as money,
        S.name as name 
        
        FROM Money as M join Station as S on S.id=M.s_id 
        
        WHERE M.month >= '" . $ThisYear . "'
        
        ORDER BY M.month desc
";

$month_array = array();
$result = mysqli_query($conn, $sql);
$rows = $result->fetch_all(MYSQLI_ASSOC);
for ($i=0;$i<count($rows);$i++) {
    $objDateTime = new DateTime($rows[$i]['month']);
    $month_txt = $objDateTime->format('Y-m');
    $data[$month_txt][$rows[$i]['name']] = (int)$rows[$i]['money']  ;
}
//print_r($data);
foreach($data as $key=>$value) {
    unset($temp);
    $temp['month'] = $key;
    foreach($value as $key2=>$value2) {
        $temp[$key2] = $value2;
    }
    $data2[] = $temp;
}

//print_r($data2);
echo json_encode($data2);


