package com.revature.services;

import com.revature.models.Claim;
import com.revature.models.User;
import com.revature.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ClaimService {

@Autowired
private ClaimRepository repository;

  public ClaimService() {

    }

    public List<Claim> getAllClaims() {
        return repository.findAll();
    }

    public Claim addNewClaim(Claim newClaim) {
    return repository.save(newClaim);
  }
  public List<Claim> getClaimByStatus(String status){
      return repository.getClaimByStatus(status);
  }
  public List<Claim> getClaimByUser(User user){
      return repository.getClaimByUser(user);
  }



  public Optional<Claim> getClaimById(int claimId) {
      return repository.findById(claimId);
  }

}
