<?php



if(isset($_GET['id']))

{

	$val = varGet("id");
	$mcat = new Models_MCatworks;
	$db = new Models_MWorks;
	$mpicture = new Models_MPicture;

	$pg = new Paging;

 	$id = $db ->getalias($val);

	$sp['idpro'] = $id;

	

	$sp['prod'] = $db->getOneProduct($id);

	$numrow = 5;

	$div = 10;

	$p = str_replace('p','',isset($_GET['p'])?varGetPost('p'):0);

	$start = $p * $numrow;

	

	$db->countView($id);

	/*lay thong tin san pham*/

	

	

	/*san pham cung loai*/

	if($sp['prod']['idcat']>0){

		
		$sp['map_title'] = $map_title.$arrowmap;

	



		$sp['cat'] =$info_cat = $mcat->getOneCatelog($sp['prod']['idcat']);


	}


	if($info_cat['parentid'] !=0){

		$subcat = $mcat ->getOneCatelog($info_cat['parentid']);

		if($subcat['parentid'] != 0){

			$subcat2 = $mcat ->getOneCatelog($subcat['parentid']);

			$sp['title_pro'] = $subcat2['title_'.lang];

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "projects/'.$subcat2['alias'].'" title="'.$subcat2['title_'.lang].'">'.$subcat2['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "projects/'.$subcat['alias'].'" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>'

				. $arrowmap . '<a href = "projects/'.$info_cat['alias'].'.html" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

		}else{

			$sp['title_pro'] = $subcat['title_'.lang]; 

			$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/projects/'.$subcat['alias'].'.html" title="'.$subcat['title_'.lang].'">'.$subcat['title_'.lang].'</a>' 

				. $arrowmap . '<a href = "/projects/'.$info_cat['alias'].'.html" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

		}

	}else{

		$sp['title_pro'] = $info_cat['title_'.lang]; 

		$sp['map_title'] =  $map_title . $arrowmap . '<a href = "/projects/'.$info_cat['alias'].'.html" title="'.$info_cat['title_'.lang].'">'.$info_cat['title_'.lang].'</a>';

	}
	$sp["adv"] = $mflash->getOneflashLocation(5);
	$sp['hinh'] = $mpicture->listdata("*","idpro= '".$id."' AND ticlock= '0'","sort ASC, Id DESC");
	loadview("works/detail_view",$sp);

}

?>