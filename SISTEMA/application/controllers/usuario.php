<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class usuarios extends CI_Controller {


	public function index()
	{
		$data['msg']=$this->uri->segment(3);
		if($this->session->userdata('login'))
		{
			//el usuario ya esta logueado
			redirect('usuarios/panel','refresh');
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

		$consulta=$this->Usuario_model->validar($login,$pasword);

		if($consulta->num_rows()>0)
		{
			//tenemos una validacion efectiva
			foreach ($consulta->result() as $row) 
			{
				$this->session->set_userdata('idusuario',$row->idusuario);
				$this->session->set_userdata('login',$row->login);
				$this->session->set_userdata('tipo',$row->tipo);
				redirect('usuarios/panel','refresh');
			}
		}

		else
		{
			//no hay validacion efectiva y redirigimos a login
			redirect('usuarios/index/2','refresh');
		}
	}

	public function panel()
	{
		if($this->session->userdata('login'))
		{
			if($this->session->userdata('tipo')=='admin')
			{
			//el usuario ya esta logueado
				redirect('plantas/index','refresh');
			}
			else
			{
				redirect('plantas/usuario','refresh');
			}
		}
		else
		{
			//el usuario no esta logueado
			redirect('usuarios/index/3','refresh');
		}
	}

	public function logout()
	{
		$this->session->sess_destroy();
		redirect('usuarios/index/1','refresh');
	}


}
