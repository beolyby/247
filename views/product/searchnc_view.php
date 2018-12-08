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
<section class="signup search-main">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form action="/search/" method="get" class="form-signup form-pages">
          <div class="input-group">
            <input class="form-control" name="q" value="a" placeholder="Tìm kiếm..." type="text">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Tìm kiếm</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
           
              
      
      <div class="col-xs-12">
        <h1 class="title-head">Kết quả: Tìm kiếm từ khóa '<?php  echo $data['q']?>'</h1>
      </div>
      <div class="products-view-grid products">
        <div class="row row-gutter-14">
           <?php if(!empty($data['prod'])){
                      foreach($data['prod'] as $item){?>    
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 search-clearleft">
            

<div class="product-box">
  <div class="product-thumbnail">
    <a href="san-pham/<?php echo $item['alias']?>" title="<?php echo $item['title_vn']?>">
      <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" class="img-responsive   first-image" alt="<?php echo $item['title_vn']?>">
             <img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images2']?>" class="img-responsive second-image" alt="<?php echo $item['title_vn']?>">
    </a>
    <div class="product-action">
      <form action="/cart/add" method="post" class="variants hover_action" data-id="product-actions-7282140" enctype="multipart/form-data" style="text-align:center">
        
      <input name="variantId" value="11573771" type="hidden">
      <button class="btn_buy add_to_cart" title="Cho vào giỏ hàng"><i class="fa fa-shopping-bag"></i></button>
      

      
      <a href="san-pham/<?php echo $item['alias']?>" data-handle="anne-klein-rose-gold" class="right-to quick-view btn_view" title="Xem nhanh"><i class="fa fa-eye"></i></a>
      

      </form>

  </div>
</div>
<div class="product-info">
  <h3><a href="san-pham/<?php echo $item['alias']?>" title="Anne Klein Rose Gold"><?php echo $item['title_vn']?></a></h3>
</div>
<div class="price-box" style="text-align:center"> 
  
  <span class="special-price">
    <span class="price product-price"><?php echo bsVndDot($item['sale_price'])?>₫</span>
  </span>
  
  <span class="old-price">
    <span class="product-price-old price"><?php echo bsVndDot($item['price'])?>₫</span>
  </span>
  
  
</div>
</div>
          </div>
          
      <?php }}?> 
          
        </div>
      </div>
      
      
      
      
    </div>
  </div>
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
<div class="container">
  
  <div class="row">                <div id="content" class="col-sm-12 category_page search_page other_page">
  <div class="position-display">
      	  </div><div id="mfilter-content-container">      
     
      
      <form action="" method="post" class="load_sapxep">
      <h2 class="text_search_title line-20">Kết quả: Tìm kiếm từ khóa '<?php  echo $data['q']?>'</h2>
            <div class="page-selector">
          <div class="pages-box hidden-xs">
               <?php 
					if($data['page'] != "") {
						echo '<div class="clear"></div>';
						echo "<div class = 'pagging'>". $data['page']."</div>";
					}
					?>
          </div>
          <div class="shop-grid-controls">
              <div class="entry hidden-md hidden-sm hidden-xs">
                  <div class="inline-text">Sắp xếp:</div>
                  <div class="simple-drop-down">
                  <select class="select" name="sapxep" style="padding:5px ">
									<option value="mac-dinh" <? if($_SESSION['sapxep']=="mac-dinh") echo 'selected'; ?>>Sản phẩm nổi bật</option>
									<option value="price-asc" <? if($_SESSION['sapxep']=="price-asc") echo 'selected'; ?>>Giá: Tăng dần</option>
									<option value="price-desc" <? if($_SESSION['sapxep']=="price-desc") echo 'selected'; ?>>Giá: Giảm dần</option>
									<option value="alpha-asc" <? if($_SESSION['sapxep']=="alpha-asc") echo 'selected'; ?>>Tên: A-Z</option>
									<option value="alpha-desc" <? if($_SESSION['sapxep']=="alpha-desc") echo 'selected'; ?>>Tên: Z-A</option>
									<option value="asc" <? if($_SESSION['sapxep']=="asc") echo 'selected'; ?> >Cũ nhất</option>
									<option value="desc" <? if($_SESSION['sapxep']=="desc") echo 'selected'; ?>>Mới nhất</option>
									
					</select>
                      
                  </div>
                  </form>
					<script type="text/javascript">
						$(document).ready(function()
						{
							
						
							$('.select').change(function()
							{
								$('.load_sapxep').submit();
							});
						})
					</script>
					</script><?php unset($_SESSION['sapxep']);?>


              </div>

              
          </div>
          <div class="clear"></div>
      </div>
      <br>
    <div class="row">
            
        <?php if(!empty($data['prod'])){
											foreach($data['prod'] as $item){?>            
                   
                    <div class="product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div class="product-thumb">
            <div class="image"><a href="san-pham/<?php echo $item['alias']?>"><img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" class="img-responsive"></a>
 <div class="button-group">
               <a href="san-pham/<?php echo $item['alias']?>"><button type="button"><span class="hidden-xs hidden-sm hidden-md">Thêm vào giỏ</span> <i class="fa fa-shopping-cart"></i></button></a>
             
            </div>
            </div>
            <div class="caption">
              <h4><a href="san-pham/<?php echo $item['alias']?>"><?php echo $item['title_vn']?></a></h4>
              <p class="description"><?php echo $item['title_vn']?></p>
                               <div class="rating">
                                                      <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                                                        <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                                                        <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                                                        <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                                                        <span class="fa fa-stack"><i class="fa fa-star-o"></i></span>
                                                    </div>

                <p class="price">
                 <?php
                               if($item['sale_price']>0) {
                                   $phantram = round((($item['price'] - $item['sale_price'])*100)/$item['price']);
                           ?>
                  <span class='status-sale-per'>-<?=$phantram?>%</span> <?php }?>                                 
                   <span class="price-new"><?php echo bsVndDot($item['sale_price'])?> VNĐ</span>
                  </br>
                  <span class="price-old"><?php echo bsVndDot($item['price'])?> VNĐ</span>
                                                                      </p>
                  
            </div>
           
          </div>
          </div>
		<?php }}?>
          <div class="clearfix"></div>
                </div>
      <div class="row">
        <div class="col-sm-12 text-center"><?php 
					if($data['page'] != "") {
						echo '<div class="clear"></div>';
						echo "<div class = 'pagging'>". $data['page']."</div>";
					}
					?></div>
        
      </div>
            </div><div class="position-display">
      	  </div></div>
    </div>
</div>
<?php /*?>
<div class="container">
	
		<div class="heading-wrap">
			<div class="page-title"><h2>Tìm kiếm từ khóa '<?php  echo $data['q']?>'</h2></div>
			
		</div>
	<div class="row  pd20 ">
	<form action="" method="post" class="load_sapxep">
		<div class="breadcrumb breadcrumb-arrow ">
		<?php echo $data['map_title'] ?>
		
						<div class="browse-tags pull-right">
                        
							<span>Sắp xếp theo:</span>
							<span class="custom-dropdown custom-dropdown--white">
								<select class="select" name="sapxep">
									<option value="mac-dinh" <? if($_SESSION['sapxep']=="mac-dinh") echo 'selected'; ?>>Sản phẩm nổi bật</option>
									<option value="price-asc" <? if($_SESSION['sapxep']=="price-asc") echo 'selected'; ?>>Giá: Tăng dần</option>
									<option value="price-desc" <? if($_SESSION['sapxep']=="price-desc") echo 'selected'; ?>>Giá: Giảm dần</option>
									<option value="alpha-asc" <? if($_SESSION['sapxep']=="alpha-asc") echo 'selected'; ?>>Tên: A-Z</option>
									<option value="alpha-desc" <? if($_SESSION['sapxep']=="alpha-desc") echo 'selected'; ?>>Tên: Z-A</option>
									<option value="asc" <? if($_SESSION['sapxep']=="asc") echo 'selected'; ?> >Cũ nhất</option>
									<option value="desc" <? if($_SESSION['sapxep']=="desc") echo 'selected'; ?>>Mới nhất</option>
									
								</select>
							</span>
				</div>
		
		</div>
	    </form>
	</div>
	<script type="text/javascript">
						$(document).ready(function()
						{
							
						
							$('.select').change(function()
							{
								$('.load_sapxep').submit();
							});
						})
					</script><?php unset($_SESSION['sapxep']);?>
					<!--Kết thúc gird list -->
</div>
<!--ket thuc breadcrum-->

<div class="content-container">
	<div class="container">
		<div class="row">
			
			<div class="col-md-9 col-sm-9">
 				<div class="row">
					
					
					
					<!--Kết thúc gird list -->
                    
                
                        <div class="fieldtabproductsisotope-products">
                            <ul class="isotope-grid" style="position: relative; height: 438px;">
							<?php if(!empty($data['prod'])){
											foreach($data['prod'] as $item){?>
                                <li class="col-xs-12 col-sm-6 col-md-4 isotope-item item riesling" >
                                    <div class="item-wrapper">
                                        <div class="item-inner">
                                            <div class="left-block">
                                                <a class="product_img" href="san-pham/<?php echo$item['alias']?>" title=""> <span class="hover-image"><img class="replace-2x img-responsive" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>" alt="<?php echo $item['title_vn']?>" title="<?php echo $item['title_vn']?>" height="280" width="260"></span> <span class="img_root"> <img class="replace-2x img-responsive" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" alt="" height="280" width="260"> </span> </a>
                                                <div class="conditions-box">
                                                    <?php if($item['hot']==1){?><p class="new">New</p><?php }?>
                                                            <?php if($item['home']==1){?><p class="sale">Nổi Bật</p><?php }?>
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
                    


					<!--Kết thúc product -->
                    
					<?php 
if($data['page'] != "") {
	echo '<div class="clear"></div>';
	echo "<div class = 'pagging'>". $data['page']."</div>";
}
?>
					<!--Kết thúc phân trang -->
				</div>
			</div>
			<!--Kết thúc content md 9-->
    
    
    <?php loadview('pagefixed/right',$right);?><!--Kết thúc content md 3-->
	
</div>
</div>
</div>
</div>
<?php */?>
<style type="text/css">
	.pagging {
  clear: both;
  padding: 10px 0;
  text-align: center;
}
.pagging a.current, .pagging a:hover {
  background: #BA080B none repeat scroll 0 0;
  color: #fff;
  font-weight: bold;
}
.pagging a {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #BA080B;
  color: #BA080B;
  display: inline-block;
  font-family: Arial;
  font-size: 14px;
  line-height: 32px;
  margin: 0 2px;
  text-align: center;
  width: 32px;
}
</style>
