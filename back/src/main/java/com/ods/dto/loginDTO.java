package com.ods.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class loginDTO {
	
	@JsonProperty("user")
	private String user;
	@JsonProperty("password")
	private String password;
	
	public loginDTO(String user, String password) {
		super();
		this.user = user;
		this.password = password;
	}
	@Override
	public String toString() {
		return "loginDTO [user=" + user + ", password=" + password + "]";
	}

	
	
}
