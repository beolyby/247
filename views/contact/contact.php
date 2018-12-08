<!-- header -->

<div class="container">
	
		<div class="breadcrumb">
                        <?php echo $data['map_title'] ?>
    
    </div>
	
</div>
<!--ket thuc breadcrum-->

<div class="content-container page_contact">
	<div class="container">
		<div class="row">
			<div class="col-md-12 main-wrap">
				<div class="main-content contact-form-box">
					<div class="row">
						<div class="page-item-title col-md-6 col-sm-6">
							
							<h3 class="title_font" style="margin-top: 0">Thông tin liên hệ</h1>
							
							<div class="empty-space"></div>
							<div class="text_column">
								<?php
									echo stripslashes($data['ttlienhe']['content_'.lang]);
								?>
															
							</div>
						</div>
						<div class="page-item-title  col-md-6 col-sm-6">
							<h3 class="title_font" style="margin-top: 0">Viết nhận xét</h1>
							<div class="empty-space"></div>
                            <?Php if($data['error']==1) { ?>
                            <div class="alert alert-danger"><?=$data['mesage'] ?></div>
                            <? } ?>
							<div class="wpcf7">
							
								<form accept-charset='UTF-8' action='lien-he.html' class='contact-form' method='post' >
								<input name='form_type' type='hidden' value='contact'>
								<input name='utf8' type='hidden' value='✓'>

								<div class="form-group">
							      <label for="name">Họ Tên:</label>
							      <input type="name" class="form-control" id="name" placeholder="Nhập họ Tên" name="ten">
							    </div>

								<div class="form-group">
							      <label for="email">Email:</label>
							      <input type="email" class="form-control" id="email" placeholder="Nhập Email" name="email">
							    </div>
							    <div class="form-group">
							      <label for="pwd">Nội Dung:</label>
							      <textarea  class="form-control" id="pwd" placeholder="Nhập Nội Dung" name="noidung"></textarea>
							    </div>
								
									<input type="submit"  name="submit" class="btn btn-primary" value="Gửi liên hệ" />
								

								</form>


							</div>
						</div>
					</div>
					<div class="empty-space"></div>
					
					<div class="row">
						<div class="col-md-12">

							<div class="full_width_map" style="margin-top: 20px;">
								<?php echo stripslashes($data['googlemap']['content_'.lang]);?>
							</div>
							<script>
							$('.full_width_map').click(function () {
								$(this).find('iframe').css("pointer-events", "auto");
							});
							$( ".full_width_map" ).mouseleave(function() {
								$(this).find('iframe').css("pointer-events", "none"); 
							});
							</script>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>
<!--end contac-->
<style type="text/css">
table td, table th {
  padding: 9px 10px;
  text-align: left;
}
caption, th, td {
  font-weight: normal;
  text-align: left;
  vertical-align: middle;
}
.form-control {
  font-size: 12px;

  box-shadow: none;
  height: 27px;
  padding: 3px 5px;

 
}
.form-control:focus {
  border-color: #66afe9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
  outline: 0 none;
}
.form-control {
  background-color: #fff;
  border: 1px solid #d6d4d4;
  
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  color: #9c9b9b;
  display: block;
  font-size: 13px;
  height: 32px;
  line-height: 1.42857;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  vertical-align: middle;
  width: 100%;
}
.btn-primary {
  background-color: #428bca;
  border-color: #357ebd;
  color: #fff;
}
</style>