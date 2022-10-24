<?php
$servername = "Localhost";
$username = "root";
$password = "";
$dbname = "webtech";
$tablename = "users";
if($_SERVER["REQUEST_METHOD"]=="POSt")
{
    $username = $_POST['username'];
    $password = $_POST['password'];
}
$conn = mysqli_connect($servername,$username,$password) or die(mysql-error());
mysqli_select-db($connet,$dbname) or die("Cannot connect database");


mysqli_query($conn,"INSERT_INTO".$tablename.(username,password)Values($username,$password));
print'<script> alert("congrat, Data is stored");</script>;