<?php
$mpayment = new Models_MPayment;
$mcatnews = new Models_MCatnews;
$ct['lien_he'] = $mcatnews->listdata("*","Id = '15' AND ticlock= '0'","sort ASC, Id DESC");

if(isset($_POST['submit']))

{

		$to=$title['emaillienhe_vn'];

	 	$ten=$_POST['ten'];

		$email=$_POST['email'];

		$add=$_POST['diachi'];

		$tell=$_POST['sdt'];

		$cont=$_POST['noidung'];

		$codecaptcha = $_POST['codecapcha'];

		if (get_magic_quotes_gpc()== false) {

			$ten=trim(mysql_real_escape_string($ten));

			$email=trim(mysql_real_escape_string($email));

			$add=trim(mysql_real_escape_string($add));

			$tell=trim(mysql_real_escape_string($tell));

			$cont=trim(mysql_real_escape_string($cont));

			$codecaptcha=trim(mysql_real_escape_string($codecaptcha));

		}

		$cont=str_replace("NOIDUNG*: ","",$cont);

		if($email==""||$ten==""){ 

			$error= 1;

			$mesage .= "Nhập thông tin chưa đầy đủ <br />"; 

		}

		if( isValidEmail($email) == false){

			$error =1;

			$mesage .= "Email không hợp lệ <br />"; 	

		}
		/*if( isValidTell($tell) == false){

			$error =1;

			$mesage .= "Số Điện Thoại không hợp lệ <br />"; 	

		}*/


		if($error==0){
			$from=$email;
			$tieude="Liên hệ";
			ob_start();
			echo file_get_contents("mail/emaillienhetukhachhang.html");
			$noidung = ob_get_clean();
			$noidung =str_replace("{hoten}", $ten ,$noidung);
			$noidung = str_replace("{diachi}", $add , $noidung);
			$noidung = str_replace("{email}", $email, $noidung);
			$noidung = str_replace("{dienthoai}", $tell , $noidung);
			$noidung =str_replace("{noidung}", $cont , $noidung);
			$noidung1 .="Chào <b>$ten</b>! Cảm ơn bạn đã liên hệ với chúng tôi.<br>";
			$noidung1 .="Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!<br>";
			smtpmailer($to,$from,$ten,$tieude,$noidung);
			smtpmailer($from,$to,"thietkeweb247",$tieude,$noidung1);
			
			$idmax = idMax(TBL_CUSTOMER) + 1;
		   $infokh = array();
		   $infokh['Id'] = $idmax;
		   $infokh['fullname'] = $ten;
		   $infokh['email'] = $email;
		   $infokh['address'] = $add;
		   $infokh['tel'] = $tell;
		   $infokh['note'] = $cont;
		   $infokh['status'] = 1;
		   $infokh['date'] = date("Y-m-d H:i:s");
		   //$mpayment->addCustomer($infokh);
			echo '<script>alert("Gửi yêu cầu thành công!");
			              location.href="home.html";
				  </script>';

		}

		$ct["error"] =$error;

		$ct["mesage"] = $mesage;

		$ct["hoten"] = $ten;

		$ct["email"] = $email;

		$ct["add"] = $add;

		$ct["tell"] = $tell;

		$ct["cont"] = $cont;

}



$mcontact = new Models_MPagehtml;

$ct['ttlienhe'] = $mcontact -> getpagehtmlid('22');

$ct['googlemap'] = $mcontact -> getpagehtmlid('23');

/*

 * tieu de trang

 */

$ct['map_title'] =  $map_title.$arrowmap."<a href='/lien-he.html'>Liên hệ</a>";

$ct["adv"] = $mflash->getOneflashLocation(10);

loadview("contact/contact",$ct);



?>