<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class usuario_model extends CI_Model {
	
	public function validar($login,$pasword)
	{
		$this->db->select('*');  //select *
		$this->db->from('usuario');   //tabla
		$this->db->where('login',$login);
		$this->db->where('pasword',$pasword);
		return $this->db->get();	//devolución del resultado de la consulta
	}	
}
