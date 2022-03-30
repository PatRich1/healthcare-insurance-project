package com.revature.models;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;
@Entity
@Table(name = "claims")
public class Claim {
    @Id
   // @GeneratedValue(strategy = GenerationType.AUTO)
    private int claim_id;
    @Column
    private String description;
    private double amount;
    private LocalDate date;
    @ManyToOne
    private User user;
    private String status;


    public Claim() {
    }
    public Claim(int claim_id, String description, double amount, LocalDate date, User user, String status){
        this.claim_id = claim_id;
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.user = user;
        this.status = status;
    }


    public int getClaim_id() {
        return claim_id;
    }

    public void setClaim_id(int claim_id) {
        this.claim_id = claim_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setIs_approved(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Claim claim = (Claim) o;
        return claim_id == claim.claim_id && Objects.equals(description, claim.description) && Objects.equals(amount, claim.amount) && Objects.equals(date, claim.date) && Objects.equals(status, claim.status) && Objects.equals(user, claim.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(claim_id, description, amount, date, status, user);
    }

    @Override
    public String toString() {
        return "Claim{" +
                "claim_id=" + claim_id +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", status=" + status +
                ", user=" + user +
                '}';
    }
}
