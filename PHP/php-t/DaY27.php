<!-- get user input and save data on mysql server -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
        <input type="text" name="name" placeholder="Enter your name">
        <!-- <input type="text" name="email" placeholder="Enter your email"> -->
        <input type="text" name="dest" placeholder="Enter your password">
        <input type="submit" placeholder="Enter">
    </form>
</body>

</html>

<?php
// important when both html and php code in a single file
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    // $email=$_POST['email'];
    $dest = $_POST['dest'];



    // connection variable 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "mydb2";

    // connection
    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . mysqli_connect_error());
    } else {

        // sql query to be submit
        // $sql1 = "INSERT INTO `student3` (`name`, `dest`) VALUES ('$name','$dest')";
        $stmt= $conn->prepare("INSERT INTO `student3` (`name`, `dest`) VALUES (?, ?)");
        $stmt->bind_param("ss",$name,$dest);
        // $result = mysqli_query($conn, $sql1);
        if ($stmt->execute()) {
            // echo "value created successfully";
            echo "Connected successfully <strong> Seccess </strong>";
        } else {
            echo "Error creating value: " . mysqli_error($conn).$stmt->error;
        }
        $stmt->close();
        echo "stml closed succesfuly";
    }
    $conn->close();
    echo "connnetion closed";
}
// create table and insert the values


?>