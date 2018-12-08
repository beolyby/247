<?php 
$mflash = new Models_MFlash;
//$data['bannerphai'] = $mflash->listdata('*', 'location = "11" AND ticlock = "0"','sort asc, Id desc');
?>
<div class="container">
<section id="sp-breadcrumb-wrapper">
 
            <div class="row">
                <div id="sp-breadcrumb" class="col-sm-12 col-md-12">
                    <div class="sp-column ">
                        <div class="sp-module">
                            <div class="sp-module-content">
                                <div class="breadcrumb">
                                <?php echo $data['map_title'] ?>
            
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>
  <div class="row"><div id="content" class="col-sm-9">
        <div class="position-display">
          </div>
          <h2><?php echo stripcslashes($data['newstu']['title_vn']); ?></h2>

                <?php echo stripcslashes($data['newstu']['content_vn']); ?>
            <hr>
           <!--  <p><i class="fa fa-tags"></i>&nbsp;
                                                           <a href="http://bephafele.com/blogs/tin-tuc">Tin tức</a>
                                               </p> -->
        
            <h3>Tin tức liên quan</h3>

      <div class="owl-car-related">
             <?php
                        if(!empty($data['othernews'])){
                            foreach($data['othernews'] as $item){
                        ?>
            <div class="row tltblog">
                <div class="col-sm-3">
                        <a href="bai-viet/<?php echo $item['alias']?>.html"><img src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>?" class="img-thumbnail"></a>
                    </div>
                <div class="col-sm-9">
                        <h4 class="title-tltblog"><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h4>
                        <div><p><?=limit_text($item['description_vn'],500)?>...</p></div>

                <div class="tab-links col-lg-12">
                    <a class="pull-right"  href="bai-viet/<?php echo $item['alias']?>.html">Xem thêm&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>   

                </div>
                </div>
                
            </div><hr>
            <?php }}?>
          
           
          
                  </div>

            <div class="position-display">
          </div></div>
        <div id="column-right" class="col-sm-3 col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-sm">
                                       <?php loadview('pagefixed/right',$right);?>
                          </div>
</div>
</div>
<style type="text/css"> 
    h4.title-tltblog{
        font-weight: bold;
        line-height: 100%;
        margin-top: 0px;
        margin-bottom: 15px;
    }
    .tltblog{ 
        margin-top: 20px;
        margin-bottom: 20px; 
    }
</style>
<?php /*?>
<div class="main-container col2-right-layout">
    <div class="main container">
        <div class="row">
            <div class="col-main col-sm-9">
                <div class="breadcrumbs">
                        <?php echo $data['map_title'] ?>
    
                </div>
                <div class="blog-wrapper" id="main">
                    <div class="site-content" id="primary">
                        <div role="main" id="content">
                            <article class="blog_entry clearfix" >
                                <header class="blog_entry-header clearfix">
                                    <div class="blog_entry-header-inner">
                                        <h3 class="blog_entry-title"><?php echo stripcslashes($data['newstu']['title_vn']); ?></h3>
                                    </div>
                                    <!--blog_entry-header-inner--> 
                                </header>
                                <!--blog_entry-header clearfix-->
                                <div class="">
                                    <div class="">
                              <?php echo stripcslashes($data['newstu']['content_'.lang]); ?>
                                    </div>
                                </div>
                                <footer class="entry-meta"><time class="entry-date"><?php echo date("d-m-Y",$data['newstu']['date']); ?></time></footer>
                            </article>
                         
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-right sidebar col-sm-3">
            <div role="complementary" class="widget_wrapper13" id="secondary">
        
        <div class="popular-posts widget widget__sidebar " id="recent-posts-4">
            <h3 class="widget-title"><span>Bài viết liên quan</span></h3>
            <div class="widget-content">
                <ul class="posts-list unstyled clearfix">
                    
                    
                    <?php
                        if(!empty($data['othernews'])){
                            foreach($data['othernews'] as $item){
                        ?>
                    <li>
                        <figure class="featured-thumb" style="width:35%">
                            <a class="ft-thumb" href="bai-viet/<?php echo $item['alias']?>.html">
                                
                                <img src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>" alt="">
                                
                            </a>
                        </figure>
                        <!--featured-thumb-->
                        <h4><a title="<?php echo $item['title_vn']?>" href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h4>
                        <p class="post-meta"><i class="icon-calendar"></i>
                            <time class="entry-date"><?php echo date("d-m-Y",$item['date']); ?></time>
                            .</p>
                    </li>
                    <?php }}?>
                    
                </ul>
            </div>
            <!--widget-content--> 
        </div>
       <!--  
       <div class="popular-posts widget widget_categories" id="categories-2">
           <h3 class="widget-title"><span>Danh mục tin tức</span></h3>
           <ul>
               
               <li class="cat-item cat-item-19599"><a href="/tin-tuc">Tin tức</a></li>
               
           </ul>
       </div> -->
        <!-- Banner Ad Block -->
        <div class="block block-banner"><a href="#">
           <?php if(!empty($data['bannerphai'])){
                            foreach($data['bannerphai'] as $item){?>
                            <img src="<?php echo BASE_URL.PATH_IMG_FLASH.$item['file_vn']?>"></a>
                            <?php }}?>
    </div>
    </div>
</div>
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
				<!--ket thuc breadcrum-->
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
								<h1 class="title_font"><?php echo stripcslashes($data['newstu']['title_'.lang]); ?></h1>
								
							</div>
							<div class="entry-content">
								<?php echo stripcslashes($data['newstu']['content_'.lang]); ?>
							</div>
                    </div>
             </article> 
             <div class="share-tool-wrapper" style="text-align:right;">
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
			
            <div class="related_box">
                    <div class="row">
                        <div class="page-item-title" style="text-align: center;">
                        <h1 class="title_font">Tin khác<h1>
                        </div>
                    </div>
                        <div class="row horizontal_mode">
                        
                            <div id="smart-blog-custom" class="sdsblog-box-content grid carousel-grid owl-carousel">
						<?php
			            if(!empty($data['othernews'])){
			                foreach($data['othernews'] as $item){
			            ?>
						
                        <div class="item sds_blog_post">
                            <div class="news_module_image_holder">
                                <div class="inline-block_relative">
                                    <div class="image_holder_wrap">
                                        <a href="bai-viet/<?php echo $item['alias']?>.html"><img alt="<?php echo $item['title_vn']?>" class="feat_img_small" src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>">
                                        </a>
                                    </div>
                                    <div class="right_blog_home">
                                        <div class="content"> <span class="block_post_date"><span class="days"><?php echo date("d",$item['date']); ?></span><span class="month"><?php echo date("m",$item['date']); ?></span></span>
                                            <h3 class="sds_post_title"><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h3>
                                            <div class="info_post" >
                                                <p class="smart-auth"><i class="icon-user"></i><span>web</span>
                                                </p>
                                                <p class="viewed"><i class="icon-eye"></i>6</p>
                                            </div>
                                        </div>
                                        <div class="desc_post"> <?php echo $item['description_vn']?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <?php }}?>
                       
                       
                    </div>
                            
                        </div>
                 </div> <!--end tin khac-->
                 
			</div><!---end md 9-->
		
	</div><!--end row-->
	<?php loadview('pagefixed/right',$right);?>

</div>
</div>
</div>
<link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL.USER_PATH_CSS;?>owl.carousel.css" />
    <link rel= "stylesheet" type = "text/css" href = "<?php echo BASE_URL.USER_PATH_CSS;?>owl.theme.css" />
<script type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });

    $(document).ready(function($) {
    $('#smart-blog-custom').owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 1],
            [568, 2],
            [992, 3],
            [1200, 3]
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: true,
        stopOnHover: 4000,
        rewindNav: true,
        pagination: false,
        navigation: false,
        navigationText: ['<div class="carousel-previous disable-select"><span class="icon-angle-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-angle-right"></span></div>']
    });
   
     

   });
  
    
    
       
   
    </script> 

    
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>owl.carousel.js"></script> 
    <?php */?>