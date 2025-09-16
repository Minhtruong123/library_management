package com.example.library_management.service;

import com.example.library_management.dto.request.RegisterRequest;
import com.example.library_management.dto.response.UserResponse;

public interface IAuthenticationService {
    UserResponse findUserByUsername(String userName);
    UserResponse createUser(RegisterRequest request);
}
