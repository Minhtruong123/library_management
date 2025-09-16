package com.example.library_management.model;

import com.example.library_management.dto.request.RegisterRequest;
import com.example.library_management.enums.MembershipType;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String username;
    String fullName;
    @Column(unique = true, nullable = false)
    String email;
    String phoneNumber;
    String password;
    LocalDateTime createdAt=LocalDateTime.now();;
    boolean active = true;
    @Enumerated(EnumType.STRING)
    MembershipType membershipType;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    Set<Role> roles;

    public User(RegisterRequest request,  Set<Role> defaultRoles){
        setUsername(request.getUsername());
        setFullName(request.getFullName());
        setEmail(request.getEmail());
        setPassword(request.getPassword());
        setPhoneNumber(request.getPhoneNumber());
        setRoles(defaultRoles);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toSet());
    }

    @Override
    public boolean isAccountNonExpired()  {
        return true;
    }

    @Override
    public boolean isAccountNonLocked()  {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired()  {
        return true;
    }

    @Override
    public boolean isEnabled()  {
        return true;
    }
}
