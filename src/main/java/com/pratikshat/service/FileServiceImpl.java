package com.pratikshat.service;

import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.repository.FileRepository;

@Service
public class FileServiceImpl implements FileService {

	@Autowired
	FileRepository fileRepository;
	
	@Override
	public List<FileEntity> getFile() {
		
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

//		System.out.println(rows);
//		System.out.println(columns);
//
//		for (int i = 1; i <= rows; i++) {
//
//			XSSFRow row = sheet.getRow(i);
//			int cellId=0;
//			for (int c = 0; c < columns; c++) {
//				XSSFCell cell = row.getCell(c);
////				System.out.println("hhh"+cell.getNumericCellValue());
//
//				
////				cellId++;
//				System.out.print(" | ");
//			}
//			System.out.println();
//		}

//		Iterator<Row> iterator = sheet.iterator();

//		System.out.println("Outer "+iterator.hasNext());

		for (int i = 1; i <= rows; i++) {

			XSSFRow row = (XSSFRow) sheet.getRow(i);

			System.out.println(sheet.getLastRowNum());
			Iterator<Cell> cellIterator = row.cellIterator();
			System.out.println(row.getRowNum());
			System.out.println(row.getLastCellNum());
			
			DataFormatter dataFormatter= new DataFormatter();

			
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
					String vall=dataFormatter.formatCellValue(cell);
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
					String val= dataFormatter.formatCellValue(cell);
					fileEntity.setLocalPersonContact(val);
					break;
				case 9:
					fileEntity.setTypeOfCharger(cell.getStringCellValue());
					break;
				case 10:
					fileEntity.setModel(cell.getStringCellValue());
					break;
				case 11:
					String val10=dataFormatter.formatCellValue(cell);
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
					String val1=dataFormatter.formatCellValue(cell);
					fileEntity.setCommissioningDate(val1);
					break;
				case 17:
					fileEntity.setpM1Status(cell.getStringCellValue());
					break;
				case 18:
					String val11=dataFormatter.formatCellValue(cell);
					fileEntity.setpM1DoneOn(val11);
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
					String val2=dataFormatter.formatCellValue(cell);
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
					String val3=dataFormatter.formatCellValue(cell);
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
					String val4=dataFormatter.formatCellValue(cell);
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
					String val5=dataFormatter.formatCellValue(cell);
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
					String val6=dataFormatter.formatCellValue(cell);
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
