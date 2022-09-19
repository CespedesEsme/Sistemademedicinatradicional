<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class inicio extends CI_Controller {

	public function index()
	{
		
    $this->load->view('estructura/header');
     $this->load->view('inicio');
    $this->load->view('estructura/footer');
	}
}
