<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="row mt-5">
				<div class="col-md-12 text-center">
					<h2>Registro de Plantas</h2>
				</div>
			</div>
			<?php echo form_open_multipart('plantas/agregarbd');?><br>
			<div class="row mt-4">
				<div class="col-md-4">
					<label>Nombre:</label><br>
					<input class="form-control" type="text" name="nombre" placeholder="Ingrese el nombre de la planta" required><br>
				</div>
				<div class="col-md-4">
					<label>Descripcion:</label><br>
					<input class="form-control" type="text" name="descripcion" required><br>
				</div>
				<div class="col-md-4">
					<label>Tipo:</label><br>
					<input class="form-control" type="text" name="tipo" required><br>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label>Procedencia</label>
					<input class="form-control" type="text" name="lugar" required><br>
				</div>
				<div class="col-md-4">
					<label >Efectos</label><br>
					<input class="form-control" type="text" name="efectos" required><br>
				</div>
				<div class="col-md-4">
					<label>Preparado</label>
					<input class="form-control" type="text" name="preparado" required><br>
				</div>
			</div>
			
        
			<div class="row text-center">
				<div class="col-md-12">
					<button type="submit" class="btn btn-primary">Registrar Planta</button>
				</div>
			</div>
			<?php echo form_close(); ?>		
		</div>
	</div>
</div>

