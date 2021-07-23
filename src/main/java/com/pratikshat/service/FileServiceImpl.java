package com.pratikshat.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileServiceImpl implements FileService {

	@Override
	public void getFile(MultipartFile file) throws IOException {

		InputStream inputStream = file.getInputStream();

		XSSFWorkbook workbook = new XSSFWorkbook(inputStream);

		XSSFSheet sheet = workbook.getSheetAt(1);

		Iterator<Row> iterator = sheet.iterator();
		System.out.println("Outer "+iterator.hasNext());

		while (iterator.hasNext()) {
			
			XSSFRow row = (XSSFRow) iterator.next();

			Iterator<Cell> cellIterator = row.cellIterator();

			while (cellIterator.hasNext()) {

				XSSFCell cell = (XSSFCell) cellIterator.next();
				if (cell.getCellType() == CellType.STRING) {
					System.out.print(cell.getStringCellValue());
				}
				if (cell.getCellType() == CellType.NUMERIC) {
					System.out.print(cell.getNumericCellValue());
					
				}
				if (cell.getCellType() == CellType.BOOLEAN) {
					System.out.print(cell.getBooleanCellValue());
					
				}
				if (cell.getCellType() == CellType.BLANK) {
					System.out.print("Blank Cell");	
				}
				System.out.print(" | ");
				
			}
			
				System.out.println(" ");

		}
		System.out.println("HAAA");
		System.out.println("Inner "+iterator.hasNext());
	}

}
