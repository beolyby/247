<?php



if(isset($_GET['id']))

{

	$val = varGet("id");
	$mcat = new Models_MCatimages;
	$db = new Models_MImages;

	$pg = new Paging;

 	$id = $mcat ->getalias($val);

	$sp['cat'] = $info_cat= $mcat->getOneCatelog($id);

	/*lay thong tin san pham*/
	$sp['hinh'] = $db->listdata("*","idcat= '".$id."' AND ticlock= '0'","sort ASC, Id DESC");
	

	

 	$map_title = $map_title . $arrowmap ."<a href='/photos.html'>".HINHANH."</a>";
	if($info_cat['parentid'] !=0){
		$subcat = $mcat ->getOneCatelog($info_cat['parentid']);
		if($subcat['parentid'] != 0){
			$subcat2 = $mcat ->getOneCatelog($subcat['parentid']);
			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/photos/'.$subcat2['alias'].'" title="'.$subcat2['title_'.lang].'">'.$subcat2['title_'.lang].'</a>' 
				. $arrowmap . '<a href = "/photos/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>'
				. $arrowmap . '<a href = "/hinh-anh/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';
		}else{
			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/photos/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/hinh-anh/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

		}
	}else{
		$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/hinh-anh/'.$info_cat['alias'].'" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

	}
	$sp["adv"] = $mflash->getOneflashLocation(5);
	
	loadview("hinhanh/detail_view",$sp);

}

?>