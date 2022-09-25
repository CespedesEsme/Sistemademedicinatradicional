<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class usuario extends CI_Controller {


	public function index()
	{
		$data['msg']=$this->uri->segment(3);
		if($this->session->userdata('login'))
		{
			//el usuario ya esta logueado
			redirect('usuario/panel','refresh');
		}
		else
		{
			//el usuario no esta logueado
			
			$this->load->view('login',$data);
			
		}
	}

	public function validar()
	{
		$login=$_POST['login'];
		$pasword=md5($_POST['pasword']);

		$consulta=$this->usuario_model->validarm($login,$pasword);

		if($consulta->num_rows()>0)
		{
			//tenemos una validacion efectiva
			foreach ($consulta->result() as $row) 
			{
				$this->session->set_userdata('idUsuario',$row->idUsuario);
				$this->session->set_userdata('login',$row->login);
				$this->session->set_userdata('cargo',$row->cargo);
				redirect('usuario/panel','refresh');
			}
		}

		else
		{
			//no hay validacion efectiva y redirigimos a login
			redirect('usuario/index/2','refresh');
		}
	}

	public function panel()
	{
		if($this->session->userdata('login'))
		{
			if($this->session->userdata('cargo')=='naturista')
			{
			//el usuario ya esta logueado
				redirect('planta/index','refresh');
			}
			else
			{
				redirect('planta/usuario','refresh');
			}
		}
		else
		{
			//el usuario no esta logueado
			redirect('usuario/index/3','refresh');
		}
	}

	public function logout()
	{
		$this->session->sess_destroy();
		redirect('usuario/index/1','refresh');
	}


}
