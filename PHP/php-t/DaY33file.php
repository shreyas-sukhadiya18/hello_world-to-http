<!-- FIle i/o -->
<?php

// first method
$a=readfile("file.txt");
echo $a;

// readfile("file.txt")

// fopen
$ptr=fopen("file.txt","r");
// echo var_dump($fptr);

// $fcontent=fread($ptr, value);

// fread
$content = fread($ptr, filesize("file.txt"));
echo $content;

// and fclose
?>