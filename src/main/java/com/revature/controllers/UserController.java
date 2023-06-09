package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/user-app")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping("/users")
  public List<User> getUsers(@RequestParam(required = false, value = "firstName") String firstNameParam, @RequestParam(required = false, value = "lastName")String lastNameParam){
    System.out.println(firstNameParam+lastNameParam);
    if(firstNameParam == null && lastNameParam == null){
      return userService.getAllUsers();
    } else {
      return userService.getUsersByFirstNameAndLastName(firstNameParam, lastNameParam);
    }
  }

    @GetMapping("/users/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") int idParam){
    return userService.getUserById(idParam);

    }


    @PostMapping("/users")
    public User addNewUser(@RequestBody User newUser){
        System.out.println(newUser);
        return userService.addNewUser(newUser);
    }




}
