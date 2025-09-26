<!-- creating table -->
<?php

// connection variable 
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydb2";

// connection
$conn = mysqli_connect($servername, $username, $password,$database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}

// // create database
// $sql = "CREATE DATABASE mydb2";
// if (mysqli_query($conn, $sql)) {
//     echo "Database created successfully";
// } else {
//     echo "Error creating database: " . mysqli_error($conn);
// }


// create table and insert the values
$sql1= "CREATE TABLE `php-student` (`sno` INT(12) NOT NULL , `rollno` INT(12) NOT NULL , `name` VARCHAR(12) NOT NULL , `etc` INT(12) NOT NULL )";
$result= mysqli_query($conn,$sql1);
if ($result) {
    echo "Table created successfully";
}
else{
    echo "Error creating table: " . mysqli_error($conn);
}


?>