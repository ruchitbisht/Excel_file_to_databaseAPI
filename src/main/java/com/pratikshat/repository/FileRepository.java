package com.pratikshat.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.pratikshat.entity.FileEntity;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Integer> {
	
	Page<FileEntity> findAll(Pageable page);

	@Query(value="select f from FileEntity f where f.customerName like %:keyword% or f.customerCode "
			+ "like %:keyword% or f.city like %:keyword% or f.state like %:keyword% or"
			+ " f.model like %:keyword% or f.serialNumber like %:keyword%")
	Page<FileEntity> getBySearch(String keyword,Pageable page);
	
	Page<FileEntity> findByCustomerNameStartingWith(String customerName,Pageable pageable);

	Page<FileEntity> findByCustomerCodeStartingWith(String customerCode, Pageable pageable);
	
	Page<FileEntity> findBySiteNameStartingWith(String siteName,Pageable pageable);
	
	Page<FileEntity> findBySiteAddressStartingWith(String siteAddress,Pageable pageable);
	
	Page<FileEntity> findByCityStartingWith(String city,Pageable pageable);
	
	Page<FileEntity> findByStateStartingWith(String state,Pageable pageable);
	
	Page<FileEntity> findByLocalContactPersonNameStartingWith(String localContactPersonName,Pageable pageable);
	
	Page<FileEntity> findByLocalPersonContactStartingWith(String localPersonContact,Pageable pageable);
	
	Page<FileEntity> findByTypeOfChargerStartingWith(String typeOfCharger,Pageable pageable);
	
	Page<FileEntity> findByModelStartingWith(String model,Pageable pageable);
	
	Page<FileEntity> findBySerialNumberStartingWith(String serialNumber,Pageable pageable);
	
	Page<FileEntity> findByFinalInstallationStatusStartingWith(String finalInstallationStatus,Pageable pageable);
	
	Page<FileEntity> findByInstallationStatusStartingWith(String installationStatus,Pageable pageable);
	
	Page<FileEntity> findByCommissioningStatusStartingWith(String commissioningStatus,Pageable pageable);
	
	Page<FileEntity> findByCommissionedByStartingWith(String commissionedBy,Pageable pageable);
	
	@Query(value ="DELETE FROM file_entity;" ,nativeQuery=true)
	public void deleteAll(); 

	

}
