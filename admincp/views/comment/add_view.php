<?php include('submenu2.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
       <tr>
          <td width="25">
              <img alt="" src="<?=ADMIN_PATH_IMG ?>icon-48-pro.png" style="width:23px;height:23px">
          </td>
          <td> Quản lý phản hồi </td>
       </tr>
    </tbody>
    </table>
    </div>
</div>

<div class="content">
<div class="content_i">
<?php
if(isset($data['error']))
{
	echo 'div id = "error">';
	echo '<h2>Lỗi!</h2>';
	echo '<ul>';
	echo getError($data['error']);
	echo '</ul>';
	echo '</div>';
}
?>

<form action='<?=BASE_URL_ADMIN;?>comment/add/' method='post' enctype="multipart/form-data">
<table>
	<tr>
		<td class='title_td'>Họ Tên</td>
		<td><input type='text' name='hoten' value='' size='100'></td>
	</tr>
    <tr>
		<td class='title_td'>Email</td>
		<td><input type='text' name='email' value='' size='100'></td>
	</tr>
    <tr>
		<td class='title_td'>Công Việc</td>
		<td><input type='text' name='congviec' value='' size='100'></td>
	</tr>
    <tr>
		<td class = 'title_td'><?=IMAGES;?></td>
		<td><input type = 'file' name = 'images' size = "50"></td>
	</tr>
    
    <tr>
		<td class='title_td'>Nội Dung</td>
		<td><textarea name="content_vn" id="editor1"></textarea></td>
	</tr>
	<tr>
		<td class='title_td'>Khóa</td>
		<td><input type='checkbox' name='ticlock' value='1' ></td>
	</tr>
	<tr>
    	<td></td>
		<th  align='center'>
			<input type='submit' value='<?php echo G_BUTTON_EDIT;?>' name='addnew'>&nbsp;&nbsp;&nbsp;&nbsp;
			<input type='reset' value='<?php echo G_BUTTON_RESET;?>'>
		</th>
	</tr>	
</table>
</form>
</div>
</div>

<script type="text/javascript">
if (typeof CKEDITOR == 'undefined') 
{
	document.write('CKEditor');
}
else 
{
	var editorContent = CKEDITOR.replace('editor1'); 
	editorContent.config.width = 700;
	editorContent.config.height = 200;
	CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
}
</script>
