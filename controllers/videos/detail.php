<?php



if(isset($_GET['id']))

{

	$id = (int)varGet("id");
	$db = new Models_MWeblink;

	
	$sp['info'] = $db->getOneWeblink($id);
	$sp['map_title'] =  $map_title . $arrowmap . '<a href = "videos.html" >Videos</a>';
	$sp['cl']= $db->listdata('*', 'ticlock = "0" AND Id !="'.$id.'" ','sort asc, Id desc',100);

	$sp["adv"] = $mflash->getOneflashLocation(11);
	loadview("videos/detail_view",$sp);

}

?>