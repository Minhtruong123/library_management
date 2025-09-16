package com.example.library_management.controller;

import com.example.library_management.dto.request.LoginRequest;
import com.example.library_management.dto.request.RegisterRequest;
import com.example.library_management.dto.response.JwtResponse;
import com.example.library_management.dto.response.UserResponse;
import com.example.library_management.security.JwtUtil;
import com.example.library_management.service.impl.AuthenticationService;
import com.example.library_management.service.impl.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController extends AbstractController{
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private CustomUserDetailService userDetailsService;
    @Autowired
    private AuthenticationService authenticationService;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        return ok(authenticationService.createUser(request));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        UserResponse user;
        try {
            user = authenticationService.findUserByUsername(request.getUsername());
        } catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai ten dang nhap");
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
        } catch (BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai mat khau");
        } catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("Authentication failed", e);
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = jwtUtil.generateToken(userDetails);
        return ok(new JwtResponse(token, user));
    }
}
