<?php
$mcatnews = new Models_MCatnews;
$id = varGetPost("id");

if(isset($_POST['editnew']))
{
	$data = array(
		'title_vn' 		=> varPost('title_vn'),
		'title_en' 		=> varPost('title_en'),
		'parentid'		=> varPost('parentid'),
		'sort'			=> varPost('sort'),
		'meta_keyword' 		=> varPost('keyword'),
		'meta_description' 		=> varPost('description'),
		'ticlock'		=> varPost('ticlock','0'),
		'alias'      =>varPost('alias'),
		'description_vn'=> addslashes(varPost('description_vn','',1)),
		'content_vn'	=> addslashes(varPost('content_vn','',1)),
	);
	if(varPost('alias')==""){
		$data['alias'] = strtoseo(varPost('title_vn'));
	}else{
		$data['alias'] = varPost('alias');
	}
	$mcatnews -> editCatnews($data,$id);
	redirect(BASE_URL_ADMIN."catnews/list");
	return;
}

$data['info'] = $mcatnews -> getOneCatnews($id);
loadview("catnews/edit_view",$data);
?>