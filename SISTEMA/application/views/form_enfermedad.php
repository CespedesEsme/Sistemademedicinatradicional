<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="row sm-5">
				<div class="col-sm-12 text-center">
					<h3>Registro de una nueva Enfermedad</h3>
				</div>
			</div>
			<?php echo form_open_multipart('enfermedad/agregarbd');?><br>
			<div class="row sm-4">
				<div class="col-sm-4">
					<label>Nombre:</label><br>
					<input class="form-control" type="text" name="nombre"  required><br>
				</div>
				<div class="col-sm-8">
                    <div class="form-group">
                        <label>Descripcion</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  type="text" name="descripcion" required></textarea>
                    </div>
				</div>
				</div>
			<div class="row">
            
                <div class="col-sm-8">
                <div class="form-group">
                        <label >Causas</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  type="text" name="causas" required></textarea>
                    </div>
				</div>
			</div>

			
			</div>
			
        
			<div class="row text-center">
				<div class="col-md-12">
					<button type="submit" class="btn btn-dark">Registrar</button>
				</div>
			</div>
			<?php echo form_close(); ?>		
		</div>
	</div>
</div>

