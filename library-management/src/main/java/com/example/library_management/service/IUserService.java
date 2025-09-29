package com.example.library_management.service;

import com.example.library_management.dto.request.UserUpdateRequest;
import com.example.library_management.dto.response.UserResponse;
import com.example.library_management.model.User;

import java.util.Optional;

public interface IUserService {
    UserResponse getUserByUserName(String username);
    Optional<UserResponse> getUserById(Integer id);
    UserResponse updateUser(String username, UserUpdateRequest user);
}
