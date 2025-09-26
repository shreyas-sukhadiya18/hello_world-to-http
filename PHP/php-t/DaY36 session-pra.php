<?php
// statr the session and grt the data
session_start();

echo "welcome".$_SESSION['username'];
echo "<br>";
echo "Your".$_SESSION['favcat'];

echo "we saved your sessoin";



?>