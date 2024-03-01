package vn.vti.quizzy.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
