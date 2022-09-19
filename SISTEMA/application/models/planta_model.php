<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class planta_model extends CI_Model {

		public function listaplanta()
	{
		
		$this->db->select('*');
		$this->db->from('medicinanatural');
		return $this->db->get();
	}


	public function agregarplanta($data)
	{
		$this->db->insert('medicinanatural',$data);
		
	}


	public function recuperarplanta($idplantas)
	{
		$this->db->select('*');
		$this->db->from('medicinanatural');
		$this->db->where('idmedicina',$idplantas);
		return $this->db->get();
	}
	public function modificarplanta($idmedicina,$data)
	{
		$this->db->where('idmedicina',$idmedicina);
		$this->db->update('medicinanatural',$data);		
	}


	

}