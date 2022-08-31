
    
    <div class="col-md-12">
            <div class="row md-12">
            
            <h1 align="center">PLANTAS MEDICINALES</h1>
    
                     <div class="row md-12">
                          <div class="row md-12">
                          <div class="col-md-10">
                              <?php  echo form_open_multipart('plantas/agregar') ?>
                              <button type="submit" class="btn btn-dark">Agregar nueva Planta</button>
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
                        <th scope="col">TIPO</th>
                        <th scope="col">PROCEDENCIA</th>
                        <th scope="col">EFECTOS</th>
                        <th scope="col">PREPARACION</th>
                        <th scope="col">MODIFICAR</th>
                        
    
    
    
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $indice=1;
                    foreach ($plantas->result() as $row) {
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
                            <td><?php echo $row->tipo;?></td>
                            <td><?php echo $row->lugar;?></td>
                            <td><?php echo $row->efectos;?></td>
                            <td><?php echo $row->preparado;?></td>
                            
                            <td>
                                <li>
                                  <?php echo form_open_multipart("plantas/modificar"); ?>			     	
                                  <input type="hidden" name="idplantas" value="<?php echo $row->Id; ?>">
                                  <input type="submit" name="buttonmodificar" value="Modificar" class="btn btn-success btn-sm btn-block">
                              <?php echo form_close(); ?>
                            
                                </li>
                                <li>
                                <?php echo form_open_multipart("plantas/eliminarbd"); ?>
                              <input type="hidden" name="idPlantas" value="<?php echo $row->Id; ?>">
                              <input type="submit" name="buttoneliminar" value="Eliminar"  class="btn btn-danger btn-sm btn-block">
                          <?php echo form_close();?>
                                </li>
                                <li>    
                                <?php echo form_open_multipart("plantas/deshabilitarbd"); ?>
                              <input type="hidden" name="idplantas" value="<?php echo $row->Id; ?>">
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
        
    
            
        
        
    
    
    
    