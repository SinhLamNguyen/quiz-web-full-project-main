package vn.vti.quizzy.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categoryQuestion")
public class CategoryQuestion {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "category_question_sequence";
    private String name;

    public CategoryQuestion(String name) {
        this.name = name;
    }

    public CategoryQuestion() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
