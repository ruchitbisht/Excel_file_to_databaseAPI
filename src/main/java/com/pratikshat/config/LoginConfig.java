package com.pratikshat.config;

import org.hibernate.StatelessSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.pratikshat.service.LoginService;


@Configuration
@EnableWebSecurity
public class LoginConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private LoginFilter loginFilter;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests().antMatchers("/","/**.woff2","/**.ttf","/**.js","/**.css","/assets/**","/assets/**","/assets/**.jpg","/v2/api-docs","/swagger-resources/configuration/ui", 
					"/swagger-resources", "/swagger-resources/configuration/security","/swagger-ui.html","/webjars/**","/api/login",
					"/manifest.webmanifest","/ngsw.json","/index.html").permitAll()
			.antMatchers(HttpMethod.POST,"/login").permitAll()
			.anyRequest().authenticated();
		
		http.addFilterBefore(loginFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(loginService);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}	
	
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManager();
	}

	
}
