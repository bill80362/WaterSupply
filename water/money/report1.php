<?php
// 載入資料庫
include('../config/database_config.php');
include('../config/pub_function.php');
//Auth
//include('../config/auth.php');

$objDateTime = new DateTime();
$ThisYear = $objDateTime->format('Y-01-01 00:00:00');

//各站今年營收總額
$sql = "SELECT 

        M.id as id,
        M.s_id,M.month as month,
        SUM(M.money) as money,
        S.name as name 
        
        FROM Money as M join Station as S on S.id=M.s_id 
        
        WHERE M.month >= '" . $ThisYear . "'
        
        GROUP BY M.s_id
        ORDER BY money desc   
";


$result = mysqli_query($conn, $sql);
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);


