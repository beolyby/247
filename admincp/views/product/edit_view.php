<script type = 'text/javascript'>

function checkform(){

	var frm = document.frm1;

	if(frm.idcat.value == 0){

		alert("Vui lòng chọn chủ đề");

		return false;

	}

	if(frm.title_vn.value == ""){

		alert("Vui lòng nhận tiêu đề sản phẩm");

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

    <img alt=""  src="<?php  echo  ADMIN_PATH_IMG ?>icon-48-pro.png" style="width:23px; height: 23px">

    </td>

    <td> Quản lý nội dung / Sản phẩm / Sửa </td>

    </tr>

    </tbody>

    </table>

    </div>

</div>

<div class="content">

<div class="content_i">

<form name = "frm1" action = '<?php echo BASE_URL_ADMIN;?>product/edit/<?php echo $data['info']['Id'];?>' method = 'post' enctype = "multipart/form-data" onsubmit = "return checkform();">

<table>

<tbody>

<tr>

   <td width="800" valign="top">

<table>

	<tr>

        <td  class = 'title_td' ><strong>Chủ đề</strong></td>

        <td>

        <select name = 'idcat'>

            <option value = ''>- - Chọn nhóm sản phẩm - -</option>

        <?php

        $mcatelog = new Models_MCatelog;

        $ldata = $mcatelog->listdata();

        echo $tmenu = TreeCat($ldata,0,"",$data['info']['idcat'],"--");

        ?>

        </select>

        </td>

    </tr>
    <tr>
         <td class='title_td'><strong>Hãng Sản Xuất</strong></td><td>
         <select name='hangsx'>
              <option value=''>---Chọn hãng sản xuất---</option>
              <?php
                  $sql="select * from mn_works where ticlock='0'";
				  $ds=mysql_query($sql) or die(mysql_error());
				  while($row=mysql_fetch_assoc($ds)) {
              ?>
                  <option <?php if($row['Id']==$data['info']['hangsx']) echo "selected='selected'";?> value="<?=$row['Id']?>"><?=$row['title_vn']?>
                  </option>
              <?php } ?>
         </select>
         </td>
      </tr>
	  <tr>

        <td class = 'title_td'><strong>Mã sản phẩm</strong></td>

        <td><input type = 'text' name = 'codepro' value = '<?php echo $data['info']['codepro'];?>'   size="30"> </td>

   </tr>
	
	<tr>

        <td class = 'title_td'><strong>Giá Gốc</strong></td>

        <td><input type = 'text' name = 'price' value = '<?php echo bsVndDot($data['info']['price']);?>'  onkeyup="this.value = FormatNumber(this.value);" size="30"> </td>

   </tr>
    <tr>

        <td class = 'title_td'><strong>Giá bán</strong></td>

        <td><input type = 'text' name = 'sale_price' value = '<?php echo bsVndDot($data['info']['sale_price']);?>'  onkeyup="this.value = FormatNumber(this.value);" size="30"> </td>

   </tr>
  
<?php

foreach($config_lang as $klang => $vlang)

{

?>
<tr>

    	<td class = 'title_td'><strong>Tên sản phẩm</strong></td>

		<td><input type = 'text' name = 'title_<?php echo $vlang ?>' value = "<?php echo stripcslashes($data['info']['title_'.$vlang]);?>" size = '90'></td>

	</tr>
    <tr>
         <td class = 'title_td'><strong>Mô tả (<?php echo $vlang; ?>) </strong></td>

         <td> <textarea name="description_<?php echo $vlang ?>" id="description_<?php echo $vlang; ?>" style="width:500px; height:100px"><?php  echo  stripcslashes($data['info']['description_'.$vlang]) ?></textarea>

        </td>

    </tr>

    <tr>

    	<td class = 'title_td'><strong>Chi tiết  (<?php echo $vlang; ?>) </strong></td>

		<td><textarea name="content_<?php echo $vlang ?>" id="editor<?php echo $vlang; ?>" ><?php echo stripcslashes($data['info']["content_".$vlang]); ?></textarea>
              </td>

	</tr>

    <tr>

    	<td class = 'title_td'><strong>Đặc tính   </strong></td>

		<td><textarea name="dactinh" id="media<?php echo $vlang; ?>" ><?php echo stripcslashes($data['info']["dactinh"]); ?></textarea>
              </td>

	</tr>
     
	<script type="text/javascript">
		if (typeof CKEDITOR == 'undefined') {
			document.write('CKEditor');
		}else {
		
			var editorContent = CKEDITOR.replace('description_<?php echo $vlang; ?>'); 
			editorContent.config.width = 650;
			editorContent.config.height = 200;
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
			var editorContent = CKEDITOR.replace('editor<?php echo $vlang; ?>'); 
			editorContent.config.width = 650;
			editorContent.config.height = 200;
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
			var editorContent = CKEDITOR.replace('media<?php echo $vlang; ?>'); 
			editorContent.config.width = 650;
			editorContent.config.height = 200;
			CKFinder.setupCKEditor( editorContent,'<?php echo BASE_URL ?>public/ck/ckfinder/');
			
		
		}
		
		</script>
        
  

<?php

}

?>

    <tr>

    	<td class = 'title_td'><strong>Alias</strong></td>

		<td><input type = 'text' name = 'alias' value = '<?php  echo  $data['info']['alias'] ?>' size = '50'> </td>

	</tr>



	<tr>

    	<td></td>

		<th align = 'center'>

			<input type = 'submit' value = '<?php echo G_BUTTON_EDIT;?>' name = 'editnew' class="button" style="margin-left:250px;">&nbsp;&nbsp;&nbsp;&nbsp;

			<input type = 'reset' value = '<?php echo G_BUTTON_RESET;?>' class="button">

		</th>

	</tr>	

</table>

</td>

<td valign="top">

	<table class="right_new" >

   	<tr>
		<td class = 'title_td'><?php echo IMAGES;?></td>
		<td><input type = 'file' name = 'images' size = "50"></td>
	</tr>
	<?php if($data['info']['images'] != ""){?>
	<tr>
		<td>&nbsp;</td>
		<td>
			<div id = "images">
			<img src = "<?php  echo  BASE_URL ?>data/Product/<?php  echo  $data['info']['images']?>" height = "50">

			<a href = "javascript: delFlash('<?php echo TBL_PRODUCT?>','images',<?php echo $data['info']['Id']?>,'<?php echo $data['info']['images'];?>','images','<?php  echo  BASE_URL_ADMIN?>')"><img src = "<?php echo ADMIN_PATH_IMG;?>b_drop.png"></a>
			</div>
		</td>
	</tr>
	<?php } ?>
    <tr>
		<td class = 'title_td'><?php echo IMAGES;?> 1</td>
		<td><input type = 'file' name = 'images1' size = "50"></td>
	</tr>
	<?php if($data['info']['images1'] != ""){?>
	<tr>
		<td>&nbsp;</td>
		<td>
			<div id = "images1">
			<img src = "<?php  echo  BASE_URL ?>data/Product/<?php  echo  $data['info']['images1']?>" height = "50">

			<a href = "javascript: delFlash('<?php echo TBL_PRODUCT?>','images1',<?php echo $data['info']['Id']?>,'<?php echo $data['info']['images1'];?>','images1','<?php  echo  BASE_URL_ADMIN?>')"><img src = "<?php echo ADMIN_PATH_IMG;?>b_drop.png"></a>
			</div>
		</td>
	</tr>
	<?php } ?>
    <tr>
		<td class = 'title_td'><?php echo IMAGES;?> 2</td>
		<td><input type = 'file' name = 'images2' size = "50"></td>
	</tr>
	<?php if($data['info']['images2'] != ""){?>
	<tr>
		<td>&nbsp;</td>
		<td>
			<div id = "images2">
			<img src = "<?php  echo  BASE_URL ?>data/Product/<?php  echo  $data['info']['images2']?>" height = "50">

			<a href = "javascript: delFlash('<?php echo TBL_PRODUCT?>','images2',<?php echo $data['info']['Id']?>,'<?php echo $data['info']['images2'];?>','images2','<?php  echo  BASE_URL_ADMIN?>')"><img src = "<?php echo ADMIN_PATH_IMG;?>b_drop.png"></a>
			</div>
		</td>
	</tr>
	<?php } ?>
    <tr>
		<td class = 'title_td'><?php echo IMAGES;?> 3</td>
		<td><input type = 'file' name = 'images3' size = "50"></td>
	</tr>
	<?php if($data['info']['images3'] != ""){?>
	<tr>
		<td>&nbsp;</td>
		<td>
			<div id = "images">
			<img src = "<?php  echo  BASE_URL ?>data/Product/<?php  echo  $data['info']['images3']?>" height = "50">

			<a href = "javascript: delFlash('<?php echo TBL_PRODUCT?>','images3',<?php echo $data['info']['Id']?>,'<?php echo $data['info']['images3'];?>','images3','<?php  echo  BASE_URL_ADMIN?>')"><img src = "<?php echo ADMIN_PATH_IMG;?>b_drop.png"></a>
			</div>
		</td>
	</tr>
	<?php } ?>
    <tr>
		<td class = 'title_td'><?php echo IMAGES;?> 4</td>
		<td><input type = 'file' name = 'images4' size = "50"></td>
	</tr>
	<?php if($data['info']['images4'] != ""){?>
	<tr>
		<td>&nbsp;</td>
		<td>
			<div id = "images">
			<img src = "<?php  echo  BASE_URL ?>data/Product/<?php  echo  $data['info']['images4']?>" height = "50">

			<a href = "javascript: delFlash('<?php echo TBL_PRODUCT?>','images4',<?php echo $data['info']['Id']?>,'<?php echo $data['info']['images4'];?>','images4','<?php  echo  BASE_URL_ADMIN?>')"><img src = "<?php echo ADMIN_PATH_IMG;?>b_drop.png"></a>
			</div>
		</td>
	</tr>
	<?php } ?>
    

        <tr>

            <td class = 'title_td'><?php echo SORT;?></td>

            <td><input type = 'text' name = 'sort' size = '30' value="<?php  echo  $data['info']['sort'] ?>"></td>

        </tr>

        <tr>

            <td class = 'title_td'>Ngày đăng</td>

            <td><input type = 'text' name = 'date' size = '30' value="<?php  echo  $data['info']['date']; ?>" ></td>

        </tr>

        <tr>

            <td class = 'title_td'>Số lần xem</td>

            <td><input type = 'text' name = 'visit' size = '30' value="<?php  echo  $data['info']['visit'] ?>"></td>

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

            <td class = 'title_td'> Meta Keyword</td>

            <td>

            	<textarea name="meta_keyword" style="width:240px; height:100px;"><?php  echo  stripcslashes($data['info']['meta_keyword']) ?></textarea>

            </td>

        </tr>

         <tr>

            <td class = 'title_td'> Meta Description</td>

            <td>

            	<textarea name="meta_description" style="width:240px; height:100px;"><?php  echo  stripcslashes($data['info']['meta_description']) ?></textarea>

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
