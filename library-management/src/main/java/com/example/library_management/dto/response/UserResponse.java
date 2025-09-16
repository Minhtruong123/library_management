package com.example.library_management.dto.response;

import com.example.library_management.enums.MembershipType;
import com.example.library_management.model.Role;
import com.example.library_management.model.User;
import lombok.*;
import lombok.experimental.FieldDefaults;

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
    MembershipType membershipType;
    LocalDateTime createdAt;
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
        this.roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
}
