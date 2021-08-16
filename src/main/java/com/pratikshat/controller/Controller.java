package com.pratikshat.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.entity.LogInEntity;
import com.pratikshat.excel.ExcelExporter;
import com.pratikshat.repository.FileRepository;
import com.pratikshat.request.FileRequest;
import com.pratikshat.request.LoginRequest;
import com.pratikshat.response.LoginResponse;
import com.pratikshat.service.FileService;
import com.pratikshat.service.LoginService;
import com.pratikshat.util.LoginUtil;

@CrossOrigin(originPatterns = "*")
@RestController
public class Controller {
 
	@Autowired
	private FileService fileService;
	
	@Autowired
	private FileRepository fileRepository;
	
	@Autowired
	private LoginUtil loginUtil;
	
	@Autowired
	private LoginService loginService; 	
	
	@Autowired
	private AuthenticationManager authenticationManager;

	
	
	@Value("${download_path_location}")
	private Path path;
	
	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome to Home";
	}
	
	
	//Login API
	@PostMapping("/login")
	public ResponseEntity<?> generateToken(@RequestBody LoginRequest loginRequest) throws Exception {
		System.out.println(loginRequest.getUsername()+" "+loginRequest.getPassword());
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Incorrect Username");
		}catch(BadCredentialsException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials");
		}
		
		UserDetails login=	this.loginService.loadUserByUsername(loginRequest.getUsername());
			String token=this.loginUtil.generateToken(login);
			System.out.println("JWT "+token);
			return ResponseEntity.ok(token);
	}
	
	
	@DeleteMapping("/deleteAll")
	public void deleteAll() {
		fileRepository.deleteAll();
	}
	
	@PostMapping("/file")
	public void saveFile(@RequestParam("file") MultipartFile file) throws IOException {
		fileService.saveFile(file);
	}

	@GetMapping("/filess")
	public List<FileEntity> getFiles(){
		return fileService.getFiles();
	}
	
	@GetMapping("/files")
	public Page<FileEntity> getFile(Pageable page) {
		return fileService.getFile(page);
	}

	@PostMapping("/files")
	public FileEntity saveRow(@RequestBody FileEntity fileEntity) {
		return fileService.saveRow(fileEntity);
	}

	@DeleteMapping("/files/{id}")
	public void deleteRow(@PathVariable("id") int srNo) {
		fileService.deleteRow(srNo);

	}

	@PutMapping("/files/{id}")
	public FileEntity updateRow(@PathVariable("id") int srNo, @RequestBody FileEntity file) {
		return fileService.updateRow(srNo, file);
	}

	@GetMapping("/files/{id}")
	public FileEntity getFileById(@PathVariable("id") int srNo) {
		return fileService.getFileById(srNo);
	}
	

	@GetMapping("/filter/word")
	public Page<FileEntity> getFileByKeyword(@RequestParam("keyword") String keyword,Pageable page) {
		if(keyword!=null && !keyword.equalsIgnoreCase("")) {
			System.out.println("Haa");
			return  fileService.getFileByKeyword(keyword,page);
		}else {
			System.out.println("Hee");
			return fileService.getFile(page);
		}
	}

	@GetMapping("/download")
	public void downloadFile(String fileName, HttpServletResponse response) throws Exception {
		response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
		response.getOutputStream().write(contentOf(fileName));
	}

	private byte[] contentOf(String fileName) throws Exception {
		return Files.readAllBytes(path);
	}
	
	@GetMapping("/filter/customerName")
	public Page<FileEntity> getFileByCustomerName(@RequestParam("customerName") String customerName,Pageable pageable ){
		return this.fileService.getFileByCustomerName(customerName,pageable);
	}
	
	@GetMapping("/filter/customerCode")
	public Page<FileEntity> getFileByCustomerCode(@RequestParam("customerCode") String customerCode,Pageable pageable){
		return this.fileService.getFileByCustomerCode(customerCode,pageable);
	}
	
	@GetMapping("/filter/siteName/")
	public Page<FileEntity> getFileBySiteName(@RequestParam("siteName") String siteName,Pageable pageable){
		return this.fileService.getFileBySiteName(siteName,pageable);
	}
	
	@GetMapping("/filter/siteAddress/")
	public Page<FileEntity> getFileBySiteAddress(@RequestParam("siteAddress") String siteAddress  ,Pageable pageable){
		return this.fileService.getFileBySiteAddress(siteAddress ,pageable);
	}
	@GetMapping("/filter/city/")
	public Page<FileEntity> getFileByCity(@RequestParam("city") String city ,Pageable pageable){
		return this.fileService.getFileByCity(city ,pageable);
	}
	
	@GetMapping("/filter/state/")
	public Page<FileEntity> getFileByState(@RequestParam("state") String state ,Pageable pageable){
		return this.fileService.getFileByState(state ,pageable);
	}
	
	@GetMapping("/filter/localContactPersonName/")
	public Page<FileEntity> getFileByLocalContactPersonName(@RequestParam("localContactPersonName") String localContactPersonName ,Pageable pageable){
		return this.fileService.getFileByLocalContactPersonName(localContactPersonName ,pageable);
	}
	
	@GetMapping("/filter/localPersonContact/")
	public Page<FileEntity> getFileByLocalPersonContact(@RequestParam("localPersonContact") String localPersonContact ,Pageable pageable){
		return this.fileService.getFileByLocalPersonContact(localPersonContact ,pageable);
	}
	
	@GetMapping("/filter/typeOfCharger/")
	public Page<FileEntity> getFileByTypeOfCharger(@RequestParam("typeOfCharger") String typeOfCharger ,Pageable pageable){
		return this.fileService.getFileByTypeOfCharger(typeOfCharger ,pageable );
	}
	
	@GetMapping("/filter/model/")
	public Page<FileEntity> getFileByModel(@RequestParam("model") String model ,Pageable pageable){
		return this.fileService.getFileByModel(model ,pageable);
	}
	
	@GetMapping("/filter/serialNumber/")
	public Page<FileEntity> getFileBySerialNumber(@RequestParam("serialNumber") String serialNumber ,Pageable pageable){
		return this.fileService.getFileBySerialNumber(serialNumber ,pageable);
	}
	
	@GetMapping("/filter/finalInstallationStatus/")
	public Page<FileEntity> getFileByFinalInstallationStatus(@RequestParam("finalInstallationStatus") String finalInstallationStatus ,Pageable pageable){
		return this.fileService.getFileByFinalInstallationStatus(finalInstallationStatus ,pageable);
	}
	
	@GetMapping("/filter/installationStatus/")
	public Page<FileEntity> getFileByInstallationStatus(@RequestParam("installationStatus") String installationStatus ,Pageable pageable){
		return this.fileService.getFileByInstallationStatus(installationStatus ,pageable);
	}
	
	@GetMapping("/filter/commissioningStatus/")
	public Page<FileEntity> getFileByCommissioningStatus(@RequestParam("commissioningStatus") String commissioningStatus ,Pageable pageable){
		return this.fileService.getFileByCommissioningStatus(commissioningStatus ,pageable);
	}
	
	@GetMapping("/filter/commissionedBy/")
	public Page<FileEntity> getFileByCommissionedBy(@RequestParam("commissionedBy") String commissionedBy ,Pageable pageable){
		return this.fileService.getFileByCommissionedBy(commissionedBy,pageable);
	}
	
	//Export file API
	
	@GetMapping("/report")
	public void excelReport(HttpServletResponse response)throws IOException{
		response.setContentType("application/octet-stream");
		String headerKey="content-Disposition";
		String headerValue="attachment; filename=PM TRACKER.xlsx";
		
		response.setHeader(headerKey, headerValue);
		List<FileEntity> listFile=fileRepository.findAll();
		ExcelExporter exp=new ExcelExporter(listFile);
		exp.export(response);
	}
	
	//Advance Search API
	
	@GetMapping("/advance")
	public List<Map<String, Object>> advanceSearch(@RequestBody Map<String, Object> searchKey, Pageable pageable){
		return fileService.advanceSearch(searchKey,pageable);
		
	}
	
	
}
