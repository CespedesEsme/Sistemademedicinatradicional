<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head >
	<meta charset="utf-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Esmeralda Cespedes Merida">
    <meta name="generator" content="version 0.5">
	<title>MEDICINA NATURAL</title>

	<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>bootstrap/css/headers.css">
	<h3 align="center" class=" p-3 mb-3 bg-dark text-white"> MEDICINA TRADICIONAL <br> </h3>

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

     
    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
</head>
<body>
  <header class="p-2 mb-2 bg-secondary border-bottom"
    
    div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
              
        <ul class="nav col-12 col-sm-auto me-sm-auto mb-3 justify-content-center mb-md-0">
          <li><a href="<?php echo base_url();?>index.php/plantas/index" class="nav-link px-4 link-dark">PAGINA PRINCIPAL</a>
          
        </li>
          <li><a href="<?php echo base_url();?>index.php/saberes/index" class="nav-link px-3 link-dark">MEDECINA NATURAL</a></li>
          <li><a href="#" class="nav-link px-3 link-dark">ACERCA DE NOSOTROS</a></li>
         
        </ul>

        <form class="col-12 col-sm-auto mb-4 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

         <div >
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="  <?php echo base_url();?>img/usuario.svg" alt="mdo" width="50" height="50" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Configuracion</a></li>
            <li><a class="dropdown-item" href="#">Ajustes</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="<?php echo base_url(); ?>index.php/usuario/logout">Cerrar Session</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>