<?php
// what is session 
// sessiom is used to store info accoross the diffrent pages

// session start
session_start();

$_SESSION['username']= "shreyas";
$_SESSION['favcat']= "Books";

echo "we saved your sessoin";



?>