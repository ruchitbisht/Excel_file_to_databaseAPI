package com.pratikshat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.pratikshat.entity.LogInEntity;

@Repository
public interface LoginRepository extends JpaRepository<LogInEntity, String> {
	
	LogInEntity findByUsername(String username);

}
