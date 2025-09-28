package com.example.library_management.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserUpdateRequest {
    String fullName;
    String email;
    String phoneNumber;
    LocalDate dateOfBirth;
    String gender;
    String job;
    String address;
    String image;
    Set<Integer> favoriteCategoryIds;
}
