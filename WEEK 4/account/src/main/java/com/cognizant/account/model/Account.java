package com.cognizant.account.model;

public class Account {

	private String number;
	private String type;
	private Double balance;
	
	public Account() {}
	
	public Account(String number, String type, Double balance) {
		this.number = number;
		this.type = type;
		this.balance = balance;
	}


	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}
	
	
	
	
	
	
	
}
