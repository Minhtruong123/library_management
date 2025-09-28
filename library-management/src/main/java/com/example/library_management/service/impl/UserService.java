package com.example.library_management.service.impl;

import com.example.library_management.dto.request.UserUpdateRequest;
import com.example.library_management.dto.response.UserResponse;
import com.example.library_management.enums.Gender;
import com.example.library_management.model.Category;
import com.example.library_management.model.User;
import com.example.library_management.repository.ICategoryRepository;
import com.example.library_management.repository.IUserRepository;
import com.example.library_management.service.IUserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class UserService implements IUserService {
    @Autowired
    IUserRepository userRepository;
    @Autowired
    ICategoryRepository categoryRepository;
    @Override
    public UserResponse getUserByUserName(String username) {
        return new UserResponse(userRepository.findUserByUsername(username));
    }

    @Override
    public Optional<UserResponse> getUserById(Integer id) {
        return userRepository.findById(id).map(UserResponse::new);
    }

    @Override
    public UserResponse updateUser(Integer id, UserUpdateRequest newUser) {
        return userRepository.findById(id).map(user -> {
            user.setFullName(newUser.getFullName());
            user.setEmail(newUser.getEmail());
            user.setPhoneNumber(newUser.getPhoneNumber());
            user.setDateOfBirth(newUser.getDateOfBirth());
            user.setJob(newUser.getJob());
            user.setAddress(newUser.getAddress());
            user.setImage(newUser.getImage());
            user.setGender(Gender.valueOf(newUser.getGender().toUpperCase()));
            if (newUser.getFavoriteCategoryIds() != null) {
                Iterable<Category> categories = categoryRepository.findAllById(newUser.getFavoriteCategoryIds());
                user.setFavoriteCategories(new HashSet<>( (Collection<Category>) categories ));
            }
            return new UserResponse(userRepository.save(user));
        }).orElseThrow(() -> new RuntimeException("User không tồn tại!"));
    }
}
