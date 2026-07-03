package com.cognizant.spring_learn;

public class Country {
	
	private String code;
	private String name;
	
	public Country() {
		System.out.println("Inside Country Constructor");
	}
	
	public Country(String code,String name) {
		this.code=code;
		this.name=name;
	}
	public String getCode() {
		System.out.print("Inside Country Code Getter");
		return code;
	}
	public void setCode(String code) {
		System.out.print("Inside Country Code Setter");
		this.code = code;
	}
	public String getName() {
		System.out.print("Inside Country Name Getter");
		return name;
	}
	public void setName(String name) {
		System.out.print("Inside Country Name Setter");
		this.name = name;
	}

	@Override
	public String toString() {
		return "Country [code=" + code + ", name=" + name + "]";
	}
	
}
