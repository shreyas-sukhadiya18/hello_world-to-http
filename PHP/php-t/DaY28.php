<!-- update values in table -->

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

echo "<br>";
// update query
$sql= "UPDATE `student3` SET `name` = 'shreays' WHERE `student3`.`sno` = 2";
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
if ($result) {
    echo "value updated successfully";
    echo "<br>";
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
}
else{
    echo "Error creating value: " . mysqli_error($conn);
}


?>