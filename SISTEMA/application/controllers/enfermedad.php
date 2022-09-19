<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class enfermedad extends CI_Controller {

    public function index()
{ 
    
    
    $lista=$this->enfermedad_model->listaenfermedad();
    $data['enfermedad']=$lista;

    $this->load->view('estructura/header');
    $this->load->view('listaenfermedad',$data);
    $this->load->view('estructura/footer');


    }
    



    /* public function index()
	{ 
		if($this->session->userdata('tipo')=='admin')
		{

		$lista=$this->plantas_model->listaplantas();
		$data['plantas']=$lista;

		$this->load->view('estructura/inc_header');
		$this->load->view('lista_plantas',$data);
		$this->load->view('estructura/inc_footer');
		}
		else
		{
			
			redirect('plantas/usuario','refresh');
		}
		
	} */

	public function usuario()
	{
		if($this->session->userdata('tipo')=='usuario')
		{
			$lista=$this->plantas_model->listaplantas();
			$data['plantas']=$lista;

			$this->load->view('estructura/header');
			$this->load->view('plantasusuario',$data);
			$this->load->view('estructura/footer');
		}
		
	}

public function agregar()
	{ 
		
		$this->load->view('estructura/header');
		$this->load->view('form_enfermedad');
		$this->load->view('estructura/footer');
	}

public function agregarbd()
	{
		
		$data['nombre']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['causas']=$_POST['causas'];
		

		$lista=$this->enfermedad_model->agregarenfermedad($data);

		redirect('enfermedad/index','refresh');
	}

	
public function modificar()
	{
		$idEnfermedad=$_POST['idEnfermedad'];
		$data['infoenfermedad']=$this->enfermedad_model->recuperarenfermedad($idEnfermedad);

		$this->load->view('estructura/header');
		$this->load->view('modificar_enfermedad',$data);
		$this->load->view('estructura/footer');
		
	}
	
	public function modificarbd()
	{

		$idEnfermedad=$_POST['idEnfermedad'];
		$data['nombre']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['causas']=$_POST['causas'];
		
		$nombrearchivo=$idEnfermedad.".jpg";
		//ruta donde se guardan los archivos
		$config['upload_path']='./uploads/';
		//nombre del archivo
		$config['file_name']=$nombrearchivo;
		$direccion="./uploads/".$nombrearchivo;

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


		$lista=$this->enfermedad_model->modificarenfermedad($idEnfermedad,$data);
		$this->upload->data();
		redirect('enfermedad/index','refresh');
		
	}

	public function deshabilitarbd()
	{

        $idEnfermedad=$_POST['idEnfermedad'];
		$data['estado']='0';
		
		$this->planta_model->modificarenfermedad($idEnfermedad,$data);
		redirect('enfermedad/index','refresh');
	}



 


    
}

