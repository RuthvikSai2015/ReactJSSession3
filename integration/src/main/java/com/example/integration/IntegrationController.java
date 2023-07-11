package com.example.integration;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class IntegrationController {
    @CrossOrigin
    @GetMapping("/hello")
    public String hello(@RequestParam (value="name", defaultValue = "reactjs") String name){

        return String.format("hello %s",name);
    }
}
