package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.Question;

public interface QuestionRepository extends MongoRepository<Question, Long> {
}
