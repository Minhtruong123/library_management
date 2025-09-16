package com.example.library_management.service.impl;

import com.example.library_management.dto.request.RegisterRequest;
import com.example.library_management.dto.response.UserResponse;
import com.example.library_management.model.User;
import com.example.library_management.repository.IRoleRepository;
import com.example.library_management.repository.IUserRepository;
import com.example.library_management.service.IAuthenticationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.library_management.model.Role;

import java.util.Set;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class AuthenticationService implements IAuthenticationService {
    @Autowired
    IUserRepository userRepository;
    @Autowired
    IRoleRepository roleRepository;
    @Override
    public UserResponse findUserByUsername(String userName) {
        User user = userRepository.findUserByUsername(userName);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        return new UserResponse(user);
    }

    @Override
    public UserResponse createUser(RegisterRequest request) {
        Role userRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Role USER not found"));

        Set<Role> defaultRoles = Set.of(userRole);

        User user = new User(request, defaultRoles);

        userRepository.save(user);

        return new UserResponse(user);
    }
}
