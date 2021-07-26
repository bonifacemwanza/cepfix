<?php

$sql_db_host = "localhost";
$sql_db_user = "root";
$sql_db_pass = "root";
$sql_db_name = "cepfix";

$connection = mysqli_connect($sql_db_host, $sql_db_user, $sql_db_pass, $sql_db_name);

$formType = $_POST['type'];
$formId = $_POST['id'];
$formResult = $_POST['OpResult'];
$formError = $_POST['ErrMessage'];
$formPath = $_POST['filePath'];
$formDate = $_POST['date'];

if($formType == "add"){
    $query = "INSERT INTO WorkerJob (operationResult, errorMessage, filePath, date) VALUES ('$formResult', '$formError', '$formPath','$formDate')";
    $runQuery = mysqli_query($connection, $query);

    if($runQuery){
        echo "Success";
    }
    else{
        echo "Failed";
    }
}

if($formType == "edit"){
    $query = "UPDATE WorkerJob SET operationResult = '$formResult', errorMessage ='$formError', filePath ='$formPath', date ='$formDate' WHERE id = '$formId'";
    $runQuery = mysqli_query($connection, $query);

    if($runQuery){
        echo "Success";
    }
    else{
        echo "Failed";
    }
}

$getDataQuery = "SELECT * FROM WorkerJob";
$runGetData = mysqli_query($connection, $getDataQuery);

while($row = mysqli_fetch_array($runGetData)){
    $myArray[] = $row;
}

$fp = fopen('../src/Data.json', 'w');
fwrite($fp, json_encode($myArray));
fclose($fp);

