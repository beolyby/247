<?php
$db = new Models_MNews;
$id = varGetPost("id");
if(isset($_POST['editnew']))
{
	$data = array(
		'title_vn' 		=> addslashes(varPost('title_vn')),
		'title_en' 		=> varPost('title_en'),
		'description_vn'=> addslashes(varPost('description_vn','',1)),
		'description_en'=> addslashes(varPost('description_en','',1)),
		'content_vn'	=> addslashes(varPost('content_vn','',1)),
		'content_en'	=> addslashes(varPost('content_en','',1)),
		'idcat' 		=> varPost('idcat'),
		'sort'			=> varPost('sort'),
		'ticlock'		=> varPost('ticlock','0'),
		'meta_description' 		=> addslashes(varPost('meta_description')),
		'meta_keyword' 		=> addslashes(varPost('meta_keyword')),
	
	);
	if(varPost('alias')==""){
		$data['alias'] = strtoseo(varPost('title_vn'));
	}else{
		$data['alias'] = varPost('alias');
	}
	//upload img
	if($_FILES['images1']['name'] != ""){
		$cimg = new uploadImg;
		$tenhinh = $cimg -> renameImg($_FILES['images1']['name']);
		if(DONGDAU==1) {
			$hinh1 = $cimg -> Upload_dongdau($_FILES['images1'],$tenhinh,"../data/News/",$error);
		}else{
			$hinh1 = $cimg -> Upload_NoReSize($_FILES['images1'],$tenhinh,"../data/News/",$error);
		}
		if($hinh1!="") {
			$data['images1'] = $hinh1;
		}
	}
	
	
	$db -> editNews($data,$id);
	//lay id cat cu
	$idcat = $_POST['idcat'];
	if($idcat>0) {
		redirect(BASE_URL_ADMIN."news/list/".$idcat);
	}else {
		redirect(BASE_URL_ADMIN."news/list");
	}
	return;
}

$data['info'] = $db -> getOneNews($id);
loadview("news/edit_view",$data);
?>