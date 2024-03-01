package vn.vti.quizzy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.quizzy.database.SequenceGeneratorService;
import vn.vti.quizzy.models.Answer;
import vn.vti.quizzy.models.CategoryGroup;
import vn.vti.quizzy.models.CategoryQuestion;
import vn.vti.quizzy.models.User;
import vn.vti.quizzy.repositories.CategoryQuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryQuestionService {
    @Autowired
    CategoryQuestionRepository categoryQuestionRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public CategoryQuestionService(CategoryQuestionRepository categoryQuestionRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.categoryQuestionRepository = categoryQuestionRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }
    public List<CategoryQuestion> findAllCategoryQuestion() {
        return categoryQuestionRepository.findAll();
    }
    public CategoryQuestion findByCategoryQuestionName(String name) {
        Optional<CategoryQuestion> optionalCategoryQuestion = categoryQuestionRepository.findByName(name);
        return optionalCategoryQuestion.orElse(null);
    }
    public CategoryQuestion findCategoryQuestionById(Long id) {
        if (categoryQuestionRepository.findById(id).isPresent()) {
            System.out.println("FindbyID: " + id);
            return categoryQuestionRepository.findById(id).get();
        }
        return null;
    }

    public CategoryQuestion createCategoryQuestion(CategoryQuestion categoryQuestion) {
        long _id = sequenceGeneratorService.generateSequence(CategoryQuestion.SEQUENCE_NAME);
        categoryQuestion.setId(_id);
        return categoryQuestionRepository.insert(categoryQuestion);
    }

    public CategoryQuestion updateCategoryQuestion(CategoryQuestion updatedCategoryQuestion) {
        Long id = updatedCategoryQuestion.getId();
        Optional<CategoryQuestion> existingCategoryQuestion = categoryQuestionRepository.findById(id);
        if (existingCategoryQuestion.isPresent()) {
            CategoryQuestion categoryQuestion = existingCategoryQuestion.get();
            categoryQuestion.setName(updatedCategoryQuestion.getName());
            // Update other fields if needed
            return categoryQuestionRepository.save(categoryQuestion);
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    public boolean deleteCategoryQuestion(Long id) {
        CategoryQuestion existingCategoryQuestion = findCategoryQuestionById(id);
        if (existingCategoryQuestion == null) {
            return false;
        }
        categoryQuestionRepository.delete(existingCategoryQuestion);
        return true;
    }
}
