<?php include('submenu.php'); ?>

<div class="main_area">

    <div class="breakcrumb">

    <table border="0">

    <tbody>

    <tr>

    <td width="25">

    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-pro.png" style="width:23px; height: 23px">

    </td>

    <td> Quản lý nội dung / Sản phẩm </td>

    </tr>

    </tbody>

    </table>

    </div>

</div>

<div class="content">

<div class="list_button">

<a href = '<?php echo BASE_URL_ADMIN?>product/add' class="button"><img src = '<?php echo ADMIN_PATH_IMG;?>icon-16-plus.png'> Thêm mới</a>

</div>

<div class="list_button" style="margin-top:0px;">

<form action="<?=BASE_URL_ADMIN ?>" method="get">

<input type="hidden" name="mod" value="product" />

<input type="hidden" name="act" value="list" />

<table cellpadding="0" style="float:left">

<tbody>

<td> 

<select name = 'id' id="idcat">

    <option value = '0'>- - Chọn chủ đề - -</option>

<?php

    echo $tmenu = TreeCat($data['cat'],0,"",$_GET['id'],"--");

?>

</select>

<input type="text"  placeholder="Tìm tên sản phẩm" size="40" name="tukhoa" value="<?=$_GET['tukhoa'] ?>" /></td>

<td> <input type="submit" value="Tìm kiếm" name="btntimkiem" class="button" /></td>

</tbody>

</table>

</form>

<form method = 'post' action = "<?php echo BASE_URL_ADMIN;?>product/list" id="formtim">

<table style="float:right; margin-right:10px;">

	<tr>

    <td>

        <select name = 'sort' id="sort">

            <option value = 'desc' <? if($_SESSION['sort']=="desc") echo 'selected'; ?> >- - Từ mới đến cũ - -</option>

        	<option value = 'asc' <? if($_SESSION['sort']=="asc") echo 'selected'; ?>  >- - Từ cũ đến mới - -</option>

           <option value = 'view' <? if($_SESSION['sort']=="view") echo 'selected'; ?>  >- - Xem nhiều nhất - -</option>

           <option value = 'order' <? if($_SESSION['sort']=="order") echo 'selected'; ?>  >- - Mua nhiều nhất - -</option>

        </select>

		<script type="text/javascript">

		$(document).ready(function(){

			$('#sort').change(function(){

				$('#formtim').submit();

			});

		})

		</script>

    </td>

	</tr>

</table>

</form>



</div>

<?php 

	$mproduct = new Models_MProduct;

?>

<form action = '<?php echo BASE_URL_ADMIN;?>product/del' method = 'post'  name="rowsForm" id="rowsForm">

<table class="view">

	<tr>

		<th><input type="checkbox" name="Check_ctr" id = 'Check_ctr' value="yes" onClick="Check(document.rowsForm.check_list)"></th>

		<th>ID</th>

        <th>Mã sản phẩm</th>

		<th><?php echo TITLE; ?></th>

		<th><?php echo IMAGES; ?></th> 

		<th >Hãng SX</th>
		<th>Giá Gốc</th>
        <th>Giá bán  (Vnđ)</th>

		<th width="50">Khuyến mại</th> 

        <th width="50">Mổi bật</th>

        <th width="50" style="display: none;">Trang chủ</th>

        <th width="100">Ngày đăng </th>

		<th><?php echo SORT; ?></th>

		<th width="50"><?php echo G_LOCK; ?></th>

		<th colspan = '2'><?php echo G_ACTION; ?></th>

	</tr>

	<?php

	if(empty($data['info'])){ //neu khong co du lieu

	?>

	<tr>

		<td colspan = '15' class = 'emptydata'><?php echo G_EMPTYDATA; ?></td>

	</tr>

	<?php

	}

	else //neu co du lieu xuat du lieu ra

	{

		foreach($data['info'] as $item)

		{

		?>

		<tr>

			<td align = 'center'><input type="checkbox" id = 'check_list' name="check_list[]" value="<?php echo $item['Id'];?>"><br></td>

			<td><?php echo $item['Id']; ?></td>

            <td><?php echo $item['codepro']; ?></td>

			<td align="left"><a href = '<?php echo BASE_URL_ADMIN;?>product/edit/<?php echo $item['Id'];?>' title = 'Sửa'><?php echo $item['title_vn']; ?></a></td>

			<td><img src = '<?php echo BASE_URL;?>data/Product/<?php echo $item['images']; ?>' width = '60'></td>

			 <td >
            <?php
			    $hangsx=$item['hangsx'];
			    $sql2="select * from mn_works where Id='$hangsx'";
				$ds2=mysql_query($sql2) or die(mysql_error());
				$row2=mysql_fetch_assoc($ds2);
				if(!empty($row2)) {
			?>
            <img src='<?=BASE_URL."data/Works/".$row2['images']; ?>' width='60'>
            <?php } ?>
        </td>
			 <td align='center'><input type='text' size='10' name='price[<?=$item['Id'];?>]' value="<?=bsVndDot($item['price']);?>" 
            onkeyup="this.value=FormatNumber(this.value);" /></td>	
           <td align = 'center'><input type = 'text' size = '15' name = 'price2[<?php echo $item['Id'];?>]' value = "<?php echo bsVndDot($item['sale_price']); ?>" onkeyup="this.value = FormatNumber(this.value);"   /></td>	

           <td align = 'center'>

			<?php 

			if($item['hot'] == "1"){

				echo "<div id = 'hot".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"hot\",\"".$item['Id']."\",\"0\",\"hot".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Bỏ khóa'><img src = '".ADMIN_PATH_IMG."icon-16-default.png'></a></div>";

			}else{

				echo "<div id = 'hot".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"hot\",\"".$item['Id']."\",\"1\",\"hot".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Khóa tin'><img src = '".ADMIN_PATH_IMG."icon-16-nondefault.png'></a></div>"; 

			}

			?>

			</td>	

            <td align = 'center'>

			<?php 

			if($item['home'] == "1"){

				echo "<div id = 'home".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"home\",\"".$item['Id']."\",\"0\",\"home".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Bỏ khóa'><img src = '".ADMIN_PATH_IMG."icon-16-default.png'></a></div>";

			}else{

				echo "<div id = 'home".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"home\",\"".$item['Id']."\",\"1\",\"home".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Khóa tin'><img src = '".ADMIN_PATH_IMG."icon-16-nondefault.png'></a></div>"; 

			}

			?>

			</td>	

            <td align = 'center' style="display: none;">

			<?php 

			if($item['new'] == "1"){

				echo "<div id = 'new".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"new\",\"".$item['Id']."\",\"0\",\"new".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Bỏ khóa'><img src = '".ADMIN_PATH_IMG."icon-16-default.png'></a></div>";

			}else{

				echo "<div id = 'new".$item['Id']."'><a href = 'javascript: hideshow(\"".TBL_PRODUCT."\",\"new\",\"".$item['Id']."\",\"1\",\"new".$item['Id']."\",\"".BASE_URL_ADMIN."\");' title = 'Khóa tin'><img src = '".ADMIN_PATH_IMG."icon-16-nondefault.png'></a></div>"; 

			}

			?>

			</td>	

            <td align="center"><?=date('d-m-Y',$item['date']); ?></td>

			<td align = 'center'><input type = 'text' size = '5' name = 'sort[<?php echo $item['Id'];?>]' value = "<?php echo $item['sort'];?>" style = 'text-align:center;' /></td>		

			

			<td align = 'center'>

				<?php 

			if($item['ticlock'] == "1"){

				echo "<div id = '".$item['Id']."'><a href = 'javascript:ticlockactive(\"".TBL_PRODUCT."\",\"ticlock\",\"".$item['Id']."\",\"0\",\"".BASE_URL_ADMIN."\");' title = 'Bỏ khóa'><img src = '".ADMIN_PATH_IMG."icon-16-remove.png'></a></div>";

			}else{

				echo "<div id = '".$item['Id']."'><a href = 'javascript:ticlockactive(\"".TBL_PRODUCT."\",\"ticlock\",\"".$item['Id']."\",\"1\",\"".BASE_URL_ADMIN."\");' title = 'Khóa tin'><img src = '".ADMIN_PATH_IMG."icon-16-tick.png'></a></div>"; 

			}

			?>

			</td>

			<td align = 'center'  width="30"><a href = '<?php echo BASE_URL_ADMIN;?>product/edit/<?php echo $item['Id'];?>' title = 'Sửa'><img src = '<?php echo ADMIN_PATH_IMG;?>b_edit.png'></a></td>

			<td align = 'center'  width="30"><a href = '<?php echo BASE_URL_ADMIN."product/del/".$item['Id'];?>' title = 'Xóa' onclick = 'javascript:thongbao("<?php echo JSM_DO_YOU_REALLY_WANT_TO_DELETE;?>");'><img src = '<?php echo ADMIN_PATH_IMG;?>b_drop.png'></a></td>

		</tr>

		<?php

		}

	}

	?>

</table>

<?php 

echo "<p style = 'color:blue;font-weight:bold; text-align:left; margin-left:10px; '>Tổng số:&nbsp;".$data['total'] . "</p> ";

if(isset($data['page']) && $data['page'] != "")

{

	echo "<div class='page'>";

	echo "<span>Trang : </span> ";

	echo $data['page'];

	echo "</div>";

}

?>

<div class="list_button">

<a href = '<?php echo BASE_URL_ADMIN;?>product/add' class="button"><span class = 'them'> <img src = '<?php echo ADMIN_PATH_IMG;?>icon-16-plus.png'> <?php echo G_ADD; ?></span></a>

<a href = 'javascript:CheckAll(document.rowsForm.check_list)' class="button">Check all</a>&nbsp;&nbsp;&nbsp;&nbsp;

<a href = 'javascript:UnCheckAll(document.rowsForm.check_list)' class="button" >Uncheck all</a>&nbsp;&nbsp;&nbsp;&nbsp;

<a href="javascript:confirmDelete('<?php echo JSM_DO_YOU_REALLY_WANT_TO_DELETE;?>',document.rowsForm.check_list)" class="button"><img class="icon" src="<?php echo ADMIN_PATH_IMG;?>/b_drop.png" alt="Delete" title="Xóa các dòng check" /> Delete</A>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<a href="javascript:confirmSave('<?php echo JSM_DO_YOU_REALLY_WANT_TO_SAVE;?>','<?php echo BASE_URL_ADMIN;?>product/save')" class="button" ><img class="icon" src="<?php echo ADMIN_PATH_IMG;?>/b_save.png" alt="Update" title="Cập nhật thứ tự" /> Save</A>



</div>

</form>

</div>