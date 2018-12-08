<?php

	$mweblink = new Models_MWeblink;
	$mcatvideos = new Models_MCatvideos;

	$pg = new Paging;


	$sp['map_title'] =  $map_title . $arrowmap . '<a href = "videos.html" >Videos</a>';
	$sp['info']= $mweblink->listdata('*', 'ticlock = "0" ','sort asc, Id desc',100);
	$sp['cat']= $mcatvideos->listdata('*', 'ticlock = "0" ','sort asc, Id desc',100);

	$sp['support'] = $title;
	$sp["adv"] = $mflash->getOneflashLocation(11);
	loadview("videos/list_view",$sp);

?>