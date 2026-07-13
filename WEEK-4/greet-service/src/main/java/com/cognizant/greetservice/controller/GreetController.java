package com.cognizant.greetservice.controller;

import com.cognizant.greetservice.service.GreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetController {

    @Autowired
    private GreetService greetService;

    @GetMapping("/greet")
    public String greet() {
        return greetService.getGreeting();
    }
}