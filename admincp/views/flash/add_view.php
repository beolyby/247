<?php include('submenu2.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
    <tr>
    <td width="25">
    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-image.png" style="width:23px; height: 23px">
    </td>
    <td> Quản lý media / Banner / Thêm mới</td>
    </tr>
    </tbody>
    </table>
    </div>
</div>
<div class="content">
	<div class="content_i">
<form action = '<?php echo BASE_URL_ADMIN;?>flash/add' method = 'post' enctype = "multipart/form-data">
<table >
	<tr>
		<td class = 'title_td'>Vị trí</td>
		<td>
		<select name = "location">
			<option value = '2' >Logo Trắng</option>
            <option value = '4' >Logo Đen</option>
			<option value = '3' >Sideshow</option>
            <option value = '5' >Banner Home</option>
            <option value = '1' >logo khách hàng</option>
            <option value = '6' >Tin tức</option>
            <option value = '7' >Giới thiệu</option>
            <option value = '8' >Sản phẩm</option>
            <option value = '9' >favicon</option>
            <option value = '10' >Liên hệ</option>
            <option value = '11' >banner phải</option>
		</select>
		</td>
	</tr>
	<tr>
		<td class = 'title_td'>File</td>
		<td><input type = 'file' name = 'file_vn' size = '50'></td>
	</tr>
	<tr>
		<td class = 'title_td'>Link</td>
		<td><input type = 'text' name = 'link' size = '60'></td>
	</tr>
    <?php
	foreach($config_lang as $klang => $vlang)
	{
	?>
    <tr>
		<td class = 'title_td'>Title (<?php echo $vlang ?>)</td>
		<td><input type = 'text' name = 'title_<?php echo $vlang ?>' size = '60'></td>
	</tr>
	<?php } ?>
	<tr>
		<td class = 'title_td'>Sắp xếp</td>
		<td><input type = 'text' name = 'sort' size = '10'></td>
	</tr>
	<tr>
    	<td></td>
		<th align = 'center' style="padding-top:10px;">
			<input type = 'submit' value = '<?php echo G_BUTTON_ADD;?>' name = 'addnew' class="button">&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>' class="button">
		</th>
	</tr>	
</table>
</form>
</div>
</div>