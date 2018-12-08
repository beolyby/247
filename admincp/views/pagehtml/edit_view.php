<?php include('submenu.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
    <tr>
    <td width="25">
    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-square.png" style="width:23px; height: 23px">
    </td>
    <td> Quản lý nội dung / Bài viết mở rộng / Sửa bài viết</td>
    </tr>
    </tbody>
    </table>
    </div>
</div>
        

<div class="content">
<div class="content_i">

<?php
if(!empty($data['error']))
{
	echo "<div id = 'error'>";
	echo "<h2>Lỗi!</h2>";
	echo "<ul>";
	echo getError($data['error']);
	echo "</ul>";
	echo "</div>";
}
?>

<form action = '<?php echo BASE_URL_ADMIN;?>pagehtml/edit/<?php echo $data['info']['Id'];?>' method = 'post' enctype = "multipart/form-data">
<table>
<?php
foreach($config_lang as $klang => $vlang)
{
?>
	<tr>
		<td class = 'title_td'><?php echo TITLE;?> (<?php echo $vlang;?>)</td>
		<td><input type = 'text' name = 'title_<?php echo $vlang;?>' size = '100' value = '<?php echo $data['info']["title_".$vlang];?>'></td>
	</tr>
	<tr>
		<td class = 'title_td'><?php echo CONTENT;?> (<?php echo $vlang;?>)</td>
		<td>
             <textarea name="content_<?php echo $vlang;?>" id="editor<?php echo $vlang;?>" ><?php echo stripcslashes($data['info']["content_".$vlang]); ?> </textarea>
        <script type="text/javascript">
		if (typeof CKEDITOR == 'undefined') {
			document.write('CKEditor');
		}else {
		
			var editorContent = CKEDITOR.replace('editor<?php echo $vlang;?>'); 
			editorContent.config.width = 650;
			editorContent.config.height = 200;
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
	
		
		}
		
		</script>
        </td>
	</tr>
<?php
}
?>
<tr>
    <td class = 'title_td'>Meta description</td>
    <td>
        <textarea name="meta_description" style="width:240px; height:100px;"><?php echo stripcslashes($data['info']["meta_description"]); ?></textarea>
    </td>
</tr>
<tr>
    <td class = 'title_td'>Meta keyword</td>
    <td>
        <textarea name="meta_keyword" style="width:240px; height:100px;"><?php echo stripcslashes($data['info']["meta_keyword"]); ?></textarea>
    </td>
</tr>
	<tr>
		<td class = 'title_td'><?php echo TICLOCK;?></td>
		<td><input type = 'checkbox' name = 'ticlock' value = '1'></td>
	</tr>
	<tr>
    	<th></th>
		<th  align = 'center'>
			<input type = 'submit' name = 'editnew' value = '<?php echo G_BUTTON_EDIT;?>' class="button">
			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>' class="button">
			<input type = 'button' value = '<?php echo G_BUTTON_BACK;?>' onclick = "javascript:history.go(-1);" class="button" >
		</th>
	</tr>	
</table>
</form>
</div>
</div>
<script type="text/javascript">
if (typeof CKEDITOR == 'undefined') {
	document.write('CKEditor');
}else {
	var editorContent = CKEDITOR.replace('editor1'); 
	editorContent.config.width = 730;
	editorContent.config.height = 200;
	CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
}
</script>