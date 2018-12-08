<?php 
$db = new Models_MWebsite;
$row_web = $db->getOneWebsite(1);

?>
 
<section class="main_container">
     <!-- breadcrumb -->
<section class="bread-crumb">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
       <div class="breadcrumb">
       <?php echo $data['map_title'] ?>
      </div>
      </div>
    </div>
  </div>
</section> 

    <!-- Details Products Page -->
    <section class="products_details_page">
      <div class="container">
        <div class="row">
          <!-- product slider pro-->
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product-image-block product-view">
            <div class="row">
            <div class="product-img-box col-lg-7 col-sm-7 col-md-7 col-xs-12">
                  <ul class="moreview" id="moreview">
                    <li class="moreview_thumb  "> 
                      <img class="moreview_thumb_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>"> 
                      <img class="moreview_source_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>"> 
                      <img style="position: absolute;" class="zoomImg" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>">
                    </li>
                    <?php for ($i=1; $i <=5 ; $i++) { if($data['prod']['images'.$i]!=''){?>
                      
                    
                    <li class="moreview_thumb  "> 
                      <img class="moreview_thumb_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>"> 
                      <img class="moreview_source_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>"> 
                      <img style="position: absolute;" class="zoomImg" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>">
                    </li>
                    <?php }}?>
                    
                    
                  </ul>
                  <div class="moreview-control"> <a style="right: 42px;" href="javascript:void(0)" class="moreview-prev"></a> 
                    <a style="right: 42px;" href="javascript:void(0)" class="moreview-next"></a> 
                  </div>
                </div>
            <?php /*?> <div class="clearfix col-lg-8 col-md-7 col-sm-12 col-xs-12">
                
                <div class="featured-image">            
                  <img id="product-featured-image" class="img-responsive center-block" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>" 
                  alt="<?php echo $data['prod']['title_vn'] ?>"
                   />       
                </div>
                

                <div id="swiper-container" class="sw_details swiper-container more-views" data-margin="10" data-items="3" data-direction="horizontal" style="overflow:hidden;" >
                  <div class="swiper-wrapper">
                     <?php for ($i=1; $i <=4 ; $i++) { if($data['prod']['images'.$i]!=''){?>
                    <div class="swiper-slide">
                      <a href="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>" class="thumb-link" title="" rel="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>">
                        <img src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>" alt="" class="img-responsive center-block" />
                      </a>
                    </div>
                    <?php }}?>
                   
                    
                   
                                   
                  </div>   
                </div>
                
              </div><?php */?>

              <script type="text/javascript">
                jQuery(document).ready(function () {

    $('.thumb-link').click(function(e){
      e.preventDefault();
      var hr = $(this).attr('href');
      $('#product-featured-image').attr('src',hr);
    });

  });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     
    });


  </script>
              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 yyy">
                <div class="products_details_info sidebar_banner ok">
                  <div class="tilte_producst">
                    <h1 itemprop="name"><?php echo $data['prod']['title_vn'] ?></h1>
                  </div>
                  <div class="product-vendor">
                   <?php echo $data['prod']['description_vn'] ?>
                    <div style="clear:both;"></div>
                  </div>

                  <!--PRICE PRODUCT-->
                  















<div class="price-box price_products_main">
  
  
  
  <div>
    <span class="special-price">
      <strong>Giá sales:</strong> <span class="price"><?php echo bsVndDot($data['prod']['sale_price'])?>₫</span>
    </span>
  </div>
  
  <div>
    <span class="old-price">
      <strong>Giá sản phẩm:</strong> <span class="product-price-old price"><?php echo bsVndDot($data['prod']['price'])?>₫</span>
    </span>
  </div>
  
  
  
  
</div>
                  <!-- END PRICE PRODUCT-->
                  <div class="save" >
                    <p><strong>Tiết kiệm: </strong> <span><?php echo bsVndDot($data['prod']['price'] - $data['prod']['sale_price'])  ?>₫</span></p>
                  </div>
                  <div>
                    <p>
                      
                      <span style="display:inline-block;"><strong>Tình trạng: </strong><span class="status_text">Còn hàng </span></span>
                      
                    </p>
                  </div>
                  <!--review-->
                  
                  <div class="start_products_main">           
                    <div class="bizweb-product-reviews-badge" data-id="6390010"></div>
                  </div>
                  
                  <!-- end review-->
                  

                  <div class="action_button_product">
                    <div class="form-product">
                      <form action="<?=BASE_URL."payment/addcart.html";?>" method="post" enctype="multipart/form-data" id="add-to-cart-form">
                        
                        <div class="box-variant clearfix ">
                          

                          
                          

                          
                        </div>
                        <div class="form-group">
                          <!-- INPUT BUTTON -->

                          
                          
                          <div class="group-select-number">
  <input class="input-text qty" title="Qty" value="1" maxlength="3" id="qty" name="quantity" onkeyup="valid(this,'numbers')" onblur="valid(this,'numbers')" type="text">
  <button class="btn_minis" onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) result.value--;return false;">-</button>
  <button class="btn_plus" onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;">+</button>
</div>
                          
                          
                          <!-- END INPUT BUTTON -->
                          <!-- BUTTON ACTIONS -->
                          
                          
                          <button type="submit" class="btn btn-lg btn-style btn-cart add_to_cart btn_action_product2 btn_hai" title="Thêm vào giỏ hàng">
                            <span>+ Mua ngay</span>
                          </button>
                          
                          
                          <!-- END BUTTON ACTIONS -->
                        </div>

                      <input type="hidden" name="idpro" value="<?=$data['prod']['Id'];?>" />
                                        <script>
                                             $(document).ready(function(e) {
                                                 $("#button-cart").click(function()
                                                 {
                                                     $("#add-to-cart-form").submit();
                                                 })
                                             });
                                        </script> 
                                </form> 


                      <div id="variant-inventory" style="line-height:15px;"></div>



                    </div>
                  </div>
                  <br>
                  
                  <div class="share_social">
                    
  
  



<div class="social-media" data-permalink="<?php echo "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>">
  <span style="color:#252525;">Chia sẻ</span>
  
    <a target="_blank" href="//www.facebook.com/sharer.php?u=<?php echo "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>" class="share-facebook" title="Chia sẻ lên Facebook">
    <i class="fa fa-facebook"></i>
    </a>
  

  
    <a target="_blank" href="//twitter.com/share?text=<?php echo $row_web['title_vn']?>&amp;url=<?php echo "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>" class="share-twitter" title="Chia sẻ lên Twitter">
     <i class="fa fa-twitter"></i>
    </a>
  

  

    
      <a target="_blank" href="//pinterest.com/pin/create/button/?url=<?php echo "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>&amp;media=<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>&amp;description=<?php echo $row_web['title_vn']?>" class="share-pinterest" title="Chia sẻ lên pinterest">
        <i class="fa fa-pinterest"></i>
      </a>
    

    

  

  
    <a target="_blank" href="//plus.google.com/share?url=https://danielwatch.vn/dw-classic-gold-sheffield-40mm" class="share-google" title="+1">
     <i class="fa fa-google-plus"></i>
    </a>
  

</div>
                  </div>
                  
                </div>
              </div>  
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


								<ul id="product-detail-tab" class="nav nav-tabs product-tabs">
									<li class="active"> <a href="#product_tabs_description" data-toggle="tab"> Thông tin sản phẩm </a> </li>
									<li><a href="#product_tabs_tags" data-toggle="tab">Bình Luận</a></li>
								</ul>
								<div id="productTabContent" class="tab-content">
									<div class="tab-pane fade in active" id="product_tabs_description">
										<div class="std">
											<?php echo $data['prod']['content_vn']?>
										</div>
									</div>
									<div class="tab-pane fade" id="product_tabs_tags">
										<div class="box-collateral box-tags">
											<div class="tags">
												<ul class="tags-list">
													<div id="fb-root"></div>
			<script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=427739547610265";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                        </script>
                       <div class="fb-comments" data-href="<?="http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>" data-width="100%" data-numposts="5"></div>

												</ul>
											</div>
										</div>
									</div>
								
							
                <?php /*?>
                <div class="tab_products_details tab_pd_top">
                  <ul class="nav nav-css">
                    
                    <li class="active"><a data-toggle="tab" href="#products_details">Mô tả</a></li>
                    
                    
                    <li><a data-toggle="tab" href="#products_details1">Nhận xét</a></li>
                    
                    
                    <li><a data-toggle="tab" href="#products_details2">Tags</a></li>
                    
                  </ul>

                  <div class="tab-content">
                    
                    <div id="products_details" class="tab-pane fade in active">
                      
                     <?php echo $data['prod']['content_vn'] ?>
                      
                    </div>
                    
                    
                    <div id="products_details1" class="tab-pane fade">
                      <div id="fb-root"></div>
      <script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=427739547610265";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                        </script>
                       <div class="fb-comments" data-href="<?="http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>" data-width="100%" data-numposts="5"></div>

                    </div>
                    
                    
                    <div id="products_details2" class="tab-pane fade">
                      
                      
                    </div>
                    
                  </div><?php */?>
                </div>
                <div class="clearfix"></div>
                <!-- sản phẩm liên quan -->
                <div class="title_page">
                  <h2>Sản phẩm cùng loại</h2>
                </div>

                <div class="box_prduct_spcl no-padding products_owl_spcl">
                            
                            <!-- sp lớn hơn 6 -->
      <?php if(!empty($data['spcl'])){
                foreach($data['spcl'] as $item){?>
<div class="col-md-12 col-sm-12 col-xs-12 full-xs prd_grid_custom">
            
<div class="product-box">
  <div class="product-thumbnail">
    <a href="san-pham/<?php echo $item['alias']?>" title="<?php echo $item['title_vn']?>">
      <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" class="img-responsive" alt="<?php echo $item['title_vn']?>">
       <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images2']?>" class="img-responsive second-image" alt="<?php echo $item['title_vn']?>">
    </a>
    <div class="product-action">
      <form action="/cart/add" method="post" class="variants hover_action btn_buy_view" data-id="product-actions-6945940" enctype="multipart/form-data">
        
      <input name="variantId" value="11052840" type="hidden">
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
            </div>                             
<?php }}?>
                                 
 </div> <!-- end md12 -->
      

 
                <!-- end -->
              </div>
              
            </div>
          </div>
          <!--end product pro-->
        </div>
      </div>
    </section>
    <!-- End Details Products Page -->

    <!-- End Slogan -->
  </section>
<?php /*?>
<div class="custom-top" id="custom_slider">
        <div class="container">
                    <column class="position-display">
                                                        <div>
                                                         <form action="/search/" method="get">
                        <div id="search" class="input-group">
  <input type="text" name="q" value="" placeholder="Tìm kiếm sản phẩm" class="form-control input-lg" />
  <span class="input-group-btn">
    <button type="button" class="btn btn-default btn-lg"><i class="fa fa-search"></i></button>
  </span>
</div>  </form>                  </div>
                                  </column>
        </div>
    </div>
</header>

<div class="container product-ms">
 	<div class="breadcrumb">
       <?php echo $data['map_title'] ?>
     </div>
     <!-- row -->
     <div class="row">
		<div id="column-left" class="col-sm-3 col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-sm">
			<?php loadview('pagefixed/left',$left);?>
		</div>
		<!-- chi tiet san phẩm -->
		<div id="content" class="col-xs-12 col-sm-12 col-md-9 col-lg-9"><div class="position-display">
          </div>  <div class="row">
                <div class="col-sm-6">
                    <div class="single-product-image">
                        <div class="single-pro-main-image">
                        <img class="cloudzoom mfp-img" alt="" id="zoom1" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>" data-cloudzoom="zoomImage: '<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>',
                                zoomSizeMode: 'image',
                                zoomOffsetX: -15, maxMagnification:4, disableOnScreenWidth: 768" alt="Cloud Zoom small image" style="-webkit-user-select: none;">
                        </div>
                            <div class="single-pro-thumb">
                                <ul class="thubm-caro owl-carousel owl-theme" id="optima_gallery">
                                <?php for ($i=1; $i <=4 ; $i++) { if($data['prod']['images'.$i]!=''){?>
                                   
                                <li>
                                <a class="thumbnail various" href="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>" title="<?php echo $data['prod']['title_vn']?>">
                              <img class = 'cloudzoom-gallery' src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>" title="<?php echo $data['prod']['title_vn']?>" alt="" data-cloudzoom = "useZoom: '.cloudzoom', image: '<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>', zoomImage: '<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>', autoInside : 991" >
                              </a>
                                  </li> 
                                 <?php }}?>
                                                                                                
                                </ul>
                            </div>
                        </div>                 </div>

                                                                    <div class="col-sm-6">
                    <div class="single-product-description">
                        <div class="pro-desc">
                            <h2><?php echo $data['prod']['title_vn']?></h2>
                             
                            <ul class="list-unstyled">
                             <?php
                      $idhang = $data['prod']['hangsx'];
                      $sql = "select * from mn_works where Id='$idhang' and ticlock='0'";
                      $ds = mysql_query($sql) or die(mysql_error());
                      $sodong = mysql_num_rows($ds);
                      $row = mysql_fetch_assoc($ds);
                      if($sodong>0) {
                  ?>
                  <li>Nhà sản xuất: <?php echo $row['title_vn'];?></li>
                     
                  <?php } ?>
                              
                            </ul>
                             <ul class="list-unstyled">
                             <li><?php echo $data['prod']['description_vn']?></li> 
                            </ul>
                        </div>

                             <ul class="list-unstyled">
                                <li><span style="text-decoration: line-through;" class="old-price"><?php echo bsVndDot($data['prod']['price'])?> VNĐ</span></li>
                                    <li>
                                        <span class="regular-price span_red"><?php echo bsVndDot($data['prod']['sale_price'])?> VNĐ</span>
                                    </li>
                                
                                                                                            </ul>
                                            </div>
                    <form action="<?=BASE_URL."payment/addcart.html";?>" method="post" enctype="multipart/form-data" id="add-to-cart-form">
                    <div id="product">
                            <div class="product_details_cart">
                                <div class="product-quantity col-md-6">

                                    <div class="numbers-row">  

                                        <input type="text" name="quantity" value="1" id="input-quantity" />
                                        <input type="hidden" name="product_id" value="1644" />

                                        <div class="dec qtybutton">-</div>
                                        <div class="inc qtybutton">+</div>
                                    </div>
                                        <script type="text/javascript">
                                        jQuery(document).ready(function ($) { 
                                            
                                            
                                            $(".dec").click(function(){
                                                if($("#input-quantity").val()>1){
                                                $("#input-quantity").val(Number($("#input-quantity").val())-1);
                                                }
                                            });
                                            $(".inc").click(function(){
                                                //$(this).hide();
                                                if($("#input-quantity").val()<100){
                                                $("#input-quantity").val(Number($("#input-quantity").val())+1);
                                                }
                                            });
                                        });
                                        </script>
                                    
                                </div>
                                <div class="single-poraduct-botton">
                                    <button type="button" id="button-cart" data-loading-text="Đang Xử lý..." class="push_button button btn-cart shopng-btn">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <input type="hidden" name="idpro" value="<?=$data['prod']['Id'];?>" />
                                        <script>
                                             $(document).ready(function(e) {
                                                 $("#button-cart").click(function()
                                                 {
                                                     $("#add-to-cart-form").submit();
                                                 })
                                             });
                                        </script> 
                                </form>          
                            <div class="product-quantity ">

                                <!-- AddThis Button BEGIN -->
                                <div class="addthis_toolbox addthis_default_style"><a class="addthis_button_facebook_like" fb:like:layout="button_count"></a> <a class="addthis_button_tweet"></a> <a class="addthis_button_pinterest_pinit"></a> <a class="addthis_counter addthis_pill_style"></a></div>
                                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-515eeaf54693130e"></script>
                                <!-- AddThis Button END -->
                            </div>
                          
                                            </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="bg-ms-product">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#tab-description" data-toggle="tab">Mô tả</a></li>
                            <li><a href="#tab-specification" data-toggle="tab">Đặc tính</a></li>
                        </ul>
                        <div class="tab-content">
                            <section class="tab-pane active bottom20" id="tab-description"><h1><span style="font-size: 13pt;"><strong><?php echo $data['prod']['title_vn']?></strong></span></h1>
                            <?php echo $data['prod']['content_vn']?>
</section>
                            <hr />
                            <section class="tab-pane active" id="tab-specification">
                                    <?php echo $data['prod']['dactinh']?>
                                </section>
                                                                                </div>
                    </div>
                </div>
            </div>
            <!--PRODCUCT LATE -->
            <!--END PRODCUT LATE -->
        </div>	
		<!-- end chi tiet san pham -->
	</div>
     <!-- end row -->
     <!-- sản phẩm liên quan -->
<div class="product-late-ms">
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <div class="area-title">
            <h3 class="text_related">Sản phẩm liên quan</h3>
            </div>
        </div>
             <?php
                if(!empty($data['spcl'])){

                    foreach($data['spcl'] as $item){
                ?>  
        <div class="product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="product-thumb" style="border: none; min-height: 300px;">
                                <div class="image">
                                <a href="san-pham/<?php echo $item['alias']?>"><img style="margin: auto;" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="<?php echo$item['title_vn']?>" title="<?php echo$item['title_vn']?>" class="img-responsive"></a>
                                <div class="button-group">
                                  <a href="san-pham/<?php echo $item['alias']?>"><button type="button"><span class="hidden-xs hidden-sm hidden-md">Thêm vào giỏ</span> <i class="fa fa-shopping-cart"></i></button></a>
                                  <!-- <button type="button" data-toggle="tooltip" title="" onclick="wishlist.add('102');" data-original-title="Thêm Yêu thích"><i class="fa fa-heart"></i></button>
                                  <button type="button" data-toggle="tooltip" title="" onclick="compare.add('102');" data-original-title="Thêm so sánh"><i class="fa fa-exchange"></i></button> -->
                                </div>
                                </div>
                                <div class="caption">
                                  <h4><a href="san-pham/<?php echo$item['alias']?>"><?php echo$item['title_vn']?></a></h4>
                                  <p class="description"><?php echo$item['title_vn']?>
Mã sản phẩm: 08026..</p>
                                     <div class="rating">
                                          <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                     </div>

                                    
                      <p class="price">
                          <?php
                       if($item['sale_price']>0) {
                           $phantram = round((($item['price'] - $item['sale_price'])*100)/$item['price']);
                   ?>
                  <span class='status-sale-per'>-<?=$phantram?>%</span> <?php }?>
                          <span class="price-new"><?php echo bsVndDot($item['sale_price'])?> VNĐ</span> <br><span class="price-old"><?php echo bsVndDot($item['price'])?> VNĐ</span>
                    </p>
                                  </div>


                              </div> 
                            </div>
                            <?php }}?>
                            </div>
                            </div>

</div>  <!-- end div container -->  
<script type="text/javascript">
CloudZoom.quickStart();
</script>
<script type="text/javascript">

        $(document).ready(function() {
            
            $('.thubm-caro').owlCarousel({
                    items: 3,
                    dots: true,
                    nav: true,
                    autoplay: false,
                    responsive:{
                        480:{
                            items:2,

                        },
                        767:{
                            items:3,
                        },
                        991:{
                            items:2,
                        },
                        1199:{
                            items:3,
                        }
                    },
                    navText: ['<i class="fa fa-angle-left owl-prev-icon"/>', '<i class="fa fa-angle-right owl-next-icon"/>']
                });

            /////////////// END Related products ---////////////////////////
            $(".featured-item").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 600,
                paginationSpeed: 400,
                items: 5,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:4,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:false,
                        loop:false
                    }
                }
            });
            /* $(".numbers-row").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
             });
            </script>
           <!--  <script type="text/javascript">
           /*----- cart-plus-minus-button -----
           
                      
           $(".qtybutton").on("click", function () {
               var $button = $(this);
               var oldValue = $button.parent().find("input").val();
               if ($button.text() == "+") {
                   var newVal = parseFloat(oldValue) + 1;
               } else {
                   // Don't allow decrementing below zero
                   if (oldValue &gt; 0) {
                       var newVal = parseFloat(oldValue) - 1;
                   } else {
                       newVal = 0;
                   }
               }
               $button.parent().find("#input-quantity").val(newVal);
           });
              
               // CloudZoom.quickStart();
           </script> -->

<?php /*?>
<!-- header -->
<div class="header-service hidden-xs hidden-sm">
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-sm-offset-2">
				<div class="col-md-3 col-sm-6 hidden-xs wow fadeInUp animated animated" data-wow-offset="30" data-wow-duration="1s" data-wow-delay="0.15s" style="visibility: visible;-webkit-animation-duration: 1s; -moz-animation-duration: 1s; animation-duration: 1s;-webkit-animation-delay: 0.15s; -moz-animation-delay: 0.15s; animation-delay: 0.15s;">
					<div class="content-service">
						<a href="#">
							<img src="<?php echo BASE_URL?>public/template/images/icon1.png">

							<span>Hướng dẫn</span>
							<p>Đặt hàng</p>
						</a>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 hidden-xs wow fadeInUp animated animated" data-wow-offset="30" data-wow-duration="1.25s" data-wow-delay="0.30s" style="visibility: visible;-webkit-animation-duration: 1.25s; -moz-animation-duration: 1.25s; animation-duration: 1.25s;-webkit-animation-delay: 0.30s; -moz-animation-delay: 0.30s; animation-delay: 0.30s;">
					<div class="content-service">
						<a href="#">
							<img src="<?php echo BASE_URL?>public/template/images/icon2.png">

							<span>Chính sách</span>
							<p>Tích điểm</p>
						</a>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 hidden-xs wow fadeInUp animated animated" data-wow-offset="30" data-wow-duration="1.75s" data-wow-delay="0.45s" style="visibility: visible;-webkit-animation-duration: 1.75s; -moz-animation-duration: 1.75s; animation-duration: 1.75s;-webkit-animation-delay: 0.45s; -moz-animation-delay: 0.45s; animation-delay: 0.45s;">
					<div class="content-service">
						<a href="#">
							<img src="<?php echo BASE_URL?>public/template/images/icon3.png">

							<span>Dịch vụ</span>
							<p>Vận chuyển</p>
						</a>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 hidden-xs wow fadeInUp animated animated" data-wow-offset="30" data-wow-duration="2s" data-wow-delay="1s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;-webkit-animation-delay: 1s; -moz-animation-delay: 1s; animation-delay: 1s;">
					<div class="content-service">
						<a href="#">
							<img src="<?php echo BASE_URL?>public/template/images/icon4.png">

							<span>Miễn phí</span>
							<p>Vận chuyển</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ket thuc header -->
		<!-- main-container -->
<section class="main-container col1-layout">
	<div class="main container">
		<div class="col-main">
			<div class="row">
				<div class="product-view">
					<div class="product-essential col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="breadcrumbs">
						<?php echo $data['map_title'] ?>
	
						</div>
						<div class="row">
							<form action="<?=BASE_URL."payment/addcart.html";?>" method="post" enctype="multipart/form-data" id="add-to-cart-form">
								<input name="form_key" value="6UbXroakyQlbfQzK" type="hidden">
								<div class="product-img-box col-lg-6 col-sm-6 col-md-6 col-xs-12">
									<ul class="moreview" id="moreview">
										<li class="moreview_thumb  "> 
											<img class="moreview_thumb_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>"> 
											<img class="moreview_source_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>"> 
											<img style="position: absolute;" class="zoomImg" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'];?>">
										</li>
										<?php for ($i=1; $i <=4 ; $i++) { if($data['prod']['images'.$i]!=''){?>
											
										
										<li class="moreview_thumb  "> 
											<img class="moreview_thumb_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>"> 
											<img class="moreview_source_image" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>"> 
											<img style="position: absolute;" class="zoomImg" src="<?php echo PATH_IMG_PRODUCT.$data['prod']['images'.$i];?>">
										</li>
										<?php }}?>
										
										
									</ul>
									<div class="moreview-control"> <a style="right: 42px;" href="javascript:void(0)" class="moreview-prev"></a> 
										<a style="right: 42px;" href="javascript:void(0)" class="moreview-next"></a> 
									</div>
								</div>
								<div class="product-shop col-lg-6 col-sm-6 col-md-6 col-xs-12">
									<div class="product-name">
										<h1><?php echo $data['prod']['title_vn']?></h1>
										
									</div>
									<div class="price-block">
										
										<div class="price-box">
											<p class="old-price" style="display: none;"> <span class="price-label">Giá NY:</span> <span id="old-price-48" class="price"> <?php echo $data['prod']['sale_price']?>₫ </span> </p>
											<p class="special-price"> <span id="product-price-48" class="price"> <?php echo bsVndDot($data['prod']['sale_price'])?>₫ </span> </p>
										</div>
										
									</div>

									<div class="add-to-box">
										<div class="add-to-cart">
											<div class="pull-left">
												
												 
												
												<input type="hidden" name="variantId" value="987415" />
												
												
											</div>
										</div>
										<div class="add-to-cart">
										
											<div class="custom-cart">
											<p><?php echo $data['prod']['description_vn']?></p>
											<?php /*?>
												<label for="qty">Số lượng:</label>
												<div class="custom">
													<input type="text" title="Qty" value="1" maxlength="12" id="qty" name="quantity" class="input-text qty">
													<button onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="icon-minus">&nbsp;</i></button>
													<button onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;" class="increase items-count" type="button"><i class="icon-plus">&nbsp;</i></button>

												</div>
												
											</div>
											

											
                                    <input type="hidden" name="idpro" value="<?=$data['prod']['Id'];?>" />
										<script>
                                             $(document).ready(function(e) {
                                                 $("#add-to-cart").click(function()
                                                 {
                                                     $("#add-to-cart-form").submit();
                                                 })
                                             });
                                        </script>		
											<button id="#add-to-cart" class="button btn-cart add_to_cart" title="Thêm vào giỏ hàng"><span> Thêm vào đơn</span></button>
											
										</div>
										</form>
										<div class="clear"></div>
										<div id="usefull_link_block">																
										<!-- Begin tags -->
										<p class="socialsharing_product  no-print"> <button data-type="twitter" type="button" class="btn btn-default btn-twitter social-sharing"> <i class="icon-twitter"></i> Tweet </button> <button data-type="facebook" type="button" class="btn btn-default btn-facebook social-sharing"> <i class="icon-facebook"></i> Share </button> <button data-type="google-plus" type="button" class="btn btn-default btn-google-plus social-sharing"> <i class="icon-google-plus"></i> Google+ </button> <button data-type="pinterest" type="button" class="btn btn-default btn-pinterest social-sharing"> <i class="icon-pinterest"></i> Pinterest </button></p>

										<!-- End tags -->
									</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="product-collateral">
					<div class="col-md-9 col-sm-12 col-xs-12">
						<div class="row">
							<div class="col-sm-12">

								<ul id="product-detail-tab" class="nav nav-tabs product-tabs">
									<li class="active"> <a href="#product_tabs_description" data-toggle="tab"> Thông tin sản phẩm </a> </li>
									<li><a href="#product_tabs_tags" data-toggle="tab">Bình Luận</a></li>
								</ul>
								<div id="productTabContent" class="tab-content">
									<div class="tab-pane fade in active" id="product_tabs_description">
										<div class="std">
											<?php echo $data['prod']['content_vn']?>
										</div>
									</div>
									<div class="tab-pane fade" id="product_tabs_tags">
										<div class="box-collateral box-tags">
											<div class="tags">
												<ul class="tags-list">
													<div id="fb-root"></div>
			<script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=427739547610265";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                        </script>
                       <div class="fb-comments" data-href="<?="http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>" data-width="100%" data-numposts="5"></div>

												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-sm-12">
								<div class="box-additional">
									<div class="upsell-pro">
										<div class="slider-items-products">
											<div class="new_title center">
												<h2>Sản phẩm liên quan</h2>
											</div>
											<div id="upsell-products-slider" class="product-flexslider hidden-buttons">
												<div class="slider-items slider-width-col4"> 
										<?php
										if(!empty($data['spcl'])){

											foreach($data['spcl'] as $item){
										?>  											
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
								</div>
							</div>
						</div>
						
					</div><!--  end md-9 -->
					<div class="col-md-3 hidden-sm hidden-xs">
					<?php loadview('pagefixed/right',$right);?>
					</div><!--  end md-3 -->
				</div>
			</div>
		</div>
	</div>
</section>
<!--End main-container --> 

<?php */?>
