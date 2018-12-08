<div class="page-title-wrap" <?php if($data['adv']['file_vn']!=""){ ?>style="background-image:url(<?php echo PATH_IMG_FLASH.$data['adv']['file_vn'] ?>); color:#fff" <?php } ?>><div class="grid"><h1 class="page-entry-title ">Videos</h1></div></div>
<div class="breadcrumbs"><div class="grid"><?php echo $data['map_title'] ?></div></div>
<div class="grid">
<div class="subcatelog">
<a href="/videos.html"><?php echo TATCA; ?></a>
<?php if(!empty($data['cat'])) {
	foreach($data['cat'] as $item){
?>
	<a href="/video/<?php echo $item['alias'] ?>" <?php if($data['catid']['Id']==$item['Id']) echo ' class="btn-active"'; ?>><?php echo $item['title_'.lang]; ?></a>
<?php }} ?>
</div>
<div class="space_20"></div>
<?php
if(!empty($data['info'])){
	foreach($data['info'] as $item){
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
