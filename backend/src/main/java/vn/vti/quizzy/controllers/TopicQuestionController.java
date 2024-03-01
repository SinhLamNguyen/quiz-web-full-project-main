package vn.vti.quizzy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.quizzy.dto.ResponseObject;
import vn.vti.quizzy.jwt.JwtInterceptor;
import vn.vti.quizzy.jwt.JwtTokenStore;
import vn.vti.quizzy.models.TopicQuestion;
import vn.vti.quizzy.services.TopicQuestionService;
@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("api/topicQuestion")
public class TopicQuestionController {
    private final TopicQuestionService topicQuestionService;
    private final JwtInterceptor jwtInterceptor;
    private final JwtTokenStore jwtTokenStore;
    //    private final FirebaseService firebaseService;
    @Autowired
    public TopicQuestionController(TopicQuestionService topicQuestionService, JwtInterceptor jwtInterceptor,
                            JwtTokenStore jwtTokenStore) {
        this.topicQuestionService = topicQuestionService;
        this.jwtInterceptor = jwtInterceptor;
        this.jwtTokenStore = jwtTokenStore;
//        this.otpService = otpService;
    }
    @PostMapping("/findAll")
    public ResponseEntity<?> getAllTopicQuestions() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, topicQuestionService.findAllTopicQuestion(), "Topic question found"));
    }
    @GetMapping("/findById")
    public ResponseEntity<?> getTopicQuestionById(@RequestParam Long id) {
        if (topicQuestionService.findTopicQuestionById(id) == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "Topic question not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, topicQuestionService.findTopicQuestionById(id), "answer id no" + id));
    }
    @PostMapping("/insert")
    public ResponseEntity<?> createTopicQuestion(@RequestParam String token, @RequestBody TopicQuestion topicQuestion) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated) {
            TopicQuestion createdTopicQuestion = topicQuestionService.createTopicQuestion(topicQuestion);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTopicQuestion);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "topic question failed to create"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateQuestion(@RequestParam String token, @RequestBody TopicQuestion topicQuestion) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, topicQuestionService.updateTopicQuestion(topicQuestion), "question updated"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "topic question not found"));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteTopicQuestion(@RequestParam String token, @RequestParam Long id) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.ok(topicQuestionService.deleteTopicQuestion(id));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "topic question not found"));
    }
}
