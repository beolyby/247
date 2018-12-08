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
<!-- End breadcrumb -->
<section class="products_page">
  <div class="container">
    <div class="row">
      
      <!-- Sidebar collection -->
      <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12 pull-left">
        <?php loadview('pagefixed/left',$left);?>
      </div>
      <!-- end sidebar collection -->
      <form action="" method="post" class="load_sapxep"> 
      <div class="col-xs-12 col-sm-8 col-md-9 col-lg-9 pull-right filter_custom col-main">
        <div class="row">
          <div class="products_page_count_and_filter">  
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <p class="count-col"><?php echo $data['total_pro_1']?> sản phẩm</p>
              <!--<div class="view-mode products_page_count">     
                <a class="btn button-view-mode view-mode-grid active"><i class="fa fa-th"></i></a>
                <a class="btn button-view-mode view-mode-list switch-view" href="javascript:;" data-view="list"><i class="fa fa-th-list"></i></a>     
              </div>-->
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
             
              <div class="produts_page_filter">
                <span class="hidden-xs" >Sắp xếp theo:</span>
                <select class="select" name="sapxep">
                 <option value="mac-dinh" <? if($_SESSION['sapxep']=="mac-dinh") echo 'selected'; ?>>Sản phẩm nổi bật</option>
                  <option value="price-asc" <? if($_SESSION['sapxep']=="price-asc") echo 'selected'; ?>>Giá: Tăng dần</option>
                  <option value="price-desc" <? if($_SESSION['sapxep']=="price-desc") echo 'selected'; ?>>Giá: Giảm dần</option>
                  <option value="alpha-asc" <? if($_SESSION['sapxep']=="alpha-asc") echo 'selected'; ?>>Tên: A-Z</option>
                  <option value="alpha-desc" <? if($_SESSION['sapxep']=="alpha-desc") echo 'selected'; ?>>Tên: Z-A</option>
                  <option value="asc" <? if($_SESSION['sapxep']=="asc") echo 'selected'; ?> >Cũ nhất</option>
                  <option value="desc" <? if($_SESSION['sapxep']=="desc") echo 'selected'; ?>>Mới nhất</option>         
                </select>
               
              </div>  
            </div>
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
          <?php unset($_SESSION['sapxep']);?>
          <div class="products_page_content box_prduct_menu">
            <?php if(!empty($data['pro_1'])){
    foreach($data['pro_1'] as $item){?>
            <div class="col-md-4 col-sm-6 col-xs-6 full-xs prd_grid_custom">
            
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
            
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              
           <?php 
          if($data['page'] != "") {
            echo '<div class="clear"></div>';
            echo "<div class = 'pagging'>". $data['page']."</div>";
          }
          ?>
            
            </div>
          </div>
          
        
        </div>
      </div>
      
    </div>
  </div>
</section>
<script type="text/javascript">
  $('#show_danhmuc').click(function() {
    $('#list-collection').slideToggle();
    $('#fitter-mobile').hide();
    return false;
  });

</script>
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
<div class="container categories-ms">
  <div class="breadcrumb">
       <?php echo $data['map_title'] ?>
      </div>
      <!-- kết thuc beackrum -->
	<div class="row">   
	<!-- cột left -->
	 <div id="column-left" class="col-sm-3 col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-sm">
        <?php loadview('pagefixed/right',$right);?>
</div>
<!-- cot phải -->
<form action="" method="post" class="load_sapxep"> 
<div id="content" class="col-xs-12 col-sm-12 col-md-9 col-lg-9 category_page other_page">
    <div class="position-display">
          </div><div id="mfilter-content-container">                  
          <div class="row">
            <div class="col-sm-12 top10">
            	<?php echo $data['cat']['description_vn']?>
            </div>
        	</div>
          
                        <div class="page-selector">
          
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
          <div class="pages-box hidden-xs">
                <?php 
					if($data['page'] != "") {
						echo '<div class="clear"></div>';
						echo "<div class = 'pagging'>". $data['page']."</div>";
					}
					?>
          </div>
         
					<!--Kết thúc phân trang -->
          <div class="clear"></div>
      </div>
      <br />
     <div class="row" id="product-category">
     <?php if(!empty($data['pro_1'])){
		foreach($data['pro_1'] as $item){?>
                <div class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div class="product-thumb">
            <div class="image">
            <a href="san-pham/<?php echo $item['alias']?>"><img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>"  alt="<?php echo $item['title_vn']?>" class="img-responsive" /></a>
            <div class="button-group">
                   <a href="san-pham/<?php echo $item['alias']?>"><button type="button"><span class="hidden-xs hidden-sm hidden-md">Thêm vào giỏ</span> <i class="fa fa-shopping-cart"></i></button></a>
                 
                </div>
            </div>
            <div>
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
        </div>
        <?php }}?>        
            
             
              
                
                
              </div>
      <div class="row">
        
        <div class="col-md-12 text-center">
			<?php 
			if($data['page'] != "") {
				echo '<div class="clear"></div>';
				echo "<div class = 'pagging'>". $data['page']."</div>";
			}
			?>
					<!--Kết thúc phân trang -->
        </div>
      </div>
                  </div><div class="position-display">
          </div></div>

</div><!-- end row -->
</div>
<?php */?>

<style type="text/css">
	.pagging {
  clear: both;
  padding: 0 0;
  text-align: center;
}
.pagging a.current, .pagging a:hover {
  background: #222222 none repeat scroll 0 0;
  color: #fff;
  font-weight: bold;
}
.pagging a {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #222222;
  color: #222222;
  display: inline-block;
  font-family: Arial;
  font-size: 14px;
  line-height: 25px;
  margin: 0 2px;
  text-align: center;
  width: 25px;
}
.breadcrumb a {
    color: #252525;
}
</style>