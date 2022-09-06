<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class inicio_vista extends CI_Controller {

	public function index()
	{
		
    $this->load->view('estructura/header_1');
    
    $this->load->view('inicio');
    $this->load->view('estructura/footer');
	}
}
