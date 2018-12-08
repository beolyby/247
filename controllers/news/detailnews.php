<?php



if(isset($_GET['id']))

{	

	$mnews = new Models_MNews;

	$val = varGet("id");

	//$id = substr($val,0,strpos($val, '-'));

	$id = $mnews->getAlias($val);



	/*

	 * dem so len doc len 1

	 */

	$mnews->countView($id);

	/*

	 * lay tin tuc

	 */

	$arr['newstu'] = $mnews -> getOneNews($id,"*");

	

	$idcat = $arr['newstu']['idcat']; 

	$mcat = new Models_MCatNews;

	$info_cat = $mcat->getOneCatnews($idcat);

	$arr['title'] = $info_cat['title_vn'];

	$url = "<a href='/chu-de/".$info_cat['alias'].".html'>".$info_cat["title_".lang]."</a>";

	$arr['othernews'] = $mnews -> listdata("*","Id != '$id' and ticlock ='0' and idcat = '".$idcat."'","Id desc",4);

	$arr['map_title'] =$map_title.$arrowmap.$url;
	if($idcat == 1){
		$arr["adv"] = $mflash->getOneflashLocation(7);
	}else if($idcat ==11){
		$arr["adv"] = $mflash->getOneflashLocation(1);
	}else{
		$arr["adv"] = $mflash->getOneflashLocation(6);
	}

	loadview("news/view_detailnews",$arr);

}

?>