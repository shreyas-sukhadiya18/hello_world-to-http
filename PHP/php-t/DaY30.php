<!-- deleteing the records -->

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

$sql="DELETE FROM `student3` WHERE `student3`.`name` = 'shreays'";
$result=mysqli_query($conn,$sql);
$no= mysqli_affected_rows($conn);
echo $no;
if($result){
    echo "sucees";
}
else{
    echo "not as";
}
?>