<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class enfermedad extends CI_Controller {

    public function index()
{ 
    
    
    $lista=$this->planta_model->listaplanta();
    $data['planta']=$lista;

    $this->load->view('estructura/header');
    $this->load->view('enfermedad',$data);
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
		$this->load->view('form_planta');
		$this->load->view('estructura/footer');
	}

public function agregarbd()
	{
		
		$data['nombre']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['tipo']=$_POST['tipo'];
		$data['recomendacion']=$_POST['recomendacion'];
		$data['efectos']=$_POST['efectos'];
		$data['preparado']=$_POST['preparado'];

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

		$idplantas=$_POST['idplanta'];
		$data['nombre']=$_POST['nombre'];
		$data['descripcion']=$_POST['descripcion'];
		$data['tipo']=$_POST['tipo'];
		$data['recomendacion']=$_POST['recomendacion'];
		$data['efectos']=$_POST['efectos'];
		$data['preparado']=$_POST['preparado'];
		$nombrearchivo=$idplantas.".jpg";
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


		$lista=$this->planta_model->modificarplanta($idplantas,$data);
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

