package com.pratikshat.service;

import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Pattern;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.repository.FileRepository;

@Service
public class FileServiceImpl implements FileService {

	@Autowired
	FileRepository fileRepository;
	
	@Override
	public FileEntity getFileById(int srNo) {
		
		
		return fileRepository.findById(srNo).get();
	}
	
	@Override
	public List<FileEntity> getFileByName(String name) {
		return fileRepository.findByCustomerNameContaining(name);
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
		fileEntity.setFinalInstallationStatus(file.getFinalInstallationStatus());
		fileEntity.setInstallationStatus(file.getInstallationStatus());
		fileEntity.setCommissioningStatus(file.getCommissioningStatus());
		fileEntity.setCommissionedBy(file.getCommissionedBy());
		fileEntity.setCommissioningDate(file.getCommissioningDate());
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

		FileEntity fileEntity = new FileEntity();

		InputStream inputStream = file.getInputStream();

		XSSFWorkbook workbook = new XSSFWorkbook(inputStream);

		XSSFSheet sheet = workbook.getSheetAt(1);

		int rows = sheet.getLastRowNum();
		int columns = sheet.getRow(0).getLastCellNum();

		for (int i = 1; i <= rows; i++) {

			XSSFRow row = (XSSFRow) sheet.getRow(i);

			System.out.println(sheet.getLastRowNum());
			Iterator<Cell> cellIterator = row.cellIterator();
			System.out.println(row.getRowNum());
			System.out.println(row.getLastCellNum());

			DataFormatter dataFormatter = new DataFormatter();

			int cellId = 0;
			while (cellIterator.hasNext()) {

				XSSFCell cell = (XSSFCell) cellIterator.next();

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
					String val10 = dataFormatter.formatCellValue(cell);
					fileEntity.setSerialNumber(val10);
					break;
				case 12:
					fileEntity.setFinalInstallationStatus(cell.getStringCellValue());
					break;
				case 13:
					fileEntity.setInstallationStatus(cell.getStringCellValue());
					break;
				case 14:
					fileEntity.setCommissioningStatus(cell.getStringCellValue());
					break;
				case 15:
					fileEntity.setCommissionedBy(cell.getStringCellValue());
					break;
				case 16:
					
					if(cell.toString().contains("N.C")|| cell.toString().equalsIgnoreCase("")) {
						fileEntity.setCommissioningDate(null);
						break;
					}
					fileEntity.setCommissioningDate(cell.getDateCellValue());
					break;
				case 17:
					fileEntity.setpM1Status(cell.getStringCellValue());
					break;
				case 18:
					if(cell.toString().contains("N.A") || cell.toString().equalsIgnoreCase("") || cell.toString().contains("Pending")) {
						fileEntity.setpM1DoneOn(null);
						break;
					}
					fileEntity.setpM1DoneOn(cell.getDateCellValue());
					break;
				case 19:
					fileEntity.setpM1Done(cell.getStringCellValue());
					break;
				case 20:
					fileEntity.setpM1Remarks(cell.getStringCellValue());
					break;
				case 21:
					fileEntity.setsWUpdate(cell.getStringCellValue());
					break;
				case 22:
					fileEntity.setpMDueDate(cell.getDateCellValue());
					break;
				case 23:
					fileEntity.setpM2Status(cell.getStringCellValue());
					break;
				case 24:
					String val2 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM2DoneOn(val2);
					break;
				case 25:
					fileEntity.setpM2Done(cell.getStringCellValue());
					break;
				case 26:
					fileEntity.setpM2Remarks(cell.getStringCellValue());
					break;
				case 27:
					fileEntity.setpM3Status(cell.getStringCellValue());
					break;
				case 28:
					String val3 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM3DoneOn(val3);
					break;
				case 29:
					fileEntity.setpM3Done(cell.getStringCellValue());
					break;
				case 30:
					fileEntity.setpM3Remarks(cell.getStringCellValue());
					break;
				case 31:
					fileEntity.setpM4Status(cell.getStringCellValue());
					break;
				case 32:
					String val4 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM4DoneOn(val4);
					break;
				case 33:
					fileEntity.setpM4Done(cell.getStringCellValue());
					break;
				case 34:
					fileEntity.setpM4Remarks(cell.getStringCellValue());
					break;
				case 35:
					fileEntity.setpM5Status(cell.getStringCellValue());
					break;
				case 36:
					String val5 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM5DoneOn(val5);
					break;
				case 37:
					fileEntity.setpM5Done(cell.getStringCellValue());
					break;
				case 38:
					fileEntity.setpM5Remarks(cell.getStringCellValue());
					break;
				case 39:
					fileEntity.setpM6Status(cell.getStringCellValue());
					break;
				case 40:
					String val6 = dataFormatter.formatCellValue(cell);
					fileEntity.setpM6DoneOn(val6);
					break;
				case 41:
					fileEntity.setpM6Done(cell.getStringCellValue());
					break;
				case 42:
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

	}

}
