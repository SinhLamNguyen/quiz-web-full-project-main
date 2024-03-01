package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.vti.quizzy.models.User;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends MongoRepository<User, Long> {
        Optional<User> findByUsername(String username);
        List<User> findByStatus(int status);
}
