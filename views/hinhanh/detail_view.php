<div class="page-title-wrap" <?php if($data['adv']['file_vn']!=""){ ?>style="background-image:url(<?php echo PATH_IMG_FLASH.$data['adv']['file_vn'] ?>); color:#fff" <?php } ?>><div class="grid"><h1 class="page-entry-title "><?php echo $data['cat']['title_'.lang] ?></h1></div></div>
<div class="breadcrumbs"><div class="grid"><?php echo $data['map_title'] ?></div></div>
<div class="grid">

<div class="ls-image">
<?php
if(!empty($data['hinh'])){
	foreach($data['hinh'] as $item){
?>
<div class="gallery-item">
<a href="<?php echo PATH_IMG_IMAGES.$item['images'] ?>" class="image-link"><img src="<?php echo PATH_IMG_IMAGES.$item['images'] ?>" /></a>
</div>
<?php }} ?>
</div>
</div>
<link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL.USER_PATH_CSS;?>magnific-popup.css" />
<script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>jquery.magnific-popup.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function(){jQuery('.grid').magnificPopup({delegate:'a.image-link',type:'image',gallery:{enabled:true},zoom:{enabled:true}});});
</script>
