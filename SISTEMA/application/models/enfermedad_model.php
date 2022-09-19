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


	public function recuperarenfermedad($idEnfermedad)
	{
		$this->db->select('*');
		$this->db->from('enfermedad');
		$this->db->where('idEnfermedad',$idEnfermedad);
		return $this->db->get();
	}
	public function modificarenfermedad($idEnfermedad,$data)
	{
		$this->db->where('idEnfermedad',$idEnfermedad);
		$this->db->update('enfermedad',$data);		
	}

}