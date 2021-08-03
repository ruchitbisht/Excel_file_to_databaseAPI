package com.pratikshat.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;
import com.pratikshat.service.FileService;

@CrossOrigin(originPatterns = "*")
@RestController
public class Controller {

	@Autowired
	FileService fileService;

	@PostMapping("/file")
	public void saveFile(@RequestParam("file") MultipartFile file) throws IOException {
		fileService.saveFile(file);
	}

	@GetMapping("/filess")
	public List<FileEntity> getFiles(){
		return fileService.getFiles();
	}
	
	@GetMapping("/files")
	@CrossOrigin(origins = "http://localhost:4200")
	public Page<FileEntity> getFile(Pageable page) {
		return fileService.getFile(page);
	}

	@PostMapping("/files")
	@CrossOrigin(origins = "http://localhost:4200")
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
	
	@GetMapping("/filter/name/{name}")
	public List<FileEntity> getFileByName(@PathVariable("name") String name) {
		return fileService.getFileByName(name);
	}

	@GetMapping("/download")
	public void downloadFile(String fileName, HttpServletResponse response) throws Exception {
		response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
		response.getOutputStream().write(contentOf(fileName));
	}

	private byte[] contentOf(String fileName) throws Exception {
		return Files.readAllBytes(Paths.get(getClass().getClassLoader().getResource(fileName).toURI()));
	}
}
