package com.pratikshat.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pratikshat.entity.FileEntity;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Integer> {
	
	Page<FileEntity> findAll(Pageable page);

	

//	@Query("select f from FileEntity f where f.customerName like ?1")
	List<FileEntity> findByCustomerNameContaining(String name);
}
