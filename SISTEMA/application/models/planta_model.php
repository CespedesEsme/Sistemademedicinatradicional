<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class planta_model extends CI_Model {

		public function listaplanta()
	{
		
		$this->db->select('*');
		$this->db->from('planta');
		return $this->db->get();
	}


	public function agregarplanta($data)
	{
		$this->db->insert('planta',$data);
		
	}


	public function recuperarplanta($idplantas)
	{
		$this->db->select('*');
		$this->db->from('planta');
		$this->db->where('Id',$idplantas);
		return $this->db->get();
	}
	public function modificarplanta($idplantas,$data)
	{
		$this->db->where('Id',$idplantas);
		$this->db->update('planta',$data);		
	}


	

}