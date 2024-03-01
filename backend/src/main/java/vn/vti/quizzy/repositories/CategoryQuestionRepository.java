package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.CategoryGroup;
import vn.vti.quizzy.models.CategoryQuestion;

import java.util.Optional;

public interface CategoryQuestionRepository extends MongoRepository<CategoryQuestion, Long> {
    Optional<CategoryQuestion> findByName(String name);
}
