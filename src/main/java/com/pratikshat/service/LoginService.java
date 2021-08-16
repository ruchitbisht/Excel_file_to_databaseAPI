package com.pratikshat.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pratikshat.entity.LogInEntity;
import com.pratikshat.repository.LoginRepository;

@Service
public class LoginService implements UserDetailsService {

	@Autowired
	LoginRepository loginRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		LogInEntity user= loginRepository.findByUsername(username);
		if(user.equals(null)) {
			throw new UsernameNotFoundException(username);
		}
		return new User(user.getUsername(),user.getPassword(),new ArrayList<>());
		
	}

	
}
