package com.revature.repository;

import com.revature.models.Claim;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim, Integer> {
    List<Claim> getClaimByStatus(String status);
    List<Claim> getClaimByUser(User user);
}
