package com.pratikshat.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.request.FileRequest;
import com.pratikshat.request.LoginRequest;

public interface FileService {

	void saveFile(MultipartFile file) throws IOException;

	Page<FileEntity> getFile(Pageable page);

	FileEntity saveRow(FileEntity fileEntity);

	void deleteRow(int srNo);

	FileEntity updateRow(int srNo, FileEntity file);

	FileEntity getFileById(int srNo);

	List<FileEntity> getFiles();

	Page<FileEntity> getFileByKeyword(String keyword,Pageable page);

	Page<FileEntity> getFileByCustomerName(String customerName,Pageable pageable);

	Page<FileEntity> getFileByCustomerCode(String customerCode, Pageable pageable);

	Page<FileEntity> getFileBySiteName(String siteName, Pageable pageable);

	Page<FileEntity> getFileByState(String state, Pageable pageable);

	Page<FileEntity> getFileBySiteAddress(String siteAddress, Pageable pageable);

	Page<FileEntity> getFileByCity(String city, Pageable pageable);

	Page<FileEntity> getFileByLocalContactPersonName(String localContactPersonName, Pageable pageable);

	Page<FileEntity> getFileByLocalPersonContact(String localPersonContact, Pageable pageable);

	Page<FileEntity> getFileByTypeOfCharger(String typeOfCharger, Pageable pageable);

	Page<FileEntity> getFileByModel(String model, Pageable pageable);

	Page<FileEntity> getFileBySerialNumber(String serialNumber, Pageable pageable);

	Page<FileEntity> getFileByFinalInstallationStatus(String finalInstallationStatus, Pageable pageable);

	Page<FileEntity> getFileByInstallationStatus(String installationStatus, Pageable pageable);

	Page<FileEntity> getFileByCommissioningStatus(String commissioningStatus, Pageable pageable);

	Page<FileEntity> getFileByCommissionedBy(String commissionedBy, Pageable pageable);

	//Advance Search
	public List<Map<String, Object>> advanceSearch(Map<String, Object> searchKey, Pageable pageable);

	

	

}
