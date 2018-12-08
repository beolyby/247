<?php

class Models_MCatvideos extends Project

{

	function __construct(){

		parent:: __construct();

	}	

	

	/*

	 * liet ke danh sach du lieu

	 */

	function listdata($where=""){

		if($where!=""){

			$this->where($where);

		}

		$this->select('*');

		$this->getdata(TBL_CATVIDEOS,"sort asc, id desc");

		return $this->fetchall();

	}

	

	function countdata($where = ""){

		$this->getdata(TBL_CATVIDEOS);

		return $this->num_rows();

	}

	/*

	 * tic lock mot tin

	 */

	function hideshow($data,$id){

		$this->where('Id = '.$id);

		$this->update(TBL_CATVIDEOS,$data);	

	}

	

	

	/*

	 * tic lock chu de

	 */

	function ticlockactive($data,$id){

		$this->where('Id = '.$id);

		$this->update(TBL_CATVIDEOS,$data);	

	}

	

	/*

	 * them mot chu de

	 */

	function addCatelog($data){

		$this->insert(TBL_CATVIDEOS,$data);

		if($this->result == 1){

			return 1;

		}else{

			return 0;

		}

	}

	

	/*

	 * lay thong tin mot chu de

	 */

	function getOneCatelog($id){

		$this->where("Id = $id");

		$this->getdata(TBL_CATVIDEOS);

		return $this->fetchone();

	}

	

	/*

	 * edit thong tin

	 */

	function editCatelog($data,$id){

		$this->where("Id = $id");

		$this->update(TBL_CATVIDEOS,$data);

	}	

	

	/*

	 * delete nhieu dong

	 */

	function del_allcheck($data){

		foreach($data as $item)

		{

			$this->delete(TBL_CATVIDEOS,'Id = '.$item);

		}

	}

	

	/*

	 * delete mot dong

	 */

	function del_onecheck($id){

		$this->delete(TBL_CATVIDEOS,'Id = '.$id);

	}

	

	/*

	 * cap nhat sap xep thu tu (sort)

	 */

	function sortData($data){

		foreach($data as $key => $value){

			$this->where("Id = $key");

			$this->update(TBL_CATVIDEOS,"sort = $value");

		}

	}

	/*tic lock chu de*/

	function delFile($data,$id){

		$this->where('Id = '.$id);

		$this->update(TBL_CATVIDEOS,$data);	

	}

}

?>