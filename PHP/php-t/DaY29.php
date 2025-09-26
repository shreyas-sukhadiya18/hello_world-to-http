<!-- check how many rows are created and didspaly those data
 -->

<?php

// connection variable 
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydb2";

$conn = new mysqli($servername, $username, $password,$database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}
// check how many rows are created?
$sql="SELECT * FROM `student3`";
$result=mysqli_query($conn,$sql);
$no=mysqli_num_rows($result);
echo "<br>";
echo "creared records".$no;

// Disply the rows created 
if($no>0){
    while($row=mysqli_fetch_assoc($result)){
        echo "<br>";
        echo "id:".$row["name"]." ". $row["dest"]."<br>";
}

}


?>