<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class usuario1 extends CI_Controller {

	
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
        
    }
}
