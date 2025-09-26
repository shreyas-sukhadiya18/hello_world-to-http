<!-- THis is practice for get username and password etc from user and display it or connect -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
        <input type="text" name="servername" placeholder="Servername"><br>
        <input type="text" name="username" placeholder="username"><br>
        <input type="text" name="password" placeholder="password">
        <input type="submit" value="Connect">
    </form>

    <!-- php to connect mysql -->
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $servername = $_POST["servername"];
        $username = $_POST["username"];
        $password = $_POST["password"];

        // connect to database
        $conn = mysqli_connect($servername, $username, $password);

        if (!$conn) {
            die("Connection failed: ". mysqli_connect_error());
        } else {
            echo "Connection was successful";
        }
    }
   ?>

</body>
</html>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
        <input type="text" name="servername" placeholder="Servername"><br>
        <input type="text" name="username" placeholder="username"><br>
        <input type="text" name="password" placeholder="password">
        <input type="submit" value="connect">

    </form>

    <!-- php to connect mysql -->
     <?php
     if($_SERVER['REQUEST_METHOD']=="POST"){

         $servername=$_POST["servername"];
         $username=$_POST["username"];
         $password=$_POST["password"];
     

    // connect sql
    $conn =  mysqli_connect($servername, $username, $password);
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    else{
        echo "sonnection was succesfullt";
    }

     }
    ?>

</body>
</html>

