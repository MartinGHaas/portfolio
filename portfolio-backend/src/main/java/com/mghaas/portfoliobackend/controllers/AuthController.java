package com.mghaas.portfoliobackend.controllers;

import com.mghaas.portfoliobackend.core.domain.user.User;
import com.mghaas.portfoliobackend.core.domain.user.dto.UserLoginRequest;
import com.mghaas.portfoliobackend.core.domain.user.dto.UserLoginResponse;
import com.mghaas.portfoliobackend.core.domain.user.dto.UserRegisterRequest;
import com.mghaas.portfoliobackend.core.repositories.UserRepository;
import com.mghaas.portfoliobackend.infra.security.TokenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthController(
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            TokenService tokenService
    ) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    @PostMapping("login")
    public ResponseEntity<UserLoginResponse> login(
            @RequestBody UserLoginRequest req
    ) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(req.username(), req.password());
        var auth = authenticationManager.authenticate(usernamePassword);
        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new UserLoginResponse(token));
    }

    @PostMapping("register")
    public ResponseEntity<Void> register(
            @RequestBody UserRegisterRequest req
    ) {
        if (userRepository.findByUsername(req.username()) != null) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(req.password());
        userRepository.save(new User(req.username(), encryptedPassword, req.role()));

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}