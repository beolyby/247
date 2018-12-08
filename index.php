<?php
require("header.php");
require("controllers/pagefixed/pagefixed.php");
require("phpmailer/class.phpmailer.php");
$favicon = $mflash->getOneflashLocation(9);
?>
<!DOCTYPE html>
<!--[if IE 7 ]><html class="ie ie7" lang="vi-VN"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="vi-VN"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="vi-VN"> <![endif]-->
<html lang="vi-VN" prefix="og: http://ogp.me/ns#" xmlns="http://www.w3.org/1999/xhtml"><head>
    <title><?php echo htmlspecialchars($meta['title']);?></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php if($favicon['file_vn'] !=""){ ?>
    <link rel="shortcut icon" href="<?php echo PATH_IMG_FLASH.$favicon['file_vn'];?>" type="image/x-icon" />
    <?php  } ?>
    <base href = "<?php echo BASE_URL;?>" />
    <meta name = "keywords" content = "<?php echo strip_tags($meta['keywork']);?>" />
    <meta name = "description" content = "<?php echo  strip_tags($meta['description']);?>" />
    <meta name = "abstract" content = "<?php echo  strip_tags($meta['description']);?>" />
    <meta name="robots" content="noodp"/>
    <meta name='revisit-after' content='1 days' />
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,500,400italic,500italic,900italic,900,700italic,700&subset=latin,vietnamese' rel='stylesheet' type='text/css'>
    <link rel='stylesheet' href='https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css'>
    
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL.USER_PATH_CSS;?>font-awesome.min.css" />
   
   
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL.USER_PATH_CSS;?>bootstrap.css" />
   
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/owl.carousel.css"/>
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/owl.theme.css"/>
     <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/owl.transitions.css"/>
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/font-awesome.min.css"/>

    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/style2.css" />
     <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/responsive.css"/>
     <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL;?>public/theme/css/swiper.min.css"/>
     
   
    
   
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>website.js"></script>
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>owl.carousel.js"></script>
         
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>bootstrap.min.js"></script>
    
   
    <script type="text/javascript" src="<?php echo BASE_URL;?>public/theme/js/mobile-menu.js"></script>
    <script type="text/javascript" src="<?php echo BASE_URL;?>public/theme/js/swiper.min.js"></script>
     <script type="text/javascript" src="<?php echo BASE_URL;?>public/theme/js/js_custom.js"></script><script type="text/javascript" src="<?php echo BASE_URL;?>public/theme/js/cloudzoom.js"></script>  
 
  


    <?php echo stripcslashes($row_web['googleanalytics']); ?>
	<meta property="og:locale" content="vi_VN" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="<?php echo $meta['title_page'];?>" />
	<meta property="og:description" content="<?php echo $meta['description_page'];?>" />
</head>
<body>

<header>
 
	<?php loadview('pagefixed/banner',$banner);?>
	<?php include 'main.php';?> 

	<?php loadview('pagefixed/footer',$footer)?>
 

<div id="fb-root"></div>
  <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  <style>#cfacebook{position:fixed;bottom:0px;right:65px;z-index:999999999999999;width:250px;height:auto;box-shadow:6px 6px 6px 10px rgba(0,0,0,0.2);border-top-left-radius:5px;border-top-right-radius:5px;overflow:hidden;}#cfacebook .fchat{float:left;width:100%;height:270px;overflow:hidden;display:none;background-color:#fff;}#cfacebook .fchat .fb-page{margin-top:-130px;float:left;}#cfacebook a.chat_fb{float:left;padding:0 25px;width:250px;color:#fff;text-decoration:none;height:40px;line-height:40px;text-shadow:0 1px 0 rgba(0,0,0,0.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAqCAMAAABFoMFOAAAAWlBMV…8/UxBxQDQuFwlpqgBZBq6+P+unVY1GnDgwqbD2zGz5e1lBdwvGGPE6OgAAAABJRU5ErkJggg==);background-repeat:repeat-x;background-size:auto;background-position:0 0;background-color:#3a5795;border:0;border-bottom:1px solid #133783;z-index:9999999;margin-right:12px;font-size:18px;}#cfacebook a.chat_fb:hover{color:yellow;text-decoration:none;}</style>
  <script>
  jQuery(document).ready(function () {
  jQuery(".chat_fb").click(function() {
jQuery('.fchat').toggle('slow');
  });
  });
  </script>
  <div id="cfacebook">
  <a href="javascript:;" class="chat_fb" onclick="return:false;"><i class="fa fa-facebook-square"></i> Phản hồi của bạn</a>
  <div class="fchat">
  <div class="fb-page" data-tabs="messages" data-href="https://www.facebook.com/ktstorewatch/" data-width="250" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></div>
  </div>
  </div>


</body>
</html>