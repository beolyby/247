<?php

	$mcatimages = new Models_MCatimages;

	$pg = new Paging;


	$where = " ticlock ='0' AND parentid != 0 ";

	
	/*paging*/

	$p = str_replace('p','',isset($_GET['p'])?varGetPost('p'):0);

	$numrow = 1000;

	$div = 10;


	$start = $p * $numrow;

	$select = "*";

	$orderby = "sort asc, Id desc";

	$limit = "$start,$numrow";	

	

	//$sp['total_pro_1'] = $mcatelog->countdata($where);

	$sp['pro_1'] = $mcatimages->listdata($select,$where,$orderby,$limit);	

	//$sp['page']=$pg->divPage($total,$p,$div,$numrow,BASE_URL.'photos.html');

	$sp['subcat']= $mcatimages->listdata('*', 'parentid = "0" and ticlock = "0" ','sort asc, Id desc');

	/* tieu de*/

	$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/photos.html">'.HINHANH.'</a>';

	$sp["adv"] = $mflash->getOneflashLocation(5);
	
	$sp['support'] = $title;

	loadview("hinhanh/list_view",$sp);

?>