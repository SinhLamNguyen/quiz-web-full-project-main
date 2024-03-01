package vn.vti.quizzy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.quizzy.dto.ResponseObject;
import vn.vti.quizzy.jwt.JwtInterceptor;
import vn.vti.quizzy.jwt.JwtTokenStore;
import vn.vti.quizzy.services.AnswerService;
import vn.vti.quizzy.services.CategoryQuestionService;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/categoryQuestion")
public class CategoryQuestionController {
    private final CategoryQuestionService categoryQuestionService;
    private final JwtInterceptor jwtInterceptor;
    private final JwtTokenStore jwtTokenStore;
    //    private final FirebaseService firebaseService;
    @Autowired
    public CategoryQuestionController(CategoryQuestionService categoryQuestionService, JwtInterceptor jwtInterceptor,
                            JwtTokenStore jwtTokenStore) {
        this.categoryQuestionService = categoryQuestionService;
        this.jwtInterceptor = jwtInterceptor;
        this.jwtTokenStore = jwtTokenStore;
//        this.otpService = otpService;
    }
    @PostMapping("/findAll")
    public ResponseEntity<?> getAllCategoryQuestion() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, categoryQuestionService.findAllCategoryQuestion(), "Category Question found"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> getCategoryQuestionById(@RequestParam Long id) {
        if (categoryQuestionService.findCategoryQuestionById(id) == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "answer not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, categoryQuestionService.findCategoryQuestionById(id), "category question number " + id));
    }
    @GetMapping("/findByName")
    public ResponseEntity<?> getCategoryQuestionByName(@RequestParam String name) {
        if (categoryQuestionService.findByCategoryQuestionName(name) == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "answer not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, categoryQuestionService.findByCategoryQuestionName(name), "name: " + name));
    }
}
