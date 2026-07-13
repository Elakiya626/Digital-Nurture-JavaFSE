package com.cognizant.greetservice.service;

import org.springframework.stereotype.Service;

@Service
public class GreetService {

    public String getGreeting() {
        return "Hello World!";
    }
}