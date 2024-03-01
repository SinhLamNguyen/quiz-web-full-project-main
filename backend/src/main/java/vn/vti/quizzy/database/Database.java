package vn.vti.quizzy.database;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vn.vti.quizzy.models.*;
import vn.vti.quizzy.repositories.*;
import vn.vti.quizzy.security.PasswordEncoder;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class Database {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository,
                                   CategoryGroupRepository categoryGroupRepository,
                                   QuestionRepository questionRepository,
                                   AnswerRepository answerRepository,
                                   TopicQuestionRepository topicQuestionRepository,
                                   CategoryQuestionRepository categoryQuestionRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                User user = new User();
                user.setId(1L);
                user.setUsername("admin");
                user.setEmail("admin@gmail.com");
                user.setPhone("84965741051");
                    user.setPassword(PasswordEncoder.getInstance().encodePassword("A123456a@"));
                user.setStatus(1);
                user.setGender(1);
                user.setDateOfBirth(20011010);
                LocalDate currentDate = LocalDate.now();
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
                String formattedDate = currentDate.format(formatter);

                long longDate = Long.parseLong(formattedDate);
                user.setCreatedDate(longDate);

                if(userRepository.findAll().isEmpty())
                    userRepository.insert(user);

                CategoryGroup categoryGroup1 = new CategoryGroup();
                categoryGroup1.setId(1L);
                categoryGroup1.setCode("EXPENSE");
                categoryGroup1.setName("Expense");
                categoryGroup1.setStatus(1);
                categoryGroup1.setCreatedDate(longDate);

                CategoryGroup categoryGroup2 = new CategoryGroup();
                categoryGroup2.setId(2L);
                categoryGroup2.setCode("MONEY");
                categoryGroup2.setName("Money");
                categoryGroup2.setStatus(1);
                categoryGroup2.setCreatedDate(longDate);

                CategoryGroup categoryGroup3 = new CategoryGroup();

                categoryGroup3.setId(3L);
                categoryGroup3.setCode("DEPT");
                categoryGroup3.setName("Dept");
                categoryGroup3.setStatus(1);
                categoryGroup3.setCreatedDate(longDate);

                if(categoryGroupRepository.findAll().isEmpty()){
                    categoryGroupRepository.insert(categoryGroup1);
                    categoryGroupRepository.insert(categoryGroup2);
                    categoryGroupRepository.insert(categoryGroup3);
                }
//                if(serviceRepository.findAll().isEmpty()){
//                    Service service1 = new Service();
//                    service1.setId(1L);
//                     service1.setServiceCode("C-HA123");
//                    service1.setServiceName("ABC");
//                    service1.setServiceType("HHH");
//                    serviceRepository.insert(service1);
//                }

                Answer a1 = new Answer();
                a1.setStatus(1);
                a1.setId(1L);
                a1.setAsw("40%");
                a1.setCorrect(true);
                a1.setQuestionId(1L);

                Answer a2 = new Answer();
                a2.setStatus(1);
                a2.setId(2L);
                a2.setAsw("50%");
                a2.setCorrect(false);
                a2.setQuestionId(1L);

                Answer a3 = new Answer();
                a3.setStatus(1);
                a3.setId(3L);
                a3.setAsw("60%");
                a3.setCorrect(false);
                a3.setQuestionId(1L);

                Answer a4 = new Answer();
                a4.setStatus(1);
                a4.setId(4L);
                a4.setAsw("6");
                a4.setCorrect(false);
                a4.setQuestionId(2L);

                Answer a5 = new Answer();
                a5.setStatus(1);
                a5.setId(5L);
                a5.setAsw("8");
                a5.setCorrect(true);
                a5.setQuestionId(2L);

                Answer a6 = new Answer();
                a6.setStatus(1);
                a6.setId(6L);
                a6.setAsw("10");
                a6.setCorrect(false);
                a6.setQuestionId(2L);

                Answer a7 = new Answer();
                a4.setStatus(1);
                a4.setId(4L);
                a4.setAsw("6");
                a4.setCorrect(false);
                a4.setQuestionId(2L);

                Answer a8 = new Answer();
                a5.setStatus(1);
                a5.setId(5L);
                a5.setAsw("7");
                a5.setCorrect(true);
                a5.setQuestionId(2L);

                Answer a9 = new Answer();
                a6.setStatus(1);
                a6.setId(6L);
                a6.setAsw("8");
                a6.setCorrect(false);
                a6.setQuestionId(2L);

                List<Answer> answerList1 = new ArrayList<>();
                answerList1.add(a1);
                answerList1.add(a2);
                answerList1.add(a3);

                List<Answer> answerList2 = new ArrayList<>();
                answerList2.add(a4);
                answerList2.add(a5);
                answerList2.add(a6);

                List<Answer> answerList3 = new ArrayList<>();
                answerList3.add(a7);
                answerList3.add(a8);
                answerList3.add(a9);


                Question q1 = new Question();
                q1.setStatus(1);
                q1.setId(1L);
                q1.setTitle("Nếu tôi có 5 quả táo và bạn lấy đi 2 quả, thì bạn đã lấy đi bao nhiêu phần trăm quả táo của tôi?");
                q1.setAnswerList(answerList1);

                Question q2 = new Question();
                q2.setStatus(1);
                q2.setId(2L);
                q2.setTitle("Nếu 8 người làm việc cùng nhau trong 8 giờ để hoàn thành một công việc, thì bao lâu một người làm việc một mình để hoàn thành công việc đó?");
                q2.setAnswerList(answerList2);

                Question q3 = new Question();
                q3.setStatus(1);
                q3.setId(3L);
                q3.setTitle("Nếu một hình vuông có diện tích 49 cm², thì chiều dài cạnh của hình vuông đó là bao nhiêu?");
                q3.setAnswerList(answerList3);

                List<Question> questionList1 = new ArrayList<>();
                questionList1.add(q1);
                questionList1.add(q2);
                questionList1.add(q3);

                TopicQuestion topicQuestion1 = new TopicQuestion();
                topicQuestion1.setCategoryQuestionID(1L);
                topicQuestion1.setNumberQuestion(2);
                topicQuestion1.setQuestionList(questionList1);
                topicQuestion1.setId(1L);
                topicQuestion1.setName("Test toan hoc");

                CategoryQuestion categoryQ1 = new CategoryQuestion();

                categoryQ1.setName("Toán");

                CategoryQuestion categoryQ2 = new CategoryQuestion();
                categoryQ2.setName("Tiếng Anh");

                CategoryQuestion categoryQ3 = new CategoryQuestion();
                categoryQ3.setName("Tiếng Việt");

                CategoryQuestion categoryQ4 = new CategoryQuestion();
                categoryQ4.setName("Địa lý");

                CategoryQuestion categoryQ5 = new CategoryQuestion();
                categoryQ5.setName("Lịch sử");

                if (answerRepository.findAll().isEmpty()){
                    answerRepository.insert(a1);
                    answerRepository.insert(a2);
                    answerRepository.insert(a3);
                    answerRepository.insert(a4);
                    answerRepository.insert(a5);
                    answerRepository.insert(a6);
                }

                if(questionRepository.findAll().isEmpty()){
                    questionRepository.insert(q1);
                    questionRepository.insert(q2);
                }

                if (topicQuestionRepository.findAll().isEmpty()){
                    topicQuestionRepository.insert(topicQuestion1);
                }

//                if (categoryQuestionRepository.findAll().isEmpty()) {
//                    categoryQuestionRepository.insert(categoryQ1);
//                    categoryQuestionRepository.insert(categoryQ2);
//                    categoryQuestionRepository.insert(categoryQ3);
//                    categoryQuestionRepository.insert(categoryQ4);
//                    categoryQuestionRepository.insert(categoryQ5);
//                }

            }
        };
    }

    
}
