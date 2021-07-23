package com.pratikshat.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {

	void getFile(MultipartFile file) throws IOException;

}
