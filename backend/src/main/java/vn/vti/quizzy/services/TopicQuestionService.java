package vn.vti.quizzy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.quizzy.database.SequenceGeneratorService;
import vn.vti.quizzy.models.TopicQuestion;
import vn.vti.quizzy.models.User;
import vn.vti.quizzy.repositories.TopicQuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TopicQuestionService {
    private final TopicQuestionRepository topicQuestionRepository;
    private final SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    public TopicQuestionService(TopicQuestionRepository topicQuestionRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.topicQuestionRepository = topicQuestionRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }
    public List<TopicQuestion> findAllTopicQuestion() {
        return topicQuestionRepository.findAll();
    }

    public TopicQuestion findTopicQuestionById(Long id) {
        if (topicQuestionRepository.findById(id).isPresent()) {
            System.out.println("FindbyID:" + id);
            return topicQuestionRepository.findById(id).get();
        }
        return null;
    }
    public TopicQuestion createTopicQuestion(TopicQuestion topicQuestion) {
        long _id = sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME);
        topicQuestion.setId(_id);
        topicQuestion.setStatus(1);
        return topicQuestionRepository.insert(topicQuestion);
    }

    public TopicQuestion updateTopicQuestion(TopicQuestion updatedTopicQuestion) {
        Long id = updatedTopicQuestion.getId();
        Optional<TopicQuestion> existingTopicQuestion = topicQuestionRepository.findById(id);
        if (existingTopicQuestion.isPresent()) {
            TopicQuestion topicQuestion = existingTopicQuestion.get();
            topicQuestion.setQuestionList(updatedTopicQuestion.getQuestionList());
            topicQuestion.setName(updatedTopicQuestion.getName());
            topicQuestion.setNumberQuestion(updatedTopicQuestion.getNumberQuestion());
            topicQuestion.setCategoryQuestionID(updatedTopicQuestion.getCategoryQuestionID());
            // Update other fields if needed
            return topicQuestionRepository.save(topicQuestion);
        } else {
            throw new IllegalArgumentException("Topic question not found with id: " + id);
        }
    }

    public boolean deleteTopicQuestion(Long id) {
        TopicQuestion existingTopicQuestion = findTopicQuestionById(id);
        if (existingTopicQuestion != null) {
            topicQuestionRepository.delete(existingTopicQuestion);
            return true;
        }
        return false;
    }
}
