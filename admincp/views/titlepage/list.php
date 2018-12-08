<?php include('submenu2.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
    <tr>
    <td width="25">
    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-image.png" style="width:23px; height: 23px">
    </td>
    <td> Quản lý liên hệ / Hỗ trợ trực tuyến </td>
    </tr>
    </tbody>
    </table>
    </div>
</div>
<div class="content">
<div class="content_i">
<form name = "frm1" action = '<?php echo BASE_URL_ADMIN;?>titlepage/list' method = 'post' enctype = "multipart/form-data">
<table>
	
 <?php /*
    <tr>
		<td class = 'title_td'> Video</td>
		<td><input type = 'text' name = 'skype1' size = '100' value = "<?php echo $data['skype1'];?>">
		</td>
	</tr>
	
	<tr>
		<td class = 'title_td'>Skype 2</td>
		<td> <input type = 'text' name = 'skype2' size = '100' value = "<?php echo $data['skype2'];?>"></td>
	</tr><?php */?>
    <tr>
		<td class = 'title_td'>Hotline 1   </td>
		<td><input type = 'text' name = 'hotline1' size = '100' value = "<?php echo $data['hotline1'];?>"></td>
	</tr>
        <tr>
		<td class = 'title_td'>Hotline 2   </td>
		<td><input type = 'text' name = 'hotline2' size = '100' value = "<?php echo $data['hotline2'];?>"></td>
	</tr>

    <tr>
		<td class = 'title_td'>Email nhận liên hệ</td>
		<td><input type = 'text' name = 'emaillienhevn' size = '100' value = "<?php echo $data['emaillienhe_vn'];?>"></td>
	</tr>
	<tr>
		<td class = 'title_td'>Email trung gian </td>
		<td><input type = 'text' name = 'emailtrunggian' size = '100' value = "<?php echo $data['emailtrunggian'];?>">
		</td>
	</tr>
	
	<tr>
		<td class = 'title_td'>Password </td>
		<td> <input type = 'password' name = 'password' size = '100' value = "<?php echo $data['password'];?>">
			
			
		</td>
	</tr>
    	<th></th>
		<th colspan = '2' align = 'center'>
        
			<input type = 'submit' value = '<?php echo G_BUTTON_EDIT;?>' name = 'save' class="button">&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>' class="button" >
		</th>
	</tr>
</table>
</form>

</div>
</div>
