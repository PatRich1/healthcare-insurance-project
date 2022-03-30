package com.revature.controllers;


import com.revature.models.Claim;
import com.revature.services.ClaimMockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/claim-app")
public class ClaimController {

    @Autowired
    ClaimMockService claimMockService;


    @GetMapping("/claims/{id}")
    public Claim getClaimById(@PathVariable("id") int idParam){
        return claimMockService.getClaimById(idParam);
    }

    @PostMapping("/claims")
    public String addNewClaim(@RequestBody Claim newClaim) {
        System.out.println("We got a claim object: "+newClaim);
        
        claimMockService.addNewClaim(newClaim);
        return "you added a new claim: "+ newClaim.getClaim_id();
    }
}
