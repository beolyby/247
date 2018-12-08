<!-- right va left cua bai viet -->
<?php 
//$db = new Models_MWebsite;
//$row_web = $db->getOneWebsite(1); 
//$mflash = new Models_MFlash;
//$db = new Models_MProduct;
$mcatelog = new Models_MCatelog;
//$mnews = new Models_MNews;

//$data["bannerphai"] = $mflash->getOneflashLocation(11);
//$mnews = new Models_MNews;
//$data['tintuc-right']= $mnews->listdata('*', 'idcat="7" AND ticlock = "0" ','sort asc, Id desc',10);
//$data['bannerphai'] = $mflash->listdata('*', 'location = "11" AND ticlock = "0"','sort asc, Id desc');
$data['catelog']= $mcatelog->listdata('*', 'parentid = "0" and ticlock = "0"  ','sort asc, Id desc');
//$data['tintuchome'] = $mnews->listdata("*","home= '1' AND ticlock= '0' ","sort ASC, Id DESC");

?>
<div class="products_pages_filter_left">
    <div class="header-filter hidden-sm hidden-md hidden-lg">
    <span id="show_danhmuc" class="header-col-list">
      Danh mục sản phẩm
    </span>
    <span id="show_boloc_mb" class="button_bl"><i class="fa fa-filter" aria-hidden="true"></i>
 Bộ lọc</span>
    </div>
    <div class="header-filter-back hidden-sm hidden-md hidden-lg">
    
    <span id="hidden_boloc_mb" class="button_bl"><i class="fa fa-arrow-left" aria-hidden="true"></i>
 Quay lại</span>
    </div>
    
    <div id="list-collection" class="displaymobile">
      <div class="title_page title_page_collection">
        <h2 href="#collection_list" aria-expanded="false">
          Danh mục sản phẩm
        </h2>
      </div>
      <ul id="collection_list">
      <?php if(!empty($data[ 'catelog'])){
                             foreach($data[ 'catelog'] as $item){ 
                                $idcat = $item['Id'];
                 
                            $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                            $ds=mysql_query($sql) or mysql_error;
                            $row=mysql_num_rows($ds);                        
                                            ?>                    

        <li class="active">
          <a href="<?php echo $item['alias'] ?>.html"><?php echo $item['title_vn'] ?></a>
         <span class="block_categories_list_count">
          
          </span>
  <?php if($row>0) { ?>  
          <ul style="display: none;">
           <?php while ($item2 = mysql_fetch_assoc($ds)) {?>
            <li class="">
              <a href="<?php echo $item2['alias'] ?>.html"><h5> + <?php echo $item2['title_vn'] ?></h5></a>
            </li>
            <?php }?>
          </ul><?php }?>
        </li><?php }}?>
        
      </ul>
    </div>
    
    <!-- Bộ lọc -->
    <div class="main_boloc_mobile" id="fitter-mobile">
    
    <div id="collection-filters-container"></div>
    
    <!-- end Bộ lọc -->
    </div>
  </div>
<?php /*?>
<div class="categories-side">
                                            <h2 class="sidebar-title">Danh Mục Sản Phẩm</h2>
                                            <div class="all-category">
                                                <ul id="menu_categfory" class="dropdown_ms treeview tendina">
                        <?php if(!empty($data[ 'catelog'])){
                             foreach($data[ 'catelog'] as $item){ 
                                $idcat = $item['Id'];
                 
                            $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                            $ds=mysql_query($sql) or mysql_error;
                            $row=mysql_num_rows($ds);                        
                                            ?>                            
                                                    <li>
                                                        <a href="<?php echo $item['alias'] ?>.html"><?php echo $item['title_vn'] ?></a>
                            <?php if($row>0) { ?>           <span class="icons"></span><?php }?>
                                                        <ul class="label2 sub-menu treeview" style="display: none;">
                            <?php while ($item2 = mysql_fetch_assoc($ds)) {
                                $idcat2 = $item2['Id'];
                 
                            $sql2="select * from mn_catelog where parentid='$idcat2' and ticlock = '0' order by sort asc,Id desc";
                            $ds2=mysql_query($sql2) or mysql_error;
                            $row2=mysql_num_rows($ds2);  


                                ?>     
                                                            <li class="expandable">
                                                                <a title="<?php echo $item2['title_vn'] ?>" href="<?=$item2['alias']?>.html"><?php echo $item2['title_vn'] ?></a>

                            <?php if($row2>0) { ?>           <span class="icons"></span><?php }?>
                                                                <ul class="label3 sub-menu treeview" style="display: none;">
                            <?php while ($item3 = mysql_fetch_assoc($ds2)) {?>
                                                                    <li>
                                                                        <a href="<?=$item3['alias']?>.html"><?=$item3['title_vn']?></a>

                                                                    </li><?php }?>
                                                                </ul>
                                                            </li><?php }?>
                                                           
                                                        </ul>
                                                    </li><?php }}?>
                                                  
                                                </ul>
                                            </div>
                                        </div>
                                        <script>
                                            $('.dropdown_ms').tendina({

                                            });
                                            var isMobile = window.matchMedia("only screen and (max-width: 760px)");
                                            if (isMobile.matches) {
                                                $('.all-category').hide();
                                                $('.sidebar-title').click(function(event) {
                                                    $('.all-category').toggle(400);
                                                });
                                            } else {}
                                        </script>
<?php /*?>
<div role="complementary" class="widget_wrapper13" id="secondary">
        
        <div class="popular-posts widget widget__sidebar " id="recent-posts-4">
            <h3 class="widget-title"><span>Bài viết nổi bật</span></h3>
            <div class="widget-content">
                <ul class="posts-list unstyled clearfix">
                    
                    
                    <?php if(!empty($data['tintuchome'])){
                                foreach($data['tintuchome'] as $item){?>
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
 
    
    <?php /*?>
         <div id="left_column" class="column col-xs-12 col-sm-12 col-md-3">
            <!-- tin tuc noi bat -->
            <div id="recent_article_smart_blog_block_left" class="block blogModule boxPlain">
                            <h4 class="title_block sdstitle_block"><a href="">Tin nổi bật</a></h4>
                            <div class="block_content sdsbox-content">
                                <ul class="recentArticles">
                                <?php if(!empty($data['tintuchome'])){
                                foreach($data['tintuchome'] as $item){?>
                                    <li>
                                        <a class="image" title="<?php echo $item['title_vn']?>" href="bai-viet/<?php echo $item['alias']?>.html"> <img class="images_left" alt="<?php echo $item['title_vn']?>" src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>"> </a> <a class="title" title="<?php echo $item['title_vn']?>" href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a> <span class="info"><?php echo date("d-m-Y",$item['date']); ?></span>
                                    </li>
                                  <?php }}?>
                                   
                                    
                                </ul>
                            </div>
                        </div>
            <!-- end tin tuc noi bat -->
                        <div id="categories_block_left" class="block">
                            <h2 class="title_block">danh mục</h2>
                            <div class="block_content">
                                <ul class="tree dhtml">
                                 <?php if(!empty($data['catelog'])){
                                foreach($data['catelog'] as $item){
                                ?> 
                                    <li> <a href="<?php echo $item['alias']?>.html" title=""> <?php echo $item['title_vn']?></a>
                                        <ul>
                                          <?php 
                                                    $idcat = $item['Id'];
                                                    $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                                                    $ds=mysql_query($sql) or mysql_error;
                                                    while ($subcat = mysql_fetch_assoc($ds)) {?>  
                                            <li> <a href="<?php echo $subcat['alias']?>.html"><?php echo $subcat['title_vn']?></a>
                                                <ul>
                                                <?php 
                                                            $idcat2 = $subcat['Id'];
                                                            $sql2="select * from mn_catelog where parentid='$idcat2' and ticlock = '0' order by sort asc,Id desc";
                                                            $ds2=mysql_query($sql2) or mysql_error;
                                                            while ($subcat2 = mysql_fetch_assoc($ds2)) {?>
                                                    <li> <a href="<?php echo $subcat['alias']?>.html"><?php echo $subcat2['title_vn']?></a>
                                                    </li>
                                                    <?php }?>
                                                </ul>
                                            </li>
                                            <?php }?>
                                        </ul>
                                    </li>
                                <?php }}?>
                                </ul>
                            </div>
                        </div>
                        <div class="special_block_right block horizontal_mode">
                            <h4 class="title_block title_font"> <a href="" title=""> sản phẩm mới </a></h4>
                            <div class="owl-controls clickable">
                            <div class="owl-buttons">
                            <div class="owl-prev">
                            <div class="carousel-previous disable-select">
                            <span class="icon-angle-left"></span>
                            </div></div>
                            <div class="owl-next"><div class="carousel-next disable-select"><span class="icon-angle-right"></span></div></div></div></div>
                            <div id="owl-right" class="carousel-grid owl-carousel">
                            <?php if(!empty($data['sphot'])){
                    foreach($data['sphot'] as $item){?>
                                <div class="item first row">
                                                <div class="item-inner">
                                                    <div class="left-block">
                                                        <a class="product_img" href="/san-pham/<?php echo $item['alias'] ?>" title=""> <span class="hover-image"><img class="replace-2x img-responsive" src="<?php echo PATH_IMG_PRODUCT.$item['images1'] ?>" alt="Nullam malesuada e" title="Nullam malesuada e" height="280" width="260"/></span> <span class="img_root"> <img class="replace-2x img-responsive" src="<?php echo PATH_IMG_PRODUCT.$item['images'] ?>" height="280" width="260" alt="" /> </span> </a>
                                                        <div class="conditions-box">
                                                            <?php if($item['hot']==1){?><p class="new">New</p><?php }?>
                                                            <?php if($item['home']==1){?><p class="sale">Nổi Bật</p><?php }?>
                                                            <p class="sale" style="display:none">Sale</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <div class="tab_button">
                                                                
                                                                <a class="addToWishlist title_font wishlistProd_8" href="/san-pham/<?php echo $item['alias'] ?>" data-tooltip="Add to Wishlist" rel="nofollow" onclick="WishlistCart('wishlist_block_list', 'add', '8', false, 1); return false;"> <span><i class="icon-heart"></i></span> </a>
                                                                <a class="quick-view title_font" href="/san-pham/<?php echo $item['alias'] ?>" rel="/san-pham/<?php echo $item['alias'] ?>" title="Quick view"> <i class="icon-eye"></i>
                                                                </a>
                                                                <a class="btn btn-theme add_to_compare title_font" href="/san-pham/<?php echo $item['alias'] ?>" data-id-product="8" data-tooltip="Add to Compare" data-product-cover="<?php echo PATH_IMG_PRODUCT.$item['images'] ?>" data-product-name="Nullam malesuada e"> <span><i class="icon-retweet"></i></span> </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <h5 class="sub_title_font"> <a class="product-name" href="/san-pham/<?php echo $item['alias'] ?>" title="Nullam malesuada e"> <?php echo $item['title_vn'] ?> </a></h5>
                                                       
                                                        <div class="content_price"> <span class="price product-price"> <?php echo bsVndDot($item['sale_price']) ?> vnđ</span> <span class="old-price product-price" style="display: none"> $20.50 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php }}?>
                            
                            </div>

                        </div>
                        <div class="field-slideshow-container">
                            <div class="flexslider field-nivoslider">
                                <div class="field-loading"></div>
                                <div id="field-slideshow-home" class="slides">
                                <?php if(!empty($data['bannerphai'])){
                            foreach($data['bannerphai'] as $item){?>
                                    <a href="#"><img style="display:none" src="<?php echo BASE_URL.PATH_IMG_FLASH.$item['file_vn']?>" alt="" title="#htmlcaption1" />
                                    </a>
                                    <?php }}?>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end cot phai -->
    <script type="text/javascript">
        $(window).load(function() {
            $('#field-slideshow-home').nivoSlider({
                effect: 'random',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: '1000',
                pauseTime: '4800',
                startSlide: 0,
                directionNav: false,
                controlNav: 1,
                controlNavThumbs: false,
                pauseOnHover: true,
                manualAdvance: false,
                prevText: 'Prev',
                nextText: 'Next',
                afterLoad: function() {
                    $('.field-loading').css("display", "none");
                },
                beforeChange: function() {
                    $('.field-slideshow-title, .field-slideshow-des').css("left", "-100%");
                    $('.field-slideshow-readmore').css("left", "-100%");
                },
                afterChange: function() {
                    $('.field-slideshow-title, .field-slideshow-des, .field-slideshow-readmore').css("left", "0")
                }
            });
        }); /* ]]> 
       jQuery(document).ready(function($){
    var right = $("#owl-right");
    right.owlCarousel({
            items:1,
            responsiveRefreshRate: 50,
            slideSpeed: 200,
            paginationSpeed: 500,
            rewindSpeed: 600,
            autoPlay: true,
            stopOnHover: false,
            rewindNav: true,
            pagination: false,
            navigation: false,
            navigationText: ['<div class="carousel-previous disable-select"><span class="icon-angle-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-angle-right"></span></div>']
        }); 
$(".owl-controls .owl-prev").click(function(){
        right.trigger('owl.prev');})
    $(".owl-controls .owl-next").click(function(){
        right.trigger('owl.next');})
});

       // danh Models_MProduct
       $(document).ready(function() {
    $('ul.tree.dhtml').hide();
    if (!$('ul.tree.dhtml').hasClass('dynamized')) {
        $('ul.tree.dhtml ul').prev().before("<span class='grower OPEN'> </span>");
        $('ul.tree.dhtml ul li:last-child, ul.tree.dhtml li:last-child').addClass('last');
        $('ul.tree.dhtml span.grower.OPEN').addClass('CLOSE').removeClass('OPEN').parent().find('ul:first').hide();
        $('ul.tree.dhtml').show();
        $('ul.tree.dhtml .selected').parents().each(function() {
            if ($(this).is('ul'))
                toggleBranch($(this).prev().prev(), true);
        });
        toggleBranch($('ul.tree.dhtml .selected').prev(), true);
        $('ul.tree.dhtml span.grower').click(function() {
            toggleBranch($(this));
        });
        $('ul.tree.dhtml').addClass('dynamized');
        $('ul.tree.dhtml').removeClass('dhtml');
    }
});
       function openBranch(jQueryElement, noAnimation) {
    jQueryElement.addClass('OPEN').removeClass('CLOSE');
    if (noAnimation)
        jQueryElement.parent().find('ul:first').show();
    else
        jQueryElement.parent().find('ul:first').slideDown();
}

function closeBranch(jQueryElement, noAnimation) {
    jQueryElement.addClass('CLOSE').removeClass('OPEN');
    if (noAnimation)
        jQueryElement.parent().find('ul:first').hide();
    else
        jQueryElement.parent().find('ul:first').slideUp();
}

function toggleBranch(jQueryElement, noAnimation) {
    if (jQueryElement.hasClass('OPEN'))
        closeBranch(jQueryElement, noAnimation);
    else
        openBranch(jQueryElement, noAnimation);
};;
    </script>
    <?php */?>