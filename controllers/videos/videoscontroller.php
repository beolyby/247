<?php
if(isset($_GET['act']))
	$act = $_GET['act'];
else 
	$act = "";
switch($act)
{

	case 'chitiet':				include('controllers/videos/detail.php');break;
	case 'danhmuc':				include('controllers/videos/list.php');break;
	case 'list':				include('controllers/videos/danhmuc.php');break;

}
?>