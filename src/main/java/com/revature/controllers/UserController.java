package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserMockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user-app")
public class UserController {

    @Autowired
    UserMockService userMockService;

    // we want to tie the get all user functionality to GET /users
    // we can annotate a handler method to that
    //@RequestMapping(method = RequestMethod.GET, value = "/users")
    @GetMapping("/users")
    @ResponseBody
    public List<User> getUserHandler(@RequestParam(required = false, value = "last_name") String last_nameParam) {
        System.out.println("Last_nameParameter: " + last_nameParam);
        if(last_nameParam==null){ //GET /users
            return userMockService.getAllUsers();
        } else { //GET /users?name=...
            return userMockService.getUsersByLast_name(last_nameParam);
        }
    }

    @PostMapping("/users")
    @ResponseBody
    //@Request uses jackson to map JSON data in request into a Customer Object
    public String addNewUser(@RequestBody User newUser){
        System.out.println("We got a user object: "+newUser);
        //once we have an email and password we can create a new User and add it to the list.
        userMockService.addNewUser(newUser);
        return "you added a new user email " + newUser.getEmail();
    }



   //@RequestMapping(method = RequestMethod.GET, value = "/hello")
// Ping test function
//    @GetMapping("/hello")
//    @ResponseBody //return of the method is written to the HTTP response body
//    public String helloWorldHandler(){
//        return "Hello World";
//    }
}
