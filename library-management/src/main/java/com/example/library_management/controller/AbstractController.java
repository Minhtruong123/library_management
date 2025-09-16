package com.example.library_management.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping()
public class AbstractController {
    public <T> ResponseEntity<T> ok(T data){
        return ResponseEntity.ok(data);
    }
    public ResponseEntity<Void> noContent(){
        return ResponseEntity.noContent().build();
    }
}
