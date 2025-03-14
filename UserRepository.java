package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Role;
import model.User;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {

    // Find a user by their email
    User findByEmail(String email);

    // Find users by their role
    List<User> findByRole(Role role);

    // Check if a user exists by email
    boolean existsByEmail(String email);

    // Find users by part of their name
    List<User> findByNameContaining(String name);
}

