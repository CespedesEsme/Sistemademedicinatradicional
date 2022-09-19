<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="row sm-5">
				<div class="col-sm-12 text-center">
					<h3><b>Modificar<b> </h3>
				</div>
			</div>
<?php 
	foreach ($infoplanta->result() as $row) {
		
		echo form_open_multipart('planta/modificarbd');?><br>
			<div class="row sm-4">
				<div class="col-sm-4">
				<label>Nombre:</label><br>
					<input class="form-control" type="text" name="nombre"placeholder="Ingrese el nombre de la planta" value="<?php echo $row->nombres; ?>"><br>
					<input class="form-control" type="hidden" name="idplanta" value="<?php echo $row->idmedicina; ?>">
					
				</div>
				<div class="col-sm-8">
                <label>Descripcion:</label><br>
					<input class="form-control" type="text" name="descripcion" value="<?php echo $row->descripcion; ?>"><br>
				</div>

				</div>
			</div>
			<div class="row">
            <div class="col-sm-4">
            <label>Tipo:</label><br>
					<input class="form-control" type="text" name="tipo"value="<?php echo $row->tipo; ?>"><br>
			</div>
				<div class="col-sm-8">
			
                        <label >Recomendaciones</label>
                        <input class="form-control" type="text" name="recomendacion"value="<?php echo $row->recomendaciones; ?>"><br>
				</div>
            </div>
				
                <div class="row">
                <div class="col-sm-4">
					<label>Efectos:</label><br>
					<input class="form-control" type="text" name="efectos"value="<?php echo $row->efectos; ?>"><br>
				</div>
				<div class="col-sm-8">
                <label>Preparado:</label><br>
					<input class="form-control" type="text" name="preparado"value="<?php echo $row->preparados; ?>"><br>
				</div>

                </div>
				<div class="row">
				<div class="col-md-12">
					<label >Agregue un archivo para subir</label><br>
					<input type="file" name="userfile" required>
				</div>
			</div>
			</div>
			<div class="row text-center">
				<div class="col-md-12">
					<button type="submit" class="btn btn-primary">Guardar Cambios</button>
				</div>
			</div>
			<?php echo form_close(); 		
	}

 ?>
 	</div>
	</div>
</div>



