package com.example;

public class Login {

    public boolean validate(String username, String password) {

        if (username.equals("admin") && password.equals("admin123")) {
            return true;
        }

        return false;
    }
}