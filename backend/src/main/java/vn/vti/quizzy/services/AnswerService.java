package vn.vti.quizzy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.quizzy.database.SequenceGeneratorService;
import vn.vti.quizzy.models.Answer;
import vn.vti.quizzy.models.User;
import vn.vti.quizzy.repositories.AnswerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public AnswerService(AnswerRepository answerRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.answerRepository = answerRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }

    public List<Answer> findAllAnswers() {
        return answerRepository.findAll();
    }

    public Answer findAnswerById(Long id) {
        if (answerRepository.findById(id).isPresent()) {
            System.out.println("FindbyID: " + id);
            return answerRepository.findById(id).get();
        }
        return null;
    }

    public Answer createAnswer(Answer answer) {
        long _id = sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME);
        answer.setId(_id);
        answer.setStatus(1);
        return answerRepository.insert(answer);
    }

    public Answer updateAnswer(Answer updatedAnswer) {
        Long id = updatedAnswer.getId();
        Optional<Answer> existingAnswer = answerRepository.findById(id);
        if (existingAnswer.isPresent()) {
            Answer answer = existingAnswer.get();
            answer.setAsw(updatedAnswer.getAsw());
            answer.setCorrect(updatedAnswer.isCorrect());
            answer.setStatus(updatedAnswer.getStatus());
            answer.setQuestionId(updatedAnswer.getQuestionId());
            // Update other fields if needed
            return answerRepository.save(answer);
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    public boolean deleteAnswer(Long id) {
        Answer existingAnswer = findAnswerById(id);
        if (existingAnswer == null) {
            return false;
        }
        answerRepository.delete(existingAnswer);
        return true;
    }
}
