<script type = 'text/javascript'>
function checkform(){
	var frm = document.frm1;
	if(frm.idcat.value == 0){
		alert("Vui lòng chọn chủ đề");
		return false;
	}

	if(frm.title_vn.value == "")
	{
		alert("Vui lòng nhận tiêu đề");
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
          <td width="25"><img alt="" src="<?=ADMIN_PATH_IMG ?>icon-48-pro.png" style="width:23px; height: 23px"></td>
          <td> Quản lý nội dung / Hãng Sản Xuất / Sửa </td>
       </tr>
    </tbody>
    </table>
    </div>
</div>

<div class="content">
<div class="content_i">
<table width="100%">
<tbody>
    <tr>
       <td width="800" valign="top">
       <form name="frm1" action='<?=BASE_URL_ADMIN."works/edit/".$data['info']['Id'];?>' method='post' enctype= "multipart/form-data" onsubmit = "return checkform();">
       <table>
          <?php foreach($config_lang as $klang => $vlang){ ?>
          <tr>
    	     <td class='title_td'><strong>Tiêu đề (<?=$vlang?>)</strong></td>
		     <td><input type='text' name='title_<?=$vlang?>' value="<?=stripcslashes($data['info']['title_'.$vlang]);?>" size='70'></td>
	      </tr>
          <?php } ?>
          
          <tr>
    	     <td class = 'title_td'><strong>Alias</strong></td>
		     <td><input type = 'text' name = 'alias' value = '<?php  echo  $data['info']['alias'] ?>' size = '50'> </td>
	      </tr>
          
          <?php if($data['info']['images'] != ""){?>
	      <tr>
		     <td class='title_td'>&nbsp;</td>
		     <td><div id="images"><img src="<?=BASE_URL."data/Works/".$data['info']['images']?>" height="50">
			     <a href="javascript: delFlash('<?=TBL_WORKS ?>','images',<?=$data['info']['Id']?>,'<?=$data['info']['images'];?>','images','
				 <?=BASE_URL_ADMIN?>')"><img src="<?=ADMIN_PATH_IMG;?>b_drop.png"></a>
			     </div>
		     </td>
	      </tr>
	      <?php } ?>
	      <tr>
		     <td class='title_td'><?=IMAGES;?></td>
		     <td><input type='file' name='images' size="50"></td>
          </tr>
          
          <tr>
             <td class = 'title_td'> Meta Keyword</td>
             <td><textarea name="meta_keyword" rows="3" style="width:400px"><?=stripcslashes($data['info']['meta_keyword']);?></textarea></td>
          </tr>
          <tr>
             <td class = 'title_td'> Meta Description</td>
             <td>
                 <textarea name="meta_description" rows="3" style="width:400px"><?=stripcslashes($data['info']['meta_description']) ?></textarea>
             </td>
          </tr>
          <tr>
             <td class='title_td'><?=SORT;?></td>
             <td><input type='text' name='sort' size='30' value="<?=$data['info']['sort'];?>"></td>
          </tr>
          <tr>
             <td class = 'title_td'>Khóa</td>
             <td>
            	<select name="ticlock">
                	<option value="1" <?php if($data['info']['ticlock'] == 1) echo "selected";?> >Bật</option>
                    <option value="0" <?php if($data['info']['ticlock'] == 0) echo "selected";?>  >Tắt</option>
            	</select>
             </td>
          </tr>
	      <tr>
    	     <td></td>
		     <th align='center'>
			     <input type='submit' value='<?=G_BUTTON_EDIT;?>' name='editnew' class="button" style="margin-left:250px;">&nbsp;&nbsp;&nbsp;&nbsp;
			     <input type = 'reset' value = '<?=G_BUTTON_RESET;?>' class="button">
		     </th>
	      </tr>	
      </table>
      </form>
    </td>
</tr>
</tbody>
</table>
</div>
</div>