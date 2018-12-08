<?php

$mpagehtml = new Models_MPagehtml;

$mnews = new Models_MNews;

$mcat = new Models_MCatnews;

$mcatelog = new Models_MCatelog;
$weblink = new Models_MWeblink;

$mflash = new Models_MFlash;
$mcatworks = new Models_MCatworks;
$mproduct = new Models_MProduct;


$banner["logo"] = $mflash->getOneflashLocation(2);
$banner["logoden"] = $mflash->getOneflashLocation(4);
$footer["logo"] = $mflash->getOneflashLocation(4);

$footer['topbrand'] = $weblink->listdata("*","ticlock= '0'","sort ASC, Id DESC");
$banner['catelog']= $mcatelog->listdata('*', 'parentid = "0" and ticlock = "0" ','sort asc, Id desc');
$footer['catelog']= $mcatelog->listdata('*', 'parentid = "0" and ticlock = "0" ','sort asc, Id desc');
$banner['catworks']= $mcatworks->listdata('*', 'parentid = "0" and ticlock = "0" ','sort asc, Id desc');
$footer['vechungtoi']= $mnews->listdata('*', 'idcat = "23" and ticlock = "0" ','sort asc, Id desc');
$footer['chinhsach']= $mnews->listdata('*', 'idcat = "24" and ticlock = "0" ','sort asc, Id desc');
$footer['tintuc']= $mnews->listdata('*', 'idcat = "7" and ticlock = "0" ','sort asc, Id desc',2);

$banner['tiendo']= $mnews->getOneNews(73);
$banner['support']  = $title;

$footer['lienhefooter'] = $mpagehtml->getpagehtmlid("7");

?>