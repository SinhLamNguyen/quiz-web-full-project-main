package vn.vti.quizzy.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "question")
public class Question {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "question_sequence";
    private String title;
    private int status;
    private List<Answer> answerList;

    public Question() {
    }

    public Question(Long id, String title, int status, List<Answer> answerList) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.answerList = answerList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }

    @Override
    public String toString() {
        return "Question{" +
                "answerList=" + answerList +
                '}';
    }
}
