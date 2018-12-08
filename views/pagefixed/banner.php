<?php $db =new Models_MWebsite; 
$var = varGet("id");

$row_web=$db->getOneWebsite(1); $mod = $_GET['mod']; $act = $_GET['act'];?>
<?php if(!isset($_SESSION[ "cart2"])) $soluong=0; else { $soluong=0; foreach($_SESSION[ 'cart2'] as $k=>$v) { $soluong=$soluong+1; } } ?>

    <!-- Header --> 
<header class="header_main">
    <div class="header_main_inner hidden-md hidden-lg">
        <div class="container">
            <div class="row">
                <!-- Menu -->
                <div class="col-md-5 col-sm-6 col-xs-12 hidden-xs hidden-sm">
                    <!-- Menu Left -->
                    <nav class="menu_left pull-right menu_right hidden-sm hidden-xs">
                        <ul class="nav nav-right">  
                            
                            
                            <li class="nav-item active"><a class="nav-link" href="/">Trang chủ</a></li>
                            
                            
                            
                            <li class="nav-item "><a class="nav-link" href="/gioi-thieu.html">Giới thiệu</a></li>
                            
                            

                        </ul>
                        
                        
                    </nav>

                    <!-- End Menu Left -->
                </div>
                <!-- Logo -->
                <div class="col-md-2 col-sm-12 col-xs-12">
                    <div class="logo">                      
                        
                        <a href="/" class="logo-wrapper ">                  
                            <img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logoden']['file_vn']?>" alt="logo Daniel Watch" class="img-responsive">                  
                        </a>
                                                
                    </div>
                </div>
                <!-- End Logo -->

                <div class="col-md-5 col-sm-12 col-xs-12">
                    <!-- Menu Right -->
                    <nav class="menu_right pull-left hidden-sm hidden-xs">
                        <ul class="nav nav-right">
                            
                            
                            <li class="nav-item "><a class="nav-link" href="chu-de/tin-tuc.html">Tin tức</a></li>
                            
                            
                            
                            <li class="nav-item "><a class="nav-link" href="/lien-he.html">Liên hệ</a></li>
                            
                            
                        </ul>
                    </nav>
                    <!-- End Menu Right -->
                    <!-- Search,Login,Cart -->
                    <!-- Login -->
                    <div class="login_main hidden-xs hidden-sm">
                        <span class="text-user"><i class="fa fa-user"></i></span>

                        
                        <ul>
                            <li><i class="fa fa-user-plus"></i><a href='/' id='customer_login_link'> Đăng nhập</a></li>
                            <li><i class="fa fa-user-plus"></i><a href='/' id='customer_register_link'> Đăng ký</a></li>
                        </ul>
                        
                    </div>
                    <!-- End Login -->
                    <!-- Search -->
                    <div class="search_form hidden-xs hidden-sm">
                        <form action="/search/" method="get" class="search-form" role="search">
                            <input type="text" name="q" value="" class="form-control search" placeholder="Nhập từ khóa...">
                            <button style="border-width:0px !important" class="search_btn"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <!-- End Search -->
                    <!-- Cart -->
                    <div class="top-cart-contain pull-right">
                        <a href="gio-hang.html">     
                                    <div class="cart-box"><i class="fa fa-shopping-basket"></i>
                                        <span class="count_item_pr cartCount"><?php if(!empty($_SESSION[ "cart2"])) { $soluong=0; foreach($_SESSION[ 'cart2'] as $k=>$v) { $soluong=$soluong+1; } ?> <?php echo $soluong?>
                                            <?php }else echo '0'?></span></div>
                                </a>
                        <div class="mini-cart">
                            <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                                
                            </div>
                            
                        </div>
                    </div>

                    <!-- End Cart -->
                    <!-- End Search,Login,Cart -->
                </div>
            </div>
        </div>
    </div>

    <!-- Menu,Search,cart mobile -->
    <div class="action_mobile hidden-lg hidden-md visibile-sm visibile-xs">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                    <!-- icon menu mobile -->
                    <section class="button_menu_mobile">
                        <div id="nav_list" class="active">
                            <i class="fa fa-align-left fa-2x"></i>
                        </div>
                    </section>
                    <!-- End icon menu mobile -->
                    <div class="menu-top-custom">
                        <div class="navbar-collapse pushmenu pushmenu-left">
                            
                            <ul class="nav navbar-nav">
                                
                                
                                <li class="active">
                                    <a class="v2_link_submenu_1" href="/">Trang chủ</a>
                                </li>
                                
                                
                                
                                <li class="">
                                    <a class="v2_link_submenu_1" href="/gioi-thieu.html">Giới thiệu</a>
                                </li>
                                
                                
                                
                                <li class="">
                                    <a class="v2_link_submenu_1" href="/chu-de/tin-tuc.html">Tin tức</a>
                                </li>
                                
                                
                                
                                <li class="">
                                    <a class="v2_link_submenu_1" href="/lien-he.html">Liên hệ</a>
                                </li>
                                
                                

                            </ul>
                    
                            
                            
                            <ul class="nav navbar-nav">
                                
                                <?php if(!empty($data[ 'catelog'])){
                             foreach($data[ 'catelog'] as $item){ 
                                $idcat = $item['Id'];
                 
                            $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                            $ds=mysql_query($sql) or mysql_error;
                            $row=mysql_num_rows($ds);                        
                                            ?>
                                <li class="">
                                    <a class="v2_link_submenu_1" href="<?php echo $item['alias'] ?>.html"><?php echo $item['title_vn'] ?></a>

                                        <?php if ($row >= 1){?>
                                        
                                        <ul class="top-menu-new">
                                            
                                           <?php  while ($item2 = mysql_fetch_assoc($ds)) { ?>
                                            <li class="">
                                                <a class="v2_link_submenu_1" href="<?php echo $item2['alias'] ?>.html"><?php echo $item2['title_vn'] ?></a>
                                            </li>   
                                            <?php }?>
                                        </ul>
                                    <?php }?>

                                </li>
                                
                                <?php }}?>
                                
                               
                                
                                

                            </ul>
                            <div class="login_mobile" style="display: none; ">
                                <i class="fa fa-user"></i><span class="text-user" style="color:#2a2a2a;font-weight:bold;"> Tài khoản</span>
                                
                                <span class="log" style="display:none;">
                                    <a href="/account/login">Đăng nhập</a>
                                    <a href="/account/register">Đăng ký</a>
                                </span>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-8">
                    <!-- Search Mobile -->
                    <div id="custom-search-input">
                        <form action="/search/" method="get" class="search-form" role="search">
                            <div class="input-group col-md-12">
                                <input name="q" type="text" class="search-query form-control" placeholder="Từ khóa tìm kiếm..." />
                                <span class="action-search">
                                    <button class="btn-search" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form> 
                    </div>
                    <!-- End Search Mobile -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Menu,Search,cart mobile -->

    <!-- Category Products Menu -->
    <div class="category_products_menu hidden-sm hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-md-3 ">
                <div class="logo-header ">                      
                        
                        <a href="/" class="logo-wrapper ">                  
                            <img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" alt="logo Daniel Watch" class="img-responsive">                  
                        </a>
                                                
                    </div>
                </div>
                <div class="col-md-6 ">
                <div class="category_products_menu_inner">
                
                    <ul id="nav">
     
        <?php if(!empty($data[ 'catelog'])){
     foreach($data[ 'catelog'] as $item){ 
        $idcat = $item['Id'];

    $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
    $ds=mysql_query($sql) or mysql_error;
    $row=mysql_num_rows($ds);                        
                    ?>
    
    
    <li class="nav-item ">
        <a href="<?php echo $item['alias'] ?>.html" class="nav-link"><?php echo $item['title_vn'] ?></a><!--menu don-->
        <div class="nav-mega container">
            <div>
                    <div class="row">
                        <div class="col-md-12 block_mega mega-don">
                         <?php if ($row >= 1){?>
                            <ul class="dropdown-menu_ dropdown-menu level-1">
                                
                               <?php  while ($item2 = mysql_fetch_assoc($ds)) { ?>     
                                <li class="dropdown-submenu nav-item-lv1">
                                
                                    <a href="<?php echo $item2['alias'] ?>.html"><i class="fa fa-caret-right" aria-hidden="true"></i> <?php echo $item2['title_vn'] ?></a>
                                    
                                </li>
                                <?php }?>
                                
                               
                            </ul>
                          <?php }?>  
                        </div>
                    </div>
            </div>
        </div>
    </li>
    <?php }}?>
 
</ul>
</div>
</div>
<div class="col-md-3">
                  
                   
                    <!-- Search,Login,Cart -->
                    <!-- Login -->
                    <div class="login_main hidden-xs hidden-sm">
                        <span class="text-user"><i class="fa fa-user"></i></span>

                        
                        <ul>
                            <li><i class="fa fa-user-plus"></i><a href="/" id="customer_login_link"> Đăng nhập</a></li>
                            <li><i class="fa fa-user-plus"></i><a href="/" id="customer_register_link"> Đăng ký</a></li>
                        </ul>
                        
                    </div>
                    <!-- End Login -->
                    <!-- Search -->
                    <div class="search_form hidden-xs hidden-sm">
                        <form action="/search/" method="get" class="search-form" role="search">
                            <input name="q" value="" class="form-control search" placeholder="Nhập từ khóa..." type="text">
                            <button style="border-width:0px !important" class="search_btn"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <!-- End Search -->
                    <!-- Cart -->
                    <div class="top-cart-contain pull-right">
                        <a href="gio-hang.html">     
                                    <div class="cart-box"><i class="fa fa-shopping-basket"></i>
                                        <span class="count_item_pr cartCount">0</span></div>
                                </a>
                        <div class="mini-cart">
                            <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                                
                            </div>
                            
                        </div>
                    </div>

                    <!-- End Cart -->
                    <!-- End Search,Login,Cart -->
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Category Products Menu -->
</header>
<!-- End Header -->
<script>

    $( ".text-user" ).click(function() {
        $( ".log" ).toggleClass( "active" );
    });
    $( ".fa-search" ).click(function(e) {
        e.preventDefault();
        $( ".search-form" ).toggleClass( "active" );
    });
    $( ".text-user" ).click(function(e) {
        e.preventDefault();
        $( ".login_main ul" ).toggleClass( "active" );
    });
</script>
<?php /*?>
<div class="top" id="top">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <column class="position-display">
                    <div>
                        <div class="dv-builder-full">
                            <div id="top-social-items" class="dv-builder top-social">
                                <div class="dv-module-content">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                                            <div class="dv-item-module ">
                                                <div class="content_info">
                                                    <ul class="list">
                                                        <li class="item-content">
                                                            <div class="item-description">
                                                               Hotline: <?=$row_web[ 'hotline']?>
                                                            </div>
                                                        </li>
                                                        <li class="item-content">
                                                            <div class="item-description">Email:
                                                                <?php echo $row_web[ 'email']?>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="dv-item-module ">
                                                <div>
                                                    <div class="top-bar-social"><a href="https://www.facebook.com/anhbanmai.vn/" target="_blank"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-pinterest"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </column>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-right">
                <div id="top-links" class="nav pull-right">
                    <ul class="list-inline">
                       <!--  <li class="dropdown dropdown main-hover account">
                           <a href="" title="Tài Khoản">
                               <span class="">
                                                                   Đăng Nhập                                                               </span>
                           </a>
                       
                       </li> 
                        <li><a href="/yeu_thich" id="wishlist-total" title="Yêu thích (0)"><span class="">Yêu thích (0)</span></a>
                        </li>-->
                        <li><a href="gio-hang.html" title="Thanh toán"><span class="">Thanh toán</span></a>
                        </li>
                        <li>
                            <div id="cart" class="btn-group btn-block">
                                <button type="button" data-toggle="dropdown" data-loading-text="Đang Xử lý..." class="btn btn-inverse btn-block btn-lg dropdown-toggle">
                                <span id="cart-total">
                                <span class="num_product"><?php if(!empty($_SESSION[ "cart2"])) { $soluong=0; foreach($_SESSION[ 'cart2'] as $k=>$v) { $soluong=$soluong+1; } ?> <?php echo $soluong?>
                                            <?php }else echo '0'?>
                                </span> 

                                </button>
                                <?php if(empty($_SESSION[ "cart2"])){?>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <p class="text-center">Giỏ Hàng đang trống!</p>
                                    </li>
                                </ul>
                                <?php }else {?>
                                <ul class="dropdown-menu pull-right">
                                <?php if(!empty($_SESSION[ "cart2"])){ 
                                    $i=1; $soluong=0;
                                    $mproduct= new Models_MProduct;
                                     $tongdonhang=0 ; 
                                     foreach($_SESSION[ "cart2"] as $k=>$v) { 
                                         
                                        $pro = $mproduct->getOneProduct($k);
                                         $tong =$tong+ $pro['sale_price']*$v; 
                                         $soluong = $soluong +$v;  ?>
                                <li class="table-responsive">
      <table class="table table-striped">
                <tbody><tr>
          <td class="text-center">            <a href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>"><img src="<?php  echo  BASE_URL.PATH_IMG_PRODUCT.$pro['images'] ?>" alt="<?php  echo  $pro['title_vn'] ?>" title="<?php  echo  $pro['title_vn'] ?>" class="img-thumbnail"></a>
            </td>
          <td class="text-left"><a href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>"><?php  echo  $pro['title_vn'] ?></a>
                        </td>
          <td class="text-right">x<?php  echo  $soluong ?></td>
          <td class="text-right"> <?php echo bsVndDot($pro['sale_price']*$v) ?> VNĐ</td>
          <td class="text-center"><a href="<?php  echo  BASE_URL."payment/delcart-".$k?>.html"><button type="button"  title="Loại bỏ" class="btn btn-danger btn-xs"><i class="fa fa-times"></i></button></a></td>
        </tr>
                      </tbody></table>
    </li>
<?php $soluong=0;}}?>
    <li>
      <div>
        <table class="table table-bordered">
                    <tbody>
                    <tr>
            <td class="text-right"><strong>Tổng cộng </strong></td>
            <td class="text-right"><?php  echo  bsVndDot($tong) ?> VNĐ</td>
          </tr>
                  </tbody></table>
        <p class="text-right"><a href="gio-hang.html"><strong><i class="fa fa-shopping-cart"></i> Xem Giỏ Hàng</strong></a>&nbsp;&nbsp;&nbsp;<a href="gio-hang.html"><strong><i class="fa fa-share"></i> Thanh Toán</strong></a></p>
      </div>
    </li></ul><?php }?>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end herder -->
<div class="header" id="header">
    <div class="container">
        <column class="position-display">
            <div>
                <div class="dv-builder-full">
                    <div class="dv-builder header">
                        <div class="dv-module-content">
                            <div class="row">
                                <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                                    <div class="dv-item-module ">
                                        <div id="logo">
                                            <a href="<?=BASE_URL?>" class="active">
        <img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" title="" class="img-responsive ">
             </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-9 col-lg-9 col-xs-12">
                                    <div class="dv-item-module ">
                                        <div class="navbar navbar-inverse yamm menu_horizontal" id="menu_id_MB01">
                                            <div class="navbar-header">
                                                <button type="button" data-toggle="collapse" data-target="#navbar-collapse-MB01" class="navbar-toggle">
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </button>
                                            </div>
                                            <div id="navbar-collapse-MB01" class="navbar-collapse collapse">
                                                <ul class="nav navbar-nav">
                                                    <li class="vertical-menu-list">
                                                        <a href="/" class="<?php if($mod== "") echo "active"?>">
                  
          Trang chủ          </a>
                                                    </li>

                                                    <!--li table -->
                                                    <li class="dropdown mega-dropdown">
                                                        <a href="#" class="dropdown-toggle <?php if($mod== "sanpham") echo "active"?>" data-toggle="dropdown">Sản phẩm <span class="caret"></span></a>
                                                        <ul class="dropdown-menu mega-dropdown-menu row hover-drop">
                            <?php if(!empty($data[ 'catelog'])){
                             foreach($data[ 'catelog'] as $item){ 
                                $idcat = $item['Id'];
                 
                            $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc";
                            $ds=mysql_query($sql) or mysql_error;
                           // $row=mysql_num_rows($ds);                        
                                            ?>
                                                            <li class="dropdown-header-ms">
                                                                <a class="table-mega-child-2" href="<?php echo $item['alias'] ?>.html">
                                                                    <div class="imgage_mega hidden-xs">
                                                                    </div>
                                                                    <?php echo $item['title_vn'] ?> </a>
                                                                <ul class="ul-mega-menu-child">
                            <?php while ($item2 = mysql_fetch_assoc($ds)) {
                                $idcat2 = $item2['Id'];
                 
                            $sql2="select * from mn_catelog where parentid='$idcat2' and ticlock = '0' order by sort asc,Id desc";
                            $ds2=mysql_query($sql2) or mysql_error;
                           // $row=mysql_num_rows($ds);  


                                ?>    
                                                                    <li class="dropdown-header-m3">
                                                                        <a href="<?=$item2['alias']?>.html" class="table-mega-child-3">
                                                                        <?php echo $item2['title_vn'] ?></a>
                                                                        <ul class="ul-mega-menu-child3">
                                                                            
                            <?php while ($item3 = mysql_fetch_assoc($ds2)) {?>
                                                                            <li>
                                                                                <a class="table-mega-child-4" href="<?=$item3['alias']?>.html">
                                                                                 <?=$item3['title_vn']?></a>
                                                                            </li><?php }?>

                                                                        </ul>
                                                                    </li><?php }?>
                                                                    
                                                                  
                                                                </ul>

                                                            </li>
                                                            <!-- hết 1 li -->
                                            <?php }}?>

                                                            
                                                        </ul>
                                                    </li>
                                                    <!-- end li tablle -->

                                                    <li class="vertical-menu-list">
                                                        <a class=" <?php if($var=='khuyen-mai') echo "active"?>" href="chu-de/khuyen-mai.html">
                  
          Khuyến mãi          </a>
                                                    </li> 

                                                    <li class="vertical-menu-list ">
                                                        <a class="<?php if($var=='tin-tuc') echo "active"?>" href="chu-de/tin-tuc.html">
                  
          Tin Tức          </a>
                                                    </li>

                                                    <li class="dropdown">
                                                        <a data-toggle="dropdown" class="dropdown-toggle sss" aria-expanded="false">
               
          Hướng dẫn <b class="caret"></b>
          </a>

                                                        <ul role="menu" class="dropdown-menu multi-level" aria-labelledby="dropdownMenu">
                                                            <li>
                                                                <a class="down-mega-child2" href="bai-viet/huong-dan-dat-hang.html">
                        Hướng dẫn đặt hàng              </a>
                                                            </li>
                                                            <li>
                                                                <a class="down-mega-child2" href="bai-viet/huong-dan-thanh-toan.html">
                        Hướng dẫn thanh toán              </a>
                                                            </li>
                                                            <li>
                                                                <a class="down-mega-child2" href="bai-viet/chuyen-khoan-ngan-hang.html">
                        Chuyển khoản ngân hàng              </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="vertical-menu-list">
                                                        <a href="gioi-thieu.html">
                  
          Giới thiệu          </a>
                                                    </li>

                                                    <li class="vertical-menu-list">
                                                        <a href="lien-he.html">
                  
          Liên hệ          </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <script>
                                            $(function() {
                                                window.prettyPrint & amp; & amp;
                                                prettyPrint()
                                                $(document).on('click', '.navbar .dropdown-menu', function(e) {
                                                    e.stopPropagation()
                                                })
                                            })

                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </column>
    </div>
</div>
<!-- end -->
<div class="main-menu" id="main-menu">
    <div class="container">
        <column class="position-display">
            <div>
                <div class="content_info hidden-xs col-md-12">
                    <div class="row content-column">
                        <div class="item-content col-md-3">
                            <div class="item-image">
                                <img src="<?=BASE_URL?>public/theme/images/giao-hang-toan-quoc-1-40x40_0.png">
                            </div>
                            <div class="item-title">
                                <a href="/giao-hang-toan-quoc.html">
                                                Giao hàng toàn quốc                                                    </a>
                            </div>
                        </div>
                        <div class="item-content col-md-3">
                            <div class="item-image">
                                <img src="<?=BASE_URL?>public/theme/images/thanh-toan-thuan-tien-40x40_0.png">
                            </div>
                            <div class="item-title">
                                Thanh toán thuận tiện </div>
                        </div>
                        <div class="item-content col-md-3">
                            <div class="item-image">
                                <img src="<?=BASE_URL?>public/theme/images/chinh-sach-doi-tra-40x40_0.png">
                            </div>
                            <div class="item-title">
                                Chính sách đổi trả </div>
                        </div>
                        <div class="item-content col-md-3">
                            <div class="item-image">
                                <img src="<?=BASE_URL?>public/theme/images/thoi-gian-lam-viec-40x40_0.png">
                            </div>
                            <div class="item-title">
                                Thời gian làm việc </div>
                            <div class="item-description">
                                Thứ 2-7 * 8h30-12h * 13h30-18h </div>
                        </div>
                        <div class="item-content col-md-3">
                            <div class="item-image">
                                <img src="<?=BASE_URL?>public/theme/images/tai-catalogue-40x40_0.png">
                            </div>
                            <div class="item-title">
                                <a href="/tai-catalogue.html">
                                                Catalogue Sản Phẩm                                                    </a>
                            </div>
                            <div class="item-description">
                                Click để tải về </div>
                        </div>
                    </div>
                </div>
            </div>
        </column>
    </div>
</div>
<script type="text/javascript">
    $(window).scroll(function(){
  var h=$(window).scrollTop();
  var width=$(window).width();
  if(width>767){
    if(h>35){
      $('#header').addClass('main-header-ontop');
    }
  else{
    $('#header').removeClass('main-header-ontop');
}}});
</script>
<?php /*?>
<!-- Header -->
<header class="header-container">
    <!-- Navbar -->
    <nav>
        <div class="header container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="mm-toggle-wrap col-xs-2">
                        <div class="mm-toggle"><i class="fa fa-bars"></i>
                        </div>
                    </div>
                    <!-- Header Logo -->
                    <div class="col-md-2 col-lg-2 col-sm-8 col-xs-7 logo-header">
                        <a class="logo" href="<?php echo BASE_URL?>">
                            
                            <img alt="Coffee House" src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" />
                            
                        </a>
                    </div>
                    <div class="nav-mobile hidden-lg hidden-md">
                        <div class="top-cart-contain" id="open_shopping_cart">
                            <div class="mini-cart">
                                <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                                    <a href="gio-hang.html"><i class="icon-cart"></i>
                                    <?php if(empty($_SESSION["cart2"])){?>
                                    <span class="item_count">0</span><?php }?>
                                    <?php  if(!empty($_SESSION["cart2"]))
                                   
                                   {
                                      $soluong=0;
                                      foreach($_SESSION['cart2'] as $k=>$v)
                                      {
                                          $soluong=$soluong+1;
                                      }
                                   
                             ?> <span class="item_count"><?php echo $soluong?></span> <?php }?>

                                    </a>
                                </div>
                                <ul id="cart-sidebar" class="mini-products-list">
                                    <div style="display: none;" class="top-cart-content open_button arrow_box shopping_cart dropdown find" data-amount="1">
                                        <?php if(!empty($_SESSION[ "cart2"])){?>
                                        <div class="animated_item">
                                            <p>Sản phẩm đã cho vào giỏ hàng</p>
                                        </div>
                                        <?php }else{?>
                                        <div class="animated_item">
                                            <p>chưa có sản phẩm</p>
                                        </div>
                                        <?php }?>

                                        <?php if(!empty($_SESSION[ "cart2"])){ $i=1; $mproduct=n ew Models_MProduct; $tongdonhang=0 ; foreach($_SESSION[ "cart2"] as $k=>$v) { $t++; $pro = $mproduct->getOneProduct($k); $tong = $tong+$pro['sale_price']*$v; $soluong = $soluong +$v; ?>
                                        <li class="item even">
                                            <a class="product-image" href="<?php echo  BASE_URL." san-pham/ ".$pro['alias']; ?>"><img src="<?php  echo  BASE_URL.PATH_IMG_PRODUCT.$pro['images'] ?>" width="80"></a>

                                            <div class="detail-item">
                                                <div class="product-details"> <a href="gio-hang.html" class="btn-remove1">Remove This Item</a>
                                                    <p class="product-name">
                                                        <a href="<?php echo  BASE_URL." san-pham/ ".$pro['alias']; ?>" title="<?php echo $pro['title_vn']?>">
                                                            <?php echo $pro[ 'title_vn']; ?>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div class="product-details-bottom"> <span class="price"><?php  echo  bsVndDot($pro['sale_price']) ?>₫</span> </div>
                                            </div>
                                        </li>
                                        <?php }?>

                                        <div class="animated_item actions"><a href="gio-hang.html" class=" view-cart">Giỏ hàng</a><a href="gio-hang.html" class=" btn-checkout">Thanh toán</a>
                                        </div>
                                        <?php }?>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <!-- Header search -->

                        <div class="form_search">
                            <form action="/search" method="get" class="navbar-form form_search_index">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="submit" class="btn btn-default"> <i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Header Logo -->

                    <div class="col-md-10 col-lg-10 col-sm-12">
                        <div class="nav-inner">
                            <ul id="nav" class="">


                                <li class="level0 parent drop-menu active"><a href="/"><span>Trang chủ</span> </a>
                                </li>



                                <li class="level0 parent drop-menu "><a href="gioi-thieu.html"><span>Giới thiệu</span> </a>
                                </li>



                                <li class="level0 parent drop-menu "><a href="san-pham.html"><span>Sản phẩm</span> </a>
                                    <ul style="display: none;" class="level1">

                                        <?php if(!empty($data[ 'catelog'])){ foreach($data[ 'catelog'] as $item){ ?>
                                        <li class="level1 first ">
                                            <a href="<?php echo $item['alias'] ?>.html"> <span><?php echo $item['title_vn']?></span>
                                            </a>
                                        </li>
                                        <?php }}?>





                                    </ul>
                                </li>



                                <li class="level0 parent drop-menu "><a href="chu-de/tin-tuc.html"><span>Tin tức</span> </a>
                                </li>



                                <li class="level0 parent drop-menu "><a href="lien-he.html"><span>Liên hệ</span> </a>
                                </li>


                            </ul>
                        </div>
                        <div class="nav-inner hidden-sm hidden-xs" style="z-index:0">
                            <div class="top-cart-contain" id="open_shopping_cart">
                                <div class="mini-cart">
                                    <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                                        <a href="gio-hang.html"> <i class="icon-cart"></i> Giỏ hàng
                                            <?php if(empty($_SESSION[ "cart2"])){?>
                                            <span class="cart-total">(trống)</span>
                                            <?php }?>
                                            <?php if(!empty($_SESSION[ "cart2"])) { $soluong=0; foreach($_SESSION[ 'cart2'] as $k=>$v) { $soluong=$soluong+1; } ?> <span class="cart-total">(<?php echo $soluong?>)</span>
                                            <?php }?>
                                        </a>
                                    </div>
                                    <ul id="cart-sidebar" class="mini-products-list">
                                        <div style="display: none;" class="top-cart-content open_button arrow_box shopping_cart dropdown find" data-amount="1">
                                            <?php if(!empty($_SESSION[ "cart2"])){?>
                                            <div class="animated_item">
                                                <p>Sản phẩm đã cho vào giỏ hàng</p>
                                            </div>
                                            <?php }else{?>
                                            <div class="animated_item">
                                                <p>chưa có sản phẩm</p>
                                            </div>
                                            <?php }?>

                                            <?php if(!empty($_SESSION[ "cart2"])){ $i=1; $mproduct=n ew Models_MProduct; $tongdonhang=0 ; foreach($_SESSION[ "cart2"] as $k=>$v) { $t++; $pro = $mproduct->getOneProduct($k); $tong = $tong+$pro['sale_price']*$v; $soluong = $soluong +$v; ?>
                                            <li class="item even">
                                                <a class="product-image" href="<?php echo  BASE_URL." san-pham/ ".$pro['alias']; ?>"><img src="<?php  echo  BASE_URL.PATH_IMG_PRODUCT.$pro['images'] ?>" width="80"></a>

                                                <div class="detail-item">
                                                    <div class="product-details"> <a href="gio-hang.html" class="btn-remove1">Remove This Item</a>
                                                        <p class="product-name">
                                                            <a href="<?php echo  BASE_URL." san-pham/ ".$pro['alias']; ?>" title="<?php echo $pro['title_vn']?>">
                                                                <?php echo $pro[ 'title_vn']; ?>
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div class="product-details-bottom"> <span class="price"><?php  echo  bsVndDot($pro['sale_price']) ?>₫</span> </div>
                                                </div>
                                            </li>
                                            <?php }?>

                                            <div class="animated_item actions"><a href="gio-hang.html" class=" view-cart">Giỏ hàng</a><a href="gio-hang.html" class=" btn-checkout">Thanh toán</a>
                                            </div>
                                            <?php }?>
                                        </div>
                                    </ul>

                                </div>
                            </div>

                            <!-- Header Top seach-->



                            <div class="form_search">
                                <form action="/search/" method="get" class="navbar-form form_search_index">
                                    <div class="input-group">
                                        <input type="text" value="" maxlength="70" name="q" id="search" class="form-control block_in" placeholder="Tìm kiếm">
                                        <span class="input-group-btn">
                                            <button type="submit" class="btn btn-default"> <i class="fa fa-search"></i> Tìm kiếm</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<!-- end header -->

<?php /*?>

<div class="header-container">
    <header id="header">
        <div class="nav">
            <div class="container">
                <div class="row">
                    <nav>

                        <ul id="header_links" style="margin: 0px">
                            <li>
                                <a class="" href="tel:<?php echo $row_web['hotline']?>" title="">


                                    <?php echo $row_web[ 'slogan']?>
                                </a>

                            </li>
                        </ul>


                        <div id="mobile_links">

                            <ul id="header_links">
                                <li> <a class="link-myaccount" href="" title=""><i class="icon-phone"></i> <?php echo $row_web['hotline']?></a>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="header_bottom" style="">
            <div class="container">
                <div id="header_logo">
                    <a href="<?php echo BASE_URL;?>"> <img class="logo img-responsive" src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" alt="Wine home2" height="35" width="200"> </a>
                </div>
                <div id="sticky_top" class="" style="right: auto;">
                    <div id="search_block_top">
                        <div class="current"> <span><i class="icon-search"></i><span>Search</span></span>
                        </div>
                        <div class="field-search toogle_content" style="">
                            <form action="search/" id="searchbox">

                                <input class="search_query form-control ac_input" id="search_query_top" name="q" placeholder="Search..." type="text">
                                <button type="submit" name="submit_search" class="btn button-search"> <span class="icon-search"></span> </button>
                            </form>
                        </div>
                    </div>
                    <div class="shopping_cart_menu">
                        <div id="cart_block_top" class="shopping_cart" style="">
                            <a href="gio-hang.html" title="View my shopping cart" rel="nofollow"> <span class="text_cart">giỏ hàng</span>
                                <?php if(empty($_SESSION[ "cart2"])){?><span class="ajax_cart_no_product">(trống)</span>
                                <?php }?>
                                <?php if(!empty($_SESSION[ "cart2"])) { $soluong=0; foreach($_SESSION[ 'cart2'] as $k=>$v) { $soluong=$soluong+1; } ?>

                                <span class="ajax_cart_no_product">(<?php echo $soluong?>)sản phẩm</span>
                                <?php }?>
                            </a>
                            <!-- phần show  -->

                            <div class="cart_block block exclusive">
                                <div class="block_content">
                                    <div class="cart_block_list">
                                        <dl class="products">
                                            <?php if(!empty($_SESSION[ "cart2"])){ $i=1; $mproduct=n ew Models_MProduct; $tongdonhang=0 ; foreach($_SESSION[ "cart2"] as $k=>$v) { $t++; $pro = $mproduct->getOneProduct($k); $tong = $tong+$pro['sale_price']*$v; $soluong = $soluong +$v; ?>
                                            <dt data-id="cart_block_product_1_1_0" class="first_item"> 
                                        <a class="cart-images" href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>" title="De brignac gift set">
                                          <img src="<?php  echo  BASE_URL.PATH_IMG_PRODUCT.$pro['images'] ?>" alt="De brignac gift set">
                                        </a>
                                        <div class="cart-info">
                                          <div class="product-name">
                                            
                                            <a class="cart_block_product_name" href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>" title="De brignac gift set"><?php echo $pro['title_vn'] ?>...
                                            </a>
                                            </div>
                                            <div class="product-atributes"> 
                                            <a href="<?php echo  BASE_URL."san-pham/".$pro['alias']; ?>" title="Product detail"><?php  echo  bsVndDot($pro['sale_price']) ?>₫  </a>
                                            </div>
                                        </div> 
                                        <span class="remove_link"> <a class="ajax_cart_block_remove_link" href="<?php  echo  BASE_URL."payment/delcart-".$k?>.html">&nbsp;</a> </span>
                                      </dt>
                                            <?php }?>
                                            <p class="cart-buttons">
                                                <a id="button_order_cart" class="btn btn-default button button-small" href="gio-hang.html" title="thanh toán" rel="nofollow"> <span> thanh toán<i class="icon-chevron-right right"></i> </span> </a>
                                            </p>
                                            <?php }else {?>
                                            <dd data-id="cart_block_combination_of_1_1_0" class="first_item"></dd>
                                        </dl>

                                        <p class="cart_block_no_products"> chưa có sản phẩm</p>
                                        <?php }?>


                                    </div>
                                </div>
                            </div>
                            <!-- end phan show -->
                        </div>
                    </div>


                    <div class="header_image">
                        <h2 style="color: #2D3A4B"><?php echo $row_web['tencty']?></h2>
                        <p>
                            <?php echo $row_web[ 'diachi']?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
<div id="header_menu" class="visible-lg visible-md">
    <div class="plus_col">
        <div class="container"><span></span>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="header-vmegamenu col-3">
                <div class="v-megamenu-container">
                    <div class="v-megamenu-title">
                        <div class="background-title">
                            <h3> <i class="icon-navicon"></i> <span>Danh Mục</span> <i class="icon-angle-down"></i></h3>
                        </div>
                    </div>
                    <div class="v-megamenu">
                        <ul>
                            <?php if(!empty($data[ 'catelog'])){ foreach($data[ 'catelog'] as $item){ ?>
                            <li class="v-megamenuitem id_menu4 hasChildren" data-menuid="4"><a class="menu-title" href="<?php echo $item['alias']?>.html"><span class="item-icon">+ &nbsp;<?php echo $item['title_vn']?></span></a>
                                <a href="#" class="opener"></a>
                                <?php $idcat=$ item[ 'Id']; $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc" ; $ds=mysql_query($sql) or mysql_error; $cat=mysql_fetch_row($ds); if($cat>0){?>
                                <div class="submenu dd-section right-co fmsid4 clearfix">
                                    <div class="sections-contaier">
                                        <div class="v-main-section only-right">
                                            <div class="section-indent">
                                                <ul class="v-main-section-links">
                                                    <?php $idcat=$ item[ 'Id']; $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc" ; $ds=mysql_query($sql) or mysql_error; while ($subcat=m ysql_fetch_assoc($ds)) {?>

                                                    <li class=""><a class="menu-item-title" href="<?php echo $subcat['alias']?>.html">+ &nbsp;<?php echo $subcat['title_vn']?></a>
                                                        <ul class="v-main-section-sublinks dd-section level_0">
                                                            <?php $idcat2=$ subcat[ 'Id']; $sql2="select * from mn_catelog where parentid='$idcat2' and ticlock = '0' order by sort asc,Id desc" ; $ds2=mysql_query($sql2) or mysql_error; while ($subcat2=m ysql_fetch_assoc($ds2)) {?>

                                                            <li class=""><a class="menu-item-title" href="<?php echo $subcat['alias']?>.html">- &nbsp; <?php echo $subcat2['title_vn']?></a>
                                                            </li>
                                                            <?php }?>
                                                        </ul>
                                                    </li>
                                                    <?php }?>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="right-section">
                                            <div class="section-indent">
                                                <a href="" class="imagelink"><img src="<?php echo BASE_URL.PATH_IMG_CATELOG.$item['images']?>" class="rightimage menu-image" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php };?>
                            </li>

                            <?php }}?>





                            <li class="v-megamenuitem id_menu19 more_here" style="display:none;" data-menuid="19"><a class="menu-title" href="http://demo.fieldthemes.com/ps_wine/home2/en/51-rings"><i class="icon-university"></i><span class="item-icon">Rings</span></a>
                            </li>
                            <li class="v-megamenuitem id_menu20 more_here" style="display:none;" data-menuid="20"><a class="menu-title" href="http://demo.fieldthemes.com/ps_wine/home2/en/43-shapewear"><i class="icon-h-sign"></i><span class="item-icon">Shapewear</span></a>
                            </li>
                            <li class="more-vmegamenu" style="display: none;"><a><span class="abc" ><i class="icon-pluss"></i>View more</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-megamenu col-9">
                <nav id="fieldmegamenu-main" class="fieldmegamenu">
                    <ul>
                        <li class="root root-1 menu-home">
                            <div class="root-item no-description">
                                <a href="" class="">
                                    <div class="title"><span class="title-text">Trang Chủ</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="root root-15 ">
                            <div class="root-item no-description">
                                <a href="chu-de/huong-dan-mua-hang.html">
                                    <div class="title"><span class="title-text">Hướng Dẫn</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="root root-8 ">
                            <div class="root-item no-description">
                                <a href="chu-de/chuong-trinh-khuyen-mai.html">
                                    <div class="title"><span class="title-text">Chương trình khuyến mãi</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="root root-8 ">
                            <div class="root-item no-description">
                                <a href="chu-de/tin-tuc.html">
                                    <div class="title"><span class="title-text">Tin Tức</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="root root-15 ">
                            <div class="root-item no-description">
                                <a href="chu-de/ve-chung-toi.html">
                                    <div class="title"><span class="title-text">Về chúng tôi</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="root root-16 ">
                            <div class="root-item no-description">
                                <a href="lien-he.html">
                                    <div class="title"><span class="title-text">liên Hệ</span>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div id="header_mobile_menu" class="navbar-inactive visible-sm visible-xs">
    <div class="container">
        <div class="fieldmm-nav col-sm-12 col-xs-12"> <span class="brand">Menu list</span> <span id="fieldmm-button"><i class="icon-reorder"></i></span>
            <nav id="fieldmegamenu-mobile" class="fieldmegamenu inactive">
                <ul>

                    <li class="root root-1 menu-home">
                        <div class="root-item no-description">
                            <a href="<?php echo BASE_URL?>" class="active">
                                <div class="title"><span class="title-text">Trang Chủ</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="root root-8 ">
                        <div class="root-item no-description">
                            <a href="chu-de/ve-chung-toi.html">
                                <div class="title"><span class="title-text">Về Chúng Tôi</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="root root-8 ">
                        <div class="root-item no-description">
                            <a href="chu-de/tin-tuc.html">
                                <div class="title"><span class="title-text">Tin Tức</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="root root-8 ">
                        <div class="root-item no-description">
                            <a href="chu-de/huong-dan-mua-hang.html">
                                <div class="title"><span class="title-text">Hướng Dẫn Mua Hàng</span>
                                </div>
                            </a>
                        </div>
                    </li>

                    <li class="root root-16 ">
                        <div class="root-item no-description">
                            <a href="lien-he.html">
                                <div class="title"><span class="title-text">Liên Hệ</span>
                                </div>
                            </a>
                        </div>
                    </li>

                </ul>
            </nav>
        </div>
        <div class="mobile-vmenu col-sm-12 col-xs-12 vmega-nop">
            <div class="v-megamenu-container">
                <div class="v-megamenu-title">
                    <div class="background-title">
                        <h3> <i class="icon-navicon"></i> <span>All Categories</span> <i class="icon-angle-down"></i></h3>
                    </div>
                </div>
                <div class="v-megamenu">
                    <ul>
                        <?php if(!empty($data[ 'catelog'])){ foreach($data[ 'catelog'] as $item){ ?>
                        <li class="v-megamenuitem id_menu4 hasChildren" data-menuid="4"><a class="menu-title" href="<?php echo $item['alias']?>.html"><span class="item-icon"><?php echo $item['title_vn']?></span></a>
                            <a href="#" class="opener"></a>
                            <?php $idcat=$ item[ 'Id']; $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc" ; $ds=mysql_query($sql) or mysql_error; $cat=mysql_fetch_row($ds); if($cat>0){?>
                            <div class="submenu dd-section right-co fmsid4 clearfix" style="display: none;">
                                <div class="sections-contaier">
                                    <div class="v-main-section only-right">
                                        <div class="section-indent">
                                            <ul class="v-main-section-links">
                                                <?php $idcat=$ item[ 'Id']; $sql="select * from mn_catelog where parentid='$idcat' and ticlock = '0' order by sort asc,Id desc" ; $ds=mysql_query($sql) or mysql_error; while ($subcat=m ysql_fetch_assoc($ds)) {?>
                                                <li class=""><a class="menu-item-title" href="<?php echo $subcat['alias']?>.html">+ <?php echo $subcat['title_vn']?></a>
                                                    <ul class="v-main-section-sublinks dd-section level_0">
                                                        <?php $idcat2=$ subcat[ 'Id']; $sql2="select * from mn_catelog where parentid='$idcat2' and ticlock = '0' order by sort asc,Id desc" ; $ds2=mysql_query($sql2) or mysql_error; while ($subcat2=m ysql_fetch_assoc($ds2)) {?>
                                                        <li class=""><a class="menu-item-title" href="<?php echo $subcat['alias']?>.html">- <?php echo $subcat2['title_vn']?></a>
                                                        </li>
                                                        <?php }?>
                                                    </ul>
                                                </li>
                                                <?php }?>

                                            </ul>
                                        </div>
                                    </div>
                                    <div class="right-section">
                                        <div class="section-indent">
                                            <a href="" class="imagelink"><img src="<?php echo BASE_URL.PATH_IMG_CATELOG.$item['images']?>" class="rightimage menu-image" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php };?>
                        </li>
                        <?php }}?>
                        <li class="v-megamenuitem id_menu19 more_here" style="display:none;" data-menuid="19"><a class="menu-title" href=""><i class="icon-university"></i><span class="item-icon">Rings</span></a>
                        </li>
                        <li class="v-megamenuitem id_menu20 more_here" style="display:none;" data-menuid="20"><a class="menu-title" href=""><i class="icon-h-sign"></i><span class="item-icon">Shapewear</span></a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    function VmenuDropDown() {
        VmenuClick = '#header_menu .v-megamenu-title';
        VmenuSlide = '#header_menu .v-megamenu';
        activeVmenu = 'active';
        $(VmenuClick).on('click', function(e) {
            e.stopPropagation();
            var subUl = $(this).next(VmenuSlide);
            if (subUl.is(':hidden') && !$(this).hasClass('Click')) {
                subUl.slideDown();
                $(this).addClass(activeVmenu);
            } else if (!$(this).hasClass('Click')) {
                subUl.slideUp();
                $(this).removeClass(activeVmenu);
            }
        });
        $(VmenuSlide).on('click', function(e) {
            e.stopPropagation();
        });
        $(document).on('click', function(e) {
            e.stopPropagation();
            var elementVmenu = $(VmenuClick).next(VmenuSlide);
            if (!$(VmenuClick).hasClass('Click')) {
                $(VmenuClick).removeClass('active');
                $(elementVmenu).slideUp();
            }
        });
    };
    VmenuDropDown();

    function fieldmegamm() {
        elementClick1 = '#fieldmm-button';
        elementSlide1 = 'nav#fieldmegamenu-mobile';
        $(elementClick1).on('click', function(e) {
            e.stopPropagation();
            var subUl = $(this).next(elementSlide1);
            if (subUl.hasClass('inactive')) {
                subUl.removeClass('inactive');
                subUl.addClass('active');
            } else {
                subUl.removeClass('active');
                subUl.addClass('inactive');
            }
            e.preventDefault();
        });
        $(elementSlide1).on('click', function(e) {
            e.stopPropagation();
        });
        $(document).on('click', function(e) {
            e.stopPropagation();
            var elementHide1 = $(elementClick1).next(elementSlide1);
            $(elementHide1).addClass('inactive');
            $(elementHide1).removeClass('active');
        });
    }
    fieldmegamm();

    function fieldVmegamenu_mobile() {
            $('.v-megamenu .opener').click(function() {
                var el = $(this).next('.dd-section');
                var switcher = $(this);
                el.animate({
                    "height": "toggle"
                }, 500, function() {
                    if (el.is(':visible')) {
                        el.addClass("act");
                        switcher.addClass('opn');
                    } else {
                        switcher.removeClass('opn');
                        el.removeClass("act");
                    }
                });
                return false;
            });
        }
        //fieldVmegamenu_mobile();

    function fieldVmegamenu() {
        $(".main-section-sublinks > li").hover(function() {
            $(this).find("ul").stop().slideDown("slow");
        }, function() {
            $(this).find("ul").stop().delay(100).slideUp("fast");
        });
        $(".v-megamenuitem").hover(function() {
            var el = $(this).find('.submenu');
            el.stop(true, true).slideDown(450).addClass("showmenu");
        }, function() {
            var el = $(this).find('.submenu');
            el.delay(100).slideUp(0).removeClass("showmenu");
        });
    };;
    //fieldVmegamenu();
    $(document).ready(function() {
        var wdth = $(window).width();
        if (wdth < 992) {
            fieldVmegamenu_mobile();
        } else {
            fieldVmegamenu();
        }
    });
    //nút tìm kiếm
    $('.current').click(function() {
        $('.field-search').slideToggle();
    });
</script>
<?php */?>