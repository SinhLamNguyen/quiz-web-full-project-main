package vn.vti.quizzy.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "topicQuestion")
public class TopicQuestion {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "topic_question_sequence";
    private String name;
    private int numberQuestion;
    private Long categoryQuestionID;
    private List<Question> questionList;
    private int status;

    public TopicQuestion(Long id, String name, int numberQuestion, Long categoryQuestionID, List<Question> questionList, int status) {
        this.id = id;
        this.name = name;
        this.numberQuestion = numberQuestion;
        this.categoryQuestionID = categoryQuestionID;
        this.questionList = questionList;
        this.status = status;
    }

    public TopicQuestion() {
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
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

    public int getNumberQuestion() {
        return numberQuestion;
    }

    public void setNumberQuestion(int numberQuestion) {
        this.numberQuestion = numberQuestion;
    }

    public Long getCategoryQuestionID() {
        return categoryQuestionID;
    }

    public void setCategoryQuestionID(Long categoryQuestionID) {
        this.categoryQuestionID = categoryQuestionID;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }
}
