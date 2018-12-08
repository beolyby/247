<?php
$mcatnews = new Models_MCatNews;

if(isset($_POST['addnew'])){
	$data = array(
		'title_vn' 		=> varPost('title_vn'),
		'title_en' 		=> varPost('title_en'),
		'parentid'		=> varPost('parentid'),
		'sort'			=> varPost('sort'),
		'ticlock'		=> varPost('ticlock','0'),
		'meta_keyword' 		=> varPost('keyword'),
		'meta_description' 		=> varPost('description'),
		
		'description_vn'=> addslashes(varPost('description_vn','',1)),
		'content_vn'	=> addslashes(varPost('content_vn','',1)),
	);
	if(varPost('alias')==""){
		$data['alias'] = strtoseo(varPost('title_vn'));
	}else{
		$data['alias'] = varPost('alias');
	}
	if($mcatnews-> addCatnews($data) == 0){
		$data['error'] = ERROR_ADD;
	}else{
		//them thanh cong
		redirect(BASE_URL_ADMIN."catnews/list");
		return;
	}
}else{
	$data = '';
}

loadview('catnews/add_view',$data);
?>