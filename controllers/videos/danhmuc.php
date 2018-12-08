<?php

	$db = new Models_MWeblink;

	$mcatelog = new Models_MCatvideos;

	$pg = new Paging;

	$val = varGet("id");

	$id = $mcatelog ->getalias($val);

	$sp['catid']= $info_cat = $mcatelog->getOneCatelog($id);

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

	$sp['info'] = $db->listdata($select,$where,$orderby,$limit);	

	$sp['page']=$pg->divPage($total,$p,$div,$numrow,BASE_URL."video/".$info_cat['alias']);
	$sp['cat']= $mcatelog->listdata('*', 'ticlock = "0" ','sort asc, Id desc',100);


	/* tieu de*/

	if($info_cat['parentid'] !=0){

		$subcat = $mcatelog ->getOneCatelog($info_cat['parentid']);

		if($subcat['parentid'] != 0){

			$subcat2 = $mcatelog ->getOneCatelog($subcat['parentid']);

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/video/'.$subcat2['alias'].'" title="'.$subcat2['title_'.lang].'">'.$subcat2['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/video/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>'

				. $arrowmap . '<a href = "/video/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';	

		}else{

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/video/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/video/'.$info_cat['alias'].'.html" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

		}

	}else{



		$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/video/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

	}	

	$sp["adv"] = $mflash->getOneflashLocation(11);
	
	$sp['support'] = $title;

	loadview("videos/view_danhmuc",$sp);

?>