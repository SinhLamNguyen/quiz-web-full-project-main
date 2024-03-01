package vn.vti.quizzy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.quizzy.jwt.JWTUtility;
import vn.vti.quizzy.models.User;
import vn.vti.quizzy.repositories.UserRepository;
import vn.vti.quizzy.security.PasswordEncoder;

@Service
public class AuthService {
    private final UserRepository userRepository;
    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String loginWithUsernameAndPassword(String username, String password) {
        System.out.println("Username:"+ username);
        User user = userRepository.findByUsername(username).orElse(null);
        assert user != null;
        System.out.println("Test_3:"+ user.toString());
        if (PasswordEncoder.getInstance().matches(password, user.getPassword())) {
            System.out.println("OK_1");
            return JWTUtility.getInstance().generateToken(username);
        }
        return null;
    }
}
