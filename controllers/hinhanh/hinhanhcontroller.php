<?php

if(isset($_GET['act']))

	$act = $_GET['act'];

else 

	$act = "";

switch($act)

{

	case 'chitiet':				include('controllers/hinhanh/detail.php');break;
	case 'danhmuc':				include('controllers/hinhanh/list.php');break;
	case 'list':				include('controllers/hinhanh/danhmuc.php');break;


}

?>