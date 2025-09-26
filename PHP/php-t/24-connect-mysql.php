<?php
echo "Welcome to the stage where we are ready to connerct mysql";

/* ways to connect mysql
1. mysqli function 
2. PDO
 */

$servername="localhost";
$username="root";
$password="";

// create a connection 
$conn=mysqli_connect($servername,$username,$password);

// die if connection was lost
if(!$conn){
    die("Sorry enable to connect local host");
}
else{
    echo"COnnection was succesfuuty";
}



?>