<?php include('submenu.php'); ?>

<div class="main_area">

    <div class="breakcrumb">

    <table border="0">

    <tbody>

    <tr>

    <td width="25">

    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-square.png" style="width:23px; height: 23px">

    </td>

    <td> Quản lý nội dung / Hình ảnh / </td>

    </tr>

    </tbody>

    </table>

    </div>

</div>

        



<div class="content">

<div class="list_button">

<a href = '<?php echo BASE_URL_ADMIN;?>images/add' class="button" ><img src = '<?php echo ADMIN_PATH_IMG;?>icon-16-plus.png'> <?php echo G_ADD; ?></a>

<form method = 'post' id="form_cat">

<table style="float:right; padding-right:10px;" class="spa">

	<tr>

		

		<td>

			<select name = 'id' id="idcat">

				<option value = ''>- - Chọn chủ đề - -</option>

			<?php

			$mcatnews = new Models_MCatimages;

			$ldata = $mcatnews->listdata();

			echo $tmenu = TreeCat($ldata,0,"","","--");

			?>

			</select>

		</td>

      

	</tr>

</table>

<?php if($_POST['id'] >0) {?>

<script type="text/javascript">

$(document).ready(function(){

	$("#idcat").val(<?=$_POST['id']; ?>);

		

})

</script>

<?php }?>

<script type="text/javascript">

$(document).ready(function(){

	$("#idcat").change(function(){

		$('#form_cat').submit();

	});

})

</script>

</form>

</div>

<!------

<form method = 'post'>

<table style=" float:left; margin-left:20px;">

	<tr>

        <td>

        <input type="text" class="datepicker" name="date" />

        </td>

		<td>

			<input type = 'submit' value = 'Tìm' name = 'tim'>

		</td>

    </tr>

</table>

</form>  --------------------------->



<div class="space_10"></div>



<form action = '<?php echo BASE_URL_ADMIN;?>images/del' method = 'post'  name="rowsForm" id="rowsForm">

<table class="view">

	<tr>

		<th><input type="checkbox" name="Check_ctr" id = 'Check_ctr' value="yes" onClick="Check(document.rowsForm.check_list)"></th>

		<th>ID</th>
		<th><?php echo IMAGES; ?></th>

		<th><?php echo SORT; ?></th>
		<th>Bật / Tắt</th>

		<th colspan = '2'><?php echo G_ACTION; ?></th>

	</tr>

	<?php

	if(empty($data['info'])){ //neu khong co du lieu

	?>

	<tr>

		<td colspan = '13' class = 'emptydata'><?php echo G_EMPTYDATA; ?></td>

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

			<td>    <?php if($item['images'] !=""){ ?><img src = '<?php echo BASE_URL;?>/data/Images/<?php echo $item['images']; ?>' width = '60'><?php } ?></td>

			<td align = 'center'><input type = 'text' size = '5' name = 'sort[<?php echo $item['Id'];?>]' value = "<?php echo $item['sort'];?>" style = 'text-align:center;'  /></td>
           
			<td align = 'center'>

			<?php 

			if($item['ticlock'] == "1"){

				echo "<div id = '".$item['Id']."'><a href = 'javascript:ticlockactive(\"".TBL_NEWS."\",\"ticlock\",\"".$item['Id']."\",\"0\",\"".BASE_URL_ADMIN."\");' title = 'Bỏ khóa'><img src = '".ADMIN_PATH_IMG."icon-16-remove.png'></a></div>";

			}else{

				echo "<div id = '".$item['Id']."'><a href = 'javascript:ticlockactive(\"".TBL_NEWS."\",\"ticlock\",\"".$item['Id']."\",\"1\",\"".BASE_URL_ADMIN."\");' title = 'Khóa tin'><img src = '".ADMIN_PATH_IMG."icon-16-tick.png'></a></div>"; 

			}

			?>

			</td>

			<td align = 'center'><a href = '<?php echo BASE_URL_ADMIN;?>images/edit/<?php echo $item['Id'];?>' title = 'Sửa'><img src = '<?php echo ADMIN_PATH_IMG;?>b_edit.png'></a></td>

			<td align = 'center'><a href = '<?php echo BASE_URL_ADMIN."images/del/".$item['Id'];?>' title = 'Xóa' onclick = 'javascript:thongbao("<?php echo JSM_DO_YOU_REALLY_WANT_TO_DELETE;?>");'><img src = '<?php echo ADMIN_PATH_IMG;?>b_drop.png'></a></td>

		</tr>

		<?php

		}

	}

	?>

</table>

<?php 

if(isset($data['page']) && $data['page'] != "")

{

	echo "<div style='height:10px; clear:10px'></div>";

	echo "<div class='page'>";

	echo "<span>Trang:</span> ";

	echo $data['page'];

	echo "</div>";

}

?>

<div class="list_button">

<a href = '<?php echo BASE_URL_ADMIN;?>news/add' class="button" ><span class = 'them'><img src = '<?php echo ADMIN_PATH_IMG;?>icon-16-plus.png'> <?php echo G_ADD; ?></span></a>

<a href = 'javascript:CheckAll(document.rowsForm.check_list)' class="button" >Check all</a>&nbsp;&nbsp;&nbsp;&nbsp;

<a href = 'javascript:UnCheckAll(document.rowsForm.check_list)' class="button" >Uncheck all</a>&nbsp;&nbsp;&nbsp;&nbsp;

<a href="javascript:confirmDelete('<?php echo JSM_DO_YOU_REALLY_WANT_TO_DELETE;?>',document.rowsForm.check_list)" class="button" ><img class="icon" src="<?php echo ADMIN_PATH_IMG;?>/b_drop.png" alt="Delete" title="Xóa các dòng check" />Delete</A>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<a href="javascript:confirmSave('<?php echo JSM_DO_YOU_REALLY_WANT_TO_SAVE;?>','<?php echo BASE_URL_ADMIN;?>news/save')" class="button"><img class="icon" src="<?php echo ADMIN_PATH_IMG;?>/b_save.png" alt="Update" title="Cập nhật thứ tự" /> Save</a>

</div>

</form>

</div>

