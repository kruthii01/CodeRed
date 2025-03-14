package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.User;
import repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);  // Create a new user
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);  // Fetch user by email
    }
}




