
<?php
$db = new Models_MWebsite;
$row_web = $db->getOneWebsite(1);
$pagehtml = new Models_MPageHtml;
$page = $pagehtml->getpagehtmlid(24);
$thongtin = $pagehtml->getpagehtmlid(7);
if(isset($_POST['txtemail']))
{
    $to=$_SESSION['emaillienhe_vn'];
    $email=$_POST['txtemail'];
    if (get_magic_quotes_gpc()== false) 
    {
        $email=trim(mysql_real_escape_string($email));
    }
    
    $sql3="select * from mn_email where email='$email'";
    $ds3=mysql_query($sql3) or die(mysql_error());
    $row3=mysql_num_rows($ds3);
    if($row3>=1)
    {
        echo '<script> alert("Email của bạn đã được đăng ký");
                   location.href="home.html";
          </script>';
    }
    
    else
    {
        $from=$email;
        $tieude="Đăng Ký Nhận Bản Tin Điện Tử từ chuyensihafele.com";
        ob_start();
        echo file_get_contents("mail/emaillienhetukhachhang.html");
        $noidung1 .="Chào bạn, chúng tôi đã nhận được đăng ký email nhận bản tin của bạn<br> ";
        echo $to." - ".$from;
        smtpmailer($from,$to,"chuyensihafele.com",$tieude,$noidung1);
        
        $ngaydang=date("d-m-Y");
        $sql2="insert into mn_email(email,date) values ('$email','$ngaydang')";
        $ds2=mysql_query($sql2) or die(mysql_error());
        
        echo '<script> alert("Đăng ký nhận bản tin thành công");
                       location.href="home.html";
              </script>';
    }
}

?>
<footer class="footer">
  <div class="container">
    <div class="footer-menu">
      <div class="footer-menu-link">
        <div class="col-md-4 col-sm-12 col-xs-12 full-xs">
          <div class="footer-menu-link-title title-first">
            <a href="/"><img class="img-responsive" src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" alt="Kt Watch" title="Kt Watch"></a>
          </div>
          <ul class="content-child">
            <li>
              <strong>Tên cửa hàng:</strong> <?php echo $row_web['tencty']?>
            </li>
            <li>
              <strong>Địa chỉ:</strong> <?php echo $row_web['diachi']?>
            </li>
            
            <li>
              <strong>Số ĐT:</strong> <a href="tel:0934.165.135 - 0934.055.268  " title="Liên hệ : 0934.165.135 - 0934.055.268  "><?php echo $row_web['hotline']?> </a>
            </li>
            <li>
              <strong>Facebook:</strong> <a href="<?php echo $row_web['fanpage']?>" rel="nofollow" title="Facebook">Kt Watch - Đồng Hồ Xách Tay </a>
            </li>
            
          </ul>
        </div>
        <section class="footer-up hidden-xs">
          <div class="col-md-3 col-sm-6 full-xs hidden-xs">
            <div class="footer-menu-link-title">
              <h3>Thông tin cửa hàng</h3>
            </div>
            <ul>
            <li><em><i class="fa fa-caret-right" aria-hidden="true"></i></em> <a href="gioi-thieu.html">Giới thiệu</a></li>
            <li><em><i class="fa fa-caret-right" aria-hidden="true"></i></em> <a href="chu-de/tin-tuc.html">Tin thức</a></li>
            <li><em><i class="fa fa-caret-right" aria-hidden="true"></i></em> <a href="lien-he.html">Liên hệ</a></li>

              <?php /*if(!empty($data['vechungtoi'])){
                                    foreach ($data['vechungtoi'] as $item ) {?>   
              <li><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></li>
              
              <?php }}*/?>
              
            </ul>
          </div>


          <div class="col-md-2 col-sm-6 full-xs hidden-xs">
            <div class="footer-menu-link-title">
              <h3>Chính sách</h3>
            </div>

            <ul>
              <?php if(!empty($data['chinhsach'])){
                                    foreach ($data['chinhsach'] as $item ) {?>   
              <li><a href="bai-viet/<?php echo $item['alias']?>.html"><i class="fa fa-caret-right" aria-hidden="true"></i> <?php echo $item['title_vn']?></a></li>
              
            
              
             <?php }}?>
              
            </ul>
          </div>

          <div class="col-md-3 col-sm-6 full-xs hidden-xs">
          <div class="footer-menu-link-title">
              <h3 class="widget-title collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo"> facebook </h3>
            </div>
              <div>
    <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-page" data-href="<?php echo $row_web['fanpage']?>" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="<?php echo $row_web['fanpage']?>" class="fb-xfbml-parse-ignore"><a href="<?php echo $row_web['fanpage']?>"></a></blockquote></div></div>
            
          </div>
          
        </section>

        <!-- end footer destop-->
        <!-- footer mobile -->
        <section class="footer-up">
          <div class="col-xs-12 full-xs hidden-sm hidden-md hidden-lg foot_mobile">
            <div class="footer-menu-link-title widget-item">
              <h3 class="widget-title collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne">Thông tin cửa hàng<i class="fa fa-angle-right" aria-hidden="true"></i></h3>
            </div>
            <ul class="widget-menu panel-collapse collapse" id="collapseOne">
              
             <?php if(!empty($data['vechungtoi'])){
                                    foreach ($data['vechungtoi'] as $item ) {?>   
              <li><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></li>
              
            
              
             <?php }}?>
              
            </ul>
          </div>

          <div class="col-xs-12 full-xs hidden-sm hidden-md hidden-lg foot_mobile">
            <div class="footer-menu-link-title widget-item">
              <h3 class="widget-title collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo"> Facebook <i class="fa fa-angle-right" aria-hidden="true"></i></h3>
            </div>
              <div>
    <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-page" data-href="<?php echo $row_web['fanpage']?>" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="<?php echo $row_web['fanpage']?>" class="fb-xfbml-parse-ignore"><a href="<?php echo $row_web['fanpage']?>"></a></blockquote></div></div>
          </div>

          <div class="col-xs-12 full-xs hidden-sm hidden-md hidden-lg foot_mobile">
            <div class="footer-menu-link-title widget-item">
              <h3 class="widget-title collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree">Chính sách<i class="fa fa-angle-right" aria-hidden="true"></i></h3>
            </div>
            <ul class="widget-menu panel-collapse collapse" id="collapseThree">
              
             <?php if(!empty($data['chinhsach'])){
                                    foreach ($data['chinhsach'] as $item ) {?>   
              <li><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></li>
              
            
              
             <?php }}?>
            </ul>
          </div>
          
        </section>
        <!--end footer mobile-->
      </div>
    </div>
  </div>

</footer>
<div class="footer-bottom">
  <div class="container">
    <div class="footer-bottom-left">
      <span>&copy; Bản quyền thuộc về Kt Watch </span>
    </div>
    <div class="footer-bottom-right pull-right">
      
      <a class="back-to-top show" title="Lên đầu trang !">
        <span class="btt-text">Đầu trang</span>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </a>

      
    </div>
  </div>
</div>
<script src="https://sp.zalo.me/plugins/sdk.js" type="text/javascript" charset="utf-8" async defer></script>
    <ul class="the-article-tools scroll-to-fixed-fixed">
      <li class="btnZalo zalo-share-button" data-href="" target="_blank" data-layout="icon-text" data-customize="true">
        <a href="https://zalo.me/<?php echo $row_web['hotline']?>" title="gọi Zalo">
          <span class="ti-zalo"></span>
        </a>
      </li>
      <li class="btnFacebook">
        <a class="share" href="<?php echo $row_web['fanpage']?>" target="_blank" title="Chia sẻ Facebook">
          <span class="fa fa-facebook"></span>
        </a>
      </li>
      <li class="btnphonecall">
        <a href="tel:<?php echo $row_web['hotline']?>" title="Gọi điện">
          <span class="fa fa-phone"></span>
        </a>
      </li>
    </ul>
    <script type="text/javascript">
      jQuery(document).ready(function($) {
        $('.share').click(function() {
          var NWin = window.open($(this).prop('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
          if (window.focus)
          {
            NWin.focus();
          }
          return false;
        });
      });
    </script>
<?php /*?>
<footer>

            <div class="footer-top" id="footer_top">
            <div class="container">
                        <column class="position-display">
                                                        <div>
                        <style>
.callmenow{ display:none;}
@media screen and (max-width: 1024px) {
.callmenow{ display:block!important;
background: #82b440 none repeat scroll 0 0;
    bottom: 0;   
    font-size: 18px;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: 9999999;
    padding:15px;
}

.callmenow a{
    /* border-bottom: 3px solid #670e11; 
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding: 9px 17px 6px;
    text-decoration: none;
    }
.callmenow a:before{
   font-family: FontAwesome;
   content: "\f095";
}
}
</style>



                    </div>
                                    <div>
                        <div class="dv-builder-full">
<div  class="dv-builder menu_footer">
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                            <div class="dv-item-module ">
                    <div id="logo">
        <a href="http://bephafele.com/">
        <img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" title="" class="img-responsive " />
             </a>
    </div>                </div>
                    </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="navbar navbar-inverse yamm menu_horizontal" id="menu_id_TDN">
            <div class="navbar-header">
          <button type="button" data-toggle="collapse" data-target="#navbar-collapse-TDN" class="navbar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
            <div id="navbar-collapse-TDN" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
                        <li class="vertical-menu-list">
          <a href="/index.php?route=affiliate/account" >
                  
          Bán hàng          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="chinh-sach-rieng-tu" >
                  
          Chính sách riêng tư          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="/ve-chung-toi" >
                  
          Giới thiệu          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="/tuyen-dung" >
                  
          Tuyển dụng          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="dieu-khoan-va-dieu-kien" >
                  
          Điều khoản          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="/contact" >
                  
          Liên hệ          </a>
        </li>
        
              </ul>
    </div>
    </div>
    <script>
      $(function() {
        window.prettyPrint && prettyPrint()
        $(document).on('click', '.navbar .dropdown-menu', function(e) {
          e.stopPropagation()
        })
      })
    </script>                </div>
                    </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                            <div class="dv-item-module ">
                    <script>
    function subscribe()
    {
        var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = $('#txtemail').val();
        if (email != "")
        {
            if (!emailpattern.test(email))
            {
                alert("Lỗi email");
                return false;
            }
            else
            {
                $.ajax({
                    url: 'index.php?route=module/newsletters/news',
                    type: 'post',
                    data: 'email=' + $('#txtemail').val(),
                    dataType: 'json',
                    success: function (json) {
                        if (json.message[0] == 1)
                            $('.warning-new').html("<div><span class='alert alert-success'>" + json.message[1] + "</span></div>");
                        else
                            $('.warning-new').html("<div><span class='alert alert-danger'>" + json.message[1] + "</div></div>");
                        $('.warning-new').fadeIn('slow').delay(2000).fadeOut('slow');
                    }

                });
                return false;
            }
        }
        else
        {
            alert("Vui lòng nhập Email của bạn");
            $(email).focus();
            return false;
        }
    }
</script>
<style type="text/css">
.warning-new{ display: none; position: fixed; top: 50px; left:0; width: 100%; z-index: 10; padding: 10px;} 
.warning-new .alert{padding: 20px 30px;}
</style>
<div class="container">
    <div class="row">
            <div class="warning-new text-center"><div class="warning-new text-center"><!-- Not delete --></div></div>
        </div>
</div>
<!--  <div class="newsletter-area">
    <div class="row">
        <form action="" method="post">        
            <div class="form-group required newsletters-info">
                <label class="col-sm-2 control-label title-newsletters" for="input-firstname">Đăng ký nhận tin</label>
                    <input type="email" name="txtemail" id="txtemail" value="" placeholder="Nhập mail của bạn!" class="form-control input-lg newsletters-input"  />         
            </div>
            <div class="form-group required newsletters-btn">
                <div class="">
                    <button type="submit" class="btn btn-default btn-lg newsletters-btn" onclick="return subscribe();">Đăng ký</i></button>
                </div>
            </div>
        </form>
    </div>
</div>  -->           <form action="" method="POST" id="target">
                     <div class="form-newsletter">
                      <input type="email" name="txtemail" id="txtemail" value="" placeholder="Nhập mail của bạn!" class="form-control input-lg newsletters-input form-newsletter-input"  />  
                
                     <button type="submit" class="newsletters-btn" >
                     OK</button>
                     </div>
                     </form>
                     <script type="text/javascript">
                       $( ".newsletters-btn" ).click(function() {
                        $( "#target" ).submit();
                      });
                     </script>
                     </div>
                    </div>
    </div>
</div>
</div>
</div>
                    </div>
                                    <div>
                        <div class="dv-builder-full">
<div  class="dv-builder vertical_footer">
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="content_info information">
            <div class="title"><h3><span><?php echo $row_web['tencty']?></span></h3></div>
    <ul class="list">
            <li class="item-content">
                <div class="item-description">
                    <?php echo $row_web['diachi']?>
                        
                </div>
            </li>
            <li class="item-content">
                <div class="item-description">
                    Hotline: <?php echo $row_web['hotline']?>                </div>
            </li>
            
            <li class="item-content">
                <div class="item-description">
                    Email: <?php echo $row_web['email']?>                </div>
            </li>
    </ul>
</div>                </div>
                    </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="navbar navbar-inverse yamm menu_vertical" id="menu_id_tai_khoan">
        
    <div class="vertical-name">
    <h4 class="title">
      <span class="btn-open-mobile"><i class="fa fa-bars"></i></span>
      <a href="javascript:;" class="title-menu" data-toggle="collapse"  data-target="#navbar-collapse-tai_khoan">
                 Tài khoản    </a>
                        </h4>
        
        <div id="navbar-collapse-tai_khoan" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
                        <li class="vertical-menu-list">
          <a href="?route=account/account" >
                  <i class="fa fa-circle"></i>
                  
          Tài khoản          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="?route=account/order" >
                  <i class="fa fa-circle"></i>
                  
          Đơn hàng          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="?route=account/wishlist" >
                  <i class="fa fa-circle"></i>
                  
          Yêu thích          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="?route=account/newsletter" >
                  <i class="fa fa-circle"></i>
                  
          Thông báo          </a>
        </li>
        
              </ul>
    </div>
            </div>
    </div>
    <script>
      $(function() {
        window.prettyPrint && prettyPrint()
        $(document).on('click', '.navbar .dropdown-menu', function(e) {
          e.stopPropagation()
        })
      })
    </script>                </div>
                    </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="navbar navbar-inverse yamm menu_vertical" id="menu_id_footer1">
        
    <div class="vertical-name">
    <h4 class="title">
      <span class="btn-open-mobile"><i class="fa fa-bars"></i></span>
      <a href="javascript:;" class="title-menu" data-toggle="collapse"  data-target="#navbar-collapse-footer1">
                 Thông tin    </a>
                        </h4>
        
        <div id="navbar-collapse-footer1" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
                        <li class="vertical-menu-list">
          <a href="chinh-sach-rieng-tu" >
                  <i class="fa fa-circle"></i>
                  
          Chính sách riêng tư          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="dieu-khoan-va-dieu-kien" >
                  <i class="fa fa-circle"></i>
                  
          Điều khoản điều kiện          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="ve-chung-toi" >
                  <i class="fa fa-circle"></i>
                  
          Về chúng tôi          </a>
        </li>
        
              </ul>
    </div>
            </div>
    </div>
    <script>
      $(function() {
        window.prettyPrint && prettyPrint()
        $(document).on('click', '.navbar .dropdown-menu', function(e) {
          e.stopPropagation()
        })
      })
    </script>                </div>
                            <div class="dv-item-module " style="text-align: center;">
 
                </div>
                    </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xs-12">
                            <div class="dv-item-module ">
                    <div class="navbar navbar-inverse yamm menu_vertical" id="menu_id_dich_vu">
        
    <div class="vertical-name">
    <h4 class="title">
      <span class="btn-open-mobile"><i class="fa fa-bars"></i></span>
      <a href="javascript:;" class="title-menu" data-toggle="collapse"  data-target="#navbar-collapse-dich_vu">
                 Dịch vụ    </a>
                        </h4>
        
        <div id="navbar-collapse-dich_vu" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
                        <li class="vertical-menu-list">
          <a href="?route=information/contact" >
                  <i class="fa fa-circle"></i>
                  
          Liên hệ          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="?route=account/return/add" >
                  <i class="fa fa-circle"></i>
                  
          Đổi trả hàng          </a>
        </li>
        
                        <li class="vertical-menu-list">
          <a href="?route=information/sitemap" >
                  <i class="fa fa-circle"></i>
                  
          Sơ đồ trang          </a>
        </li>
        
              </ul>
    </div>
            </div>
    </div>
    <script>
      $(function() {
        window.prettyPrint && prettyPrint()
        $(document).on('click', '.navbar .dropdown-menu', function(e) {
          e.stopPropagation()
        })
      })
    </script>                </div>
                    </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xs-12">
                            <div class="dv-item-module ">
                    <div>
    <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-page" data-href="<?php echo $row_web['fanpage']?>" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="<?php echo $row_web['fanpage']?>" class="fb-xfbml-parse-ignore"><a href="<?php echo $row_web['fanpage']?>"></a></blockquote></div></div>
                </div>
                    </div>
    </div>
</div>
</div>
</div>
                    </div>
                                    <div>
                        <div class="dv-builder-full">
<div  class="dv-builder ">
<div class="dv-module-content">
<div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                            <div class="dv-item-module " style="text-align: center;">
                    <div>
    <p><span style="font-size: 10pt;text-align: center;">&copy; Thietke247.com <span style="font-size: 9pt;"></span></span></p></div>
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
                <div class="footer-bottom" id="footer_bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-xs-12 copyright text-left">
                                            </div>
                    <div class="col-sm-4 col-xs-12 chili text-right">
                         <div style="white-space:nowrap;">
     
</div>                  </div>
                </div>
            </div>
        </div>
<a id="scrollUp" style="cursor:pointer;position: fixed; z-index: 2147483647; display: block;"><i class="fa fa-angle-double-up"></i></a>
    </footer>
    <script>
        (function( $ ) {
            //Check to see if the window is top if not then display button
            $('#scrollUp').hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#scrollUp').fadeIn();
                } else {
                    $('#scrollUp').fadeOut();
                }
            });

            //Click event to scroll to top
            $('#scrollUp').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });

        })( jQuery );



        </script>
<?php /*?>
<div class="brand-logo">
    <div class="container">
        <div class="nav_brand">
            <div class="slider-items-products">
                <div id="brand-logo-slider" class="product-flexslider hidden-buttons">
                    <div class="slider-items slider-width-col6"> 
                        <?php if(!empty($data['topbrand'])){
                        foreach($data['topbrand'] as $item){?>
                        <!-- Item -->
                        <div class="item"> <a href="#"><img src="<?php echo BASE_URL.PATH_IMG_PARTNERS.$item['images']?>" alt="Image"></a> </div>
                        <!-- End Item --> 
                        <?php }}?>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer hidden-lg hidden-md" id="footer-mobile">
    <div class="footer-middle">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="logo-footer-mobile">
                        <div class="contact_title">
                            <a href="/"><img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" /></a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="blog-footer ">
                        <div class="blog_title">
                            <h3>Tin tức</h3>
                            <a href="/tin-tuc">Xem tất cả <i class="fa fa-angle-double-right"></i></a>
                        </div>
                        <?php if(!empty($data['tintuc'])){
                                    foreach ($data['tintuc'] as $item ) {?>   
                        
                        <div class="feature row">
                            <div class="feature-icon col-xs-4">
                                 <a class="ft-thumb" href="bai-viet/<?php echo $item['alias']?>.html">
                                    
                                    <img src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>"/>
                                    
                                </a>
                            </div>
                            <div class="col-xs-8">
                                <h5><a class="blog-title" href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h5>
                                <p class="des"> <?php echo limit_text($item['description_vn'],150)?>...</p>
                                <div class="remore"><a href="bai-viet/<?php echo $item['alias']?>.html">Xem chi tiết</a></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <?php }}?>

                        
                    </div>
                </div>
                <div class="col-xs-6 categories-footer">
                    <div class="blog_title">
                        <h3>Danh mục sản phẩm</h3>
                    </div>
                    <ul class="links">
                     <?php if(!empty($data['catelog'])){
                                    foreach ($data['catelog'] as $item ) {?>
                        
                        <li><a href="<?php echo $item['alias']?>.html"><i class="fa fa-stop"></i> <?php echo $item['title_vn']?></a></li>
                        
                       <?php }}?>
                        
                    </ul>
                </div>
                <div class="col-xs-6 contact-footer">
                    <div class="blog_title">
                        <h3>Liên hệ</h3>
                    </div>
                    <ul class="links-contact">
                        <li><?php echo $row_web['tencty']?> </li>
                        <li>Address: <?php echo $row_web['diachi']?></li>
                        <li>Phone: <?php echo $row_web['hotline']?></li>
                        <li>Email: <?php echo $row_web['email']?></li>
                        <li>Open time: 7h00 AM - 10h30 PM</li>
                        <li>
                            <a href="#"><i class="fa fa-facebook-official"></i></a>
                            <a href="#"><i class="fa fa-youtube-square"></i></a>
                            <a href="#"><i class="fa fa-users"></i></a>
                            <a href="#"><i class="fa fa-comments"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-xs-12 coppyright"><p>Design by <a style="color: #fff">thietke247.vn</a> </p></div>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->
<!-- End Footer -->
<footer class="footer hidden-xs">
    <div class="footer-middle">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="blog-footer ">
                        <div class="blog_title">
                            <h3>Tin tức</h3>
                            <a href="chu-de/tin-tuc.html">Xem tất cả <i class="fa fa-angle-double-right"></i></a>
                        </div>

                        <?php if(!empty($data['tintuc'])){
                                    foreach ($data['tintuc'] as $item ) {?>   
                        <div class="feature row">
                            <div class="feature-icon col-md-4 col-sm-4">
                                <a class="ft-thumb" href="bai-viet/<?php echo $item['alias']?>.html">
                                    
                                    <img src="<?php echo BASE_URL.PATH_IMG_NEWS.$item['images1']?>"/>
                                    
                                </a>
                            </div>
                            <div class="col-md-8 col-sm-8">
                                <h5><a class="blog-title" href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a></h5>
                                <p class="des"><?php echo limit_text($item['description_vn'],150)?>...</p>
                                <div class="remore"><a href="bai-viet/<?php echo $item['alias']?>.html">Xem chi tiết</a></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <?php }}?>
                        
                        

                        
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 categories-footer">
                    <div class="blog_title">
                        <h3>Danh mục sản phẩm</h3>
                    </div>
                    <ul class="links">
                        
                        <?php if(!empty($data['catelog'])){
                                    foreach ($data['catelog'] as $item ) {?>
                        
                        <li><a href="<?php echo $item['alias']?>.html"><i class="fa fa-stop"></i> <?php echo $item['title_vn']?></a></li>
                        
                       <?php }}?>
                        
                        
                    </ul>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 contact-footer">
                    <div class="contact_title">
                        <a href="/"><img src="<?=BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>" /></a>
                    </div>
                    <ul class="links-contact">
                        <li><?php echo $row_web['tencty']?> </li>
                        <li>Address: <?php echo $row_web['diachi']?></li>
                        <li>Phone: <?php echo $row_web['hotline']?></li>
                        <li>Email: <?php echo $row_web['email']?></li>
                        <li>Open time: 7h00 AM - 10h30 PM</li>
                        <li>
                            <a href="#"><i class="fa fa-facebook-official"></i></a>
                            <a href="#"><i class="fa fa-youtube-square"></i></a>
                            <a href="#"><i class="fa fa-users"></i></a>
                            <a href="#"><i class="fa fa-comments"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-xs-12 coppyright"><p>Design by <a style="color: #fff">thietke247.vn</a> </p></div>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->
</div> 
<!-- End div id=page -->
    <div id="mobile-menu">
    <ul>
        <li>
            <div class="mm-search">
                <form  action="/search/" id="search" name="search" method="get" class="navbar-form form_search_index">
                    <div class="input-group">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="icon-search"></i></button>
                        </div>
                        <input type="text" value="" name="q" class="form-control simple" placeholder="Search ..." id="srch-term">
                    </div>
                </form>
            </div>
        </li>
        
        
        <li><a href="/">Trang chủ</a></li>
        
        
        
        <li><a href="/gioi-thieu">Giới thiệu</a></li>
        
        
        
        <li><a href="san-pham.html">Sản phẩm</a> 
            <!--sub sub category-->
            <ul>
                
                
                 <?php if(!empty($data['catelog'])){
                                foreach($data['catelog'] as $item){
                                ?>
                                        <li class=""><a href="<?php echo $item['alias'] ?>.html"> <span><?php echo $item['title_vn']?></span></a>
                                        </li>
                                       <?php }}?> 
                
                
            </ul>       
            
        
        
        <li><a href="chu-de/tin-tuc.html">Tin tức</a></li>
        
        
        
        <li><a href="/lien-he.html">Liên hệ</a></li>
        
        
    </ul>
</div>
    
<?php /*?>
<div class="footer-container">
    <div id="footer">
        <div class="footer-center">
            <div class="container">
                <div class="footer-static row-fluid">
                    <div class="footer_info">
                        <div class="logo_footer">
                            <a href=""><img alt="Wine homepage" src="<?php echo BASE_URL.PATH_IMG_FLASH.$data['logo']['file_vn']?>">
                            </a>
                        </div>
                        <div class="infomation">
                          
                            <ul> <p> <?php echo $thongtin['content_vn']?></p>
                                <li class="icon-map-marker"><?php echo $row_web['diachi']?></li>
                                <li class="icon-phone"><?php echo $row_web['hotline']?></li>
                                <li class="icon-envelope"><a href="<?php echo $row_web['email']?>"><?php echo $row_web['email']?></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="newsletter_block_left">
                        <div class="block_content">
                            <form action="" method="post">
                                <div class="form-group">
                                    <input class="inputNew form-control grey newsletter-input" id="newsletter-input" name="email" size="18" placeholder="Your e-mail" value="" type="text">
                                    <button type="submit" name="submitNewsletter" class="btn btn-default button button-small title_font"> <span>subscribe</span> </button>
                                    <input name="action" value="0" type="hidden">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="footer-infomation row">
                        <div class="footer-block col-xs-12 col-sm-6 col-md-3">

                            <h4 class="title_block title_font">Về Chúng Tôi</h4>
                            
                            <ul class="toggle-footer" style="">
                                <?php if(!empty($data['vechungtoi'])){
                                    foreach ($data['vechungtoi'] as $item ) {?>     
                                    
                                <li class="parent"><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a>
                                </li>
                              
                             <?php }}  ?>
                            </ul>
                        </div>
                        <div class="footer-block col-xs-12 col-sm-6 col-md-3">
                            <h4 class="title_block title_font">Hướng Dẫn Mua Hàng</h4>
                            <ul class="toggle-footer" style="">
                                <?php if(!empty($data['huongdan'])){
                                    foreach ($data['huongdan'] as $item ) {?>     
                                    
                                <li><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a>
                                </li>
                              
                             <?php }} ?>
                            </ul>
                        </div>
                         <div class="footer-block col-xs-12 col-sm-6 col-md-3">
                            <h4 class="title_block title_font">Tin Tức</h4>
                            <ul class="toggle-footer" style="">
                                <?php if(!empty($data['tintuc'])){
                                    foreach ($data['tintuc'] as $item ) {?>     
                                    
                                <li><a href="bai-viet/<?php echo $item['alias']?>.html"><?php echo $item['title_vn']?></a>
                                </li>
                              
                             <?php }} ?>
                            </ul>
                        </div>
                        <div class="footer-block col-xs-12 col-sm-6 col-md-3">
                            <h4 class="title_block title_font">Liên Hệ</h4>
                            <ul class="toggle-footer" style="">
                                <li><?php echo $page['content_vn']?>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-static row-fluid">
                    <div class="footer-address col-xs-12 col-sm-6">
                        <p>Copyright &copy; 2017 <a href="http://quatetquatang.com">Quatetquatang.com</a>. All rights reserved. Design by <a href="http://thietke247.com">Thietke247.com</a></p>
                    </div>
                    <div id="social_block" class="col-xs-12 col-sm-6">
                        <ul>
                            <li class="facebook">
                                <a class="_blank" href="" target="_blank"> <span>Facebook</span> </a>
                            </li>
                            <li class="twitter">
                                <a class="_blank" href="" target="_blank"> <span>Twitter</span> </a>
                            </li>
                            <li class="rss">
                                <a class="_blank" href="" target="_blank"> <span>RSS</span> </a>
                            </li>
                            <li class="youtube">
                                <a class="_blank" href="" target="_blank"> <span>Youtube</span> </a>
                            </li>
                            <li class="instagram">
                                <a class="_blank" href="" target="_blank"> <span>Instagram</span> </a>
                            </li>
                            <li class="google-plus">
                                <a class="_blank" href="" rel="publisher" target="_blank"> <span>Google Plus</span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
		<!--Scroll to Top-->
		<div id="back-top" style="display: block;"><a href="#" class="mypresta_scrollup hidden-phone"><i class="icon-chevron-up"></i></a></div>
		
		
		
		<script>
		(function( $ ) {
			//Check to see if the window is top if not then display button
			$('#back-top').hide();
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			//Click event to scroll to top
			$('#back-top').click(function() {
				$('html, body').animate({
					scrollTop: 0
				}, 600);
				return false;
			});

		})( jQuery );
// footer
    if ($(window).width() < 768) {
       
        $('ul.toggle-footer').css({
            'display': 'none'
        });
        $('div.footer-block').css({
            'margin': '0'
        });
       
          $('div.footer-block').on("click", function() {
        
       $(this).children('h4 ~ *').slideToggle();
        
      $('div.footer-block').css({ 
             'margin-bottom': '10px'
        });
      $(this).children('h4').addClass('active');


    
    // $(this).hide(); 
    
  });
    }


		</script>

		<?php */?>

        