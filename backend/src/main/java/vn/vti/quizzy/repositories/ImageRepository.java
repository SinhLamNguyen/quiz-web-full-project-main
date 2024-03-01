package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.Image;

public interface ImageRepository extends MongoRepository<Image, String> {
}
