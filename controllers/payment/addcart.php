<?php 
$id = $_POST['idpro'];
$soluong = $_POST['quantity'];

if($_SESSION['cart2'][$id]>1){
	$_SESSION['cart2'][$id] = $_SESSION['cart2'][$id]+$soluong;
}else{
	$_SESSION['cart2'][$id]=$soluong;
}
redirect(BASE_URL."gio-hang.html");
?> 
