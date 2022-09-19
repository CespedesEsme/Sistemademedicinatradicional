
    
    <div class="col-sm-12">
            <div class="row sm-12">
            
            <h1 align="center">ENFERMEDADES</h1>
    
                     <div class="row md-12">
                          <div class="row md-12">
                          <div class="col-md-10">
                              <?php  echo form_open_multipart('enfermedad/agregar') ?>
                              <button type="submit" class="btn btn-dark">Agregar nueva Enfermedad</button>
                              <?php echo form_close(); ?>
                        </div>
                        
    
                   </div>
    </div>
    
    
        
    <table class="table mt-4">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IMAGEN</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">DESCRIPCION</th>
                        <th scope="col">CAUSAS</th>
                        <th scope="col">EDICION</th>
                        
    
    
    
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $indice=1;
                    foreach ($enfermedad->result() as $row) {
                        ?>
                             <tr>
                            <th scope="row"><?php echo $indice;?></th>
                            <td>
                                <?php
                              $foto =$row->foto;
                              
                             
    
                              if ($foto=="") 
                              {
                                ?>
                                <img src=" <?php echo base_url();?>uploads/1.jpg" width="100px">
                                <?php
    
                              }
    
    
                            
                              else
                              {
                                
    
                                
                                ?>
                                <img src="<?php echo base_url(); ?>/uploads/<?php echo $foto; ?>" width="100px">
                                <?php
                              }
                            ?>
                            </td>
                            <td><?php echo $row->nombre;?></td>
                            <td><?php echo $row->descripcion;?></td>
                            <td><?php echo $row->causas;?></td>
                           
                            
                            
                            <td>
                                <li>
                                  <?php echo form_open_multipart("enfermedad/modificar"); ?>			     	
                                  <input type="hidden" name="idEnfermedad" value="<?php echo $row->idEnfermedad; ?>">
                                  <input type="submit" name="buttonmodificar" value="Modificar" class="btn btn-success btn-sm btn-block">
                              <?php echo form_close(); ?>
                            
                                </li>
                               
                                <li>    
                                <?php echo form_open_multipart("enfermedad/deshabilitarbd"); ?>
                              <input type="hidden" name="idEnfermedad" value="<?php echo $row->idEnfermedad; ?>">
                              <input type="submit" name="buttondeshabilitar" value="Deshabilitar" class="btn btn-warning btn-sm btn-block">
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
        
    
            
        
        
    
    
    
    