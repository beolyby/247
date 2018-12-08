<?php
$mpayment = new Models_MPayment;
//unset($_SESSION["cart2"]);
if(isset($_POST['hoten'])){
	$hotline = $_SESSION['hotline1'];
	$to = $data['email_admin'];
	$mpayment = new Models_MPayment;
	$error =0;
	$hoten = varPost('hoten');
	$email = varPost('email');
	$address = varPost('address');
	$payment = varPost('payment');
	$note = varPost('note');
	$date= date("Y-m-d h:m:s");
	
	$tel  =varPost('tel');
	if($hoten ==""){
		$error = 1;
		$message .= "Bạn  chưa nhập họ tên <br>";
	}
	if($email ==""){
		$error =1;
		$message .= "Bạn  chưa nhập Email <br>";
	}
	if( isValidEmail($email) == false){
		$error =1;
		$message .= "Email không hợp lệ <br />"; 	
	}
	if($address ==""){
		$error = 1;
		$message .= "Bạn chưa nhập địa chỉ <br>";
	}
	if($payment ==0){
		$error = 1;
		$message .= "Bạn chưa chọn phương thức thanh toán <br>";
	}
	else if ($error == 0)
	{
		
		
		
		if($payment == 1) $pt ="Giao hàng thu tiền tận nơi";
		else $pt = "Mua và thanh toán tại cửa hàng";
		//-----------------------------
			$i =1;
			$dongdonhang = 0;
			foreach($_SESSION["cart2"] as $k=>$v) {
				if($k>0){
					$sql = "SELECT * FROM mn_product WHERE Id = '$k'";
					$rw= mysql_query($sql) or die(mysql_error());
					$row = mysql_fetch_assoc($rw);	
					if($row['sale_price']>0) $price = $row['sale_price'];
					else $price = $row['price'];
					$dongdonhang = $dongdonhang + ($price *$v);
					$dongdonhang = number_format($dongdonhang,0,",",".");
				 
				  $sanpham .= '<tr>
					<td>'.$i.'</td>
					<td>'.$row["title_".lang].'</td>
					<td>'.$price.'</td>
					<td>'.$v.'</td>
					<td style="color:#FF0000; font-size:12px; font-weight:bold;">'. number_format($price,0,",",".").' VNĐ</td>
					
				  </tr>';
				}
		
		  } 
		///--------------------------------
		ob_start();
		echo file_get_contents("mail/emaidathang_admin.html");
		$noidung = ob_get_clean();
		$noidung =str_replace("{thongtinsanpham}", $sanpham ,$noidung);
		$noidung = str_replace("{tongdonhang}", $dongdonhang , $noidung);
		$noidung = str_replace("{email}", $email, $noidung);
		$noidung = str_replace("{dienthoai}", $tel , $noidung);
		$noidung =str_replace("{noidung}", $note , $noidung);
		$noidung =str_replace("{phuongthucthanhtoan}", $pt , $noidung);
		$noidung =str_replace("{diachigiaohang}", $address , $noidung);
		$noidung =str_replace("{diachi}", $address , $noidung);
		$noidung =str_replace("{hoten}", $hoten , $noidung);
		$tieude = "Thông tin đơn đặt hàng từ chuyensihafele.com";
		smtpmailer($email,$to,$tieude,$hoten,$noidung);
		// end goi mail admin
		ob_start();
		echo file_get_contents("mail/emaidathang_khachhang.html");
		$noidung1 = ob_get_clean();
		$noidung1 =str_replace("{thongtinsanpham}", $sanpham ,$noidung1);
		$noidung1 = str_replace("{tongdonhang}", $dongdonhang , $noidung1);
		$noidung1 = str_replace("{email}", $email, $noidung1);
		$noidung1 = str_replace("{dienthoai}", $tel , $noidung1);
		$noidung1 =str_replace("{noidung}", $note , $noidung1);
		$noidung1 =str_replace("{phuongthucthanhtoan}", $pt , $noidung1);
		$noidung1 =str_replace("{diachigiaohang}", $address , $noidung1);
		$noidung1 =str_replace("{diachi}", $address , $noidung1);
		$noidung1 =str_replace("{hoten}", $hoten , $noidung1);
		$noidung1 =str_replace("{hotline}", $hotline , $noidung1);
		$tieude = "Thông tin đơn đặt hàng từ chuyensihafele.com";
		smtpmailer($to,$email,$tieude,'chuyensihafele.com',$noidung1);
		
		$idmax = idMax(TBL_CUSTOMER) + 1;
		$infokh = array();
		$infokh['Id'] = $idmax;
		$infokh['fullname'] = $hoten;
		$infokh['email'] = $email;
		$infokh['address'] = $address;
		$infokh['deliveryaddress'] = $address;
		$infokh['tel'] = $tel;
		$infokh['methodpay'] = $pt;
		$infokh['tongdonhang'] = $dongdonhang;
		$infokh['tongthanhtoan'] = $tongthanhtoan;
		$infokh['note'] = $note;
		$infokh['status'] = 1;
		$infokh['date'] = date("Y-m-d H:i:s");
		
		$mpayment->addCustomer($infokh);
		
		//them vao gio hang
		foreach($_SESSION['cart2'] as $k => $v)
		{
			$infocart[] = array(
				"idcustomer"	=> $idmax,
				"idpro"			=> $k,
				"amount"		=> $v,
			);
		}
		
		$mpayment->addCustomerCart($infocart);
		unset($_SESSION["cart2"]);
		//redirect(BASE_URL."info-customer.html");
		echo "<script> alert('đặt hàng thành công'); location.href='".BASE_URL."'</script>";
	}
	
}
?>

<div class="container">
	
	<div class="row  pd20 ">
		<div class="breadcrumb breadcrumb-arrow ">
		<?php echo $data['map_title'] ?>
		</div>
	    
	</div>
</div>
<!--ket thuc breadcrum-->
<div style="height:30px"></div>
<div  class="container">
	<div class="">

<div class="col-md-6 col-sm-12 col-xs-12 pull-right sidebar" style="border: 1px solid #e2dfdf;"> 


<form action="payment/editcart.html"  method="post" class="tbleloack" >

    <table id="table-cart-order" class="table-style" cellpadding="0" cellspacing="0" width="100%">

        <thead>

            <tr style="text-align: left" >

                <th colspan="2" >

                    Sản phẩm đặt mua

                </th>

                <th style="width: 15%" >

                    Đơn giá

                </th>

               

                <th style="width: 15%">

                    Số lượng

                </th>

                <th style="width: 15%" class="title_td">

                    Thành tiền

                </th>

                 <th style="width: 10%" >

                    Xóa

                </th>

            </tr>

        </thead>

        <tbody>

         <?php

		if(!empty($_SESSION["cart2"])){

         $i =1;

         $mproduct = new Models_MProduct;

         $tongdonhang = 0;

       foreach($_SESSION["cart2"] as $k=>$v) 

        {

            $t++; 

            $pro = $mproduct->getOneProduct($k);
		
            

            $tong = $tong+$pro['sale_price']*$v;

            $soluong = $soluong +$v;

         ?>

            <tr class="border"> 

                <td class="product-img">

                    <img src="<?php  echo  BASE_URL.PATH_IMG_PRODUCT.$pro['images'] ?>" width="60" >

                </td>

                <td>

                    <a class="product-link" href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>">

                     <?php echo $pro['title_vn'] ?></a>

                </td>

                <td style="color:#FF0000;">

                    <?php  echo  bsVndDot($pro['sale_price']) ?> đ   

                </td>

               

                <td>

                    <select name="soluong[<?php echo $k ?>]" class="ddl_quan">

                     <?php  

                     for($i=1;$i<=10;$i++){

                    ?>

                    <option value="<?php echo $i; ?>" <?php if($i==$v) echo "selected"; ?>><?php  echo  $i; ?></option>

                    <?php

                    }

                     ?>

                    </select>



                </td>

                <td class="border-right" style="color:#FF0000;" class="title_td">

                    <?php echo bsVndDot($pro['sale_price']*$v) ?> đ

                </td>

                <td>

                    <a href="<?php  echo  BASE_URL."payment/delcart-".$k?>.html" class="delete-cart-item" title="Xóa sản phẩm này?">

                       <img src="public/template/images/icon_delete.png" align="delete" border="0"></a>

                </td>

            </tr>

            <?php } ?>

            <tr class="noborder">

                <td colspan="2">

                </td>

                <td colspan="2">

                    <label style="font-size:14px;"> Tổng tiền:</label>

                </td>

                <td colspan="2">

                    <label class="sum-price" id="total-payment-here" style="color: red">

                        <?php  echo  bsVndDot($tong) ?> đ</label>

                </td>

                

            </tr>
           <!--  <tr class="noborder">
           
               <td colspan="3">
           
               </td>
           
               <td>
           
                   <label style="font-size:14px;"> Thuế VAT 10%:</label>
           
               </td>
           
               <td colspan="2">
           
                   <label class="sum-price" id="total-payment-here">
           
                       <?php  echo  bsVndDot($tong/10) ?> đ</label>
           
               </td>
           
               
           
           </tr>
           <tr class="noborder">
           
               <td colspan="3">
           
               </td>
           
               <td>
           
                   <label style="font-size:14px;"> Tổng thanh toán:</label>
           
               </td>
           
               <td colspan="2">
           
                   <label class="sum-price" id="total-payment-here" style="color: red">
           
                       <?php  echo  bsVndDot(($tong/10)+$tong) ?> đ</label>
           
               </td>
           
               
           
           </tr> -->
            <?php }else{ ?>

            <tr ><td colspan="6" class="empty"> Chưa có sản pẩm</td></tr>

            <?php } ?>

        </tbody>

    </table>

    </form>
</div>
<div class="col-md-6 col-sm-12 col-xs-12 " style="border: 1px solid #e2dfdf;">

<h2 class="page-title" >Thông tin khách hàng</h2>

<form action="" method="post" id="form_submit_cart">

<?php if($error ==1) echo '<div class="alert-danger">'.$message.'</div>'; ?>

<table width="100%" border="0" cellspacing="0" cellpadding="0" style=" margin-top:10px; text-align:left;">

<tr>

	<td class="title_td">Họ tên</td>

    <td><input type="text" class="form-control"  name="hoten" placeholder="Nhập họ tên" value="<?php echo $hoten; ?>" /></td>

</tr>

<tr>

	<td class="title_td">Địa chỉ</td>

    <td><input type="text" class="form-control"  name="address" placeholder="Nhập địa chỉ"  value="<?php echo $address; ?>"/></td>

</tr> 

<tr>

	<td class="title_td">Điện thoại</td>

    <td><input class="form-control"  type="text" name="tel" placeholder="Nhập số điện thoại" value="<?php echo $tel; ?>" /></td>

</tr>

<tr>

	<td class="title_td">Phương thức thanh toán</td>

    <td>

    	<select name="payment" class="form-control"  >

            <option value="0" <?php if($payment==0) echo 'selected'; ?> >Phương thức thanh toán</option>

            <option value="1" <?php if($payment==1) echo 'selected'; ?> >Giao hàng thu tiền tận nơi</option>

            <option value="2" <?php if($payment==2) echo 'selected'; ?> >Mua và thanh toán tại cửa hàng</option>	

        </select> 

    </td>

</tr>



<tr>

	<td class="title_td">Email</td>

    <td><input type="text" name="email" class="form-control" placeholder="Nhập email" value="<?php echo $email; ?>"/></td>

</tr>

<tr>

	<td class="title_td">Ghi chú</td>

    <td><textarea name="note" class="form-control"><?php echo $note; ?></textarea></td>

</tr> 

<tr>

	<td class="title_td"></td>

    <td><button type="submit" class="btn btn-primary">Đặt hàng</button></td>

</tr>        

</table>

</form>
</div>


<div class="space_10"></div>

</div>
</div>
<div  style="height: 20px"></div>

<script type="text/javascript">

$(document).ready(function(){

	$('.change_order_info').click(function(){

		$('.block-update-order').toggle(500)

	});

	$('.ddl_quan').change(function(){

		$('.tbleloack').submit();

	});

	$('#btn-submit-cart').click(function(){

		$('#form_submit_cart').submit();

	});

})

</script>
<style type="text/css">
table td, table th {
  padding: 9px 10px;
  text-align: left;
}
caption, th, td {
  font-weight: normal;
  text-align: left;
  vertical-align: middle;
}
.form-control {
  font-size: 12px;

  box-shadow: none;
  height: 27px;
  padding: 3px 5px;

 
}
.form-control:focus {
  border-color: #66afe9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
  outline: 0 none;
}
.form-control {
  background-color: #fff;
  border: 1px solid #d6d4d4;
  
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  color: #9c9b9b;
  display: block;
  font-size: 13px;
  height: 32px;
  line-height: 1.42857;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  vertical-align: middle;
  width: 100%;
}
.btn-primary {
  background-color: #428bca;
  border-color: #357ebd;
  color: #fff;
}

.product-img img{
	width: 100%;
}
</style>

