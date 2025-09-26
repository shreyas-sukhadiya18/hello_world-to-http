<!-- Insert values in table -->


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


// note: if you did not include primary key it will auto increment...
// create table and insert the values
$sql1= "INSERT INTO `student3` (`name`, `dest`) VALUES ('hacking', 'shreaysh');";
$result= mysqli_query($conn,$sql1);
if ($result) {
    echo "value created successfully";
}
else{
    echo "Error creating value: " . mysqli_error($conn);
}



?>