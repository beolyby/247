<?php
$mpayment = new Models_MPayment;
$cart['map_title'] = $map_title.$arrowmap."<a href='gio-hang.html'>giỏ hàng</a>"; 
$cart['email_admin'] = $title['emaillienhe_vn'];

loadview("payment/showcart",$cart);
?>