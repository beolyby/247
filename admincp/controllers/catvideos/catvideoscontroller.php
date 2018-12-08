<?php
$act = $_GET['act'];
switch($act)
{
	case 'add':		include('controllers/catvideos/add.php');break;
	case 'edit':	include('controllers/catvideos/edit.php');break;
	case 'del':		include('controllers/catvideos/del.php');break;
	case 'list':	include('controllers/catvideos/list.php');break;
	case 'save':	include('controllers/catvideos/save.php');break;
	default:		include('controllers/catvideos/list.php');break;
}
?>