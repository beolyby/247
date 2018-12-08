
<div class="container">
  <div class="breadcrumb">
       <?php echo $data['map_title'] ?>
      </div>
  <div class="row"> 
  <div id="content" class="col-sm-12">
		<div class="position-display">
      	</div>      <h1><?php echo stripcslashes($data['info']['title_'.lang]); ?></h1>
      <?php echo stripcslashes($data['info']['content_'.lang]); ?>
    </div>
</div>
</div>

<?php /*?>
<div class="container">
	
	<div class="row  pd20 ">
		<div class="breadcrumb breadcrumb-arrow ">
		<?php echo $data['map_title'] ?>
		</div>
	    
	</div>
</div>
<!--ket thuc breadcrum-->
<div class="content-container single">
	<div class="container">
	<div class="row">
			
		<div class="col-md-9 col-sm-9 main-wrap">
			<div class="main-content">
           	<article class="hentry">
					<div class="hentry-wrap">
							<div class="page-item-title">
								<h1 class="title_font" style="margin-top: 0"><?php echo stripcslashes($data['info']['title_'.lang]); ?></h1>
								
							</div>
							<div class="entry-content">
								<?php echo stripcslashes($data['info']['content_'.lang]); ?>
							</div>
                    </div>
             </article> 
             <div class="share-tool-wrapper" style="text-align: right;">
				<script type="text/javascript">var switchTo5x=true;</script>
				<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
				<script type="text/javascript">stLight.options({publisher: "ca4dcdf0-fe0f-4884-bf3c-d631268f86a9", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
				<span class='st_facebook_large' displayText='Facebook'></span>
				<span class='st_googleplus_large' displayText='Google +'></span>
				<span class='st_twitter_large' displayText='Tweet'></span>
				<span class='st_linkedin_large' displayText='LinkedIn'></span>
				<span class='st_pinterest_large' displayText='Pinterest'></span>
				<span class='st_email_large' displayText='Email'></span>
			</div>  
			
			</div><!---end md 9-->
		
	</div><!--end row-->
	<?php loadview('pagefixed/right',$right);?>

</div>
</div>
</div>