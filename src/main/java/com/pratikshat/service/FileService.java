package com.pratikshat.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;

public interface FileService {

	void saveFile(MultipartFile file) throws IOException;

	List<FileEntity> getFile();

}
