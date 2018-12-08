<?php 
$db = new Models_MWebsite;
$row_web = $db->getOneWebsite(1); 
$mflash = new Models_MFlash;
$db2 = new Models_MProduct;
$mcatelog = new Models_MCatelog;
//$data["bannerphai"] = $mflash->getOneflashLocation(11);
//$mnews = new Models_MNews;
//$data['tintuc-right']= $mnews->listdata('*', 'idcat="7" AND ticlock = "0" ','sort asc, Id desc',10);
$data['sphot']= $db->listdata('*', 'hot="1" AND ticlock = "0" ','sort asc, Id desc');
$data['bannerphai'] = $mflash->listdata('*', 'location = "11" AND ticlock = "0"','sort asc, Id desc');
$data['catelog']= $mcatelog->listdata('*', 'parentid = "0" and ticlock = "0"  ','sort asc, Id desc');
$data['pro_km'] = $db2->listdata('*'," ticlock ='0' and hot = '1'  ",'sort asc, Id desc');

?>


<div class="select_top_products">
  <div class="title_page">
    <h2>Sản phẩm khuyến mãi</h2>
  </div>
  <div class="product_top_mgt">
    
     <?php if (!empty($data['pro_km'])){ 
                foreach ($data['pro_km'] as $item){?>
    <div class="product-box relative-productsss">                             
  <div class="product-thumbnail f-left">
    <a href="san-pham/<?php echo$item['alias']?>" title="<?php echo $item['title_vn']?>">
      <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="<?php echo $item['title_vn']?>"
    </a>    
  </div>
  <div class="product-infos f-left">
    <h3 class="product-name">
      <a href="san-pham/<?php echo$item['alias']?>" title="<?php echo $item['title_vn']?>"><?php echo $item['title_vn']?></a>
    </h3>
    
    <div class="price-box clearfix">
      
      <div class="special-price f-left">
        <span class="price product-price"><?php echo bsVndDot($item['sale_price'])?>₫</span>
      </div>
        
      <div class="old-price">                              
        <span class="price product-price-old">
          <?php echo bsVndDot($item['price'])?>₫      
        </span>
      </div>
      
      
    </div>    
    
  </div>
</div>
    
 <?php }}?>   
    
    
    
    
    
    
  </div>
</div>


<script type="text/javascript">
(function ($) {
 "use strict";
/*--------------------------------
 slide product
---------------------------------- */   
     /*$(".slide-product-special").owlCarousel({
      navigation : false, 
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });*/
$('.special-product .owl-carousel .owl-item:nth-child(3n+3)').after('<div class="clearfix"></div>');
})(jQuery);    
</script>
<?php /*?>
                        <div class="side-nav-categories">
                            <div class="block-title"> Danh mục sản phẩm </div>
                            <!--block-title--> 
                            <!-- BEGIN BOX-CATEGORY -->
                            <div class="box-content box-category">
                                <ul>
                                    <?php if(!empty($data['catelog'])){
                                foreach($data['catelog'] as $item){
                                ?> 
                                    
                                    <li> <a href="<?php echo $item['alias']?>.html" title=""> <?php echo $item['title_vn']?></a> <span class="subDropdown minus"></span>
                                        <ul class="level0_415" style="display:block">
                                        <?php 
                                                    $idcat = $item['Id'];
                                                    $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                                                    $ds=mysql_query($sql) or mysql_error;
                                                    while ($subcat = mysql_fetch_assoc($ds)) {?>
                                            
                                            
                                            <li> <a href="<?php echo $subcat['alias']?>.html"><?php echo $subcat['title_vn']?></a></li>
                                            <?php }?>
                                            <!--level1-->
                                        </ul>
                                        <!--level0--> 
                                    </li><?php }}?>
                                    
                                    
                                    
                                    
                                    
                                </ul>
                            </div>
                            <!--box-content box-category--> 
                        </div>
                        <div class="block block-banner hidden-sm hidden-xs"><a href="#">
                        <?php if(!empty($data['bannerphai'])){
                            foreach($data['bannerphai'] as $item){?>
                            <img src="<?php echo BASE_URL.PATH_IMG_FLASH.$item['file_vn']?>"></a>
                            <?php }}?>
                        </div>
                            <div class="block block-product">
                            <div class="block-title"><i class="fa fa-star"></i> Sản phẩm ưa thích </div>
                            <div class="box-content box-product">
                                <div class="row">
                                    
                                    

<?php if(!empty($data['sphot'])){
                    foreach($data['sphot'] as $item){?>
<div class="sidebar-item">
    <div class="product-block col-md-4 col-sm-4 hidden-xs">
        <div class="product-image"> 
            <a href="/san-pham/<?php echo $item['alias'] ?>">
                <figure class="product-display">
                    
                    <img src="<?php echo PATH_IMG_PRODUCT.$item['images'] ?>" class="product-mainpic" alt="<?php echo $item['title_vn'] ?>"> 
                </figure>
            </a> 
        </div>
    </div>
    <div class="item-info col-md-8 col-sm-8 hidden-xs">
        <div class="info-inner">
            <div class="item-title"> <a href="/san-pham/<?php echo $item['alias'] ?>" title="<?php echo $item['title_vn'] ?>"><?php echo $item['title_vn'] ?></a> </div>
            <div class="item-content">
                <div class="item-price">
                    
                    <div class="price-box">
                        <p class="special-price"> <span class="price-label">Giá: </span> <span class="price"><?php echo bsVndDot($item['sale_price']) ?>₫</span> </p>
                    </div>
                    
                </div>
                <div class="clear"></div>
            </div>
            <div id="bizweb-product-reviews" data-id="630403" ></div>
        </div>
    </div>
    <div class="clear"></div>
</div> <?php }}?>
                                    
                                </div>
                            </div>
                        </div>
                    
 
	
	
		 <div id="right_column" class="col-xs-12 col-sm-12 col-md-3 column">
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
                   
                                <div class="item first row" >
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