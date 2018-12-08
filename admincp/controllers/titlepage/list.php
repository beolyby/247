<?php

if(isset($_POST['save'])){
	$hotline1= trim($_POST['hotline1']);
	$hotline2= trim($_POST['hotline2']);		
	$emaillienhevn= trim($_POST['emaillienhevn']);	
	
	$emailtrunggian		= trim($_POST['emailtrunggian']);
	$password	= trim($_POST['password']);
	$phone1	= trim($_POST['phone1']);
	$phone2	= trim($_POST['phone2']);
	$skype1	= trim($_POST['skype1']);
	$skype2	= trim($_POST['skype2']);
	
$text = "<?php	
\$title['emailtrunggian']='".$emailtrunggian."';	
\$title['password']='".$password."';	
\$title['phone1']='".$phone1."';	
\$title['phone2']='".$phone2."';
\$title['skype1']='".$skype1."';	
\$title['skype2']='".$skype2."';	

\$title['hotline1']='".$hotline1."';
\$title['hotline2']='".$hotline2."';	
\$title['emaillienhe_vn']='".$emaillienhevn."';?>";	
 
$file = "../config/title_page.php";

if(file_exists($file)){		
$fp = fopen($file, 'w');		
fwrite($fp, $text);		fclose($fp);	
}
}if(file_exists('../config/title_page.php')){	include '../config/title_page.php';}

loadview('titlepage/list',$title);
?>