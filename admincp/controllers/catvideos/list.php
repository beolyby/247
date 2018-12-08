<?php


$db = new Models_MCatvideos;



$data['info'] = $db->listdata();



loadview("catvideos/list_view",$data);





?>