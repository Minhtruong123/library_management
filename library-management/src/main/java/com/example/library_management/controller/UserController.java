package com.example.library_management.controller;

import com.example.library_management.dto.request.UserUpdateRequest;
import com.example.library_management.model.User;
import com.example.library_management.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController extends AbstractController{
    @Autowired
    private UserService userService;
    @GetMapping("")
    public ResponseEntity<?> getCurrentUser(Authentication authentication){
        String username = authentication.getName();
        return ResponseEntity.ok(userService.getUserByUserName(username));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id,
                                        @RequestBody UserUpdateRequest user){
        return ResponseEntity.ok(userService.updateUser(id, user));
    }
}
