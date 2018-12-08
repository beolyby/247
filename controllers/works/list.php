<?php

	$db = new Models_MWorks;

	$mcatelog = new Models_MCatworks;

	$pg = new Paging;

	$val = varGet("id");

	$id = $mcatelog ->getalias($val);

	$sp['cat']= $info_cat = $mcatelog->getOneCatelog($id);

	$subid =  $mcatelog->getSubId($id);

	if($subid != ""){

		$subid = substr($subid,0,-1);

		 $where = " idcat in ($id,$subid) and ticlock = '0' ";

	}else{

		$where = " ticlock ='0' and idcat = '$id'  ";

	}
	/*paging*/

	$p = str_replace('p','',isset($_GET['p'])?varGetPost('p'):0);

	$numrow = 12;

	$div = 10;

	$total = $db->countdata($where);

	$start = $p * $numrow;

	$select = "*";

	$orderby = "sort asc, Id desc";

	$limit = "$start,$numrow";	

	

	$sp['total_pro_1'] = $db->countdata($where);

	$sp['pro_1'] = $db->listdata($select,$where,$orderby,$limit);	

	$sp['page']=$pg->divPage($total,$p,$div,$numrow,BASE_URL.$info_cat['alias']);



	/* tieu de*/

	if($info_cat['parentid'] !=0){

		$subcat = $mcatelog ->getOneCatelog($info_cat['parentid']);

		if($subcat['parentid'] != 0){

			$subcat2 = $mcatelog ->getOneCatelog($subcat['parentid']);

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/projects/'.$subcat2['alias'].'" title="'.$subcat2['title_'.lang].'">'.$subcat2['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/projects/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>'

				. $arrowmap . '<a href = "/projects/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';	

		}else{

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/projects/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/projects/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

		}

	}else{



		$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/projects/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

	}	
	if($info_cat['parentid']==0){
		$sp['subcat']= $mcatelog->listdata('*', 'parentid = "'.$info_cat['Id'].'" and ticlock = "0" ','sort asc, Id desc');
		$sp['idall'] = 1;
	}else{
		$sp['subcat']= $mcatelog->listdata('*', 'parentid = "'.$info_cat['parentid'].'" and ticlock = "0" ','sort asc, Id desc');
	}
	
	$sp["adv"] = $mflash->getOneflashLocation(5);
	
	$sp['support'] = $title;

	loadview("works/list_view",$sp);

?>