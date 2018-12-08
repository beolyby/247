<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
include ("../libraries/class_db.php");
include ("../config/config.php");
include ("../config/config_site.php");
include ("../config/title_page.php");
include ("../libraries/functions.php");
include ("../libraries/controls.php");
include ("../models/mworks.php");
include ("../models/mpicture.php");
$lang = $_SESSION['lang'];
define("lang",$lang);
if(file_exists("../language/$lang.php")){
	include ("../language/$lang.php");
}else{
//lang not exists, default language
	include ("../language/vn.php");
	//session_register("lang");
	$_SESSION['lang']="vn";
}
$db = new Models_MWorks;
$mpicture = new Models_MPicture;
$val = varGet('id');
$id = $db->getalias($val);
$info = $db->getOneProduct($id);
$hinh = $mpicture->listdata("*","idpro= '".$id."' AND ticlock= '0'","sort ASC, Id DESC");
?>
<div class="referenz-navi">
        <div class="grid">
            <div class="row">
                <div class="col-xs-12">
                    <span class="btn btn-default btn-styled close-referenz-detail"><i class="fa fa-times"></i> close</span>
                    

                   
                </div>
            </div>
        </div>
    </div>

    <div id="referenceModal" class="grid referenz-content"><div class="row" style="margin-top: 20px;">
    <div class="col-sm-8 col-xs-12">
        <div  id="flexslider">
            <?php
			if(!empty($hinh)){
				foreach($hinh as $item){
			?>
			<img src="<?php echo PATH_IMG_WORKS.$item['images'] ?>" />
			<?php }} ?>                          
                                            
         </div>
    </div> <!--	end col-sm-8  -->

    <div class="col-sm-4 col-xs-12">
        <h2><?php  echo $info['title_'.lang] ?></h2>

        <hr>
        <?php echo stripcslashes($info['description_'.lang]); ?>
    </div>
    <!--	end col-sm-4  -->
</div> <!--	end row  -->
<div class="clearfix"></div>
<div class="row" style="margin-top: 20px;">
    <div class="col-sm-12 col-xs-12">
        <h4><?php echo THONGTINCHITIET ?></h4>
        <hr>
         <?php echo stripcslashes($info['content_'.lang]); ?>
    </div> <!--	end col-sm-12  -->
</div> <!--	end row  -->
<link rel="stylesheet" href="<?php echo BASE_URL; ?>public/template/css/owl.theme.css">
<link rel="stylesheet" href="<?php echo BASE_URL; ?>public/template/css/owl.carousel.css">
<script type="text/javascript" src="<?php echo BASE_URL; ?>public/js/owl.carousel.js"></script>
<script type="text/javascript">
$(document).ready(function() {
  $("#flexslider").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
	  pagination: false,
      paginationSpeed : 400,
      singleItem:true,
	  navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
});
</script>


