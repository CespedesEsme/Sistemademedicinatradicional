<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class planta extends CI_Controller {

    public function index()
{ 
   if($this->session->userdata('cargo')=='naturista')
		{
    
    $lista=$this->planta_model->listaplanta();
    $data['medicinanatural']=$lista;

    $this->load->view('estructura/header');
    $this->load->view('plantaMedicinal',$data);
    $this->load->view('estructura/footer');
}
else
{
	
	redirect('planta/usuario','refresh');
}


    }
    




	public function usuario()
	{
		/*if($this->session->userdata('tipo')=='usuario')
		{*/
			

			$this->load->view('estructura/header');
			$this->load->view('inicio');
			$this->load->view('estructura/footer');
		/*}*/
		
	}

public function agregar()
	{ 
		
		$this->load->view('estructura/header');
		$this->load->view('form_planta');
		$this->load->view('estructura/footer');
	}

public function agregarbd()
	{
		
		$data['nombres']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['tipo']=$_POST['tipo'];	
		$data['efectos']=$_POST['efectos'];
		$data['preparados']=$_POST['preparado'];
		$data['recomendaciones']=$_POST['recomendacion'];
				
		$lista=$this->planta_model->agregarplanta($data);
	
		redirect('planta/index','refresh');
		
	}

	
public function modificar()
	{
		$idplantas=$_POST['idplanta'];
		$data['infoplanta']=$this->planta_model->recuperarplanta($idplantas);

		$this->load->view('estructura/header');
		$this->load->view('modificar_planta',$data);
		$this->load->view('estructura/footer');
		
	}
	
	public function modificarbd()
	{

		$idmedicina=$_POST['idplanta'];
		$data['nombres']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['tipo']=$_POST['tipo'];
		$data['efectos']=$_POST['efectos'];
		$data['preparados']=$_POST['preparado'];
		$data['recomendaciones']=$_POST['recomendacion'];
		$nombrearchivo=$idmedicina.".jpg";
		//ruta donde se guardan los archivos
		$config['upload_path']='./uploads/medtra/';
		//nombre del archivo
		$config['file_name']=$nombrearchivo;
		$direccion="./uploads/medtra".$nombrearchivo;

		if (file_exists($direccion)) 
		{
			unlink($direccion);
		}
		

		//tipos de archivos permitidos
		$config['allowed_types']='jpg';
		$this->load->library('upload',$config);

		if (!$this->upload->do_upload()) 
		{
			$data['error']=$this->upload->display_errors();
		}
		else
		{
			$data['foto']=$nombrearchivo;
			
		}


		$lista=$this->planta_model->modificarplanta($idmedicina,$data);
		$this->upload->data();
		redirect('planta/index','refresh');
		
	}

	public function deshabilitarbd()
	{

        $idplantas=$_POST['idplantas'];
		$data['estado']='0';
		
		$this->planta_model->modificarplanta($idplantas,$data);
		redirect('planta/index','refresh');
	}



 


    
}

