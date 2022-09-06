<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class enfermedad_model extends CI_Model {

		public function listaenfermedad()
	{
		
		$this->db->select('*');
		$this->db->from('enfermedad');
		return $this->db->get();
	}


	public function agregarenfermedad($data)
	{
		$this->db->insert('enfermedad',$data);
		
	}


	public function recuperarenfermedad($idenfermedad)
	{
		$this->db->select('*');
		$this->db->from('enfermedad');
		$this->db->where('Id',$idenfermedad);
		return $this->db->get();
	}
	public function modificarenfermedad($idenfermedad,$data)
	{
		$this->db->where('Id',$idenfermedad);
		$this->db->update('enfermedad',$data);		
	}


	

}