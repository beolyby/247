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
    /*if(frm.hangsx.value == ""){

        alert("Vui lòng chọn hãng sx");

      

        return false;

    }*/
}

</script>

<?php include('submenu.php'); ?>

<div class="main_area">

    <div class="breakcrumb">

    <table border="0">

    <tbody>

    <tr>

    <td width="25">

    <img alt=""  src="<?php echo ADMIN_PATH_IMG ?>icon-48-pro.png" style="width:23px; height: 23px">

    </td>

    <td> Quản lý nội dung / Sản phẩm / Thêm mới </td>

    </tr>

    </tbody>

    </table>

    </div>

</div>

<div class="content">

<div class="content_i">

<form name = "frm1" action = '<?php echo BASE_URL_ADMIN;?>product/add' method = 'post' enctype = "multipart/form-data" onsubmit = "return checkform();">

<table>

<tbody>

<tr>

<td width="800" valign="top">

<table>

<tr>

    <td class = 'title_td' ><strong>Chủ đề</strong></td>

    <td>
 
        <select name = 'idcat'>

            <option value = ''>- - Chọn nhóm sản phẩm - -</option>

            <?php

            $mcatelog = new Models_MCatelog;

            $ldata = $mcatelog->listdata();

            echo $tmenu = TreeCat($ldata,0,"","","--");

            ?>

        </select>

    </td>

</tr>
	  <tr>

        <td class = 'title_td'><strong>Mã sản phẩm</strong></td>

        <td><input type = 'text' name = 'codepro' value = ''   size="30"> </td>

   </tr>
<tr>
    <td class = 'title_td'><strong>Giá Gốc</strong></td>
    <td><input type='text' name='price' value='0' onkeyup="this.value=FormatNumber(this.value);" size="50"></td>
</tr>
<tr>
       <td class = 'title_td'><strong>Giá bán</strong></td>

       <td><input type = 'text' name = 'sale_price' value = '0'  onkeyup="this.value = FormatNumber(this.value);" size="50"></td>


</tr>
<tr >
       <td class='title_td'><strong>Hãng Sản Xuất</strong></td><td>
       <select name='hangsx'>
            <option value=''>---Chọn hãng sản xuất---</option>
            <?php
                $sql="select * from mn_works where ticlock='0'";
                $ds=mysql_query($sql) or die(mysql_error());
                while($row=mysql_fetch_assoc($ds)) {
            ?>
                <option value="<?=$row['Id']?>"><?=$row['title_vn']?></option>
            <?php } ?>
       </select>
       </td>
    </tr>
    


<?php

foreach($config_lang as $klang => $vlang)

{

?>

	<tr>

    	<td class = 'title_td'><strong>Tên sản phẩm</strong></td>

		<td><input type = 'text' name = 'title_<?php echo $vlang ?>' value = "" size = '90'></td>

	</tr>
    <tr>

         <td class = 'title_td'><strong>Mô tả (<?php echo $vlang; ?>) </strong></td>

         <td> <textarea name="description_<?php echo $vlang ?>" id="description_<?php echo $vlang; ?>" style="width:500px; height:100px"></textarea>

        </td>

    </tr>

    <tr>

    	<td class = 'title_td'><strong>Chi tiết  (<?php echo $vlang; ?>) </strong></td>

		<td><textarea name="content_<?php echo $vlang ?>" id="editor<?php echo $vlang; ?>" ></textarea>
              </td>

	</tr>
    <tr>

        <td class = 'title_td'><strong>Đặc tính </strong></td>

        <td><textarea name="dactinh" id="media<?php echo $vlang; ?>" ></textarea>
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

    	<td></td>

		<th align = 'center'>

			<input type = 'submit' value = '<?php echo G_BUTTON_ADD;?>' name = 'addnew' class="button" style="margin-left:250px;">&nbsp;&nbsp;&nbsp;&nbsp;

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
    <tr>

		<td class = 'title_td'><?php echo IMAGES;?> 1</td>

		<td><input type = 'file' name = 'images1' size = "50"></td>

	</tr>
    <tr>

		<td class = 'title_td'><?php echo IMAGES;?> 2</td>

		<td><input type = 'file' name = 'images2' size = "50"></td>

	</tr>
    <tr>

		<td class = 'title_td'><?php echo IMAGES;?> 3</td>

		<td><input type = 'file' name = 'images3' size = "50"></td>

	</tr>
    <tr>

		<td class = 'title_td'><?php echo IMAGES;?> 4</td>

		<td><input type = 'file' name = 'images4' size = "50"></td>

	</tr>

         <tr>

            <td class = 'title_td'><?php echo SORT;?></td>

            <td><input type = 'text' name = 'sort' size = '30' value=""></td>

        </tr>

         <tr>

            <td class = 'title_td'>Ngày đăng</td>

            <td><input type = 'text' name = 'date' size = '30' value="<?php echo date("Y-m-d h:m:s")  ?>" ></td>

        </tr>

         <tr>

            <td class = 'title_td'>Khóa</td>

            <td>

            	<select name="ticlock">

                	<option value="0" >Tắt</option>

                	<option value="1" >Bật</option>

                    

            	</select>

            </td>

        </tr>

        <tr>

            <td class = 'title_td'> Meta Keyword</td>

            <td>

            	<textarea name="meta_keyword" style="width:240px; height:100px;"></textarea>

            </td>

        </tr>

         <tr>

            <td class = 'title_td'> Meta Description</td>

            <td>

            	<textarea name="meta_description" style="width:240px; height:100px;"></textarea>

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

