<?php
// statr the session and grt the data
session_start();
session_unset();
session_destroy();

echo "we logged out your sessoin";



?>