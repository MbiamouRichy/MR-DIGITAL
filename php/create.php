<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include database connection
include 'config/database.php';

try{

// insert query
$query = "INSERT INTO envoyer SET  message=:message, id_reponse=:reponse";
// prepare query for execution
$stmt = $con->prepare($query);
// posted values
$mess = $_POST['message'];
$id_rep = $_POST['reponse'];
// bind the parameters
$stmt->bindParam(':message', $mess);
$stmt->bindParam(':reponse', $id_rep);
// Execute the query
if($stmt->execute()){
    echo json_encode(array('result'=>'success'));
}else{
    echo json_encode(array('result'=>'fail'));
}
}
// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>
