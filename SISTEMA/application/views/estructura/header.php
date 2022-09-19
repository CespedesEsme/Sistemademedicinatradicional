<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="images/favicon.ico" type="image/ico" />
	<title>MEDICINA NATURAL</title>


  <link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>bootstrap/css/headers.css">
	<div>
  <h3 align="center" class=" p-3 mb-3 bg-dark text-white"> MEDICINA TRADICIONAL</h3>
  </div>
    <!-- Bootstrap -->
    <link href="<?php echo base_url();?>template/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="<?php echo base_url();?>template/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="<?php echo base_url();?>template/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="<?php echo base_url();?>template/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
	
    <!-- bootstrap-progressbar -->
    <link href="<?php echo base_url();?>template/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="<?php echo base_url();?>template/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
    <!-- bootstrap-daterangepicker -->
    <link href="<?php echo base_url();?>template/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="<?php echo base_url();?>template/build/css/custom.min.css" rel="stylesheet">
  
   <link href="<?php echo base_url();?>bootstrap/css/carousel.css" rel="stylesheet">
 

    <!-- Bootstrap core CSS -->
<link href="<?php echo base_url();?>boostrap/assets/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>

     
    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
  
  </head>


  <body class="nav-md">
  
  <div class="container body">
 
    <div class="main_container">
     
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a  class="site_title"><i class="fa fa-tree"></i> <span>BIENVENID@</span></a>
          </div>
          


          <div class="clearfix"></div>

          <!-- menu profile quick info -->
          <!-- <div class="profile clearfix">
            <div class="profile_pic">
              <img src="images/img.jpg" alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
              <h2>App Movil sobre Medicina Tra</h2>
            </div>
          </div> -->
          <!-- /menu profile quick info -->

          <br />

          <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <h3>MENU GENERAL</h3>
              <ul class="nav side-menu">

              <li><a href="<?php echo base_url();?>index.php/inicio/index" ><i class="fa fa-home"></i> PAGINA PRINCIPAL </a>
                 </li>

                <li><a><i class="fa fa-pagelines"></i> MEDICINA TRADICIONAL <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                   <li ><a href="<?php echo base_url();?>index.php/planta/indeX">PLANTAS MEDICINALES</a></li>
                    
<!--<li><?php  echo form_open_multipart('planta/index') ?>
 <button type="submit" name="planta" class="dropdown-item"> <i class="fa fa-file-text-0" ></i>Planta</button>
 <?php echo form_close(); ?></li>-->

                  

                    <li><a href="<?php echo base_url();?>index.php/planta/indeX"> MEDICINA NATURAL</a></li>
                    <li><a href="<?php echo base_url();?>index.php/enfermedad/indeX"> ENFERMEDADES </a></li>
                  </ul>
                </li>
                
                              
                <li><a><i class="fa fa-clone"></i>REPORTES<span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li><a href="fixed_sidebar.html">REPORTES 1</a></li>
                    <li><a href="fixed_footer.html">REPORTES 2</a></li>
                  </ul>
                </li>

                <li><a><i class="fa fa-info-circle"></i>ACERCA DE NOSOTROS </a>
                  
                </li>
              </ul>
            </div>
            <div class="menu_section">
              <h3> CUIDA TU SALUD </h3>
              <ul class="nav side-menu">
               <a ><i class="fa fa-users"></i> <span>Aprendamos juntos</span></a>

              </ul>
            </div>

          </div>
          <!-- /sidebar menu -->



          <!-- /menu footer buttons -->
          <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
              <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          <!-- /menu footer buttons -->
          </div>
      </div>

       <!-- top navigation -->
       <div class="top_nav">
        <div class="nav_menu">
            <div class="nav toggle">
              <a id="menu_toggle"><i class="fa fa-bars"></i></a>
            </div>
            <nav class="nav navbar-nav">
            <ul class=" navbar-right">
              <li class="nav-item dropdown open" style="padding-left: 15px;">
                <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                <img src="  <?php echo base_url();?>img/usuario.svg" alt="mdo" width="50" height="50" class="rounded-circle"> Usuario
                </a>
                <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item"  href="javascript:;"> Profile</a>
                    <a class="dropdown-item"  href="javascript:;">
                      <span class="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                <a class="dropdown-item"  href="javascript:;">Help</a>
                  <a class="dropdown-item"  href="<?php echo base_url();?>index.php/usuario/logout"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                </div>
              </li>

              <li role="presentation" class="nav-item dropdown open">
                <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-envelope-o"></i>
                  <span class="badge bg-green">6</span>
                </a>
                <ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="text-center">
                      <a class="dropdown-item">
                        <strong>See All Alerts</strong>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
           
          </nav>
          
        </div>
        
        </div>



        <div class="right_col" role="main">

 