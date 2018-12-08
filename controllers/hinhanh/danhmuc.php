<?php

	$mcatimages = new Models_MCatimages;
	
	$pg = new Paging;
	$val = varGet("id");
	$id = $mcatimages ->getalias($val);
	$sp['cat']= $info_cat = $mcatimages->getOneCatelog($id);
	$where = " ticlock ='0' AND parentid = '".$id."' ";

	/*paging*/

	$p = str_replace('p','',isset($_GET['p'])?varGetPost('p'):0);

	$numrow = 1000;

	$div = 10;


	$start = $p * $numrow;

	$select = "*";

	$orderby = "sort asc, Id desc";

	$limit = "$start,$numrow";	


	$sp['pro_1'] = $mcatimages->listdata($select,$where,$orderby,$limit);	


	$sp['subcat']= $mcatimages->listdata('*', 'parentid = "0" and ticlock = "0" ','sort asc, Id desc');

	/* tieu de*/

	$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/photos.html">'.HINHANH.'</a>'.$arrowmap."<a href='/photos/".$info_cat['alias']."'>".$info_cat['title_vn']."</a>";

	$sp["adv"] = $mflash->getOneflashLocation(5);
	
	$sp['support'] = $title;

	loadview("hinhanh/list_view_danhmuc",$sp);

?>