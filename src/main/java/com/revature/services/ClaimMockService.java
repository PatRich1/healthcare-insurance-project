package com.revature.services;

import com.revature.models.Claim;

import java.util.ArrayList;
import java.util.List;

public class ClaimMockService {

    private final List<Claim> claimList = new ArrayList<>();

    public ClaimMockService() {
        claimList.add(new Claim(1, "Ear Infection",900.00 , 2022-02-15, 3, "pending"));
        claimList.add(new Claim(2, "Emergency Care", 1200.00, 2022-03-01, 4, "denied"));
        claimList.add(new Claim(3, "Orthopedic Back Pain", 1200.00, 2022-02-21, 6, "pending"));
        claimList.add(new Claim(4, "LabCorp MRI", 800.00, 2022-03-09, 5, "approved"));
    }

    public List<Claim> getAllClaims() {
        return claimList;
    }

    public void addNewClaim() {
        int maxClaim_id = 0;
        for (Claim claim: claimList){
            if (claim.getClaim_id()>0) {
                maxClaim_id = claim.getClaim_id();
            }
        }
        newClaim.setClaim_id(++maxClaim_id);
        claimList.add(new Claim());
    }

    public Claim getClaimById(int id) {
        for (Claim claim: claimList){
            if (claim.getClaim_id()==id){
                return claim;
            }
        }
        return null;
    }
}
