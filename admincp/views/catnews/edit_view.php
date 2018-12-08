<?php include('submenu.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
    <tr>
    <td width="25">
    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-square.png" style="width:23px; height: 23px">
    </td>
    <td> Quản lý nội dung / Chủ đề bài viết / Sửa</td>
    </tr>
    </tbody>
    </table>
    </div>
</div>
        

<div class="content">
<div class="content_i">
<form action = '<?php echo BASE_URL_ADMIN;?>catnews/edit/<?php echo $data['info']['Id']?>' method = 'post' enctype = "multipart/form-data">
<table>
<tr>
		<td class = 'title_td'><?php echo PARENTID;?></td>
		<td>
			<select name = 'parentid'>
				<option value = ''>- - Là chủ đề gốc - -</option>
			<?php
			$mcatnews = new Models_MCatnews;
			$ldata = $mcatnews->listdata();
			echo $tmenu = TreeCat($ldata,0,"",$data['info']['parentid'],"--");
			?>
			</select>&nbsp;<i style = 'color:red;'>(<?php echo LUUYCHUDE;?>)</i>
		</td>
	</tr>
<?php
foreach($config_lang as $klang => $vlang)
{
?>
	<tr>
		<td class = 'title_td'><?php echo TITLE;?> (<?php echo $vlang;?>)</td>
		<td><input type = 'text' name = 'title_<?php echo $vlang;?>' size = '50' value = '<?php echo $data['info']['title_'.$vlang];?>'></td>
	</tr>
    <tr>
    	<td class = 'title_td'><strong> Mô tả (<?=$vlang ?>)</strong></td>
		<td>
        <textarea name="description_<?=$vlang ?>"" id="description_<?php echo $vlang ?>" style="width:450px; height:100px;"> <?php echo stripcslashes($data['info']["description_".$vlang]); ?></textarea>
        </td>
	</tr>
    <tr>
    	<td class = 'title_td'><strong>Nội dung (<?=$vlang ?>)</strong></td>
		<td>
            <textarea name="content_<?=$vlang ?>"" id="editor<?=$vlang ?>" ><?php echo stripcslashes($data['info']["content_vn"]); ?> </textarea>
            <script type="text/javascript">

		if (typeof CKEDITOR == 'undefined') {
			document.write('CKEditor');
		}else {
		
			var editorContent = CKEDITOR.replace('editor<?=$vlang ?>'); 
		
			editorContent.config.width = 650;
		
			editorContent.config.height = 200;
		
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
			var editorContent = CKEDITOR.replace('description_<?php echo $vlang ?>'); 
		
			editorContent.config.width = 650;
		
			editorContent.config.height = 200;
		
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
		
		}
		
		</script>
        </td>
	</tr>
    <tr>
		<td class = 'title_td'>Bí danh (<?php echo $vlang;?>)</td>
		<td><input type = 'text' name = 'alias' size = '50' value = '<?php echo $data['info']['alias'];?>'></td>
	</tr>
<?php
}
?>

	
	<tr>
		<td class = 'title_td'><?php echo SORT;?></td>
		<td><input type = 'text' name = 'sort' size = '10' value = '<?php echo $data['info']['sort'] ?>'></td>
	</tr>
	<tr>
		<td class = 'title_td'><?php echo TICLOCK;?></td>
		<td><input type = 'checkbox' name = 'ticlock' value = '1' <?php if($data['info']['ticlock'] == 1) echo 'Checked';?>></td>
	</tr>
       <tr>
		<td class = 'title_td'> Meta Keyword</td>
		<td><textarea name="keyword" style="width:400px; height:100px;" ><?php echo $data['info']['meta_keyword'] ?></textarea></td>
	</tr>
    <tr>
		<td class = 'title_td'> Meta Description</td>
		<td><textarea name="description" style="width:400px; height:100px;"  ><?php echo $data['info']['meta_description'] ?></textarea></td>
	</tr>
	<tr>
    	<th></th>
		<th align = 'center'>
			<input type = 'submit' value = '<?php echo G_BUTTON_EDIT;?>' name = 'editnew' class="button">&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>'  class="button">
		</th>
	</tr>	
</table>
</form>
</div>
</div>