<?php
$mpayment = new Models_MPayment;

$mproduct = new Models_MProduct();
$mcatelog = new Models_MCatelog();
$mflash = new Models_MFlash();
$mnews = new Models_MNews;
$mcatnews = new Models_MCatnews;
$weblink = new Models_MWeblink;
$works = new Models_MWorks;

$pg = new Paging;
$default['slide'] = $mflash->listdata('*', 'location = "3" AND ticlock = "0"','sort asc, Id desc');
$default['subcate'] = $mcatelog->listdata("*","parentid= '0'","sort ASC, Id DESC",8);


$default['tintuchome'] = $mnews->listdata("*","idcat= '7' AND ticlock= '0' ","sort ASC, Id DESC");


$default['topbrand'] = $weblink->listdata("*","ticlock= '0'","sort ASC, Id DESC");

$default['hangsx_home'] = $works->listdata("*","ticlock= '0' AND home= '1'","sort ASC, Id DESC");
$default['pronoibat'] = $mproduct->listdata("*","ticlock= '0' AND home= '1'","RAND()");
$default['catelog'] = $mcatelog->listdata("*","ticlock= '0' AND parentid='0' ","sort ASC, Id DESC");
$default['about'] = $mpagehtml->getpagehtmlid(19);
$default['bannerhome'] = $mflash->listdata('*', 'location = "5" AND ticlock = "0" ','sort asc, Id desc');

$default['logokhachhang'] = $mflash->listdata('*', 'location = "1" AND ticlock = "0"','sort asc, Id desc');

$default['support'] = $title;
loadview("default/view_default",$default);

?>