
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
    <div class="row">                                   
        <div id="content" class="col-sm-9">
            <div class="position-display">
                </div>              
                        <h1><?php echo $data['cat']['title_vn']?></h1>
                         <?php 
                                    foreach($data['info'] as $item){
                                ?>
                            <div class="row tltblog">
                            <div class="col-sm-3">
                            <a href="bai-viet/<?= $item['alias']?>.html"><img src="<?=  BASE_URL.PATH_IMG_NEWS.$item['images1']?>" alt="<?=$item['title_vn']?>" title="v" class="img-thumbnail"></a>
                        </div>
                        <div class="col-sm-9">
                            <h4 class="title-tltblog"><a href="bai-viet/<?= $item['alias']?>.html"><?=$item['title_vn']?></a></h4>
                            <div><p><?=limit_text($item['description_vn'],500)?>...</p></div>
                            <div class="tab-links col-lg-12">
                                <a class="pull-right" href="bai-viet/<?= $item['alias']?>.html">Xem thêm&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>   

                            </div>
                        </div>
                         </div>
                        <?php }?>        
                                
                                
                          <div class="position-display">
          </div>        </div><!-- End Content -->
            <div id="column-right" class="col-sm-3 col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-sm">
                        <?php loadview('pagefixed/right',$right);?>
                          </div>
    </div><!-- End row -->
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
                
                
                <div class="blog-wrapper row" id="main">
                    <div class="site-content" id="primary">
                        <div role="main" id="content">
                            
                            
                            
                              <?php 
                                    foreach($data['info'] as $item){
                                ?>
                            <article class="blog_entry clearfix col-md-4 col-sm-4 col-xs-12" >

                                <div class="entry-content">
                                    <div class="featured-thumb">
                                        <a class="ft-thumb" href="bai-viet/<?= $item['alias']?>.html">
                                            
                                            <img src="<?=  BASE_URL.PATH_IMG_NEWS.$item['images1']?>">
                                            
                                        </a>
                                    </div>

                                </div>
                                <header class="blog_entry-header clearfix">
                                    <div class="blog_entry-header-inner">
                                        <h2 class="blog_entry-title"> <a rel="bookmark" href="bai-viet/<?= $item['alias']?>.html"><?=$item['title_vn']?></a> </h2>
                                    </div>
                                    <!--blog_entry-header-inner--> 
                                </header>
                                <footer class="entry-meta"><time class="entry-date"><i class="fa fa-calendar"></i> <?php echo date("d-m-Y",$item['date']); ?></time></footer>
                                <div class="entry-content">
                                    <p> <?=limit_text($item['description_vn'],250)?>...</p>
                                </div>
                                <p> <a class="btn" href="bai-viet/<?= $item['alias']?>.html">Xem thêm</a> </p>

                            </article>
                            <?php }?>
                            
                        </div>
                    </div>
                    <div class="pager">
                        
                    </div>
                </div>
                
            </div>
            <div class="col-right sidebar col-sm-3">
   <?php loadview('pagefixed/left',$left);?>
            </div>
        </div>
    </div>
</div><?php */?>
