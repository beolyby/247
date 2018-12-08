<?php
$db = new Models_Mwebsite;
$id = varGetPost("id");

if(isset($_POST['editnew']))
{
	$data = array(
		"title_vn"=>varPost('title_vn'),
		"hotline"=>varPost('hotline'),
		'description_vn'	=> addslashes(varPost('description_vn','',1)),
		'keyword_vn'	=> addslashes(varPost('keyword_vn','',1)),
		'message'	=> addslashes(varPost('message','',1)),
		'email'	=> addslashes(varPost('email','',1)),
		'googleanalytics'	=> addslashes(varPost('google','',1)),
		'enable'				=> varPost('enable'),
		'stamp'				=> varPost('stamp'),
		'fanpage'				=> varPost('fanpage'),
		'video'				=> varPost('video'),
		'diachi'				=> varPost('diachi'),
		'tencty'	=> varPost('tencty'),
		'slogan'	=> varPost('slogan'),
	);
	$db -> editwebsite($data,$id);
	redirect(BASE_URL_ADMIN."website/edit/1");
	return;
}

$data['info'] = $db -> getOnewebsite($id);
loadview("website/edit_view",$data);
?>