package com.pratikshat.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.print.attribute.standard.SheetCollate;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.streaming.SXSSFRow;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.entity.LogInEntity;
import com.pratikshat.repository.FileRepository;
import com.pratikshat.repository.LoginRepository;
import com.pratikshat.request.FileRequest;
import com.pratikshat.request.LoginRequest;

@Service
public class FileServiceImpl implements FileService {

	@Autowired
	FileRepository fileRepository;
	
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	JdbcTemplate jdbc;
	
	@Override
	public FileEntity getFileById(int srNo) {
		
		
		return fileRepository.findById(srNo).get();
	}
	
	@Override
	public Page<FileEntity> getFileByKeyword(String keyword,Pageable page) {
		return fileRepository.getBySearch(keyword, page);
	}

	@Override
	public FileEntity saveRow(FileEntity fileEntity) {
		return this.fileRepository.save(fileEntity);

	}

	@Override
	public FileEntity updateRow(int srNo, FileEntity file) {
		FileEntity fileEntity=new FileEntity();
		fileEntity.setSrNo(srNo);
		fileEntity.setCity(file.getCity());
		fileEntity.setCustomerName(file.getCustomerName());
		fileEntity.setCustomerCode(file.getCustomerCode());
		fileEntity.setSiteName(file.getSiteName());
		fileEntity.setSiteAddress(file.getSiteAddress());
		fileEntity.setState(file.getState());
		fileEntity.setLocalContactPersonName(file.getLocalContactPersonName());
		fileEntity.setLocalPersonContact(file.getLocalPersonContact());
		fileEntity.setTypeOfCharger(file.getTypeOfCharger());
		fileEntity.setModel(file.getModel());
		fileEntity.setSerialNumber(file.getSerialNumber());
		fileEntity.setDateOfInvoice(file.getDateOfInvoice());
		fileEntity.setFinalInstallationStatus(file.getFinalInstallationStatus());
		fileEntity.setInstallationStatus(file.getInstallationStatus());
		fileEntity.setCommissioningStatus(file.getCommissioningStatus());
		fileEntity.setCommissionedBy(file.getCommissionedBy());
		fileEntity.setCommissioningDate(file.getCommissioningDate());
		fileEntity.setWarrantyAmcStatus(file.getWarrantyAmcStatus());
		fileEntity.setWarrantyAmcInMonth(file.getWarrantyAmcInMonth());
		fileEntity.setWarrantyAmcValidityDate(file.getWarrantyAmcValidityDate());
		fileEntity.setpMFrequency(file.getpMFrequency());
		fileEntity.setpM1Status(file.getpM1Status());
		fileEntity.setpM1DoneOn(file.getpM1DoneOn());
		fileEntity.setpM1Done(file.getpM1Done());
		fileEntity.setpM1Remarks(file.getpM1Remarks());
		fileEntity.setsWUpdate(file.getsWUpdate());
		fileEntity.setpMDueDate(file.getpMDueDate());
		fileEntity.setpM2Status(file.getpM2Status());
		fileEntity.setpM2DoneOn(file.getpM2DoneOn());
		fileEntity.setpM2Done(file.getpM2Done());
		fileEntity.setpM2Remarks(file.getpM2Remarks());
		fileEntity.setpM3Status(file.getpM3Status());
		fileEntity.setpM3DoneOn(file.getpM3DoneOn());
		fileEntity.setpM3Done(file.getpM3Done());
		fileEntity.setpM3Remarks(file.getpM3Remarks());
		fileEntity.setpM4Status(file.getpM4Status());
		fileEntity.setpM4DoneOn(file.getpM4DoneOn());
		fileEntity.setpM4Done(file.getpM4Done());
		fileEntity.setpM4Remarks(file.getpM4Remarks());
		fileEntity.setpM5Status(file.getpM5Status());
		fileEntity.setpM5DoneOn(file.getpM5DoneOn());
		fileEntity.setpM5Done(file.getpM5Done());
		fileEntity.setpM5Remarks(file.getpM5Remarks());
		fileEntity.setpM6Status(file.getpM6Status());
		fileEntity.setpM6DoneOn(file.getpM6DoneOn());
		fileEntity.setpM6Done(file.getpM6Done());
		fileEntity.setpM6Remarks(file.getpM6Remarks());
		return fileRepository.save(fileEntity);
	}

	@Override
	public void deleteRow(int srNo) {
		fileRepository.deleteById(srNo);

	}

	@Override
	public Page<FileEntity> getFile(Pageable page) {
	
		return fileRepository.findAll(page);

	}
	
	@Override
	public List<FileEntity> getFiles() {
		
		return fileRepository.findAll();
	}

	@Override
	public void saveFile(MultipartFile file) throws IOException {

	try {	
		FileEntity fileEntity = new FileEntity();

		InputStream inputStream = file.getInputStream();

		XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
//		workbook.setCompressTempFiles(true);

		XSSFSheet sheet =  workbook.getSheet("Back UP");
//		sheet.setRandomAccessWindowSize(100);

		int rows = sheet.getLastRowNum();
		int columns=sheet.getRow(0).getLastCellNum();

		for (int i = 1; i <= rows; i++) {

			XSSFRow row = sheet.getRow(i);

			System.out.println(sheet.getLastRowNum());
			Iterator<Cell> cellIterator = row.cellIterator();
			System.out.println(row.getRowNum());
			System.out.println(row.getLastCellNum());

			DataFormatter dataFormatter = new DataFormatter();

			int cellId = 0;
			while (cellIterator.hasNext()) {

				XSSFCell cell =  (XSSFCell) cellIterator.next();

				switch (cellId) {
				case 0:
					fileEntity.setSrNo((int) cell.getNumericCellValue());
					break;
				case 1:
					fileEntity.setCustomerName(cell.getStringCellValue());
					break;
				case 2:
					String vall = dataFormatter.formatCellValue(cell);
					fileEntity.setCustomerCode(vall);
					break;
				case 3:
					fileEntity.setSiteName(cell.getStringCellValue());
					break;
				case 4:
					fileEntity.setSiteAddress(cell.getStringCellValue());
					break;
				case 5:
					fileEntity.setCity(cell.getStringCellValue());
					break;
				case 6:
					fileEntity.setState(cell.getStringCellValue());
					break;
				case 7:
					fileEntity.setLocalContactPersonName(cell.getStringCellValue());
					break;
				case 8:
					String val = dataFormatter.formatCellValue(cell);
					fileEntity.setLocalPersonContact(val);
					break;
				case 9:
					fileEntity.setTypeOfCharger(cell.getStringCellValue());
					break;
				case 10:
					fileEntity.setModel(cell.getStringCellValue());
					break;
				case 11:
					System.out.println("Serial no.");
					String val10 = dataFormatter.formatCellValue(cell);
					fileEntity.setSerialNumber(val10);
					break;
				case 12: 
					System.out.println("dateofInvoce");
					String val11 = dataFormatter.formatCellValue(cell);
					fileEntity.setDateOfInvoice(val11);
					break;
				case 13:
					System.out.println("Finalins");
					fileEntity.setFinalInstallationStatus(cell.getStringCellValue());
					break;
				case 14:
					System.out.println("Install");
					fileEntity.setInstallationStatus(cell.getStringCellValue());
					break;
				case 15:
					fileEntity.setCommissioningStatus(cell.getStringCellValue());
					break;
				case 16:
					System.out.println("before");
					fileEntity.setCommissionedBy(cell.getStringCellValue());
					System.out.println("after");
					break;
				case 17:
					
					if(cell.toString().contains("N.C")|| cell.toString().equalsIgnoreCase("")) {
						fileEntity.setCommissioningDate(null);
						break;
					}
					fileEntity.setCommissioningDate(cell.getDateCellValue());
					break;
				case 18: 
					fileEntity.setWarrantyAmcStatus(cell.getStringCellValue());
					break;
				case 19: 
					fileEntity.setWarrantyAmcInMonth(cell.getStringCellValue());
					break;
				case 20: 
					fileEntity.setWarrantyAmcValidityDate(cell.getStringCellValue());
					break;
				case 21:
					fileEntity.setpMFrequency(cell.getStringCellValue());
					break;
				case 22:
					fileEntity.setpM1Status(cell.getStringCellValue());
					break;	
				case 23:
					if(cell.toString().contains("N.A") || cell.toString().equalsIgnoreCase("") || cell.toString().contains("Pending")) {
						fileEntity.setpM1DoneOn(null);
						break;
					}
					fileEntity.setpM1DoneOn(cell.getDateCellValue());
					break;
				case 24:
					fileEntity.setpM1Done(cell.getStringCellValue());
					break;
				case 25:
					fileEntity.setpM1Remarks(cell.getStringCellValue());
					break;
				case 26:
					fileEntity.setsWUpdate(cell.getStringCellValue());
					break;
				case 27:
					fileEntity.setpMDueDate(cell.getDateCellValue());
					break;
				case 28:
					fileEntity.setpM2Status(cell.getStringCellValue());
					break;
				case 29:
					String val2 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM2DoneOn(val2);
					break;
				case 30:
					fileEntity.setpM2Done(cell.getStringCellValue());
					break;
				case 31:
					fileEntity.setpM2Remarks(cell.getStringCellValue());
					break;
				case 32:
					fileEntity.setpM3Status(cell.getStringCellValue());
					break;
				case 33:
					String val3 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM3DoneOn(val3);
					break;
				case 34:
					fileEntity.setpM3Done(cell.getStringCellValue());
					break;
				case 35:
					fileEntity.setpM3Remarks(cell.getStringCellValue());
					break;
				case 36:
					fileEntity.setpM4Status(cell.getStringCellValue());
					break;
				case 37:
					String val4 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM4DoneOn(val4);
					break;
				case 38:
					fileEntity.setpM4Done(cell.getStringCellValue());
					break;
				case 39:
					fileEntity.setpM4Remarks(cell.getStringCellValue());
					break;
				case 40:
					fileEntity.setpM5Status(cell.getStringCellValue());
					break;
				case 41:
					String val5 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM5DoneOn(val5);
					break;
				case 42:
					fileEntity.setpM5Done(cell.getStringCellValue());
					break;
				case 43:
					fileEntity.setpM5Remarks(cell.getStringCellValue());
					break;
				case 44:
					fileEntity.setpM6Status(cell.getStringCellValue());
					break;
				case 45:
					String val6 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM6DoneOn(val6);
					break;
				case 46:
					fileEntity.setpM6Done(cell.getStringCellValue());
					break;
				case 47:
					fileEntity.setpM6Remarks(cell.getStringCellValue());
					break;

				default:
					break;

				}
				cellId = cellId + 1;
				fileRepository.save(fileEntity);
			}

			System.out.println(" ");
		}
		workbook.close();
		inputStream.close();
	}catch (Exception e) {
		e.printStackTrace();
	}
		
	}
	


	@Override
	public Page<FileEntity> getFileByCustomerName(String customerName,Pageable pageable) {
		return this.fileRepository.findByCustomerNameStartingWith(customerName,pageable);
	}

	@Override
	public Page<FileEntity> getFileByCustomerCode(String customerCode, Pageable pageable) {
		return this.fileRepository.findByCustomerCodeStartingWith(customerCode,pageable);
	}

	@Override
	public Page<FileEntity> getFileBySiteName(String siteName, Pageable pageable) {
		return this.fileRepository.findBySiteNameStartingWith(siteName, pageable);
	}

	@Override
	public Page<FileEntity> getFileByState(String state, Pageable pageable) {
		
		return this.fileRepository.findByStateStartingWith(state, pageable);
	}

	@Override
	public Page<FileEntity> getFileBySiteAddress(String siteAddress, Pageable pageable) {
		
		return this.fileRepository.findBySiteAddressStartingWith(siteAddress, pageable);
	}

	@Override
	public Page<FileEntity> getFileByCity(String city, Pageable pageable) {
		
		return this.fileRepository.findByCityStartingWith(city, pageable);
	}

	@Override
	public Page<FileEntity> getFileByLocalContactPersonName(String localContactPersonName, Pageable pageable) {
		
		return this.fileRepository.findByLocalContactPersonNameStartingWith(localContactPersonName, pageable);
	}

	@Override
	public Page<FileEntity> getFileByLocalPersonContact(String localPersonContact, Pageable pageable) {
		
		return this.fileRepository.findByLocalPersonContactStartingWith(localPersonContact, pageable);
	}

	@Override
	public Page<FileEntity> getFileByTypeOfCharger(String typeOfCharger, Pageable pageable) {
		
		return this.fileRepository.findByTypeOfChargerStartingWith(typeOfCharger, pageable);
	}

	@Override
	public Page<FileEntity> getFileByModel(String model, Pageable pageable) {
		
		return this.fileRepository.findByModelStartingWith(model, pageable);
	}

	@Override
	public Page<FileEntity> getFileBySerialNumber(String serialNumber, Pageable pageable) {
		
		return this.fileRepository.findBySerialNumberStartingWith(serialNumber, pageable);
	}

	@Override
	public Page<FileEntity> getFileByFinalInstallationStatus(String finalInstallationStatus, Pageable pageable) {
		
		return this.fileRepository.findByFinalInstallationStatusStartingWith(finalInstallationStatus, pageable);
	}

	@Override
	public Page<FileEntity> getFileByInstallationStatus(String installationStatus, Pageable pageable) {
		
		return this.fileRepository.findByInstallationStatusStartingWith(installationStatus, pageable);
	}

	@Override
	public Page<FileEntity> getFileByCommissioningStatus(String commissioningStatus, Pageable pageable) {
		
		return this.fileRepository.findByCommissioningStatusStartingWith(commissioningStatus, pageable);
	}

	@Override
	public Page<FileEntity> getFileByCommissionedBy(String commissionedBy, Pageable pageable) {
		
		return this.fileRepository.findByCommissionedByStartingWith(commissionedBy, pageable);
	}
	
	
	//Advance Search
	
	public List<Map<String,Object>> advanceSearch(Map<String, Object> searchKey,Pageable pageable) {
	List<Object> value=new ArrayList<>();
	
	String _query=
			"SELECT * FROM `file_entity` file "
			+ " WHERE 1=1";
//	FileRequest fileRequest=new FileRequest();
	StringBuilder builder=new StringBuilder();
	builder.append(_query);
	System.out.println(searchKey.get("customerName"));
	
	if(searchKey.get("customerName") !=null && !searchKey.get("customerName").toString().equalsIgnoreCase("")) {
		builder.append(" and file.`customer_name` like ? ");
		value.add("%" + searchKey.get("customerName") +"%");
		}
	if(searchKey.get("customerCode") !=null && !searchKey.get("customerCode").toString().equalsIgnoreCase("") ) {
		builder.append(" and file.`customer_code` like ? ");
		value.add(searchKey.get("customerCode") +"%" );
	}
	if(searchKey.get("siteName") !=null && !searchKey.get("siteName").toString().equalsIgnoreCase("") ) {
		builder.append(" AND `site_name` like ? ");
		value.add(searchKey.get("siteName") +"%" );
	}
	if(searchKey.get("siteAddress") !=null && !searchKey.get("siteAddress").toString().equalsIgnoreCase("") ) {
		builder.append(" and `site_address` like ?");
		value.add(searchKey.get("siteAddress") +"%"  );
	}
	if(searchKey.get("city") !=null && !searchKey.get("city").toString().equalsIgnoreCase("") ) {
		builder.append(" and `city` like ?");
		value.add(searchKey.get("city") +"%"  );
	}
	if(searchKey.get("state") !=null && !searchKey.get("state").toString().equalsIgnoreCase("") ) {
		builder.append(" and `state` like ?");
		value.add(searchKey.get("state") +"%"  );
	}
	if(searchKey.get("localContactPersonName") !=null && !searchKey.get("localContactPersonName").toString().equalsIgnoreCase("") ) {
		builder.append(" and `local_contact_person_name` like ?");
		value.add(searchKey.get("localContactPersonName") +"%"  );
	}
	if(searchKey.get("localPersonContact") !=null && !searchKey.get("localPersonContact").toString().equalsIgnoreCase("") ) {
		builder.append(" and `local_person_contact` like ?");
		value.add(searchKey.get("localPersonContact") +"%"  );
	}
	if(searchKey.get("typeOfCharger") !=null && !searchKey.get("typeOfCharger").toString().equalsIgnoreCase("") ) {
		builder.append(" and `type_of_charger` like ?");
		value.add(searchKey.get("typeOfCharger") +"%" );
	}
	if(searchKey.get("model") !=null && !searchKey.get("model").toString().equalsIgnoreCase("") ) {
		builder.append(" and `model` like ?");
		value.add(searchKey.get("model") +"%"  );
	}
	if(searchKey.get("serialNumber") !=null && !searchKey.get("serialNumber").toString().equalsIgnoreCase("") ) {
		builder.append(" and `serial_number` like ?");
		value.add(searchKey.get("serialNumber") +"%"  );
	}
	if(searchKey.get("dateOfInvoice") !=null && !searchKey.get("dateOfInvoice").toString().equalsIgnoreCase("") ) {
		builder.append(" and `date_of_invoice` like ?");
		value.add(searchKey.get("dateOfInvoice") +"%"  );
	}
	if(searchKey.get("finalInstallationStatus") !=null && !searchKey.get("finalInstallationStatus").toString().equalsIgnoreCase("") ) {
		builder.append(" and `final_installation_status` like ?");
		value.add(searchKey.get("finalInstallationStatus") +"%"  );
	}
	if(searchKey.get("installationStatus") !=null && !searchKey.get("installationStatus").toString().equalsIgnoreCase("") ) {
		builder.append(" and `installation_status` like ?");
		value.add(searchKey.get("installationStatus") +"%"  );
	}
	if(searchKey.get("commissioningStatus") !=null && !searchKey.get("commissioningStatus").toString().equalsIgnoreCase("") ) {
		builder.append(" and `commission_status` like ?");
		value.add(searchKey.get("commissioningStatus") +"%"  );
	}
	if(searchKey.get("commissionedBy") !=null && !searchKey.get("commissionedBy").toString().equalsIgnoreCase("") ) {
		builder.append(" and `commissioned_by` like ?");
		value.add(searchKey.get("commissionedBy") +"%"  );
	}
	if(searchKey.get("commissioningDate") !=null && !searchKey.get("commissioningDate").toString().toString().equalsIgnoreCase("") ) {
		builder.append(" and `commissioning_date` like ?");
		value.add(searchKey.get("commissioningDate") +"%"  );
	}
	if(searchKey.get("warrantyAmcStatus") !=null && !searchKey.get("warrantyAmcStatus").toString().equalsIgnoreCase("") ) {
		builder.append(" and `warranty_amc_status` like ?");
		value.add(searchKey.get("warrantyAmcStatus") +"%"  );
	}
	if(searchKey.get("warrantyAmcInMonth") !=null && !searchKey.get("warrantyAmcInMonth").toString().equalsIgnoreCase("") ) {
		builder.append(" and `warranty_amc_in_month` like ?");
		value.add(searchKey.get("warrantyAmcInMonth") +"%"  );
	}
	if(searchKey.get("warrantyAmcValidityDate") !=null && !searchKey.get("warrantyAmcValidityDate").toString().equalsIgnoreCase("") ) {
		builder.append(" and `warranty_amc_validity_date` like ?");
		value.add(searchKey.get("warrantyAmcValidityDate") +"%"  );
	}
	if(searchKey.get("pMFrequency") !=null && !searchKey.get("pMFrequency").toString().equalsIgnoreCase("") ) {
		builder.append(" and `pmfrequency` like ?");
		value.add(searchKey.get("pMFrequency") +"%"  );
	}
	
	return jdbc.queryForList(builder.toString(), value.toArray()); 
	}
	

}
