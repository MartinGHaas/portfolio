package com.mghaas.portfoliobackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class DefaultController {

    @GetMapping("helloWorld")
    public ResponseEntity<String> helloWorld() {
        return ResponseEntity.ok("hello world!");
    }
}
