package com.mghaas.portfoliobackend.core.domain.user.dto;

import com.mghaas.portfoliobackend.core.domain.user.UserRole;

public record UserRegisterRequest(String username, String password, UserRole role) {
}
