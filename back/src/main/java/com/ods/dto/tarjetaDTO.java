package com.ods.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class tarjetaDTO {

	@JsonProperty("answer")
	private String answer;
	@JsonProperty("question")
	private String question;
	
	public tarjetaDTO(String answer, String question) {
		super();
		this.answer = answer;
		this.question = question;
	}
	
	@Override
	public String toString() {
		return "tarjetaDTO [answer=" + answer + ", question=" + question + "]";
	}
	
	
	
}
