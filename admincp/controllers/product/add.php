<?php

$db = new Models_MProduct;

if(isset($_POST['addnew'])){

	if($_FILES['images']['name'] != ''){
		$tenhinh = strtoseo(varPost('title_vn'));
		$cimg = new uploadImg;
		if(DONGDAU==1) {
			$hinh = $cimg -> Upload_dongdau($_FILES['images'],$tenhinh,"../data/Product/",$error);
		}else{
			$hinh = $cimg -> Upload_NoReSize($_FILES['images'],$tenhinh,"../data/Product/",$error);
		}
		if($hinh !=""){
			$cimg->processThumb("../data/Product/".$hinh,"../data/Product/150x150/".$hinh,300,300);
		}
	}else{
		$name_img = '';
	}
	if($_FILES['images1']['name'] != ''){
		$tenhinh1 = strtoseo(varPost('title_vn'))."-01";
		$cimg = new uploadImg;
		if(DONGDAU==1) {
			$hinh1 = $cimg -> Upload_dongdau($_FILES['images1'],$tenhinh1,"../data/Product/",$error);
		}else{
			$hinh1 = $cimg -> Upload_NoReSize($_FILES['images1'],$tenhinh1,"../data/Product/",$error);
		}
	}else{
		$hinh1 = '';
	}
	if($_FILES['images2']['name'] != ''){
		$tenhinh2 = strtoseo(varPost('title_vn'))."-02";
		$cimg = new uploadImg;
		if(DONGDAU==1) {
			$hinh2 = $cimg -> Upload_dongdau($_FILES['images2'],$tenhinh2,"../data/Product/",$error);
		}else{
			$hinh2 = $cimg -> Upload_NoReSize($_FILES['images2'],$tenhinh2,"../data/Product/",$error);
		}
	}else{
		$hinh2 = '';
	}
	if($_FILES['images3']['name'] != ''){
		$tenhinh3 = strtoseo(varPost('title_vn'))."-03";
		$cimg = new uploadImg;
		if(DONGDAU==1) {
			$hinh3 = $cimg -> Upload_dongdau($_FILES['images3'],$tenhinh3,"../data/Product/",$error);
		}else{
			$hinh3 = $cimg -> Upload_NoReSize($_FILES['images3'],$tenhinh3,"../data/Product/",$error);
		}
	}else{
		$hinh3 = '';
	}
	if($_FILES['images4']['name'] != ''){
		$tenhinh4 = strtoseo(varPost('title_vn'))."-04";
		$cimg = new uploadImg;
		
		if(DONGDAU==1) {
			$hinh4 = $cimg -> Upload_dongdau($_FILES['images4'],$tenhinh4,"../data/Product/",$error);
		}else{
			$hinh4 = $cimg -> Upload_NoReSize($_FILES['images4'],$tenhinh4,"../data/Product/",$error);
		}
	}else{
		$name_img = '';
	}
	if($_FILES['images5']['name'] != ''){
		$tenhinh5 = strtoseo(varPost('title_vn'))."-05";
		$cimg = new uploadImg;
		if(DONGDAU==1) {
			$hinh5 = $cimg -> Upload_dongdau($_FILES['images5'],$tenhinh5,"../data/Product/",$error);
		}else{
			$hinh5 = $cimg -> Upload_NoReSize($_FILES['images5'],$tenhinh5,"../data/Product/",$error);
		}
	}else{
		$name_img = '';
	}
	$data = array(
		'title_vn' 			=> addslashes(varPost('title_vn')),
		'description_vn'	=> addslashes(varPost('description_vn','',1)),
		'content_vn'		=> addslashes(varPost('content_vn','',1)),
		'title_en' 			=> addslashes(varPost('title_en')),
		'description_en'	=> addslashes(varPost('description_en','',1)),
		'content_en'		=> addslashes(varPost('content_en','',1)),
		'dactinh'		=> addslashes(varPost('dactinh','',1)),
		'idcat' 			=> varPost('idcat'),
		'hangsx' 			 => varPost('hangsx'),
		'price'				=> str_replace(".", "", varPost('price')),
		'sale_price'				=> str_replace(".", "", varPost('sale_price')),
		'images'			=> $hinh,
		'images1'			=> $hinh1,
		'images2'			=> $hinh2,
		'images3'			=> $hinh3,
		'images4'			=> $hinh4,
		'images5'			=> $hinh5,
		'sort'				=> varPost('sort'),
		'date'				=> time(),
		'hot'				=> varPost('hot','0'),
		'ticlock'			=> varPost('ticlock','0'),
		'codepro'			=> varPost('codepro','0'),
		'idmanufacturer'		=> varPost('idmanufacturer','',1),
		'meta_description'		=> addslashes(varPost('meta_description','',1)),
		'meta_keyword'		=> addslashes(varPost('meta_keyword','',1)),
	);
	if(varPost('alias')==""){
		$data['alias'] = strtoseo(varPost('title_vn'));
	}else {$data['alias'] = varPost('alias'); }
	if($db-> addProduct($data) == 0){
		$data['error'] = ERROR_ADD;
	}else{
		//them thanh cong
		$idcat = $_POST['idcat'];
		if($idcat>0){
			redirect(BASE_URL_ADMIN. "product/list/".$idcat);
			return;
		}else{
			redirect(BASE_URL_ADMIN. "product/list");
			return;
		}
		return;
	}
	
}else{

	
	$data = "";
}
loadview('product/add_view',$data);
?>