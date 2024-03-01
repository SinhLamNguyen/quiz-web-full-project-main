package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.TopicQuestion;

public interface TopicQuestionRepository extends MongoRepository<TopicQuestion, Long> {
}
