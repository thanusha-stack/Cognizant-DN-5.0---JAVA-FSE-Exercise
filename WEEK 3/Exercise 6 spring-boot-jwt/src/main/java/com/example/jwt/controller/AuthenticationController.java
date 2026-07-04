package com.example.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.model.JwtResponse;
import com.example.jwt.util.JwtUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public JwtResponse authenticate(Authentication authentication) {

        String username = authentication.getName();

        String token = jwtUtil.generateToken(username);

        return new JwtResponse(token);
    }
}