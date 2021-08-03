package com.pratikshat.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.pratikshat.entity.FileEntity;

public interface FileService {

	void saveFile(MultipartFile file) throws IOException;

	Page<FileEntity> getFile(Pageable page);

	FileEntity saveRow(FileEntity fileEntity);

	void deleteRow(int srNo);

	FileEntity updateRow(int srNo, FileEntity file);

	FileEntity getFileById(int srNo);

	List<FileEntity> getFiles();

	List<FileEntity> getFileByName(String name);

}
