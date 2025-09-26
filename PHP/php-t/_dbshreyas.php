<?php
  // connection variable 
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "mydb2";

  // connection
  $conn = new mysqli($servername, $username, $password, $database);
  if ($conn->connect_error) {
      die("Connection failed: " . mysqli_connect_error());
  } else{
    echo "succesfully";
  }
?>