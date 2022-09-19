<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Esmeralda Cespedes Merida">
    <meta name="generator" content="version 0.5">
	<title>MEDICINA NATURAL</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>bootstrap/css/bootstrap.min.css">
	

</head>
<body>
  <div class="row sm-12" >
<div class="col sm-12" > 
<center>
  <h3> <b> MEDICINA NATURAL EN BOLIVIA</b></h3>
   <img src=" <?php echo base_url();?>img/medicina.jpg"  width="500" height="400" >
 </center>
</div>
  </div>
  <div class="row sm-12">
<div class="col sm-3">

</div>
 
  
<div class="col sm-6">


<div class="container">
 
  
   <h3 style="text-align: center; ">Loguin de Medico Naturista</h3>
  <div>
  <?php 
      switch ($msg) {
        case '1':
          $mensaje="Acaba de Cerrar Session";
          break;
        case '2':
          $mensaje="Usuario no Registrado, puede registrarse para ingresar al sistema";
          break;
        case '3':
          $mensaje="Acceso no valido- Por favor inicie sesion";
          break;
        
        default:
          $mensaje="";
          break;
      }
    ?>
   
    <h1 class="text-primary" align="center"><?php echo $mensaje ?></h1>

    <?php 
    echo form_open_multipart('usuario/validar')

    ?>

      <div class="sm-3">
        <img src=" <?php echo base_url();?>img/usuario.svg"  width="20" height="20" >
        <label for="exampleInputEmail1">login</label>
        <input type="text" name="login" class="form-control" placeholder="Ingrese su login" required>
      </div>
      <div class="mb-3">
        <img src=" <?php echo base_url();?>img/candado.png"  width="30" height="30" >
        <label for="exampleInputPassword1">Password</label>
        <input type="password" name="pasword" class="form-control"  placeholder="Ingrese su Password" required>
      </div>
      
      <button type="submit" class="btn btn-primary">Ingresar</button>
    <?php 
      echo form_close();
    ?>
  </div>
  
</div>
<script src="<?php echo base_url(); ?>bootstrap/js/bootstrap.js"></script>
<script src="<?php echo base_url(); ?>bootstrap/js/bootstrap.bundle.min.js"></script>
<br>
<br>
  </div>


  
<div class="col sm-3">

</div>
  </div>

</body>
</html>



