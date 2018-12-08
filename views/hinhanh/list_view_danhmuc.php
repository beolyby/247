<div class="page-title-wrap " <?php if($data['adv']['file_vn']!=""){ ?>style="background-image:url(<?php echo PATH_IMG_FLASH.$data['adv']['file_vn'] ?>); color:#fff" <?php } ?>><div class="grid"><h1 class="page-entry-title "><?php echo HINHANH ?></h1></div></div>
<div class="breadcrumbs"><div class="grid"><?php echo $data['map_title'] ?></div></div>
<div class="grid"  style="padding:20px 0;">
<div class="subcatelog">
<a href="/photos.html"><?php echo TATCA; ?></a>
<?php if(!empty($data['subcat'])) {
	foreach($data['subcat'] as $item){
?>
	<a href="/photos/<?php echo $item['alias'] ?>" <?php if($data['cat']['Id']==$item['Id']) echo 'class="btn-active"' ?>><?php echo $item['title_'.lang]; ?></a>
<?php }} ?>
</div>
<?php
if(!empty($data['pro_1'])){
	foreach($data['pro_1'] as $item){
?>
<article class="portfolio" >
<div class="in-porfolio">
<h2 class="entry-title"><a href="<?php echo '/hinh-anh/'.$item['alias'] ?>" data-id='<?php echo $item['alias'] ?>'><?php echo $item['title_'.lang] ?></a></h2>
<div class="entry-content" i><div class="portfolio-image"><a href="<?php echo '/hinh-anh/'.$item['alias'] ?>" data-id='<?php echo $item['alias'] ?>'>
<img src="<?php echo PATH_IMG_IMAGES.$item['images']; ?>" alt="<?php echo $item['title_'.lang] ?>"></a></div>
</div>
</article>

<?php }} ?>

<?php 
if($data['page'] != "") {

	echo '<div class="clear"></div>';
	echo "<div class = 'pagging'>". $data['page']."</div>";

}
?>
</div>
<div class="referenz-detail" id="referenceDetail"></div>
<script type="text/javascript">
$(document).ready(function(){
	hash = window.location.hash;
	if(hash!=""){
		$('#referenceDetail').load(domain+'open/detailproduct.php?id='+hash.slice(1),function(){ $('#referenceDetail').show();});
	}
})
</script>

