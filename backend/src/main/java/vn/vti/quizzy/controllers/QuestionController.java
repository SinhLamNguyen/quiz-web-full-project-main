package vn.vti.quizzy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.quizzy.dto.ResponseObject;
import vn.vti.quizzy.jwt.JwtInterceptor;
import vn.vti.quizzy.jwt.JwtTokenStore;
import vn.vti.quizzy.models.Question;
import vn.vti.quizzy.services.QuestionService;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/question")
public class QuestionController {
    private final QuestionService questionService;
    private final JwtInterceptor jwtInterceptor;
    private final JwtTokenStore jwtTokenStore;
    //    private final FirebaseService firebaseService;
    @Autowired
    public QuestionController(QuestionService questionService, JwtInterceptor jwtInterceptor,
                            JwtTokenStore jwtTokenStore) {
        this.questionService = questionService;
        this.jwtInterceptor = jwtInterceptor;
        this.jwtTokenStore = jwtTokenStore;
    }
    @PostMapping("/findAll")
    public ResponseEntity<?> getAllQuestions() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, questionService.findAllQuestions(), "questions found"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> getQuestionById(@RequestParam Long id) {
        if (questionService.findQuestionById(id) == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "question not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, questionService.findQuestionById(id), "question id no" + id));
    }

    @PostMapping("/insert")
    public ResponseEntity<?> createQuestion(@RequestParam String token, @RequestBody Question question) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated) {
            Question createdQuestion = questionService.createQuestion(question);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdQuestion);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "question failed to create"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateQuestion(@RequestParam String token, @RequestBody Question question) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, questionService.updateQuestion(question), "question updated"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "question not found"));
    }

    @PostMapping("/delete")
        public ResponseEntity<?> deleteQuestion(@RequestParam String token, @RequestParam Long id) {
            if(token.isBlank()){
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
            }
            token = "Bearer " + token;

            boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
            if(isAuthenticated){
                return ResponseEntity.ok(questionService.deleteQuestion(id));
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "question not found"));
    }

}
