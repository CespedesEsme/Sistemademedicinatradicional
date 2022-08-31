<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class planta_model extends CI_Model {

		public function listaplanta()
	{
		
		$this->db->select('*');
		$this->db->from('plantas');
		return $this->db->get();
	}




	public function agregarplantas($data)
	{
		$this->db->insert('plantas',$data);
		
	}

public function eliminarplantas($idplantas)
	{
		$this->db->where('Id',$idplantas);
		$this->db->delete('plantas');
		
	}
	public function recuperarplantas($idplantas)
	{
		$this->db->select('*');
		$this->db->from('plantas');
		$this->db->where('Id',$idplantas);
		return $this->db->get();
	}
	public function modificarplantas($idplantas,$data)
	{
		$this->db->where('Id',$idplantas);
		$this->db->update('plantas',$data);		
	}

}