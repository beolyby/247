<?php 
 $mcatelog = new Models_MCatelog();    
?>
<section class="main_container">
    <section class="slidehow_main">
    <div class="slidehow_owl">
     <? if(!empty($data[ 'slide'])){ foreach($data[ 'slide'] as $item){ ?>
        <figure>
            <a href="dw-classic-collection">
                <img src="<?php echo BASE_URL.PATH_IMG_FLASH.$item['file_vn']?>" alt="New Collection" class="img-responsive">
            </a>    
        </figure>
        
       <?php }}?>

    </div> 
</section>
</section>

    <!-- Tab Top Products -->
    
    <!-- Tab Top Products -->

<section class="tab_top_products">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul class="nav nav-tabs nav-tabs-home">
                    
                    
                    <li class="active" style="position:static;">
                        <h2><a data-toggle="tab" href="#menu-1">SẢN PHẨM NỔI BẬT</a></h2>
                        
                        <div class="link-tab" style="position:static;"><a href="/san-pham-noi-bat" class="readmore_tab hidden-lg hidden-md hidden-xs visibile-sm">Xem thêm <i class="fa fa-caret-right"></i></a></div>
                        
                    </li>   
                    
                </ul>

                <div class="tab-content">
                       
                    <div id="menu-1" class="tab-pane fade in  active">
                        <div class="box_prduct_menu no-padding products_owl">
                            
                            <!-- sp lớn hơn 6 -->
      <?php if(!empty($data['pronoibat'])){$i=1;
                foreach($data['pronoibat'] as $item){
        if( $i==1 ){
                    ?>  

    <div class="col-md-12 col-sm-12 col-xs-12">
    <?php }?>                      

<div class="product-box">
    <div class="product-thumbnail">
        <a href="san-pham/<?php echo $item['alias']?>" title="<?php echo $item['title_vn']?>">
            <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" class="img-responsive   first-image" alt="<?php echo $item['title_vn']?>">
             <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images2']?>" class="img-responsive second-image" alt="<?php echo $item['title_vn']?>">
        </a>
        <div class="product-action">
            <form action="<?=BASE_URL."payment/addcart.html";?>" method="post" class="variants hover_action btn_buy_view" data-id="product-actions-6389753" enctype="multipart/form-data">
                
            <input type="hidden" name="idpro" value="<?php echo $item['Id']?>" />
            <input type="hidden" name="quantity" value="1" />
            <button class="btn_buy add_to_cart" title="Cho vào giỏ hàng"><i class="fa fa-shopping-bag"></i></button>
            

            
            <a href="san-pham/<?php echo $item['alias']?>" data-handle="<?php echo $item['title_vn']?>" class="right-to quick-view btn_view" title="Xem nhanh"><i class="fa fa-eye"></i></a>
            

            </form>

    </div>
</div>
<div class="product-info">
    <h3><a href="san-pham/<?php echo $item['alias']?>" title="<?php echo $item['title_vn']?>"><?php echo $item['title_vn']?></a></h3>
</div>
<div class="price-box"> 
    
    <span class="special-price">
        <span class="price product-price"><?php echo bsVndDot($item['sale_price'])?>₫</span>
    </span>
    
    <span class="old-price" style="margin-left:5px;">
        <span class="product-price-old price"><?php echo bsVndDot($item['price'])?>₫</span>
    </span>
    
    
</div>
</div>
                                
<?php if($i % 2==0){?> 
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12">
    <?php } $i=$i+1;}}?>
                                 
 </div> <!-- end md12 -->
      

  </div>
                            
        
                        </div><!-- /.products -->
                    </div>  
                    
                 
                
            </div>  
        </div>
    </div>
</section>
<!-- End Tab Top Products -->
    
    <!-- End Tab Top Products --> 

    <!-- Products Brands & Blog -->
    
    <!-- Products Brands & Blog -->
    <aside class="adv_bottom hidden-sm hidden-xs">
        <div class="container">
            <div class="row">
            <? if(!empty($data[ 'bannerhome'])){ foreach($data[ 'bannerhome'] as $item){ ?>
                <div class="col-md-4 col-sm-6 col-xs-6 full-xs">
                    <div class="adv_bottom_inner">
                        <figure>
                            <a href="<?php echo $item['link']?>"><img class="img-responsive" src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" alt="<?php echo $item['title_vn']?>"></a>
                        </figure>
                        <div class="figcaption">
                            <h2><a href=""><?php echo $item['title_vn']?></a></h2>
                        </div>
                    </div>  
                </div>
               <?php }}?> 
            </div>
        </div>
    </aside>

    <div class="home-padding1 home-review fcb">
    <div class="text-center">
        <div class="other-blog-blog text-center upper big"><span><font>Tin tức</font></span></div>
       
    </div>
    <br>
    <div class="container">
            <div class="row">
                
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="row">
                     
                        <div class="owl-news">
                        
                        
                         <?php if(!empty($data['tintuchome'])){
                        foreach($data['tintuchome'] as $item){?>  
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="new_page_small">
                                <figure class="news_page_img_small">
                                    <a href="bai-viet/<?php echo $item['alias']?>.html">
                                        
                                        <img src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>" alt="<?php echo $item['title_vn']?>" class="img-responsive">
                                        
                                    </a>
                                </figure>
                                <figcaption class="news_page_info_small">
                                    <h3><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h3>
                                    <time>Ngày <?php echo date("d-m-y",$item['date']); ?></time>
                                    <p class="news_page_description"><?php echo limit_text($item['description_vn'],200)?>,...</p>
                                    <div class="news_page_social">
                                        <!-- social sharing -->
                                        
  
  



<div class="social-media" data-permalink="">
  
    <a target="_blank" href="" class="share-facebook" title="Chia sẻ lên Facebook">
        <i class="fa fa-facebook"></i>
    </a>
  
    <a target="_blank" href="" class="share-twitter" title="Chia sẻ lên Twitter">
     <i class="fa fa-twitter"></i>
    </a>
  
    <a target="_blank" href="" class="share-google" title="+1">
     <i class="fa fa-google-plus"></i>
    </a>
  

</div>
                                        <!-- end social sharing -->
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <?php }}?>
                            </div>
                        
                        
                    </div>
                </div>
                
                
                
                
                
                        <div class="col-xs-12 text-xs-left">
                    

                </div>
                        
            </div>

        </div>
    
</div>

        <!--phần phản hồi của khách hàng-->
<div style="clear:both"></div>

<div class="phanhoi_box container-fluid ">
<div class="row">
<div class="phanhoi_bachground ">
<div class="container">
<div class="row">
     <div class="phanhoi_info">
         <div class="phanhoi_title"><?=MN_KHACHHANGNOIVECHUNGTOI?></div>
         <div class="phanhoi_des"><?=MN_KHACHHANG_DETAIL?></div>
         <div class="phanhoi_slide">
              <div id="owl-phan_hoi" class="owl-carousel" >
                   <?php
                        $sql2="select * from mn_comment where ticlock='0'";
                        $ds2=mysql_query($sql2) or die(mysql_error());
                        while($item2=mysql_fetch_assoc($ds2)) {
                  ?>
                      <div class="phanhoi_item">
                      
                           <img class="phanhoi_img" src="<?=BASE_URL."data/Phanhoi/".$item2['images'];?>">
                           <div class="phanhoi_hoten"><?=$item2['hoten']?></div>
                           <div class="phanhoi_congviec"><?=$item2['congviec']?></div>
                           <div class="phanhoi_noidung"><?=$item2['content_vn']?></div>
                      </div>
                   <?php } ?>
              </div>
         </div>
     </div>
</div>
</div>
</div>
</div>
</div>

<?php /*?>
<div class="custom-top" id="custom_slider">
    <div class="container">
        <column class="position-display">
            <div>
                <div class="dv-builder-full">
                    <div class="dv-builder search-desktop">
                        <div class="dv-module-content">
                            <div class="row">
                                <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                                    <div class="dv-item-module ">
                                    <?php loadview('pagefixed/left',$left);?>
                                    
                                        
                                    </div>
                                </div>
                                 <form action="/search/" method="get">
                                <div class="col-sm-12 col-md-9 col-lg-9 col-xs-12">
                                    <div class="dv-item-module ">
                                        <div id="search" class="input-group">
                                            <input name="q" value="" placeholder="Tìm kiếm sản phẩm" class="form-control input-lg" type="text">
                                            <span class="input-group-btn">
    <button type="button" class="btn btn-default btn-lg"><i class="fa fa-search"></i></button>
  </span>
                                        </div>
                                    </div></form>
                                    <div class="dv-item-module ">
                                        <!-- START REVOLUTION SLIDER  fullwidth mode -->

                                        <div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" style="margin:0px auto;background-color:#E9E9E9;padding:0px;margin-top:0px;margin-bottom:0px;max-height:590px;">
                                            <div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style="display:none;max-height:590px;height:590px;">
                                                <ul>
                                                    <!-- SLIDE  -->

                                                    <? if(!empty($data[ 'slide'])){ foreach($data[ 'slide'] as $item){ ?>

                                                    <li data-transition="random-premium,random" data-slotamount="7" data-masterspeed="100" data-link="<?echo $item['link']?>" data-target="_blank" data-saveperformance="off">
                                                        <!-- MAIN IMAGE -->
                                                        <img src="<?php echo BASE_URL;?>public/theme/images/dummy.png" alt="<?=$item['file_vn']?>" data-lazyload="<?php echo BASE_URL.PATH_IMG_FLASH.$item['file_vn']?>" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                                                        <!-- LAYERS -->
                                                    </li>
                                                    <?php }}?>
                                                </ul>
                                                <div class="tp-bannertimer"></div>
                                            </div>

                                            <script type="text/javascript">
                                               


                                                var setREVStartSize = function() {
                                                    var tpopt = new Object();
                                                    tpopt.startwidth = 890;
                                                    tpopt.startheight = 590;
                                                    tpopt.container = jQuery('#rev_slider_1_1');
                                                    tpopt.fullScreen = "off";
                                                    tpopt.forceFullWidth = "off";

                                                    tpopt.container.closest(".rev_slider_wrapper").css({
                                                        height: tpopt.container.height()
                                                    });
                                                    tpopt.width = parseInt(tpopt.container.width(), 0);
                                                    tpopt.height = parseInt(tpopt.container.height(), 0);
                                                    tpopt.bw = tpopt.width / tpopt.startwidth;
                                                    tpopt.bh = tpopt.height / tpopt.startheight;
                                                    if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
                                                    if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
                                                    if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
                                                    if (tpopt.bh > 1) {
                                                        tpopt.bw = 1;
                                                        tpopt.bh = 1
                                                    }
                                                    if (tpopt.bw > 1) {
                                                        tpopt.bw = 1;
                                                        tpopt.bh = 1
                                                    }
                                                    tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
                                                    if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
                                                    if (tpopt.fullScreen == "on") {
                                                        tpopt.height = tpopt.bw * tpopt.startheight;
                                                        var cow = tpopt.container.parent().width();
                                                        var coh = jQuery(window).height();
                                                        if (tpopt.fullScreenOffsetContainer != undefined) {
                                                            try {
                                                                var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                                                                jQuery.each(offcontainers, function(e, t) {
                                                                    coh = coh - jQuery(t).outerHeight(true);
                                                                    if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
                                                                })
                                                            } catch (e) {}
                                                        }
                                                        tpopt.container.parent().height(coh);
                                                        tpopt.container.height(coh);
                                                        tpopt.container.closest(".rev_slider_wrapper").height(coh);
                                                        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
                                                        tpopt.container.css({
                                                            height: "100%"
                                                        });
                                                        tpopt.height = coh;
                                                    } else {
                                                        tpopt.container.height(tpopt.height);
                                                        tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
                                                        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
                                                    }
                                                };

                                               
                                                setREVStartSize();


                                                var tpj = jQuery;

                                                var revapi1;

                                                tpj(document).ready(function() {

                                                    if (tpj('#rev_slider_1_1').revolution == undefined)
                                                        revslider_showDoubleJqueryError('#rev_slider_1_1');
                                                    else
                                                        revapi1 = tpj('#rev_slider_1_1').show().revolution({
                                                            dottedOverlay: "none",
                                                            delay: 5000,
                                                            startwidth: 890,
                                                            startheight: 590,
                                                            hideThumbs: 200,

                                                            thumbWidth: 100,
                                                            thumbHeight: 50,
                                                            thumbAmount: 3,


                                                            simplifyAll: "off",

                                                            navigationType: "bullet",
                                                            navigationArrows: "solo",
                                                            navigationStyle: "round",

                                                            touchenabled: "on",
                                                            onHoverStop: "on",
                                                            nextSlideOnWindowFocus: "off",

                                                            swipe_threshold: 75,
                                                            swipe_min_touches: 1,
                                                            drag_block_vertical: false,



                                                            keyboardNavigation: "off",

                                                            navigationHAlign: "center",
                                                            navigationVAlign: "bottom",
                                                            navigationHOffset: 0,
                                                            navigationVOffset: 20,

                                                            soloArrowLeftHalign: "left",
                                                            soloArrowLeftValign: "center",
                                                            soloArrowLeftHOffset: 20,
                                                            soloArrowLeftVOffset: 0,

                                                            soloArrowRightHalign: "right",
                                                            soloArrowRightValign: "center",
                                                            soloArrowRightHOffset: 20,
                                                            soloArrowRightVOffset: 0,

                                                            shadow: 0,
                                                            fullWidth: "on",
                                                            fullScreen: "off",

                                                            spinner: "spinner0",

                                                            stopLoop: "off",
                                                            stopAfterLoops: -1,
                                                            stopAtSlide: -1,

                                                            shuffle: "off",

                                                            autoHeight: "off",
                                                            forceFullWidth: "off",



                                                            hideThumbsOnMobile: "off",
                                                            hideNavDelayOnMobile: 1500,
                                                            hideBulletsOnMobile: "off",
                                                            hideArrowsOnMobile: "off",
                                                            hideThumbsUnderResolution: 0,

                                                            hideSliderAtLimit: 0,
                                                            hideCaptionAtLimit: 0,
                                                            hideAllCaptionAtLilmit: 0,
                                                            startWithSlide: 0
                                                        });




                                                }); 
                                            </script>


                                        </div>
                                        <!-- END REVOLUTION SLIDER -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
        </column>
        </div>
    </div>
</header>

<!-- contnent -->
<div class="container" id="content">
  <div class="row">                <div class="col-sm-12"><div class="position-display">
                <div class="dv-builder-full">
<div  class="dv-builder partner">
<div class="title"><h3>Thương Hiệu</h3></div>
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                            <div class="dv-item-module ">
                    <div id="carousel0" class="owl-carousel carousel_partner">
    <?php if(!empty($data['topbrand'])){
                        foreach($data['topbrand'] as $item){?>
    <div class="item text-center">
        <img src="<?php echo BASE_URL.PATH_IMG_PARTNERS.$item['images']?>" alt="<?php echo $item['title_vn']?>" class="img-responsive" />
      </div><?php }}?>
  </div>
<script type="text/javascript"><!--
$('#carousel0').owlCarousel({
    items: 6,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
    navText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
  responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5
        }
    }
});

--></script>

                </div>
                    </div>
    </div>
</div>
</div>
</div>

<!-- end thuong hieu -->
 
 

<?php if(!empty($data['hangsx_home'])){
                foreach($data['hangsx_home'] as $item){?>

<div class="dv-builder-full">
<div  class="dv-builder showtab_custom_left title_bluehost">
<div class="title"><h3><?php echo $item['title_vn']?></h3></div>
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xs-12">
                            <div class="dv-item-module ">
                    <div id="banner18" class="banner_main hidden-xs">
    <div class="item">
        <img src="<?php echo BASE_URL.PATH_IMG_WORKS.$item['images']?>" class="img-responsive" />
     <span class="promo-text">
                                    <span class="title"><?php echo $item['title_vn']?></span>
                                </span>
      </div>
  </div>
<script type="text/javascript"><!--
$('#banner18').owlCarousel({
    items: 1,
    nav: false,
  dots: false
});
--></script>
<style type="text/css">
  .banner_main .owl-nav.disabled{ display: none; }
</style>
                </div>
                    </div>
            <div class="col-sm-12 col-md-8 col-lg-8 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="show-in-tab-mod">
    <div class="non-show">
        <div><i class="fa fa-frown-o"></i></div>
        Xin lỗi, "Hiển thị danh mục trong tabs!" không thể hiển thị trong cột   </div>
    <div class="show-in-tab">
        <ul class="nav nav-tabs">
            <?php
            $i=1;
             $idhang = $item['Id'];
             $sql="select DISTINCT cat.* from mn_catelog as cat, mn_works as hang, mn_product as pro where pro.idcat=cat.Id and pro.hangsx='$idhang'order by sort ASC, Id DESC";
             $ds=mysql_query($sql) or die(mysql_error());
            
           while ($row=mysql_fetch_assoc($ds)) {
              
        ?>
            <li class="<?php if($i==1) echo "active" ?>"> 
            <a href="#tab-<?php echo $row['Id']?>" data-toggle="tab" aria-expanded="true">
            <?php echo $row['title_vn']?></a>
            </li>
            <?php $i=$i+1;}?>
<!-- <li class="empty_tab"><a>&nbsp;</a></li> -->
        </ul>
    </div>
    <div class="tab-content row">
     <?php   $i=1;
             $idhang = $item['Id'];
             $sql="select DISTINCT cat.* from mn_catelog as cat, mn_works as hang, mn_product as pro where pro.idcat=cat.Id and pro.hangsx='$idhang' order by sort ASC, Id DESC";
             $ds=mysql_query($sql) or die(mysql_error());
            
           while ($row=mysql_fetch_assoc($ds)) {
               $idcat = $row['Id'];
                $where = " idcat='$idcat' ";
        ?>
            <div id="tab-<?php echo $row['Id']?>" role="tabpanel" class="tab-pane <?php if($i==1) echo "active" ?>">
                <div class="owl-car502b2  owl-carousel owl-theme" >
                  <?php
                $mproduct = new Models_MProduct();
                 $prodhot = $mproduct->listdata("*",$where,"sort ASC, Id DESC");
                                if(!empty($prodhot)){ ?>
                                
                                     <?php foreach($prodhot as $item) { ?>                 
               
                <div class="product-thumb transition">
                
                  <div class="image"><a href="san-pham/<?php echo $item['alias']?>"><img data-src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" class="img-responsive owl-lazy" /></a>
                      <div class="button-group">
                    <a href="san-pham/<?php echo $item['alias']?>"><button type="button"><span class="hidden-xs hidden-sm hidden-md">Thêm vào giỏ</span> <i class="fa fa-shopping-cart"></i></button></a>
                  
                  </div>
                  </div>
                
                  <div class="caption">
                    <h4><a href="san-pham/<?php echo$item['alias']?>"><?php echo $item['title_vn']?></a></h4>
                    <p class="description"><?php echo $item['title_vn']?></p>
                        <div class="rating">
                          <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                            </div>
                        <p class="price">
                        <?php
                               if($item['sale_price']>0) {
                                   $phantram = round((($item['price'] - $item['sale_price'])*100)/$item['price']);
                           ?>
                            <span class='status-sale-per'>-<?=$phantram?>%</span><?php }?>                             
                          <span class="status-sale"></span>
                      <span class="price-new"><?php echo bsVndDot($item['sale_price'])?> VNĐ</span>
                      </br>
                      <span class="price-old"><?php echo bsVndDot($item['price'])?> VNĐ</span>

                                                    </p>
                      </div>
                  
               
              </div><?php }}?>
                </div>
                <div class="clearfix"></div>
                <div class="tab-links col-lg-12">
                    <a class="pull-right"  href="<?php echo $row['alias']?>.html">Xem thêm&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>   

                </div>
            </div><?php $i=$i+1;}?>
    </div>
    <script type="text/javascript"><!--
    //Fix the product layout responsiveness
    $(document).ready(function() {
        //we only want this code to execute one time even if the are several showintabs mods in the pages
        if (typeof showtabFLAG == 'undefined'){
            //Set flag
            showtabFLAG = true;
            
            //Columns number
            colsTab = $('#column-right, #column-left').length;

            //default values for carousel
            xsItems = 2;
            smItems = 2;
            mdItems = 4;
            lgItems = 4;
            
            //Check columns conditions
            if (colsTab == 2) {
                smItems = 2;
                mdItems = 2;
                lgItems = 2;
                $('#content .product-layout-tab').attr('class', 'product-layout-tab product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
                $('#content .product-layout-tab:nth-child(2n+2)').after('<div class="clearfix visible-md visible-sm"></div>');
            } else if (colsTab == 1) {
                mdItems = 3;
                lgItems = 4;
                $('#content .product-layout-tab').attr('class', 'product-layout-tab product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
                $('#content .product-layout-tab:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
            }else{
                $('#content .product-layout-tab:nth-child(4n+4)').after('<div class="clearfix"></div>');
            }
        }
    });
    //--></script>
            <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('.owl-car502b2').owlCarousel({

                baseClass:'owl-car-tab',
                //itemsCustom: [ [0, xsItems], [750, smItems], [970, mdItems], [1170, lgItems]],
                responsive:{
                    0:{
                        items:xsItems,

                    },
                    750:{
                        items:smItems,

                    },
                    970:{
                        items:mdItems,

                    },
                    1170:{
                        items:lgItems,

                    }
                },
                lazyLoad:true,
                pagination: false,
                nav: true,
                slideSpeed: 500,
                lazyLoad: true,
                margin: 10,
                scrollPerPage:false,
                navText: [
                "<div class='slide_arrow_prev'><i class='fa fa-angle-left'></i></div>",
                "<div class='slide_arrow_next'><i class='fa fa-angle-right'></i></div>"
                ]
            });
        });
        </script> 
    </div>


                </div>
                    </div>
    </div>
</div>
</div>
</div>
<?php }}?>
<!-- end hang sx home -->

<?php if(!empty($data['catnoibat'])){
                foreach($data['catnoibat'] as $item){?>

<div class="dv-builder-full">
<div  class="dv-builder showtab_custom_left title_bluehost">
<div class="title"><h3><?php echo $item['title_vn']?></h3></div>
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xs-12">
                            <div class="dv-item-module ">
                    <div id="banner18" class="banner_main hidden-xs">
    <div class="item">
        <img src="<?php echo BASE_URL.PATH_IMG_CATELOG.$item['images']?>" class="img-responsive" />
     <span class="promo-text">
                                    <span class="title"><?php echo $item['title_vn']?></span>
                                </span>
      </div>
  </div>
<script type="text/javascript"><!--
$('#banner18').owlCarousel({
    items: 1,
    nav: false,
  dots: false
});
--></script>
<style type="text/css">
  .banner_main .owl-nav.disabled{ display: none; }
</style>
                </div>
                    </div>
            <div class="col-sm-12 col-md-8 col-lg-8 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="show-in-tab-mod">
    <div class="non-show">
        <div><i class="fa fa-frown-o"></i></div>
        Xin lỗi, "Hiển thị danh mục trong tabs!" không thể hiển thị trong cột   </div>
    <div class="show-in-tab">
        <ul class="nav nav-tabs">
            <?php

            $idcat = $item['Id'];
            $subid = $mcatelog -> getSubId($idcat);
            if($subid != ""){
                $subid = substr($subid,0,-1);
                $where = " parentid in ($idcat,$subid ) ";
            }
            else{
                $where = "parentid='$idcat'  ";
            }
            $i=1;
            
             $sql="select * from mn_catelog where $where order by sort asc ,Id desc";
             $ds=mysql_query($sql) or die(mysql_error());
            
           while ($row=mysql_fetch_assoc($ds)) {
              
        ?>
            <li class="<?php if($i==1) echo "active" ?>"> 
            <a href="#tab2-<?php echo $row['Id']?>" data-toggle="tab" aria-expanded="true">
            <?php echo $row['title_vn']?></a>
            </li>
            <?php $i=$i+1;}?>
<!-- <li class="empty_tab"><a>&nbsp;</a></li> -->
        </ul>
    </div>
    <div class="tab-content row">
     <?php   $idcat = $item['Id'];
            $subid = $mcatelog -> getSubId($idcat);
            if($subid != ""){
                $subid = substr($subid,0,-1);
                $where = " parentid in ($idcat,$subid ) ";
            }
            else{
                $where = "parentid = '$idcat'";
            }
            $i=1;
            
             $sql = "select * from mn_catelog where $where order by sort asc ,Id desc";
             $ds = mysql_query($sql) or die(mysql_error());
            
           while ($row = mysql_fetch_assoc($ds)) {
           $idcat = $row['Id'];
                $where = "  idcat='$idcat'  ";
        ?>
            <div id="tab2-<?php echo $row['Id']?>" role="tabpanel" class="tab-pane <?php if($i==1) echo "active" ?>">
               <div class="owl-car502b3  owl-carousel owl-theme" >
                                   
                <?php
                $mproduct = new Models_MProduct();
                 $prodhot = $mproduct->listdata("*",$where,"sort ASC, Id DESC");
                                if(!empty($prodhot)){ ?>
                                
                                     <?php foreach($prodhot as $item) { ?>
                <div class="product-thumb transition">
                
                  <div class="image"><a href="san-pham/<?php echo $item['alias']?>"><img data-src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" class="img-responsive owl-lazy" /></a>
                      <div class="button-group">
                    <a href="san-pham/<?php echo $item['alias']?>"><button type="button"><span class="hidden-xs hidden-sm hidden-md">Thêm vào giỏ</span> <i class="fa fa-shopping-cart"></i></button></a>
                  
                  </div>
                  </div>
                
                  <div class="caption">
                    <h4><a href="san-pham/<?php echo$item['alias']?>"><?php echo $item['title_vn']?></a></h4>
                    <p class="description"><?php echo $item['title_vn']?></p>
                        <div class="rating">
                          <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                            </div>
                        <p class="price">
                        <?php
                               if($item['sale_price']>0) {
                                   $phantram = round((($item['price'] - $item['sale_price'])*100)/$item['price']);
                           ?>
                            <span class='status-sale-per'>-<?=$phantram?>%</span><?php }?>                             
                          <span class="status-sale"></span>
                      <span class="price-new"><?php echo bsVndDot($item['sale_price'])?> VNĐ</span>
                      </br>
                      <span class="price-old"><?php echo bsVndDot($item['price'])?> VNĐ</span>

                                                    </p>
                      </div>
                  
                
              </div><?php }}?>
                </div>
                <div class="clearfix"></div>
                <div class="tab-links col-lg-12">
                    <a class="pull-right"  href="<?php echo $row['alias']?>.html">Xem thêm&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>   

                </div>
            </div><?php $i=$i+1;}?>
    </div>
    <script type="text/javascript"><!--
    //Fix the product layout responsiveness
    $(document).ready(function() {
        //we only want this code to execute one time even if the are several showintabs mods in the pages
        if (typeof showtabFLAG == 'undefined'){
            //Set flag
            showtabFLAG = true;
            
            //Columns number
            colsTab = $('#column-right, #column-left').length;

            //default values for carousel
            xsItems = 2;
            smItems = 2;
            mdItems = 4;
            lgItems = 4;
            
            //Check columns conditions
            if (colsTab == 2) {
                smItems = 2;
                mdItems = 2;
                lgItems = 2;
                $('#content .product-layout-tab').attr('class', 'product-layout-tab product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
                $('#content .product-layout-tab:nth-child(2n+2)').after('<div class="clearfix visible-md visible-sm"></div>');
            } else if (colsTab == 1) {
                mdItems = 3;
                lgItems = 4;
                $('#content .product-layout-tab').attr('class', 'product-layout-tab product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
                $('#content .product-layout-tab:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
            }else{
                $('#content .product-layout-tab:nth-child(4n+4)').after('<div class="clearfix"></div>');
            }
        }
    });
    //--></script>
            <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('.owl-car502b3').owlCarousel({

                baseClass:'owl-car-tab',
                //itemsCustom: [ [0, xsItems], [750, smItems], [970, mdItems], [1170, lgItems]],
                responsive:{
                    0:{
                        items:xsItems,

                    },
                    750:{
                        items:smItems,

                    },
                    970:{
                        items:mdItems,

                    },
                    1170:{
                        items:lgItems,

                    }
                },
                lazyLoad:true,
                pagination: false,
                nav: true,
                slideSpeed: 500,
                lazyLoad: true,
                margin: 10,
                scrollPerPage:false,
                navText: [
                "<div class='slide_arrow_prev'><i class='fa fa-angle-left'></i></div>",
                "<div class='slide_arrow_next'><i class='fa fa-angle-right'></i></div>"
                ]
            });
        });
        </script> 
    </div>


                </div>
                    </div>
    </div>
</div>
</div>
</div>
<?php }}?>
<!-- end danh muc home -->
<!-- end danh muc trang chu -->


      </div><div class="position-display">
          </div>
          </div>
    </div>
</div>

<?php /*?>
<section class="bg_slide">
    <div id="slide">
        <div class="slider-wrap">
            <div id="slide-item-carousel" class="carousel slide" data-ride="carousel">
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                 <?php 
                 $i=1;
                    if(!empty($data['slide'])){
                       foreach($data['slide'] as $item){ ?>
                    <div class="item <?php if($i==1) echo 'active';?>">
                        <a href="#"><img src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" alt="..."></a>
                    </div>
                    
                    <?php $i=$i+1;}}?>
                    
                    
                    
                </div>
                <a class="left slide-item-carousel-control" href="#slide-item-carousel" data-slide="prev">
                    <img src="<?php echo BASE_URL?>public/template/images/arrow-left.png" /> 
                </a>
                <a class="right slide-item-carousel-control" href="#slide-item-carousel" data-slide="next">
                    <img src="<?php echo BASE_URL?>public/template/images/arrow-right.png" /> 
                </a>
            </div> 
        </div>
    </div>
</section>


<section class="gallery_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="about-title">
                    <h3>
                        <img src="//bizweb.dktcdn.net/100/030/566/themes/39740/assets/typo.png?1480681677500" />
                    </h3>
                </div>
                <div class="about-content">
                    "Đi cà phê" từ lâu không đơn thuần chỉ là uống một tách cà phê mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. Tại The Coffee House, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng. Chúng tôi tin tưởng mạnh mẽ rằng thức uống với chất lượng tốt nhất được phục vụ trong không gian thân thiện bởi những nhân viên tận tâm tại The Coffee House sẽ mang lại những niềm vui bạn có thể chia sẻ cùng bạn bè và gia đình. The Coffee House luôn luôn chào đón bạn.
                </div>
                <div class="viewmore">
                    <a href="/gioi-thieu">Xem chi tiết</a>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 hidden-sm hidden-xs col-xs-12">
                <div id="slide">
                    <div class="slider-wrap">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                
                                
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                
                                
                                
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <a href="#"><img src="//bizweb.dktcdn.net/100/030/566/themes/39740/assets/bg_slide.png?1480681677500" alt="..."></a>
                                </div>
                                
                                <div class="item">
                                    <a href="#"><img src="//bizweb.dktcdn.net/100/030/566/themes/39740/assets/bg_slide_2.png?1480681677500" alt="..."></a>
                                </div>
                                
                                
                                <div class="item">
                                    <a href="#"><img src="//bizweb.dktcdn.net/100/030/566/themes/39740/assets/bg_slide_3.png?1480681677500" alt="..."></a>
                                </div>
                                
                                
                                
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- sp ban chay -->
<section class="best-seller-pro">
    <div class="container">
        <div class="slider-items-products">
            <div class="new_title center">
                <h2>Đồ Uống Bán Chạy</h2>
            </div>
            <div id="best-seller-slider" class="product-flexslider hidden-buttons">
                <div class="slider-items slider-width-col6">
               <?php if(!empty($data['prohot'])){
                foreach($data['prohot'] as $item){?>

<div class="item ">
    <div class="product-block">
        <div class="product-image"> 
            <a href="san-pham/<?php echo$item['alias']?>">
                <figure class="product-display">
                    
                    <div class="sale-label sale-top-right">Sale</div>
                    
                    <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" class="product-mainpic" 
                    alt="<?php echo $item['title_vn'];?>"> 
                    <img class="product-secondpic" alt="<?php echo $item['title_vn']?>" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>"> 
                </figure>
            </a> 
        </div>

    </div>
    <div class="item-info">
        <div class="info-inner">
            <div class="item-title"> <a href="/nuoc-cam-ep" title="<?php echo $item['title_vn']?>"><?php echo $item['title_vn']?></a> </div>
            <div class="item-content">
                <div class="item-price">
                    
                    <div class="price-box">
                        <p class="special-price"> <span class="price-label">Giá:</span> <span class="price"><?php echo bsVndDot($item['sale_price'])?>₫</span> </p>
                        <p class="old-price" style="display: none;"> <span class="price-label">Giá:</span> <span class="price">45.000₫</span></p>
                    </div>
                    
                </div>
                <div class="product-meta">
                    <form action="san-pham/<?php echo$item['alias']?>" method="post" class="variants" id="product-actions-630408" enctype="multipart/form-data">
                        
                        
                        <div class="product-action"> 
                            <input type="hidden" name="variantId" value="987415" />
                            <button class="button btn-cart add_to_cart" title="Cho vào giỏ hàng">
                                <i class="icon-shopping-cart">&nbsp;</i><span> Xem chi tiết</span>
                            </button>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php }}?>         
                    



                       
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end sp ban chay -->

<!-- sp mới -->
<section class="best-seller-pro">
    <div class="container">
        <div class="slider-items-products">
            <div class="new_title center">
                <h2>Sản Phẩm Mới</h2>
            </div>
            <div id="best-seller-slider" class="product-flexslider hidden-buttons">
                <div class="slider-items slider-width-col6">
               <?php if(!empty($data['pronoibat'])){
                foreach($data['pronoibat'] as $item){?>

<div class="item ">
    <div class="product-block">
        <div class="product-image"> 
            <a href="san-pham/<?php echo$item['alias']?>">
                <figure class="product-display">
                    
                    <div class="sale-label sale-top-right">Sale</div>
                    
                    <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" class="product-mainpic" 
                    alt="<?php echo $item['title_vn'];?>"> 
                    <img class="product-secondpic" alt="<?php echo $item['title_vn']?>" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>"> 
                </figure>
            </a> 
        </div>

    </div>
    <div class="item-info">
        <div class="info-inner">
            <div class="item-title"> <a href="/nuoc-cam-ep" title="<?php echo $item['title_vn']?>"><?php echo $item['title_vn']?></a> </div>
            <div class="item-content">
                <div class="item-price">
                    
                    <div class="price-box">
                        <p class="special-price"> <span class="price-label">Giá:</span> <span class="price"><?php echo bsVndDot($item['sale_price'])?>₫</span> </p>
                        <p class="old-price" style="display: none;"> <span class="price-label">Giá:</span> <span class="price">45.000₫</span></p>
                    </div>
                    
                </div>
                <div class="product-meta">
                    <form action="san-pham/<?php echo$item['alias']?>" method="" class="variants" id="product-actions-630408" enctype="multipart/form-data">
                        
                        
                        <div class="product-action"> 
                            <input type="hidden" name="variantId" value="987415" />
                            <button class="button btn-cart add_to_cart" title="Cho vào giỏ hàng">
                                <i class="icon-shopping-cart">&nbsp;</i><span> Xem chi tiết</span>
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php }}?>         
                    



                       
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end sp mới -->

<section class="banner_home">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 hidden-xs banner-home">
                <figcaption>
                <?php if(!empty($data['bannerhome1'])){
                       foreach($data['bannerhome1'] as $item){ ?>
                    <a href="#"><img src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" /></a>
               <?php }}?>
                </figcaption>
            </div>
            <div class="col-md-8 col-sm-8 hidden-xs banner-home">
                <figcaption>
                <?php if(!empty($data['bannerhome2'])){
                       foreach($data['bannerhome2'] as $item){ ?>
                    <a href="#"><img src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" /></a>
               <?php }}?>
                </figcaption>
            </div>
        </div>
    </div>
</section>




<?php /*?>
<div class="container">
        <div class="row">
            <div class="col-md-12">
            <div class="slider-wrapper theme-default">
            <div id="slider"  class="nivoSlider">
                
                 <?php 
                
                    if(!empty($data['slide'])){
                        foreach($data['slide'] as $item){?>
                        <a href="">
                        <img class="img-responsive" alt="" src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" data-thumb="<?php echo PATH_IMG_FLASH.$item['file_vn']?>"/>
                    </a>
                            
                   <?php }} ?>
                
            </div>
            </div>
        </div>
    </div>  
</div>
<div class="home_banner container block" style="display: none;">
    <div class="row">
        <div class="col1 col-xs-12 col-sm-12 col-md-4">
            <div class="feature-col">
                <div class="features-conten">
                    <a href="#"><img class="img-responsive" src="<?php echo BASE_URL?>/public/template/images/banner1.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="col2 col-xs-12 col-sm-12 col-md-8">
            <div class="feature-col">
                <div class="features-conten">
                    <a href="#"><img class="img-responsive" src="<?php echo BASE_URL?>/public/template/images/banner2.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- phan duoi 2 ban ner -->
<div id="columns" class="container">
    
    <div class="row">
        <div id="center_column" class="center_column col-xs-12 col-sm-12 col-md-12">
            <div class="clearfix">
                <div class="tab-category-container-slider horizontal_mode block">
                    <div class="">
                        <div class="tab-category-slider">
                            <div class="title_block title_font">
                                <div class="title-g"><h4>
                                sản phẩm bán chạy </h4>
                                     <div class="line-hr"></div>
                                     <div class="line-hr2"></div>
                                </div>
                            </div>
                            <div class="row">
                        <div class="fieldtabproductsisotope-products"">
                            <ul class="isotope-grid" style="position: relative; height: 438px;">
                            <?php if(!empty($data['prohot'])){
                                            foreach($data['prohot'] as $item){?>
                                <li class="col-xs-12 col-sm-6 col-md-3 isotope-item item riesling" >
                                    <div class="item-wrapper">
                                        <div class="item-inner">
                                            <div class="left-block">
                                                <a class="product_img" href="san-pham/<?php echo$item['alias']?>" title=""> <span class="hover-image"><img class="replace-2x img-responsiveHUY" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" height="280" width="260"></span> <span class="img_root"> <img class="replace-2x img-responsiveHUY" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="" height="280" width="260"> </span> </a>
                                                <div class="conditions-box">
                                                    <p class="new">bán chạy</p>
                                                </div>
                                                <div class="button-container">
                                                    <div class="tab_button">
                                                        <a class="button_cart button ajax_add_to_cart_button btn btn-default caption-add-to-cart title_font" href="san-pham/<?php echo$item['alias']?>" rel="nofollow" title="Add to cart" data-id-product="10" data-minimal_quantity="1"> <i class="icon-shopping-bag"></i>
                                                        </a>
                                                        
                                                        <a class="quick-view title_font" href="san-pham/<?php echo$item['alias']?>" rel="san-pham/<?php echo$item['alias']?>" title="Quick view"> <i class="icon-eye"></i>
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="right-block">
                                                <h5 class="sub_title_font"> <a class="product-name" href="" title="Women drinking wine"> <?php echo $item['title_vn']?> </a></h5>
                                                <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                                    
                                                </div>
                                                <div class="content_price"> <span class="price product-price"> <?php echo bsVndDot($item['sale_price'])?>vnđ </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <?php }}?>
                                
                            </ul>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                
                </div>
                <div class="home-banner-2 block ">
                    <div class="feature-col">
                        <div class="features-content">
                            <a href="#"><img class="img-responsive" src="<?php echo BASE_URL?>/public/template/images/banner5.jpg" alt="">
                            </a>
                        </div>
                    </div>
                <div id="fieldtabproductsisotope">
                    <div class="title_block title_font">
                       <div class="title-g"><h4>
                            sản phẩm mới </h4>
                                 <div class="line-hr"></div>
                                 <div class="line-hr2"></div>
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="fieldtabproductsisotope-products">
                            <ul class="isotope-grid" style="position: relative; height: 438px;">
                            <?php if(!empty($data['pronoibat'])){
                                            foreach($data['pronoibat'] as $item){?>
                                <li class="col-xs-12 col-sm-6 col-md-3 isotope-item item riesling" >
                                    <div class="item-wrapper">
                                        <div class="item-inner">
                                            <div class="left-block">
                                                <a class="product_img" href="san-pham/<?php echo$item['alias']?>" title=""> <span class="hover-image"><img class="replace-2x img-responsiveHUY" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" height="280" width="260"></span> <span class="img_root"> <img class="replace-2x img-responsiveHUY" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="" height="280" width="260"> </span> </a>
                                                <div class="conditions-box">
                                                    <p class="new">Mới</p>
                                                </div>
                                                <div class="button-container">
                                                    <div class="tab_button">
                                                        <a class="button_cart button ajax_add_to_cart_button btn btn-default caption-add-to-cart title_font" href="san-pham/<?php echo$item['alias']?>" rel="nofollow" title="Add to cart" data-id-product="10" data-minimal_quantity="1"> <i class="icon-shopping-bag"></i>
                                                        </a>
                                                        
                                                        <a class="quick-view title_font" href="san-pham/<?php echo$item['alias']?>" rel="san-pham/<?php echo$item['alias']?>" title="Quick view"> <i class="icon-eye"></i>
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="right-block">
                                                <h5 class="sub_title_font"> <a class="product-name" href="" title="Women drinking wine"> <?php echo $item['title_vn']?> </a></h5>
                                                <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                                    
                                                </div>
                                                <div class="content_price"> <span class="price product-price"> <?php echo bsVndDot($item['sale_price'])?>vnđ </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <?php }}?>
                                
                            </ul>
                        </div>
                    </div>
                <!-- phan tin tuc -->
                <div class="smart-blog-home-post block title_center horizontal_mode">
    <div class="container">
    
        <h2 class="title_block title_font">
            <div class="title-g">
            <h4>tin tức nổi bật </h4>
                 <div class="line-hr"></div>
                 <div class="line-hr2"></div>
            </div>
        </h2>
        <div class="row">
                    <div id="smart-blog-custom" class="sdsblog-box-content grid carousel-grid owl-carousel">
                    <?php if(!empty($data['tintuchome'])){
                        foreach($data['tintuchome'] as $item){?>
                        
                        <div class="item sds_blog_post">
                            <div class="news_module_image_holder">
                                <div class="inline-block_relative">
                                    <div class="image_holder_wrap">
                                        <a href="bai-viet/<?php echo $item['alias']?>.html"><img alt="<?php echo $item['title_vn']?> class="feat_img_small" src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>" style="height: 230px;width: 370px">
                                        </a>
                                    </div>
                                    <div class="right_blog_home">
                                        <div class="content"> <span class="block_post_date"><span class="days"><?php echo date("d",$item['date']); ?></span><span class="month"><?php echo date("m",$item['date']); ?></span></span>
                                            <h3 class="sds_post_title"><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h3>
                                            <div class="info_post" >
                                                <p class="smart-auth"><i class="icon-user"></i><span>Quatetquatang.com</span>
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
    </div>
</div>

                <!-- end phan tin tuc -->
                <!-- top brands -->
                <div id="fieldbrandslider" class="block title_center horizontal_mode">
                    <h4 class="title_block title_font"><div class="title-g"><h4>
                                top brand </h4>
                                     <div class="line-hr"></div>
                                     <div class="line-hr2"></div>
                                </div></h4>
                    <div class="row">
                        <div id="fieldbrandslider-manufacturers" class="grid carousel-grid owl-carousel">
                        <?php if(!empty($data['topbrand'])){
                        foreach($data['topbrand'] as $item){?>
                            <div class="item">
                                <a class="img-wrapper" href="" title="<?php echo $item['title_vn']?>"> <img class="img-responsive" src="<?php echo BASE_URL.PATH_IMG_PARTNERS.$item['images']?>" width="210" height="62" alt="<?php echo $item['title_vn']?>" /> </a>
                            </div>
                           <?php }}?> 
                        </div>
                    </div>
                </div>
                <!-- end top brands -->
                 <!-- top brands -->
                <div id="fieldbrandslider" class="block title_center horizontal_mode">
                    <h4 class="title_block title_font"><div class="title-g"><h4>
                                logo khách hàng </h4>
                                     <div class="line-hr"></div>
                                     <div class="line-hr2"></div>
                                </div></h4>
                    <div class="row">
                        <div id="fieldbrandslider-manufacturers2" class="grid carousel-grid owl-carousel">
                        <?php if(!empty($data['logokhachhang'])){
                        foreach($data['logokhachhang'] as $item){?>
                            <div class="item">
                                <a class="img-wrapper" href="" title="<?php echo $item['title_vn']?>"> <img class="img-responsive" src="<?php echo PATH_IMG_FLASH.$item['file_vn']?>" width="210" height="62" alt="<?php echo $item['title_vn']?>" /> </a>
                            </div>
                           <?php }}?> 
                        </div>
                    </div>
                </div>
                <!-- end top brands -->
                
                </div>
                </div>
                
                </div>
            </div>
        </div>



   

<!-- endduoi 2 ban ner -->
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
   $('#fieldbrandslider-manufacturers').owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 2],
            [568, 3],
            [992, 4],
            [1200, 5]
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
        
    });

   $('#fieldbrandslider-manufacturers2').owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 2],
            [568, 3],
            [992, 4],
            [1200, 5]
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
        
    });
     

   });
  
    
    
       
   
    </script> 

    
    <script type="text/javascript" src="<?php echo BASE_URL.USER_PATH_JS;?>owl.carousel.js"></script> 
<!--Kết thúc slidershow-->
<?php */?>
                    