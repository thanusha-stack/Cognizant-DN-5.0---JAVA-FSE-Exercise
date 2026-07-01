package com.example;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class LoginTest {

    Login login = new Login();

    @Test
    public void testValidLogin() {
        assertTrue(login.validate("admin", "admin123"));
    }

    @Test
    public void testInvalidUsername() {
        assertFalse(login.validate("user", "admin123"));
    }

    @Test
    public void testInvalidPassword() {
        assertFalse(login.validate("admin", "password"));
    }

    @Test
    public void testInvalidUsernameAndPassword() {
        assertFalse(login.validate("user", "password"));
    }
}