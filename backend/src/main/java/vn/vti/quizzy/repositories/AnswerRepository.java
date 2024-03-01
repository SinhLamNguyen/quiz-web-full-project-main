package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.Answer;

import java.util.List;

public interface AnswerRepository extends MongoRepository<Answer, Long> {
    List<Answer> findByQuestionId(Long questionId);
}
