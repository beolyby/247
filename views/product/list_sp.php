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
	<!-- Two columns content -->
<section class="main-container col2-left-layout">
	<div class="main container">
		<div class="row">
			<section class="col-main col-md-9 col-sm-12 col-md-push-3">
				<div class="breadcrumbs">
						<?php echo $data['map_title'] ?>
	
				</div>
				<form action="" method="post" class="load_sapxep"> 
		
	    
				<div class="category-products">
					
					<div class="toolbar">
						<div class="pager">
							
							<div class="pages">
								<?php 
									if($data['page'] != "") {
										//echo '<div class="clear"></div>';
										echo "<div class = 'pagging'>". $data['page']."</div>";
									}
									?>
					<!--Kết thúc phân trang -->
							</div>
							
						</div>
						<div id="sort-by">
							
							<select class="select" name="sapxep" style="padding: 5px;">
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
					
					<ul class="products-grid">
						
						<?php if (!empty($data['pro_1'])){ 
				foreach ($data['pro_1'] as $item){?>
						
						<li class="item col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div class="item-inner">
								<div class="product-block">
									<div class="product-image"> <a href="san-pham/<?php echo $item['alias']?>">
										
										
										<figure class="product-display">
											
											<img src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images1']?>" class="lazyOwl product-mainpic" alt="<?php echo $item['title_vn']?>" style="display: block;" > 
											<img class="product-secondpic" alt="<?php echo $item['title_vn']?>" src="<?php echo BASE_URL.PATH_IMG_PRODUCT.$item['images']?>" width="258"> 
										</figure>
										</a> 
									</div>
								</div>
								<div class="item-info">
									<div class="info-inner">
										<div class="item-title"> <a href="san-pham/<?php echo $item['alias']?>" title="<?php echo $item['title_vn']?>"><?php echo $item['title_vn']?></a> </div>
										<div class="item-content">
											<div class="item-price">
												
												<div class="price-box">
													<p class="special-price"> <span class="price-label">Giá: </span> <span class="price"><?php echo bsVndDot($item['sale_price'])?>₫</span> </p>
												</div>
												
											</div>
											<div class="product-meta">
												<form action="san-pham/<?php echo$item['alias']?>" method="" class="variants" id="product-actions-797808" enctype="multipart/form-data">
													
													
													<div class="product-action"> 
														<input type="hidden" name="variantId" value="1226004" />
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
						</li>
						<?php }}?>
						
					</ul>
					
					<div class="clear"></div>
					<div class="pager">
						
						<div class="pages">
						<?php 
							if($data['page'] != "") {
								//echo '<div class="clear"></div>';
								echo "<div class = 'pagging'>". $data['page']."</div>";
							}
							?>
					</div>
						
					</div>
					
				</div>
			</section>
			<aside class="col-left sidebar col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
	 <?php loadview('pagefixed/right',$right);?><!--Kết thúc content md 3-->
</aside>
		</div>
	</div>
</section>
<?php /*?>
<div class="heading-container">
	<div class="container heading-parallax">
		<div class="heading-wrap">
			<div class="page-title"><h1>Tất cả sản phẩm</h1></div>
			<div class="col-lg-12 col-md-12 col-sm-12 hidden-sm hidden-xs col-xs-12 pd5  ">
	<div class="breadcrumb breadcrumb-arrow ">
	<?php echo $data['map_title'] ?>
	</div>
    
</div>
			<div class="heading-page-icon hidden-xs">
				<span class="soups"></span>
				<span class="chicken"></span>
				<span class="dizhes"></span>
			</div>
		</div>
	</div>
</div>
<!--ket thuc breadcrum-->

<div class="content-container">
	<div class="container">
		<div class="row">
			
			<div class="col-md-9 col-sm-9">
 				<div class="main-content">
					<div class="before-loop-wrapper hidden-xs">
						<ul class="display hidden-xs gridlist-toggle">
							<li id="grid" class="selected">
								<a class="btn-tooltip" rel="nofollow" href="#" title="Grid"><i class="fa fa-th-large"></i></a>
							</li>
							<li id="list" style="display:none">
								<a class="btn-tooltip" rel="nofollow" href="#" title="List"><i class="fa fa-th-list"></i></a>
							</li>
						</ul>
						
						<div class="browse-tags pull-right">
							<span>Sắp xếp theo:</span>
							<span class="custom-dropdown custom-dropdown--white">
								<select class="sort-by custom-dropdown__select custom-dropdown__select--white">
									<option value="manual">Sản phẩm nổi bật</option>
									<option value="price-ascending">Giá: Tăng dần</option>
									<option value="price-descending">Giá: Giảm dần</option>
									<option value="title-ascending">Tên: A-Z</option>
									<option value="title-descending">Tên: Z-A</option>
									<option value="created-ascending">Cũ nhất</option>
									<option value="created-descending">Mới nhất</option>
									<option value="best-selling">Bán chạy nhất</option>
								</select>
							</span>
						</div>
						
					</div>
					<!--Kết thúc gird list -->
                    
                    <ul class="products row product_list grid products-grid content-product-list">
				<?php if (!empty($data['pro_1'])){ 
				foreach ($data['pro_1'] as $item){?>
<li class="product col-md-4 col-sm-6 col-xs-6 product-resize  ">
	<div class="product-container">
		<figure>
			<div class="product-wrap left-block">
				<div class="product-images">
					<a href="san-pham/<?php echo $item['alias']?>">
						<span class="onsale" style="display:none">Sale!</span>
						<div class="shop-loop-thumbnail image-resize">
							<img src="//hstatic.net/932/1000095932/1/2016/6-16/pr9_f8289e2f-2815-4694-592a-8793e6a6c9f5_large.jpg" class="attachment-shop_catalog wp-post-image" alt=" Chai Latte ">
						</div>
					</a>
				</div>
			</div>
			<figcaption class="right-block">
				<div class="shop-loop-product-info pr-0 product-contents">
					<div class="info-title">
						<h3 class="product_title">
							<a href="san-pham/<?php echo $item['alias']?>"><?php echo $item['title_vn']?></a>
						</h3>
					</div>
					<div class="info-meta">
						<div class="info-price">
							<span class="price">
								<del><span class="amount" style="display:none">60,000₫</span></del>
								<ins><span class="amount"><?php echo bsVndDot($item['sale_price'])?>₫</span></ins>
							</span>
						</div>
					</div>
					
					<div class="shop-loop-actions">
						<a class="shop-loop-quickview quick-view hidden-xs" href="san-pham/<?php echo $item['alias']?>" data-handle="/products/chai-latte" data-toggle="tooltip"  data-original-title="Xem nhanh"></a>
						
						<a href="san-pham/<?php echo $item['alias']?>" rel="nofollow" data-variant="1007293559" rel="nofollow" class="button ajax_add_to_cart_button">
							 Chi tiết 
						</a>
						
						<a href="san-pham/<?php echo $item['alias']?>" data-toggle="tooltip"  class="add_to_wishlist hidden-xs" data-original-title="Xem chi tiết"></a>

					</div>
				</div>
			</figcaption>
		</figure>
	</div>
</li>
<?php }}?>
</ul>

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
  padding: 0;
  text-align: center;
}
.pagging a.current, .pagging a:hover {
  background: #1c1c1c none repeat scroll 0 0;
  color: #fff;
  font-weight: bold;
} 
.pagging a {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #1C1C1C;
  color: #ba080b;
  display: inline-block;
  font-family: Arial;
  font-size: 14px;
  line-height: 25px;
  margin: 0 2px;
  text-align: center;
  width: 25px;
}
</style>