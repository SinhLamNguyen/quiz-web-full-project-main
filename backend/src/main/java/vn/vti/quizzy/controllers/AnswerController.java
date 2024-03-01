package vn.vti.quizzy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.quizzy.dto.ResponseObject;
import vn.vti.quizzy.jwt.JwtInterceptor;
import vn.vti.quizzy.jwt.JwtTokenStore;
import vn.vti.quizzy.models.Answer;
import vn.vti.quizzy.services.AnswerService;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/answer")
public class AnswerController {
    private final AnswerService answerService;
    private final JwtInterceptor jwtInterceptor;
    private final JwtTokenStore jwtTokenStore;
    //    private final FirebaseService firebaseService;
    @Autowired
    public AnswerController(AnswerService answerService, JwtInterceptor jwtInterceptor,
                          JwtTokenStore jwtTokenStore) {
        this.answerService = answerService;
        this.jwtInterceptor = jwtInterceptor;
        this.jwtTokenStore = jwtTokenStore;
//        this.otpService = otpService;
    }
    @PostMapping("/findAll")
    public ResponseEntity<?> getAllAnswers() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, answerService.findAllAnswers(), "answers found"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> getQuestionById(@RequestParam Long id) {
        if (answerService.findAnswerById(id) == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "answer not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, answerService.findAnswerById(id), "answer id no" + id));
    }

    @PostMapping("/insert")
    public ResponseEntity<?> createQuestion(@RequestParam String token, @RequestBody Answer answer) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated) {
            Answer createdAnswer = answerService.createAnswer(answer);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, createdAnswer, "answer created") );
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "answer failed to create"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateQuestion(@RequestParam String token, @RequestBody Answer answer) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, answerService.updateAnswer(answer), "answer updated"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "answer not found"));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteAnswer(@RequestParam String token, @RequestParam Long id) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.ok(answerService.deleteAnswer(id));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "annswer not found"));
    }

}
