package vn.vti.quizzy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "vn.vti.quizzy")
@EnableMongoRepositories(basePackages = "vn.vti.quizzy.repositories")
public class QuizManagementApplication {
	public static void main(String[] args) {
		SpringApplication.run(QuizManagementApplication.class, args);
	}
}
