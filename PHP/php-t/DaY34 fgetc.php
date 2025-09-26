<?php

// fgets ==> print string
// fgerc ==> print char

$fptr=fopen("file.txt","r");
// echo fgets($fptr);
// echo fgets($fptr);

while ($a =fgetc($fptr)) {
    # code...
    echo $a;
}