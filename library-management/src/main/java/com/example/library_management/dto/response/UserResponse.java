package com.example.library_management.dto.response;

import com.example.library_management.enums.Gender;
import com.example.library_management.enums.MembershipType;
import com.example.library_management.model.Role;
import com.example.library_management.model.User;
import com.example.library_management.model.Category;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    Integer id;
    String username;
    String fullName;
    String email;
    String phoneNumber;
    boolean active;
    LocalDate dateOfBirth;
    Gender gender;
    String job;
    String address;
    Set<String> favoriteCategories;
    MembershipType membershipType;
    LocalDateTime createdAt;
    String image;
    Set<String> roles;

    public UserResponse(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.fullName = user.getFullName();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.active = user.isActive();
        this.membershipType = user.getMembershipType();
        this.createdAt = user.getCreatedAt();
        this.dateOfBirth = user.getDateOfBirth();
        this.gender = user.getGender();
        this.job = user.getJob();
        this.address = user.getAddress();
        this.favoriteCategories = user.getFavoriteCategories()
                .stream()
                .map(Category::getName)
                .collect(Collectors.toSet());
        this.roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
}
