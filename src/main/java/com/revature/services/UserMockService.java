package com.revature.services;

import com.revature.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserMockService {

    private final List<User> userList = new ArrayList<>();

    public UserMockService() {
        userList.add(new User(3, "Mia", "Jones", "jones@gmail.com", "mia123", 1988-04-13, false));
        userList.add(new User(4, "Megan", "Smith", "Smith@gmail.com", "megan345", 1992-05-21, true));
        userList.add(new User(5, "Gerald", "Rivia", "Rivia@gmail.com", "gerald567", 1995-09-01, false));
        userList.add(new User(6, "Leon", "Kennedy", "Kennedy@gmail.com", "leon123", 1978-06-09, false));
    }

    public List<User> getAllUsers() {
        return userList;
    }

    public void addNewUser(User newUser) {
        int maxUser_id = 0;
        for (User user: userList){
            if (User.getUser_id()>0) {
                maxUser_id = user.getUser_id();
            }
        }
        newUser.setUser_id(++maxUser_id);
        userList.add(newUser);
    }

    public List<User> getUsersByLast_name(String name){
        List<User> filteredUsers = new ArrayList<>();
        for (User user : userList){
            if(user.getLast_name()!=null && user.getLast_name().equals(user.getLast_name())) {
                filteredUsers.add(user);
            }
        }
        return filteredUsers;
    }
}
