<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class planta_model extends CI_Model {

		public function listaplantas()
	{
		
		$this->db->select('*');
		$this->db->from('plantas');
		return $this->db->get();
	}
}