<?php
$db = new Models_MImages;
$id = varGetPost("id");

if(isset($_POST['editnew']))
{
	
	$data = array(
		//'title_vn' 		=> varPost('title_vn'),
		//'title_en' 		=> varPost('title_en'),
		'idcat' 		=> varPost('idcat'),
		'sort'			=> varPost('sort'),
	);
	if($_FILES['images']['name'] != ''){
		$tenhinh = rand_string(20);
		$cimg = new uploadImg;
		$hinh = $cimg -> Upload_NoReSize($_FILES['images'],$tenhinh,"../data/Images/",$error);
		if($hinh !="") { $data['images'] = $hinh; }
	}
	
	
	$db -> editNews($data,$id);
	redirect(BASE_URL_ADMIN.'images/list');
	return;
}

$data['info'] = $db -> getOneNews($id);
loadview("images/edit_view",$data);
?>