

<div id="container">
	<h1>Perfil</h1>

	<div id="body">
		
    <table class="table mt-4">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IMAGEN</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">DESCRIPCION</th>
                        <th scope="col">EFECTOS</th>
                        <th scope="col">PREPARACION</th>
                        <th scope="col">RECOMENDACION</th>
                        <th scope="col">EDICION</th>
   
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $indice=1;
                    foreach ($medicinanatural->result() as $row) {
                        ?>
                             <tr>
                            <th scope="row"><?php echo $indice;?></th>
                            <td>
                                <?php
                              $foto =$row->foto;
                
                              if ($foto=="") 
                              {
                                ?>
                                <img src=" <?php echo base_url();?>uploads/medtra/0.jpg" width="100px">
                                <?php
    
                              }
    
                              else
                              {
                         
                                ?>
                                <img src="<?php echo base_url(); ?>/uploads/medtra/<?php echo $foto; ?>" width="100px">
                                <?php
                              }
                            ?>
                            </td>
                            <td><?php echo $row->nombres;?></td>
                            <td><?php echo $row->descripcion;?></td>
                                                     
                            <td><?php echo $row->efectos;?></td>
                            <td><?php echo $row->preparados;?></td>
                            <td><?php echo $row->recomendaciones;?></td>
                            
                            <td>
                                <li>
                                  <?php echo form_open_multipart("planta/modificar"); ?>			     	
                                  <input type="hidden" name="idplanta" value="<?php echo $row->idmedicina; ?>">
                                  <input type="submit" name="buttonmodificar" value="Modificar" class="btn btn-success btn-sm btn-block">
                              <?php echo form_close(); ?>
                            
                                </li>
                                
                                <li>    
                                <?php echo form_open_multipart("planta/deshabilitarbd"); ?>
                              <input type="hidden" name="idplantas" value="<?php echo $row->idmedicina; ?>">
                              <input type="submit" name="buttondeshabilitar" value="deshabilitar" class="btn btn-warning btn-sm btn-block">
                          <?php echo form_close();?>
                                </li>
                             
                          </td>
                                                
    
    
    
                        </tr>
                        <?php
                        $indice++; 
                    }
                    ?>
    
                </tbody>
                </table>


	</div>

	
</div>


