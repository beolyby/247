<?php

	$db = new Models_MWorks;
	if(isset($_POST['sort'])){
		$data = (int)$_POST['sort'];
		$db->sortData($data);
	}
	redirect(BASE_URL_ADMIN."works/list");
	
?>