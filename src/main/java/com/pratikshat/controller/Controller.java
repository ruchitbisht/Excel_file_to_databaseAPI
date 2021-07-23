package com.pratikshat.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.service.FileService;

@RestController
public class Controller {
	
	@Autowired
	FileService fileService;
	
	@PostMapping("/file")
	public void getFile(@RequestParam("file") MultipartFile file) throws IOException {
		fileService.getFile(file);
		
	}
	
}
