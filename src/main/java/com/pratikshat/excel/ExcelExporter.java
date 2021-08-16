package com.pratikshat.excel;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.FontFamily;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.hibernate.engine.internal.Nullability;

import com.pratikshat.entity.FileEntity;

public class ExcelExporter {

	private SXSSFWorkbook workbook;
	private SXSSFSheet sheet;

	private List<FileEntity> listFile;

	public ExcelExporter(List<FileEntity> listFile) {
		this.listFile = listFile;
		this.workbook = new SXSSFWorkbook();
		workbook.setCompressTempFiles(true);
	}

	private void createCell(Row row, int columnCount, Object value, CellStyle style) {
		 sheet.trackAllColumnsForAutoSizing();
		sheet.autoSizeColumn((short)columnCount);

		Cell cell = row.createCell(columnCount);
		if (value instanceof Integer) {
			cell.setCellValue((Integer) value);
		} else if (value instanceof Long) {
			cell.setCellValue((Long) value);
		} else if (value instanceof Boolean) {
			cell.setCellValue((Boolean) value);
		}else if (value instanceof Date) {
			cell.setCellValue((Date) value);
//		}
//		else if (value instanceof Nullability) {
//			String d=" ";
//			cell.setCellValue(d);
		} else {
			cell.setCellValue((String) value);
		}
		cell.setCellStyle(style);
	}

	private void writeHeaderLine() {
		sheet = workbook.createSheet("Back UP");

		Row row = sheet.createRow(0);
		CellStyle style = workbook.createCellStyle();
		XSSFFont font =  (XSSFFont) workbook.createFont();
		style.setFillBackgroundColor(IndexedColors.LIGHT_BLUE.index);
		font.setBold(true);
		font.setFontHeight(12);
//		font.setFamily(FontFamily.valueOf("Times New Roman"));
		style.setFont(font);
		createCell(row, 0, "Sr.No.", style);
		createCell(row,1,"Customer Name",style);
		createCell(row,2,"Customer Code",style);
		createCell(row,3,"Site Name",style);
		createCell(row,4,"Site Address",style);
		createCell(row,5,"City",style);
		createCell(row,6,"State",style);
		createCell(row,7,"Local Contact Person Name",style);
		createCell(row,8,"Local Person Contact",style);
		createCell(row,9,"Type of Charger",style);
		createCell(row,10,"Model",style);
		createCell(row,11,"Serial Number",style);
		createCell(row,12,"Date Of Invoice",style);
		createCell(row,13,"Final Installation Status",style);
		createCell(row,14,"Installation Status",style);
		createCell(row,15,"Commissioning status",style);
		createCell(row,16,"Commissioned By (Exicom Eng Name)",style);
		createCell(row,17,"Commissioning Date",style);
		createCell(row,18,"Warranty/AMC Status",style);
		createCell(row,19,"Warranty/AMC (In Months)",style);
		createCell(row,20,"Warranty/AMC Validity date",style);
		createCell(row,21,"PM Frequency",style);
		createCell(row,22,"PM 1 Status",style);
		createCell(row,23,"PM 1 Done On",style);
		createCell(row,24,"PM 1 Done (Engineer Name)",style);
		createCell(row,25,"PM 1 Remarks",style);
		createCell(row,26,"SW Update",style);
		createCell(row,27,"PM Due Date",style);
		createCell(row,28,"PM 2 Status",style);
		createCell(row,29,"PM 2 Done On",style);
		createCell(row,30,"PM 2 Done (Engineer Name)",style);
		createCell(row,31,"PM 2 Remarks",style);
		createCell(row,32,"PM 3 Status",style);
		createCell(row,33,"PM 3 Done On",style);
		createCell(row,34,"PM 3 Done (Engineer Name)",style);
		createCell(row,35,"PM 3 Remarks",style);
		createCell(row,36,"PM 4 Status",style);
		createCell(row,37,"PM 4 Done On",style);
		createCell(row,38,"PM 4 Done (Engineer Name)",style);
		createCell(row,39,"PM 4 Remarks",style);
		createCell(row,40,"PM 5 Status",style);
		createCell(row,41,"PM 5 Done On",style);
		createCell(row,42,"PM 5 Done (Engineer Name)",style);
		createCell(row,43,"PM 5 Remarks",style);
		createCell(row,44,"PM 6 Status",style);
		createCell(row,45,"PM 6 Done On",style);
		createCell(row,46,"PM 6 Done (Engineer Name)",style);
		createCell(row,47,"PM 6 Remarks",style);
	}


	private void writeDataLines() {
		int rowCount=1;
		CellStyle style=workbook.createCellStyle();
		CreationHelper creationHelper=workbook.getCreationHelper();
		style.setDataFormat(creationHelper.createDataFormat().getFormat("yyyy-MM-dd"));
		XSSFFont font=(XSSFFont) workbook.createFont();
		font.setFontHeight(10);
//		font.setFamily(FontFamily.valueOf("Times New Roman"));
		style.setFont(font);
		
		for(FileEntity file:listFile) {
			
			System.out.println(sheet.getLastRowNum());
			Row row=sheet.createRow(rowCount++);
			System.out.println(row.getRowNum());
			int columnCount=0;
			createCell(row, columnCount++, file.getSrNo(), style);
			createCell(row, columnCount++, file.getCustomerName(), style);
			createCell(row, columnCount++, file.getCustomerCode(), style);
			createCell(row, columnCount++, file.getSiteName(), style);
			createCell(row, columnCount++, file.getSiteAddress(), style);
			createCell(row, columnCount++, file.getCity(), style);
			createCell(row, columnCount++, file.getState(), style);
			createCell(row, columnCount++, file.getLocalContactPersonName(), style);
			createCell(row, columnCount++, file.getLocalPersonContact(), style);
			createCell(row, columnCount++, file.getTypeOfCharger(), style);
			createCell(row, columnCount++, file.getModel(), style);
			createCell(row, columnCount++, file.getSerialNumber(), style);
			
			createCell(row, columnCount++, file.getDateOfInvoice(), style);
			createCell(row, columnCount++, file.getFinalInstallationStatus(), style);
			createCell(row, columnCount++, file.getInstallationStatus(), style);
			createCell(row, columnCount++, file.getCommissioningStatus(), style);
			createCell(row, columnCount++, file.getCommissionedBy(), style);
			createCell(row, columnCount++, file.getCommissioningDate(), style);
			createCell(row, columnCount++, file.getWarrantyAmcStatus(), style);
			createCell(row, columnCount++, file.getWarrantyAmcInMonth(), style);
			createCell(row, columnCount++, file.getWarrantyAmcValidityDate(), style);
			createCell(row, columnCount++, file.getpMFrequency(), style);
			
			createCell(row, columnCount++, file.getpM1Status(), style);
			createCell(row, columnCount++, file.getpM1DoneOn(), style);
			createCell(row, columnCount++, file.getpM1Done(), style);
			createCell(row, columnCount++, file.getpM1Remarks(), style);
			createCell(row, columnCount++, file.getsWUpdate(), style);
			createCell(row, columnCount++, file.getpMDueDate(), style);
			
			createCell(row, columnCount++, file.getpM2Status(), style);
			createCell(row, columnCount++, file.getpM2DoneOn(), style);
			createCell(row, columnCount++, file.getpM2Done(), style);
			createCell(row, columnCount++, file.getpM2Remarks(), style);
			
			createCell(row, columnCount++, file.getpM3Status(), style);
			createCell(row, columnCount++, file.getpM3DoneOn(), style);
			createCell(row, columnCount++, file.getpM3Done(), style);
			createCell(row, columnCount++, file.getpM3Remarks(), style);
			
			createCell(row, columnCount++, file.getpM4Status(), style);
			createCell(row, columnCount++, file.getpM4DoneOn(), style);
			createCell(row, columnCount++, file.getpM4Done(), style);
			createCell(row, columnCount++, file.getpM4Remarks(), style);
			
			createCell(row, columnCount++, file.getpM5Status(), style);
			createCell(row, columnCount++, file.getpM5DoneOn(), style);
			createCell(row, columnCount++, file.getpM5Done(), style);
			createCell(row, columnCount++, file.getpM5Remarks(), style);
			
			createCell(row, columnCount++, file.getpM6Status(), style);
			createCell(row, columnCount++, file.getpM6DoneOn(), style);
			createCell(row, columnCount++, file.getpM6Done(), style);
			createCell(row, columnCount++, file.getpM6Remarks(), style);
		}
	}
	
	public void export(HttpServletResponse response)throws IOException{
		writeHeaderLine();
		writeDataLines();
		
		ServletOutputStream outputStream=response.getOutputStream();
		workbook.write(outputStream);
		workbook.close();
		outputStream.close();
	}
}