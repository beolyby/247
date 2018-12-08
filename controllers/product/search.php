<?php
	$db = new Models_MProduct;
	$pg = new Paging;
	 $mcatelog = new Models_MCatelog;
	 
	$query =explode('?',$_SERVER['REQUEST_URI']);
	$arr = getParam($query[1]);
	$sp['tukhoa']= $tukhoa = $arr["q"];
	
	$sp['q'] = $q = mysql_real_escape_string($tukhoa); 
	
	$where = "ticlock = '0' AND ( title_vn like '%".$q."%'  )";
	$p = (int)str_replace('/p','',$arr['p']);
	$numrow = 25;
	$div = 10;
	$total = $db->countdata($where);
	$start = $p * $numrow;
	
	
	$select = "*";
	if(isset($_POST['sapxep'])){
		
		if($_POST['sapxep']=='mac-dinh'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "Id desc";
		}elseif($_POST['sapxep']=='alpha-asc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "title_vn desc";
		}elseif($_POST['sapxep']=='alpha-desc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "title_vn asc";
		}elseif($_POST['sapxep']=='price-asc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "sale_price asc";
		}elseif($_POST['sapxep']=='price-desc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "sale_price desc";
		}elseif($_POST['sapxep']=='desc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "Id desc";
		}elseif($_POST['sapxep']=='asc'){
			$_SESSION['sapxep'] = $_POST['sapxep'];
			$orderby = "Id asc";}
			
		
	}else{
		$orderby = 'sort asc, Id desc';
	}
	//$orderby = "sort asc, Id desc";
	$limit = "$start,$numrow";	
	$sp['prod'] = $db->listdata($select,$where,$orderby,$limit);
	
	$link = BASE_URL."search/?q=".$q."&p=";

	$sp['page']=$pg->divPage($total,$p,$div,$numrow,$link);
	
	$sp['title_pro'] = "Tìm kiếm";
	$sp['total'] = $total;
	$sp['tukhoa'] = $tukhoa;
	
	$sp['map_title'] = $map_title.$arrowmap."<a href=''>Tìm kiếm</a>";
	
	$sp['support'] = $title;

	loadview("product/searchnc_view",$sp);
?>