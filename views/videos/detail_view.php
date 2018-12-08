<div class="page-title-wrap" <?php if($data['adv']['file_vn']!=""){ ?>style="background-image:url(<?php echo PATH_IMG_FLASH.$data['adv']['file_vn'] ?>); color:#fff" <?php } ?>><div class="grid"><h1 class="page-entry-title "><?php echo $data['info']['title_'.lang] ?></h1></div></div>
<div class="breadcrumbs"><div class="grid"><?php echo $data['map_title'] ?></div></div>
<div class="grid">
<div class="content-if">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/<?php echo getidyoutube($data['info']['link']) ?>" frameborder="0" allowfullscreen></iframe>
</div>
<div class="div-cl">
<?php
if(!empty($data['cl'])){
	foreach($data['cl'] as $item){
		$id = getidyoutube($item['link']);
?>
<div class="items-videos ">
    	<div class="images">
    	<a href="<?php echo "/videos/".strtoseo($item['title_'.lang])."-".$item['Id'] ?>" title="<?php echo $item['title_'.lang]; ?>">
        <img src="http://img.youtube.com/vi/<?php echo $id ?>/0.jpg" title="<?php echo $item['title_'.lang]; ?>" width="100%">
        <span class="icon-circle-play"></span>
        </a>
        </div>
        <div class="yt-if">
        <h2><a href="<?php echo "/videos/".strtoseo($item['title_'.lang])."-".$item['Id'] ?>" title="<?php echo $item['title_'.lang]; ?>"><?php echo $item['title_'.lang]; ?></a></h2>
        </div>
    </div>
<?php }} ?>
</div>	
</div>
