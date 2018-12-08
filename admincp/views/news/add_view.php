<script type="text/javascript">
function checkform(){
	var frm = document.frm;
	if(frm.idcat.value == ""){
		alert("Vui lòng chọn chủ đề");
		return false;
	}
	if(frm.title_vn.value == ""){
		alert("Vui lòng nhận tiêu đề tin");
		frm.title_vn.focus();
		return false;
	}
}
</script>
<?php include('submenu.php'); ?>
<div class="main_area">
    <div class="breakcrumb">
    <table border="0">
    <tbody>
    <tr>
    <td width="25">
    <img alt=""  src="<?=ADMIN_PATH_IMG ?>icon-48-square.png" style="width:23px; height: 23px">
    </td>
    <td> Quản lý nội dung / Bài viết / Thêm mới</td>
    </tr>
    </tbody>
    </table>
    </div>
</div>
        

<div class="content">
<div class="content_i">
<form name = "frm" action = '<?php echo BASE_URL_ADMIN;?>news/add' method = 'post' enctype = "multipart/form-data" onsubmit = "return checkform();">
<table>
<tbody>
<tr>
   <td width="800">
   <h2>
<img alt="" src="<?=ADMIN_PATH_IMG ?>icon-16-info.png">
Thông tin bài viết
</h2>
<table>
	<tr>
    	<td class = 'title_td'>Chủ đề</td>
		<td>
        <select name = 'idcat'>

            <option value = ''>- - Chọn chủ đề - -</option>

        <?php

        $mcatnews = new Models_MCatnews;

        $ldata = $mcatnews->listdata();

        echo $tmenu = TreeCat($ldata,0,"","","--");

        ?>

        </select>
		</td>
	</tr>
<?php
foreach($config_lang as $klang => $vlang)
{
?>
	<tr>
    	<td class = 'title_td'><strong>Tiêu đề (<?=$vlang ?>)</strong></td>
		<td><input type = 'text' name = 'title_<?php echo $vlang;?>' size = '50'></td>
	</tr>
   	<?php if( $vlang=='vn'){ ?>
    <tr>
    	<td class = 'title_td' ><strong>Alias (<?=$vlang ?>)</strong></td>
		<td><input type = 'text' name = 'alias' size = '50'></td>
	</tr>
    <?php } ?>
	<tr>
    	<td class = 'title_td'><strong> Mô tả (<?=$vlang ?>)</strong></td>
        <td> <textarea name="description_<?=$vlang ?>"" id="description_<?php echo $vlang ?>" style="width:600px; height:100px;"></textarea></td> 
    </tr>

	<tr>
    	<td class = 'title_td' ><strong>Nội dung (<?=$vlang ?>)</strong></td>
        <td> <textarea name="content_<?=$vlang ?>"" id="editor<?=$vlang ?>" ></textarea>
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
<?php
}
?>
	<tr>
		<th align = 'center' colspan="2">
			<input type = 'submit' value = '<?php echo G_BUTTON_ADD;?>' name = 'addnew' class="button" style="float:none">&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>' class="button" style="float:none" >
		</th>
	</tr>	
</table>
</td>
<td valign="top">
<h2>
<img alt="" src="<?=ADMIN_PATH_IMG ?>icon-16-info.png">
Thông tin thiết lập
</h2>
	<table class="right_new" >
        <tr>
            <td class = 'title_td'>hình </td>
            <td><input type = 'file' name = 'images1'></td>
        </tr>
        
        <tr>
            <td class = 'title_td'>sắp xếp</td>
            <td><input type = 'text' name = 'sort' size = '30'></td>
        </tr>
        <tr>
            <td class = 'title_td'>Số lần xem</td>
            <td><input type = 'text' name = 'visit' size = '30'></td>
        </tr>
        
        <tr>
            <td class = 'title_td'>Bật / Tắt</td>
            <td>
            	<select name="ticlock">
                	<option value="0">Bật</option>
                    <option value="1">Tắt</option>
            	</select>
            </td>
        </tr>
         
       
        <tr>
            <td class = 'title_td'> Meta Keyword</td>
            <td>
            	<textarea name="meta_keyword" style="width:220px; height:100px;"></textarea>
            </td>
        </tr>
         <tr>
            <td class = 'title_td'> Meta Description</td>
            <td>
            	<textarea name="meta_description" style="width:220px; height:100px;"></textarea>
            </td>
        </tr>
    </table>
</td>
</tr>
</tbody>
</table>
</form>
</div>
</div>
<script type="text/javascript">
if (typeof CKEDITOR == 'undefined') {
	document.write('CKEditor');
}else {
	var editorContent = CKEDITOR.replace('editor1'); 
	editorContent.config.width = 700;
	editorContent.config.height = 200;
	CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
}
</script>