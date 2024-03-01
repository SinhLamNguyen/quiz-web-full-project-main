package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.CategoryGroup;

public interface CategoryGroupRepository extends MongoRepository<CategoryGroup, Long> {

   // List<CategoryGroup> findAllByUserID(Long userID);


}
