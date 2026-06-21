package com.example.test;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AppTest {

    @BeforeEach
    void setUp() {
        System.out.println("Setup");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Teardown");
    }

    @Test
    void testAddition() {
        assertEquals(5, 2 + 3);
    }
}