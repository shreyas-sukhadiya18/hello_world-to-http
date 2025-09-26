<?php
echo "Welcome to the stage where we are ready to connerct mysql";

$servername="localhost";
$username="root";
$password="";

// create a connection 
$conn=mysqli_connect($servername,$username,$password);

// die if connection was lost
if(!$conn){
    die("Sorry enable to connect local host".mysqli_connect_error());
}
else{
    echo"COnnection was succesfuuty";
}

// create database
$sql=" CREATE DATABASE shreyash3";
$result=mysqli_query($conn, $sql);

// check for database connection
if($result){
    echo "database was created succesfully";
}
else{
    echo ("database was created alredy --->".mysqli_error($conn));
}



?>