package vn.vti.quizzy.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "answer")
public class Answer {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "question_sequence";
    private String asw;
    private int status;
    private Long questionId;
    private boolean correct;

    public Answer(Long id, String asw, int status, Long questionId, boolean correct) {
        this.id = id;
        this.asw = asw;
        this.status = status;
        this.questionId = questionId;
        this.correct = correct;
    }

    public Answer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAsw() {
        return asw;
    }

    public void setAsw(String asw) {
        this.asw = asw;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", asw='" + asw + '\'' +
                ", status=" + status +
                ", questionId=" + questionId +
                ", correct=" + correct +
                '}';
    }
}
