<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="row sm-5">
				<div class="col-sm-12 text-center">
					<h3> <b>Registro de una nueva Medicina Natural<b></h3>
				</div>
			</div>
			<?php echo form_open_multipart('planta/agregarbd');?><br>
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
            <div class="col-sm-4">
					<label>Tipo:</label><br>
					<!-- <input class="form-control" type="text" name="tipo" required><br>-->
                    <select class="form-control" type="text" name="tipo" required>
                          <option>Planta Medicinal</option>
                          <option>Medicina Natural</option>
                          <option>Prracticas Medicinales</option>
    
                    </select>
				</div>
                <div class="col-sm-8">
                <div class="form-group">
                        <label >Recomendaciones</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  type="text" name="recomendacion" required></textarea>
                    </div>
				</div>
			</div>

				
				<div class="row">
                <div class="col-sm-4">
					<label >Efectos</label><br>
					<input class="form-control" type="text" name="efectos" required><br>
				</div>
				<div class="col-sm-8">
                <div class="form-group">
                        <label >Preparacion</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  type="text" name="preparado" required></textarea>
                    </div>
				</div>

                </div>
				<!--<div class="row">
				<div class="col-md-12">
					<label >Agregue un archivo para subir</label><br>
					<input type="file" name="userfile" required>
				</div>
			</div>-->
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

