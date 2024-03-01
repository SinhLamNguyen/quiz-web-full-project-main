package vn.vti.quizzy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.quizzy.database.SequenceGeneratorService;
import vn.vti.quizzy.models.Question;
import vn.vti.quizzy.models.User;
import vn.vti.quizzy.repositories.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    public QuestionService(QuestionRepository questionRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.questionRepository = questionRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }
    public List<Question> findAllQuestions() {
        List<Question> questionList = questionRepository.findAll();
        return questionList;
    }

    public Question findQuestionById(Long id) {
        if (questionRepository.findById(id).isPresent()) {
            System.out.println("FindbyID:" + id);
            return questionRepository.findById(id).get();
        }
        return null;
    }

    public Question createQuestion(Question question) {
        long _id = sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME);
        question.setId(_id);
        question.setStatus(1);
        return questionRepository.insert(question);
    }

    public Question updateQuestion(Question updatedQuestion) {
        Long id = updatedQuestion.getId();
        Optional<Question> existingQuestion = questionRepository.findById(id);
        if (existingQuestion.isPresent()) {
            Question question = existingQuestion.get();
            question.setTitle(updatedQuestion.getTitle());
            question.setStatus(updatedQuestion.getStatus());
            question.setAnswerList(updatedQuestion.getAnswerList());
            // Update other fields if needed
            return questionRepository.save(question);
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    public boolean deleteQuestion(Long id) {
        Question existingQuestion = findQuestionById(id);
        if (existingQuestion != null) {
            questionRepository.delete(existingQuestion);
            return true;
        }
        return false;
    }
}
