<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class planta extends CI_Controller {

    public function index()
{ 
    
    $lista=$this->planta_model->listaplanta();
    $data['plantas']=$lista;

    $this->load->view('estructura/header');
    $this->load->view('plantaMedicinal',$data);
    $this->load->view('estructura/footer');


    }
    
    
}

