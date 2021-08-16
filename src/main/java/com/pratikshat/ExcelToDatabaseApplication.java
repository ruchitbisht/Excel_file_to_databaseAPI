package com.pratikshat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.pratikshat.entity.LogInEntity;
import com.pratikshat.repository.LoginRepository;

@SpringBootApplication
public class ExcelToDatabaseApplication implements CommandLineRunner  {

	@Autowired
	LoginRepository loginRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ExcelToDatabaseApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
			long counter=loginRepository.count();
		if(counter==0) {
			LogInEntity logInEntity =new LogInEntity();
			String username="ruchit";
			String password ="ruchit@123";
			logInEntity.setUsername(username);
			logInEntity.setPassword(password);
			loginRepository.save(logInEntity);
			}
	}
	
}
